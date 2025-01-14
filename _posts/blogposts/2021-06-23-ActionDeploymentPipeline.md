---
layout: blog
title: "Creating a free build pipeline for Unity games using GitHub Actions"
image: /assets/images/itch.webp
category: blog
---
Over the past year of quarantine, I’ve been participating in game jams, and I’m usually the person responsible for creating and uploading builds to itch.io for the team to test. Aside from being a tedious task, this process blocks less technical members of my team from seeing their work run in-browser until I have time to upload a new build. So, in between jams, I whipped up a quick way to automate this process using GitHub Actions and Unity build actions from [game.ci/](https://game.ci/) so that changes can flow smoothly from commit to build to itch.io without any need for me to intervene.

Before you begin this tutorial, you should have Unity Project that is in a GitHub repository that you have admin rights to, as well as a Unity account and an itch.io account(if you don’t have any of those, set them up and come back to this guide afterwards)

**Step 1 — Set up your itch.io page (if you haven’t already)**

Go to [https://itch.io/game/new](https://itch.io/game/new) and create a new project (don’t worry about uploading anything right now — you’ll get to that later).

Note the name of the page that you create (you’ll need it for later).

**Step 2 — Grab your itch.io API Key**

Hop on over to [https://itch.io/user/settings/api-keys](https://itch.io/user/settings/api-keys), click “Generate new API Key”, and copy the key it generates.

On your repository page navigate to _Settings -> Secrets->New Repository Secret_

Name the secret `BUTLER_CREDENTIALS`, paste in the API key underneath, and click “Add Secret”

**Step 3a (if you’re using the free version of Unity)— Get your activation file**

For the free version of Unity you’ll need a license file to tie the builds to a Unity Account.

Create a new file named `activation.yml` in your repository in under _.github/workflows_ and paste in the following code:

```yml
name: Acquire activation file
on:
  workflow_dispatch: {}
jobs:
  activation:
    name: Request manual activation file 🔑
    runs-on: ubuntu-latest
    steps:
      # Request manual activation file
      - name: Request manual activation file
        id: getManualLicenseFile
        uses: game-ci/unity-request-activation-file@v2
      # Upload artifact (Unity_v20XX.X.XXXX.alf)
      - name: Expose as artifact
        uses: actions/upload-artifact@v2
        with:
          name: ${{ steps.getManualLicenseFile.outputs.filePath }}
          path: ${{ steps.getManualLicenseFile.outputs.filePath }}
```

Commit and push this file to your GitHub repository, then navigate to _Actions_ and click on “Acquire activation file” under _Workflows_ and click “Run workflow”.

Refresh the page and click on the most recent workflow run, “Acquire activation file” (there should be a yellow or green circle next to it), and wait for the workflow to complete.

Once the workflow is finished, click on the _.alf_ file under _Artifacts_ to download it (you may have to unzip it afterwards).

Go to [https://license.unity3d.com/manual](https://license.unity3d.com/manual) and upload the _.alf_ file (you may have to login first). Follow all the steps unitl you get to a button that says “Download license file”. Click on this button and save the file somewhere you’ll remember.

Once you have that file downloaded, open the contents in a text editor and copy the text. Go back to _Settings -> Secrets->New Repository Secret_ in GitHub and add a new secret named `UNITY_LICENSE` with the contents of the file as the value.

**Step 3b (If you’re using Pro/Plus version of unity) — Add your serial key**

Navigate to _Settings -> Secrets->New Repository Secret_ in GitHub and create the following secrets:

*   `UNITY_SERIAL` - _The serial key from your unity account that looks like_ `_XX-XXXX-XXXX-XXXX-XXXX-XXXX_`
*   `UNITY_EMAIL` - _The email address that you use to login to Unity_
*   `UNITY_PASSWORD` - _The password that you use to login to Unity_

**Step 4 — Set up your Unity Build Workflow**

Now we can get down to business!

Create a new file named `main.yml` in your repository in under _.github/workflows_ and paste in the following code:

```yml
name: Build Project and Publish to itch.io
on: [push]
jobs:
  build:
    name: Build Project and Publish to itch.io ✨
    runs-on: ubuntu-latest
    # This stops builds that are in-progress once a new commit comes in
    concurrency:
      group: unity-build
      cancel-in-progress: true
    steps:
      # Checkout
      - name: Checkout repository
        uses: actions/checkout@v2
        with:
          lfs: true # Cache
      - uses: actions/cache@v2
        with:
          path: Library
          key: Library # Build
      - name: Build project
        uses: game-ci/unity-builder@v2
        env:
          # Comment this out if you're using a pro license
          UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}
          # Un-Comment the following lines if you're using a pro license
          # UNITY_EMAIL: ${{ secrets.UNITY_EMAIL }}
          # UNITY_PASSWORD: ${{ secrets.UNITY_PASSWORD }}
          # UNITY_SERIAL: ${{ secrets.UNITY_SERIAL }}
        with:
          targetPlatform: WebGL # Return License (Un-Comment if you're using a pro license)
       #- name: Return license
       #  uses: game-ci/unity-return-license@v1
       #  if: always() # Output
      - uses: actions/upload-artifact@v2
         with:
           name: Build
           path: build
```

If you want to build for a different platform replace `WebGL` with your [build target](https://docs.unity3d.com/ScriptReference/BuildTarget.html).

After committing and pushing, a new workflow run will appear in the _Actions_ tab of your GitHub page.

Once the workflow run completes you should see _Success_ and a _Build.zip_ file under artifacts. Download it and make sure that it’s working correctly.

If the run didn’t succeed, check the logs of the workflow run and review the steps you’ve taken so far. If none of that helps, consult [the documentation for game-ci](https://game.ci/docs/github/builder).

**Step 5— Set up automatic publish to itch.io**

Now that you’ve got a remote build of your project working it’s time to publish it to itch.io.

Open up _main.yml_ again and replace the _Output_ step with the code below:

```yml
 # Upload to Itch
      - uses: josephbmanley/butler-publish-itchio-action@master
        env:
          BUTLER_CREDENTIALS: ${{ secrets.BUTLER_CREDENTIALS }}
          CHANNEL: html5
          ITCH_GAME: <Game name goes here (it should be the end of your url)>
          ITCH_USER: <Username goes here>
          PACKAGE: build/WebGL
```

Replace anything in _<>_ with the appropriate values. If you want to publish a binary replace `html5` with `win`, `linux`, or `mac` and replace `WebGL` with your [build target](https://docs.unity3d.com/ScriptReference/BuildTarget.html).

After committing and pushing, you should see a new workflow run. Wait for it to finish.

Hop on over to your _Edit Project_ page on itch.io and you should see your build published. If you’re creating an HTML5 build like I did, make sure to check “This file will be played in browser”.

You’re done!

**Some important things to know about your new set-up:**

*   If you are using this on a private repository, you will be limited to 2000 minutes of workflow time per month. This can rack up quickly if build times for your project are long so be mindful of it. You can also purchase more time if you need it.
*   You are also limited to 500 MB of artifact storage. This shouldn’t be a problem as long as you removed the _Output_ step from _main.yml_.
*   Every commit that is pushed will automatically be published. Make sure your team knows this. If you need more validation look into [https://game.ci/docs/github/test-runner](https://game.ci/docs/github/test-runner).