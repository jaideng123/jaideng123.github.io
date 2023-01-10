---
layout: game
title: "WheresMyKeys"
displayTitle: "Where's My Keys?!"
role: "Programmer"
categories: [games]
permalink: /games/WheresMyKeys/
previewImage: /assets/images/WheresMyKeys/wmk-screenshot-1.png
imageNeedsText: true
category: game-jam
screenshots: [
    "/assets/images/WheresMyKeys/wmk-screenshot-1.png",
    "/assets/images/WheresMyKeys/wmk-screenshot-2.png",
    "/assets/images/WheresMyKeys/wmk-screenshot-3.png",
    "/assets/images/WheresMyKeys/wmk-screenshot-4.png"
]
---
**What I did:** 

**Project Length:** 2 days

**Team Size:** 6

**Platforms:** WebGL, Windows

**Engine & Tools:** Unity
<!--more-->

<div class="itch-container">
<iframe src="https://itch.io/embed/901281?border_width=2" width="554" height="169" frameborder="0"><a href="https://jaideng123.itch.io/wheresmykeys">WHERE'S MY KEYS?!?! by Jaiden Gerig, Hypnoquat, zruby, bordenary, lzklein, Brandon Garcia</a></iframe>
</div>

# Description
You're running late, but you have no idea where your keys are, find them AT ALL COSTS!

Destroy every square inch of your apartment in this physics playground, test your skills by finding each of the randomized locations of the keys, or just let out some of that pent up quarantine frustration by hurling a couch though your kitchen.

Created over 48 hours for the 2021 Global Game Jam with the theme Lost & Found.

## Accolades & Features:

[**Official Unity Global Game Jam 2021 showcase**](https://www.twitch.tv/videos/902119161?sr=a&t=974s)

[**Article for TheGamer.com**](https://www.thegamer.com/global-game-jam-wheres-my-keys/)



---
# About the Project
**Made with:** Unity

**Role:** Programmer & Gameplay Designer

**Project Length:** 2 days

I teamed up with 5 other developers(1 Programmer, 2 Artists, 1 Sound Designer, 1 Project Manager) in the Seattle Indies community to make Where's My Keys over 48 hours.

Since the theme was announced before the jam, We had a brainstorming sessions in the week leading up to it where we all shared ideas and eventually landed on the concept of finding your keys in the most extreme and ridiculous way possible. Once the jam started, the team & I created a concrete plan for a minimum viable product. During this process, I provided guidance on technical feasibility and proposed solutions that would minimize scope while allowing us to achieve the experience we were after. (Side Note: this was my first jam team with a dedicated producer and I would highly recommend it as having someone fill that role really eased communication and coordination for us)

Once we had a plan I worked with the other programmer to define clear boundaries for what we would work on to minimize conflicts. To start he would work on the physics mechanism for grabbing objects and I would work on creating a first-person character controller. I hadn't made a first person character controller before but I was able to whip up the camera controls pretty quickly and after evaluating the effort of rolling my own, decided to use Unity's built in Character controller to handle basic collisions. Once we were both finished with our respective pieces, I combined our work to create our functioning player character with a test scene of cubes.

From this point he moved on to creating the basic level flow while I continued to iterate on the player controls, fixing obvious bugs, and adding other interactions for the player such as jumping and shoving, and tweaking values to make everything feel just right. I also was able to leverage my previous experience to integrate the game with inControl to allow for controller support with very little additional effort.

At this point the artists were starting to finish the models for the props in the level so I jumped in to define collision & physics models for some of the more complicated ones (like the oven and the doors). This didn't involve much coding but was a good chance for me flex my knowledge of Unity's physics system. From there I moved on to some more miscellaneous tasks such as creating a system to randomly spawn the key, integrating the wonderful music done by our sound designer, and polishing up the presentation and flow of the game. One feature I'm particularly proud of is the birds-eye view of the destruction which I threw out as a suggestion that was received positively by the team and was able to quickly implement using an orbiting camera script I had made for TRITIX.

Once the deadline rolled around, we had a complete experience that we thought was pretty fun, but did not anticipate the incredible response it would get when it was shown in the Seattle Indies showcase (where it received the 2nd most votes) and later Unity's official showcase. This was without a doubt my most successful and enjoyable game jam so far and I had a lot of fun working with my team.