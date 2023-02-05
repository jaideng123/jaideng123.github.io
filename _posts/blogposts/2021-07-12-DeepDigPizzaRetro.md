---
layout: blog
title: "Deep Dig Pizza Post-Mortem"
subtitle: "Ludum Dare 48 Recap"
category: blog
---
<!-- TODO: More Images -->
![Gif of the gameplay of deep dig pizza](/assets/images/DeepDigPizza/DeepDigPizza-comp.gif)

After finishing Where's My Keys, the team I was on had such a blast working together that we decided to reunite for Ludum Dare 48!

We started with a brainstorming session where we thought of some possible ways that we could tackle the theme "Deeper & Deeper" with the obvious one being a digging game and eventually someone cracked a joke about how we could make a game that takes place on a giant Deep Dish Pizza and my brain connected the two and created the idea to combine mining with a cooking game set on this planet.

For the design of the game I wanted to combine the satisfying drilling and mining (similar to Motherload) with the intensity of running a kitchen(inspired by games like OverCooked). After talking through the idea with the team we came up with a plan of what we wanted to scope for as our rough prototype and I started working on a simple character controller and digging mechanic while the other programmer tackled the order menu. 

I started by getting a simple 2D character controller working that could move and fly around freely (For this project I based it off of [CatLike Coding's Rigidbody Movement Controller](https://catlikecoding.com/unity/tutorials/movement/)). I knew that the player would be quickly flying around square corners so I took the unusual step of making the player collider a circle instead of a box and carefully sized it to be a fair bit smaller than the crust squares that the player would dig through. Once I had that working I created a digging mechanic that would allow the player to dig through crust squares placed on a grid(I used the Unity TileMap tool to set up the grid, this made it very easy for us to quickly sketch out levels later in the process). Once I had the basics working I started enhancing the game-feel by adding some procedural animations (Using DoTween), adding some screenshake, and integrating the art and particle effects that my team-mates had created. By the end of day 1 we had a fairly polished digging prototype, but we still didn't have the whole level flow working yet.

For day 2 I decided to focus on getting the flow of the game working end to end. I started by integrating the order and ingredients system made by the other programmer into my digging prototype scene and allowing the player to break special blocks to collect ingredients and fulfill orders when they reach the pizzeria on the surface. After that I created a system to manage the flow of the game, create new orders at defined times, and manage a timer for the day. This took longer than I expected because I was also integrating art for the UI created by our wonderful artists, but by the end of the day we had a level working end-to-end that we could build off of.

For the final day I wanted to make the cooking aspect of the game more substantial so I came up with a UI for assembling pizzas by hand by dragging ingredients from your inventory to fulfill orders. This was a ton of fun, not only because I got to learn how to use dragable elements in Unity UI, but also because it ended up making the pace of the game feel more frantic while also adding a slight creative element for the player to play with. I also took the time to add a stronger goal to the game in the form of debt that the player would have to pay off over the course of 4 days (inspired by a certain raccoon in Animal Crossing). This made the game feel a little more purposeful but also was added relatively last minute so I was frantically fixing bugs related to it in a panic the final hour of the jam and I wasn't able to help my team-mates as much as I would have liked(luckily the level design systems that I had created allowed my team-mates to handle level design without much help from me). Finally, I added some tutorial text at the last minute to make the game a little more understandable for players(wish I would have done this earlier but ¯\\_(ツ)_/¯). At the end of the day though, we were able to deliver a game that we were proud of that looked great and provided some unique gameplay.

**Lessons Learned**

* Get to the end-to-end playable build as fast as possible and play-test it as a team
* Avoid last-minute features and make sure you test them thoroughly
* Don't leave level design till the very end of the project (iterate via whiteboard/paper when waiting on tech)