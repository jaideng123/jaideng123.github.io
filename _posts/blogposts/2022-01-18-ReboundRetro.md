---
layout: blog
title: "Rebound Post-Mortem"
subtitle: "Seattle Indies Slow Jam 2021 Recap"
image: /assets/images/Rebound/Rebound-title-smaller.gif
category: blog
---

I worked on this project during the 2021 Seattle Indies Slow Jam with most of the same team from Where's My Keys and Deep Dig Pizza. Since the programmer I partnered with on the previous projects was unavailable, I acted as the sole engineer and gameplay designer.

After the rough year that was 2021, we as a team decided we wanted to make something that was a little more relaxed and cozy than our previous projects. After discussing a few different ideas, we settled on the idea of book repair since it felt like it could be a soothing, meditative activity and that the environment of an old book store would provide a nice cozy setting.

# Gameplay Design:

I started by studying youtube videos of book repairing to identify some of the core activities that I could implement in the short time period of the jam. It took me a bit to figure out what the end-to-end gameplay would look like, but I knew I wanted something that required little stress and happened at the player's pace so I began with the simple act of wiping dirt off the cover of a book and walked the player through it step-by-step, making sure that the core interaction felt good to play with.

Once I had that in place, I started to work out the core mechanisms that the player would use to manipulate and repair the book. To do this in way that would be quick to iterate on (and replicate the physicality I was going for), I made a paper prototype with an old book I had and used sticky notes to replicate the buttons, as well as proxies for various tools (brush, glue, knife, scraper) and walked through all the core activities I wanted the player to do. The order card was added during this process and was important to the goal of minimizing any cognitive load for the player by keeping track of the player's progress on a book as well as letting them know what needed to be done when a book slides in. After playing around with this prototype for a bit and getting some feedback from team (via a video of me doing all the things), I felt good about the overall flow and moved on to implementing the controls and activities in the game.

To add some variety, I broke up the 3 main activities into separate parts and shuffled them amongst each other(If I went back to this project I would want to add even more activities here). In addition, I had set up a system to randomize the covers and colors of the book from some pre-made templates created by our artists to add even more flair. Eventually the player hits an end to these permutations and we cap things off with a book featuring credits to let the player know they've seen all the stuff in the game and give them an opportunity to walk away or keep playing.

Since we had time, I was able to do a pretty comprehensive tutorial that walked the player through all the core interactions with the books as well as how to repair them. I also decided to add some little things to enhance the physicality of the world (like the analogue radio) and show off the amazing work of our artists (like the coffee break that shows a series of camera angles around the store).

# Engineering

To figure out how to implement the cleaning mechanic, I started by using the work of [Tough Nut To Crack's painting video](https://www.youtube.com/watch?v=YUWfHX_ZNCw) as a starting point. The approach that came from this was two-fold. First, I used 2 textures for the whole of the object, a dirty texture, and a clean texture and lerped between the 2 based on a render texture. Second, I made a shader that determines the UV position of the mouse on an object, then blits to the render texture based on that position. There are some drawbacks to this approach, mainly that you can't re-use any UVs when UV mapping the mesh, but after discussing with the artists on the team, they said that they would be fine working around it.

The next challenge came from determining how "Clean" the book was. Since all the painting happened on the GPU, I went with an approach where I read the render texture back and determined how much of it was filled with "set" (non-black) pixels. This worked but left me with a few issues. 

First, Since the book mesh was broken up into pieces that were using different parts of the same overall texture, I had to manually set a percentage threshold for each piece to determine if it was clean enough. This was some work for me, but overall it wasn't too much effort since we only used a single book model.

The second issue was much trickier to deal with, it turns out reading a render texture back to the CPU for gameplay code was a taxing operation and so if I was doing it every frame for all parts of the book, the game would be unplayable for lower-spec PCs. To get around this I had to make a few optimizations. I knew I needed to reduce the number of calls so my first attempt was to only check the textures once every few seconds while the player was painting, this worked to make the game more playable, but still resulted in hitches and delayed results for the player so I scrapped it. Instead I went with an approach where I only checked when the player lifted their brush, this worked very well since the player would lift when they thought they were done and wouldn't notice the hitch if it occurred. Even after this though, I wanted to reduce the hitch even further, so I split the work for reading and checking the texture across 2 frames to smooth out the load and skipped checks for parts that were already clean.

I was able to re-use the "cleaning" system for most of the actions in the game such as gluing and cutting and overall I'm pretty happy with how it turned out in the end.

In addition to the cleaning system I was able to build the rest of the gameplay using my usual toolbelt of DoTween for quick procedural animations, scriptable objects for managing game state + events, Cinemachine for camera. I also created a nice system for cross-fading between post-processing profiles that I'll definitely be carrying forward to future projects.

# Overall Takeaways
* Paper prototyping is a very useful tool, even for seemingly simple interactions
* Gameplay doesn't have to be complex or stressful to be engaging (sometimes, people just want to chill)
* Be on the lookout for places to hide/mask performance issues in your games
* Polish makes a big difference if your game is primarily aesthetics/vibe driven (we left a lot of time for it this go-around)