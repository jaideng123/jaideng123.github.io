---
layout: blog
title: "Claw & Order Post Mortem"
subtitle: "Seattle Indies Slow Jam 2023 Recap"
category: blog
---
<!-- TODO: More Images -->
![Gif of Gameplay](/assets/images/ClawAndOrder/Cover.gif){: .header-img}

With the yearly slow jam upon us, the folks of Team Bouldy reunited once again, though this time we wanted to challenge ourselves by learning a brand new engine by using Godot.

The theme of the jam was **THE MORE THE MERRIER!!!** so after some brainstorming, we got pretty hungry and thought about more food being merrier and ultimately landed upon the idea of building *The Ultimate Burger*. The concept was: in an old arcade you would come upon this outrageous, inappropriately themed arcade/food machine where you would try to build the highest burger tower possible. This was a pretty simple premise, but since we were learning new technology (and had a slightly smaller crew than usual) it was perfectly scoped for the jam.

**Gameplay Design:**

I started by whipping up a very simple stacking prototype with a single rectangular ingredient. After playing around with it for a bit I learned a few things:
1. Stacking is kind of just inherently amusing on it's own
2. It took a lot of tweaking to make the tower even remotely stable with built-in physics (we also had to make sure to keep our physics shapes simple)
3. High friction on each object was key to things feeling right especially as the tower got more precarious
4. Managing the height of the claw would be a major challenge (especially as we added more ingredients)

<video width="500" height="300" autoplay loop muted>
  <source src="/assets/images/ClawAndOrder/prototype.mp4" type="video/mp4">
</video> 

The overall structure of the gameplay was heavily inspired by arcade games, starting with a simple goal of building the tallest free-standing tower in aa limited time and time penalties for off-plate ingredients. This was OK to start with, but quickly felt boring and either went on for too long or ended too quickly depending on tuning. It was also very difficult to get a good stack going, which made it frustrating to play. I solved these problems with 2 new mechanics.

The first was toothpicks: a special tool that allowed the player to "freeze" all ingredients below it on the stack. This served 2 purposes; Fist, it allowed players to naturally build much taller stacks as they could use this as a new stable base, which felt really satisfying. Second, they provided the player with a resource to manage which led to interesting decisions on whether to keep dropping on a risky stack or play it safe. It also helped that toothpicks are a common tool in real food-prep to keep ingredients stable, so they naturally fit in with our concept and players understood them very quickly.

The second piece of the puzzle was borrowing a mechanic from arcade racers: Checkpoints that the player could reach to gain extra time and toothpicks. This let players get their sea-legs in initial short rounds where they would fail, and then gradually they would do larger play sessions with bigger towers as they improved. This also helped the flow of the game by giving players intermediate goals to chase as well as re-assurance that they were doing well.

With all this in place, The final thing that really put the cherry on top of the gameplay was the Final Recap. This camera fly-through gave players a chance to laugh at the ridiculous stack of food they just created and also provided a moment of shareable footage that we hoped would increase virality (it didn't in-practice but still, you can't deny how funny it is).

![Gif of Gameplay](/assets/images/ClawAndOrder/result.gif)

I fiddled around with camera angles a lot, eventually settling on a semi-fixed overhead camera because it allowed the player to see more of the environment and playfield and also felt more like the perspective you would have playing a real arcade machine. I also added a smooth follow to the 

The height of the UFO also went through lots of iteration progressing from a fixed jump each drop, to one based on the height of the current tower + an offset, to a hand-tuned offset for each ingredient. No matter what I tried there would always have little edge cases where the UFO would be too high or too low.

Finally I landed on a system that used the Axis-Aligned-Bounding-Box (AABB) of the top-most ingredient in the stack and the ingredient being dropped, look at the top and bottom, add a fixed gap and smoothly move the UFO (and camera) up/down to a target position. This meant we didn't have to manually tune ingredients anymore and felt way better to play.

<video width="500" height="300" autoplay loop muted>
  <source src="/assets/images/ClawAndOrder/height-system.mp4" type="video/mp4">
</video> 


**Engineering:**

This was my second time using Godot on a project (though the first attempt kinda fell apart) and I was itching to try it out after seeing yet another Unity debacle in the news. My overall impression is that if you are comfortable working in Unity, you will find a lot in Godot that will feel immediately familiar to you (in a good way). However, there are still a lot of growing pains with the engine especially if you want to do a web build. 

Overall, Godot's object modeling system is simple to grasp and build things with. Essentially, it combines the concepts of scenes and monobehaviors from Unity into a single type that is much more flexible than either. You can nest nodes indefinitely depending on the structure that works for your game, and it's easy to test things in isolation before bringing them into a larger scene.

I also fell in love using [Groups](https://docs.godotengine.org/en/stable/tutorials/scripting/groups.html) and [Signals](https://docs.godotengine.org/en/stable/getting_started/step_by_step/signals.html) for pulling things together. Groups keep a handy list of objects during runtime that you can use for batched updates, observers, services, singletons, or anything else where you need to quickly get references to objects. It felt very natural and I used it for a lot of the glue across different systems in Claw & Order. Signals are also really handy, essentially allowing you to create generic callbacks and interfaces similar to Delegates in Unreal. I used them mainly to wire event callbacks from the game manager to individual elements like the UI or player controller.

One of the main issues I had with Godot was that because I wanted to do web, I couldn't use C# or C++ (both of which I'm fairly comfortable with), I had to rely solely on GDScript. GDScript is easy to write but suffers from a lot of the same problems as javascript in that typos can easily become runtime bugs 🙃. It is also lacking IDE support outside of the in-engine editor, which is serviceable but lacked a some of the features I enjoy in Rider (Also WHY ARE THEY MAKING AN IDE IN THE ENGINE?????). These issues overall wasn't a deal-breaker for the scope of this game, but I would think twice about this for a larger project and would lean more heavily on using either the C# or C++ scripting back-ends.

I'm kind of getting into the weeds here so maybe I'll save the rest of my opinions and advice regarding Godot for a future blog post, but I think overall I came away with a moderately positive view of Godot as a tool for building games. While it's currently lacking some of the maturity I would want, I think it's close enough and I plan to use it again for future game jams and side-projects.