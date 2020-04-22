---
layout: game
title: "MowMowMow"
role: "Solo Developer"
categories: [games]
permalink: /games/MowMowMow/
previewImage: "/assets/images/MowMowMow/MowMowMow-Preview.png"
imageNeedsText: true
screenshots: [
    "/assets/images/MowMowMow/mmm-1.png",
    "/assets/images/MowMowMow/mmm-2.png",
    "/assets/images/MowMowMow/mmm-3.png",
]
---
<div class="itch-container">
<iframe src="https://itch.io/embed/621495" width="552" height="167" frameborder="0"><a href="https://jaideng123.itch.io/mowmowmow">MowMowMow by jaideng123</a></iframe>
</div>
---
# Description
MowMowMow is a 4-player local multiplayer game where players race to mow the most amount of grass within a certain amount of time.

The Demo features a single level and 3 power-ups that players can collect.

The game is not currently under active development (I might restart it if there's enough interest)

# About the Project
**Made with:** Unity, Asset Forge for sprites

I was the sole developer for this game and handled the programming, art assets(Made with Kenneynl's Asset Forge), and design.

Originally, I envisioned MowMowMow as a sokoban-style single-player puzzle game about mowing all the grass in a yard with a limited supply of gas. After some early play-testing it became clear to me that the concept just wasn't very fun and I didn't really have any good ideas about how to make it better.

In the end, I realized what I wanted to make was a chaotic local-multiplayer game reminiscent of the games I enjoyed playing with friends in college (Duck Game, StarWhal, SpeedRunners, etc.) so I ramped up the speed of the game, made the grass regenerate, and added random power-ups. This new concept played much better than the original idea but I still didn't really know where I wanted it to go, so I shelved the project once a better idea came along (that idea ended up being [ArrowBall](/games/ArrowBall/))

On the programming side of things, this was the first project where I heavily utilized Scriptable Objects in Unity (Inspired by [This Talk](https://www.youtube.com/watch?v=raQ3iHhE_Kk)) I really enjoyed the ergonomics of it and found it much more modular and clean than my previous approach to managing state in TRITIX (Singleton managers, controllers all tangled up in one-another). This was also my first project that utilizes gamepads and I decided to leverage InControl which was a dream to work with once I got it set up. Since it started as a puzzle game I utilized the command pattern for player input (discrete commands that are executed with actors/game objects) to allow for rewinding later on, in the end, once I switched to local multiplayer I found it to be a bit over-complex for what I was trying to build but still stuck with it anyway(I probably wouldn't employ it without good reason in the future).

Overall I think it's a fun little game, and I hope that I can come back to it eventually and give it the treatment it deserves.