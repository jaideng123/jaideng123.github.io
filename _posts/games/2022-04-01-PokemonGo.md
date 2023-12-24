---
layout: game
title: "Pokémon Go"
role: "Gameplay Programmer"
categories: [games]
permalink: /games/PokemonGo/
previewImage: "/assets/images/PokemonGo/pokemongo.jpg "
imageNeedsText: true
category: job
screenshots: [
    "/assets/images/PokemonGo/showcases-5.png",
    "/assets/images/PokemonGo/catch.png",
    "/assets/images/PokemonGo/gofest.jpg",
    "/assets/images/PokemonGo/ticket-gifting.jpg",
]
ongoingProject: true
priority: 10
---

**What I've done so far:** 

As a Gameplay Engineer on the Pokémon Go team, I've lead the technical design and engineering for one of our largest new gameplay features: Pokéstop Showcases, collaborated with designers to create tools to quickly tune the overall speed of our animations and transitions in the game, and designed and implemented an advanced haptics system to improve feedback and game feel.

**Platforms:** Android, iOS

**Engine & Tools:** Unity
<!--more-->

<div class="google-play-badge__container">
    <a href='https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=en_US&gl=US&pli=1'>
        <img alt='Get it on Google Play' class="google-play-badge" src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
    </a>
</div>

# Pokéstop Showcases
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7vs7T5wYdL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Official Blog Post Describing Feature](https://pokemongolive.com/post/pokestop-showcase-new-feature?hl=en)

I served as the Lead Client Gameplay Engineer for the Pokéstop Showcases feature through pre-production, production, and post-launch support phases of it's 8 month development cycle.

## Pre-Production

In pre-production, I worked with production & design to provide estimates for work, suggest ways to trim scope without compromising the feature, and eventually drafting a Technical Design Document that provided a blueprint for the implementation of the feature as well as high-level tasks. During this time I also collaborated closely with our Lead Server Engineer to define interactions between the game client and server, as well as the overall architecture of the feature.

## Production
![Screenshot showing showcases feature](/assets/images/PokemonGo/showcases-1.png)

Production would prove to be a challenge due to a tight deadline that didn't allow for much time to iterate. To help mitigate this, I focused on getting all of our key UI working as quickly as possible with mocked data while the server team was working on the back-end pieces for the feature. This proved to be invaluable as it let game design and UX see the feature "working" and led them to make tweaks to the flow and rules of showcases, giving us more breathing room to iterate than we otherwise would have had.

The most technically challenging piece that I implemented was adapting our Pokéstop system to support showcases. Pokéstops are one of our oldest and most important gameplay systems which means that it is also one of the least well-documented. This meant I spent a lot of time digging through the code while designing and implementing the changes we needed to support showcases. Because I took the time to fully understand the code and system prior to implementation, I was able to re-use a lot of the functionality that already existed for Team Rocket invasions, make it fit the requirements and minimize risk of new bugs to the system.

In addition to doing my own implementation work, I oversaw the work of 2 other gameplay engineers. Leading these engineers I made sure that they were always unblocked on their tasks and had something to work on. I also helped them modify the systems I had originally designed in the face of changing design requirements and new constraints from the server team. Overall, I tried to act as a force multiplier for their efforts by picking up any emerging bugs or tasks that came up so that they could stay focused on their areas of the feature and making sure that communication was always clear between us, server, and design.

Working cross-functionally, I partnered with our resource from the Tech-Art team to help them ramp up on the project and begin final touch-ups and visual polish for all of the new UI screens and interactions. I also worked with them to build a dynamic and re-usable system for the cut-scene that plays after the player enters a Pokémon in a showcase. In addition to working with tech-art I also stayed closely aligned with our UX and Game Design partners by setting up regular build reviews so that they could see our progress and provide input as we implemented pieces of the feature. 

## Launch

![Screenshot showing showcases feature](/assets/images/PokemonGo/showcases-2.png)

As we got closer to our soft-launch, we were running a bit behind schedule. I had to work with our producer and game designer to identify portions of the feature that we could cut or turn into a fast-follow so that we could maintain our target launch while still feeling complete (and not embarrassing ourselves in front of our players).

Leading up to our full launch of the feature, I worked closely with tech-art and design to quickly triage and implement some last minute UI tweaks. I also assisted QA with their test plan and created a script to allow them to quickly generate many sets of contests for testing. Close to launch we identified a new client-side bug that we were not able to get a deployment out fast enough to fix. I suggested a mitigation that used our live game config system to disable the portion of the feature containing the bug and keep it from becoming a launch blocker.

## Post-Launch

![Screenshot showing showcases feature](/assets/images/PokemonGo/showcases-3.png)

Post-launch I worked with QA and Production to help triage and quickly fix incoming bugs (which were thankfully very minimal). 

Working with the other engineers on my team, I created and presented a technical retrospective to the wider gameplay engineering team to talk about what we did that worked well for us and what improvements we would make for future work.

After the critical bugs were resolved I was tapped to lead a new tentpole feature. Splitting my time between the 2 projects, I helped one of the engineers I had led transition into being the new lead for the planned follow-up work, guiding them and slowly giving them more responsibility as my new feature ramped up.

# Haptics System

For the 7 years that Pokemon GO has been out, it has relied on a single primitive haptic effect provided by unity that does a long, harsh buzz. With some spare time between larger projects, I decided to look into upgrading this system to provide more opportunities to improve game-feel and feedback. 

Technically, this was a fairly simple project to get going, I wrote a small bit of Objective C and Java for iOS and Android, as well as a C# interface to act as a bridge to trigger the effects. Once I had that working, I extended the tooling to make it easy to integrate with button responses and animation events, and then started plugging it into our catch flow to provide a small shake in sync with the pokeball (My main intention was to allow players look up from their phones while waiting for a catch).

Once I had something working, I started showing it to some members of the team to get feedback and ideas. People were really excited about it and had a lot of great ideas for places to try out more effects which I then started implementing. After getting a good set of examples I started talking to our Lead UX Designer who helped me tweak and pare down the effects I'd implemented until it felt cohesive and matched our overall design philosophy.

Eventually I got our engineering director excited enough about it that I was allowed to merge in what I had under a feature flag that we turned on for employees-only to test-drive it while we waited for a producer to be free enough to get it over the finish line. Unfortunately, we were tight on producer time for a few months so eventually (with the blessing of our lead producer, eng director, and UX lead) I organized an official activation for all of our players.

Once we released the new effects, we got [a lot of positive feedback](https://twitter.com/JaidenG123/status/1729639989493850226) from players. We wanted players to discover all the new places that we peppered the feedback so we didn't make a big post explaining which led to some fun moments like players [discovering we added a special effect that only triggered for shiny pokemon](https://twitter.com/8BitCR/status/1729650039293722689). Overall, it was a fun moment for the game and I'm happy to have been able to drive it from start to finish.

# Animation Tuning System

In collaboration with our design and tech art team I architected and built internal tools to tune all our animations and transitions in the game.

The tools had to be built on a very short timeline as we had to get the changes fine-tuned and approved by the Creative Director from the Pokémon Company who would only be in our office for 2 days. During the visit I also provided direct support by adding new tuning parameters and answering questions from the Creative Director as they dialed in on a more snappy flow.

In the end, the Creative Director was very pleased with the tooling we were able to stand-up, and our players loved the new flow that made the game much snappier to play.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Trainers, we are happy to announce that in the 0.255 update we have updated various animations, including the Pokémon catch sequence, to be both faster and smoother. We hope this new update provides an even more enjoyable experience for our Trainers!</p>&mdash; Niantic Support (@NianticHelp) <a href="https://twitter.com/NianticHelp/status/1593725739836342272?ref_src=twsrc%5Etfw">November 18, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


# Ticket Gifting for Go Fest 2022

## Gifting Sale

As part of our 2022 Go-Fest Finale, we had an ask from our Marketing & Ops team to support a sale for gifted event tickets. To do this, we would need to support new restrictions on our in-game ticket gifting that could be configured remotely.

Since I had bandwidth, I led the technical effort for this, working with our Ops team to figure out exactly what behavior and game configuration variables they needed, coordinating with our server engineer on the project to rough out an end-to-end technical design, syncing with QA so that they could be ready to test the functionality, and delivering the project on a tight timeline.

In the end, we were able to deliver the functionality on-time and with no major defects. I was able to decompose the requirements into several pieces that we could use later to support other kinds of sales in the future, which the Ops team has since greatly appreciated.

![Screenshot from the web page showing the sale](/assets/images/PokemonGo/gift-sale.png)

## Block Paid Gifts

In response to our ticket gifting feature, we had [a lot of community requests](https://www.reddit.com/r/TheSilphRoad/comments/wq6v8s/we_need_a_do_not_gift_tickets_option/) for the ability to block unwanted gifts from others (especially among our community leaders).

Though the project had technically wrapped, I was able to band together with our UX Designer and Server engineer to quickly implement a toggle that allowed players to block paid gifts.

Once we had the feature ready to go, I worked with my manager to push it through our QA & release process to get it into the hands of our players.

![Screenshot from Pokemon Go App showing the block gifts toggle](/assets/images/PokemonGo/block-gifts.png)