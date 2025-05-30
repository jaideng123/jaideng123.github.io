---
layout: game
title: "yuu-bowling"
displayTitle: "Yuu Recreations: Bowling"
role: "Sole Developer"
categories: [games]
permalink: /games/YuuBowling/
image: /assets/images/YuuBowling/yuu-bowling.gif
imageNeedsText: true
category: game-jam
screenshots: [/assets/images/YuuBowling/yuu-bowling.gif]
priority: 8 
---
**What I did:** 

Created a Wii-Sports-inspired bowling game using Unreal Engine with procedurally generated characters, mobile and PC versions, as well as motion control support.

**Project Length:** 2 Years (on & off)

**Team Size:** 1 (Solo Project)

**Engine & Tools:** Unreal Engine, C++

**Platforms:** PC, Mobile (itch.io)
<!--more-->


<div class="itch-container">
<iframe frameborder="0" src="https://itch.io/embed/3194656?bg_color=e37c7c&amp;fg_color=322626&amp;link_color=f90606&amp;border_color=ce6d6d" width="552" height="167"><a href="https://jaideng123.itch.io/yuu-recreations-bowling">Yuu Recreations Bowling by Jaiden Gerig</a></iframe>
</div>

# Description

Master the timeless art of bowling in this throwback to Wii Sports!

* Experience the thrill of bowling with full control of your character's arm
  * With support for mouse, touch screen, and even motion controls!
* Play a full round of bowling from start to finish
* Play as a procedurally-generated Yuu avatar

![Another Gif of Gameplay](/assets/images/YuuBowling/yuu-bowling-yuu.gif)

A silly video of me playing with the motion controls on my phone:
<video width="300" height="500" controls loop muted style="max-width: 100%;">
  <source src="/assets/images/YuuBowling/yuu-bowling-motion-controls.mp4" type="video/mp4">
</video>

Built with the [DUETween plugin!](/games/DUETween/)

---
# About the Project

Yuu Recreations: Bowling started a long time ago as a project I started to get to grips with Unreal Engine. I both wanted to remake a beloved game from my youth (Wii Sports: Bowling) and see how Unreal could handle a game genre that was a bit different from what people usually built with it (shooters, 3rd person action games, etc.). It turns out that was a lot more difficult than I thought it would be because it took me 2 years to turn it into something releasable, but I am very proud of how it turned out and I learned a lot about Unreal along the way!

The game itself is built with a mixture of Blueprints and C++ gameplay code (I would say roughly 70% C++ 30% blueprint). I started with basic swipe controls that allow you could use to wind-up and curve the bowling ball, iterating on the feel of it on both mouse and touch until it felt just right. I developed the motion controls by using the gyro rotation of the phone and tying it to the arm movement, which I thought would just be a dumb experiment at first but turned out to work a lot better than I thought. The physics also took a lot of tuning to get right.

I started with trying to mimic real bowling masses, center of gravity, etc. but it turns out that isn't very fun, so I ended up making the pins topple very easily by using a combination of low mass and low center-of-gravity so they were stable jusssstttt until the ball hit them and they would fly hard. 

Along the way I made a little tweening framework that grew into the [DUETween plugin!](/games/DUETween/) that I love and will be using on all of my Unreal projects going forward.

*Project Progress Video:*
<video width="500" height="300" controls autoplay loop muted style="max-width: 100%;">
  <source src="/assets/images/YuuBowling/yuu-bowling-progress.mp4" type="video/mp4">
</video>

The entire project source code is available on github: [https://github.com/jaideng123/UnrealBowling](https://github.com/jaideng123/UnrealBowling)

Twitter Progress Thread [https://x.com/JaidenG123/status/1507833805532327936](https://x.com/JaidenG123/status/1507833805532327936)