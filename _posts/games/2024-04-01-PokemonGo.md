---
layout: game
title: "Pokémon Go"
role: "Sr. Gameplay Programmer"
categories: [games]
permalink: /games/PokemonGo/
image: "/assets/images/PokemonGo/dynamax.jpg"
imageNeedsText: true
category: job
screenshots: [
    "/assets/images/PokemonGo/dynamax.jpg",
    "/assets/images/PokemonGo/showcases-5.png",
    "/assets/images/PokemonGo/catch.png",
    "/assets/images/PokemonGo/ticket-gifting.jpg",
]
ongoingProject: true
priority: 10
---

**What I've done so far:** 

As a Sr. Gameplay Engineer on the Pokémon Go team, I've led the technical design and engineering for 2 of our largest new gameplay features: Pokéstop Showcases & Dynamax Battles, both of which I created initial prototypes for and led a small team of other engineers through the entire production process from pre-production to launch. 

I've also done some smaller projects to enhance the player experience like implementing a new haptics system and tooling to help designers tune UI transitions across the entire game.

**Platforms:** Android, iOS

**Engine & Tools:** Unity
<!--more-->

<div class="google-play-badge__container">
    <a href='https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=en_US&gl=US&pli=1'>
        <img alt='Get it on Google Play' class="google-play-badge" src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
    </a>
</div>

# Dynamax & Gigantamax

<section class="video-container-header">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/XcVdDZBt-9Y" frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>
[Official Blog Post Describing Feature](https://pokemongolive.com/max-pokemon-battle?hl=en)

I served as the Lead Gameplay Engineer for Dynamax & Gigantamax from concepting, through pre-production, production, launch, and post-launch support phases of it's 1 year development cycle.

This involved a lot of iteration and prototyping in pre-production as well as strong discipline during production and resulted in:
- The first all-new PVE game mode in 5 years for Pokemon Go
- The first new POI since the game launched
- The first new catch gameplay experience
- The largest instance of players in a single battle in Pokemon Go (620 Players)

Overall the feature was very successful with 13 million battles played on the first day of launch and a long runway of content ahead for players to enjoy.

## Pre-Production

As the first engineer on the project, I was involved from the very first ideation sessions for the project and took on an additional role as technical designer.

I created the prototypes for all of the major pieces of the feature and drove the iteration process by organizing weekly play-tests within the team, taking notes from these sessions, discussing them with our lead game designer, and then deciding on what changes to experiment with next. I also supported external play-testing with players off-site in Los Angeles & Tokyo, helping facilitate play-tests and making adjustments to the prototypes to make things easier to run.

The battle was the most challenging piece to get right and took lots of rounds of play-testing to create something that felt like a brand new experience for players while also feeling familiar to players used to our core battle gameplay. The system I ended up designing was highly configurable, with 50+ knobs for game design to adjust for moves, boss characteristics, timings, etc. The prototype also had working multiplayer and ai bots to make it easier for designers to iterate on and play-test configurations.

Once we had something that we were happy with as a team (and with production looming), I wrapped up the prototype and created a design document detailing all the details of how the new systems worked so that they could be reimplemented in production using our new (still under early development at the time) battle framework.

*Me talking with one of the playtest participants in Tokyo:*

![Me talking with one of our playtest participants in Tokyo](/assets/images/PokemonGo/playtest.jpg)


## Production
As we started production, the project had gotten too large for just me and was split up into 3 parts (Battle, Catch, Powerspots). I became the lead gameplay engineer for the Battle portion with 2 other client engineers and 3 server engineers to help me bring the battles to life. With only about 3 months to initial launch, our timeline was going to be pretty tight so we had to work as efficiently as possible. To make things even more challenging, we had to work on top of a new battle framework that was often unstable.

I started by writing a quick technical design doc which mapped out the core functionality we needed organized by priority along with some high-level technical direction and broke it up for the other engineers to take on. I took on the implementation the Max Transformation and UI management pieces, partnering with our more senior server engineer to design the dance of events, state, and input we would need for it to work. At the same time, our technical artists needed to get started on the transformation cutscene and vfx as it would need early approval, so I focused my early efforts on getting the Battle Cinematics system stood up with some debug tooling so they could start blocking it out. This upfront work delayed the battle working end-to-end just a bit, but it was critical to making sure the entire team could work efficiently. This was a practice I pushed for heavily on the team, giving artists & designers basic tools to start with so that they could stay unblocked, then improving systems as we went along in partnership with them and their needs.

The most technically challenging piece of the Battle Cinematics system was making sure that players could stay in sync across challenging network conditions while still maintaining the vision of our tech artists. To do this, I built a sandbox where our Tech Artists could precisely script sequences that manipulated all of the actors, cameras, etc. in the battle scene with the timing they wanted, but provided circuit-breakers for us to short-cut through cinematics when we needed to stay in sync with the rest of the simulation. The other major challenge this presented is that we had to make sure we could properly snap everything in the stage to it's end-state without breaking or soft-locking (and each cinematic left things in a different state). This required a lot of meticulous work to make sure everything recorded it's end state properly, but the end result was a system that was extremely solid, so much so that in the absolute worst-case we could skip through cinematics entirely without breaking gameplay flow, even when scripting errors occurred.

Another piece of battle that was pretty complex was our UI system. Our old-school raid gameplay has one set of buttons and displays that it always shows no matter what, but for the more complex gameplay we were going for we needed to transition between at least 4 different screens (with even more variation within those screens). To achieve this, I worked with our server engineers to add a state value that controlled what UI screen was being shown, Then, each value was mapped to the set of UI widgets that would be shown by our tech artists and UX Designers. Finally, I made a system that would cleanly cross-fade from the current UI screen to the next. In concert with the cinematics system, this meant we were able to make all these transitions pretty seamless to the player.

Outside of battle, I picked up work to improve the way we were displaying Dynamax & Gigantamax Pokemon by unifying the myriad ways we were applying the vfx, scaling, and model swapping into simple, re-usable interfaces. I also took it upon myself to improve the tools our VFX artists were using to preview the max move vfx by aligning it more closely with the in-battle camera and adding some functionality that made their lives a lot easier. While doing all of this, I was regularly meeting with stakeholders and the other engineers on the project to make sure no one was blocked and that we were focused on the most critical pieces we needed to ship.

## Launch & Gigantamax
Even with the tall order we were given to us, by working strategically myself and the team were able to meet the deadline for our launch, even picking up some non-critical gameplay features battle team wanted to get in. Despite the tough deadlines, and with a lot of help from our incredible QA team, we were able to launch worldwide with no p0 bugs and no outages with **13 million battles played** on the first day of launch. We also got a lot of positive feedback from players on the new systems we added, with many remarking how fresh the game felt to them for the first time in years.

After the launch of Dynamax, I stayed on as gameplay lead through the launch of the Gigantamax phase of our project. Thanks to all the hard work myself and the team had put in for Dynamax, it were able to extend our gameplay framework to accommodate the tougher bosses and larger player counts necessary for the scale of Gigantamax Pokemon, with most of the work involving supporting the server engineers as they improved scalability. With a similarly tight deadline to follow up on Dynamax and even greater risk with more players, we were able to once again launch worldwide successfully with support for 40 player instances across 15 million battles in our first 24 hours. We were even able to run a test at one of our live events in Japan with **630 players** fighting a single Gigantamax boss!!!!

Overall, this was one of the most ambitious projects I've done in my entire career and I couldn't be more proud of the work I and the rest of the team put in to make something special for our players to experience.

*A gathering of players in Taiwan during the launch of Gigantamax:*
![A gathering of players during the launch of Gigantamax](/assets/images/PokemonGo/player-gathering.png)


# Pokéstop Showcases
<section class="video-container-header">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7vs7T5wYdL4" frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>

[Official Blog Post Describing Feature](https://pokemongolive.com/post/pokestop-showcase-new-feature?hl=en)

I served as the Lead Client Gameplay Engineer for the Pokéstop Showcases feature through pre-production, production, and post-launch support phases of it's 8 month development cycle.

Despite it's (apparent) simplicity and with much less resources than other features at the time, Showcases ended up being our most played feature of 2023, becoming a core feature that is still regularly used in our live events and leads to a suprising amount of [theory-crafting](https://new.reddit.com/r/TheSilphRoad/comments/1cbq9gn/how_the_allground_showcases_work/)

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

Once we released the new effects, we got [a lot of positive feedback](https://twitter.com/JaidenG123/status/1729639989493850226) from players. We wanted players to discover all the new places that we peppered the feedback so we didn't make a big post explaining which led to some fun moments like players [discovering we added a special effect that only triggered for shiny pokemon](https://twitter.com/8BitCR/status/1729650039293722689). 

Overall, it was a fun addition to the game and I'm happy to have been able to drive it from start to finish.

# Animation Tuning System

In collaboration with our design and tech art team I architected and built internal tools to tune all our animations and transitions in the game.

The tools had to be built on a very short timeline as we had to get the changes fine-tuned and approved by a Creative Director from the Pokémon Company who would only be in our office for 2 days. During the visit I also provided direct support by adding new tuning parameters and answering questions from the Creative Director as they dialed in on a more snappy flow.

In the end, the Creative Director was very pleased with the tooling we were able to stand-up, and our players loved the new flow that made the game much snappier to play.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Trainers, we are happy to announce that in the 0.255 update we have updated various animations, including the Pokémon catch sequence, to be both faster and smoother. We hope this new update provides an even more enjoyable experience for our Trainers!</p>&mdash; Niantic Support (@NianticHelp) <a href="https://twitter.com/NianticHelp/status/1593725739836342272?ref_src=twsrc%5Etfw">November 18, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


# Ticket Gifting for Go Fest 2022

## Gifting Sale

As part of our 2022 Go-Fest Finale, we had an ask from our Marketing & Ops team to support a sale for gifted event tickets. To do this, we would need to support new restrictions on our in-game ticket gifting that could be configured remotely.

Since I had bandwidth, I led the technical effort for this, working with our Ops team to figure out exactly what behavior and game configuration variables they needed, coordinating with our server engineer on the project to rough out an end-to-end technical design, syncing with QA so that they could be ready to test the functionality, and delivering the project on a tight timeline.

In the end, we were able to deliver the functionality on-time and with no major defects. I was able to decompose the requirements into several pieces that we could use later to support other kinds of sales in the future, which the Ops team has since greatly appreciated.

![Screenshot from the web page showing the sale](/assets/images/PokemonGo/gift-sale.png)

## Anti-Harassment Tools

In response to our ticket gifting feature, we had [a lot of community requests](https://www.reddit.com/r/TheSilphRoad/comments/wq6v8s/we_need_a_do_not_gift_tickets_option/) for the ability to block unwanted gifts from others (especially among our community leaders).

Though the project had technically wrapped, I was able to band together with our UX Designer and Server engineer to quickly implement a toggle that allowed players to block paid gifts.

Once we had the feature ready to go, I worked with my manager to push it through our QA & release process to get it into the hands of our players.

![Screenshot from Pokemon Go App showing the block gifts toggle](/assets/images/PokemonGo/block-gifts.png)