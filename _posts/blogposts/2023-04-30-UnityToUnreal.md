---
layout: blog
title: "Learning Unreal as a Unity Developer"
description: "A small guide and collection of resources I found helpful when transitioning from Unity to Unreal"
image: /assets/images/jumping-ship.png
category: blog
---
Over the last year, I've been learning Unreal in my free time and having an absolute blast. Since then, multiple friends have asked me for resources I've found helpful during the process, so I'm collecting them here along with some tips I wish I would have had starting out.

Just a quick note that this information will mostly be from a programmers perspective as that's my background, if you are just learning how to program and/or not familiar with Unity, these might not be the right resources for you.

# Getting Started:

To get the lay of the land, you should start with Alex Forsythes incredible video:

**Unreal vs. Unity: Actors & Components, Inheritance & Composition:**
<div class="video-wrap">
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/iQ3c-lrHO7o" title="YouTube video player" allowfullscreen></iframe>
  </div>
</div>


This will give a good overview of the game object model unreal uses. It's similar to Unity's but different in subtle ways like:
* By default actors have no hierarchy with other actors and instead each actor has it's own internal hierarchy of components.
* A well-defined Gameplay Framework with lots of things you would have had to build on your own in Unity
* Classes being your fundamental building block as opposed to prefabs

And so much more!

## Using the Editor:
The editor is pretty intuitive and can be learned just by playing around with it, but it's worth it to check out [Unreal's documentation for Unity devs](https://docs.unrealengine.com/4.27/en-US/Basics/UnrealEngineForUnityDevs/) to ramp up faster.

# OK, but how do I start writing code?
Blueprints and C++ are the core of Unreal's programming model and you should use them both.

Watch this first to understand when one works better than the other:

**Blueprints vs. C++: How They Fit Together and Why You Should Use Both:**
<div class="video-wrap">
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/VMZftEVDuCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>

One especially important thing to note is that whatever mixture you choose, DO NOT CALL BLUEPRINT FUNCTIONS DIRECTLY FROM C++ (Use a base method in C++ that the blueprint implements).

## Blueprints
Blueprints are a good place to start playing around with Unreal. I was personally not a believer in them at first, but when you combine them with C++, they are very powerful. I find them most useful for long-running chains of events, quick visual effects, and prototyping.

Unreal's documentation here is solid so check it out:

[Blueprint Programming Quickstart](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/QuickStart/)
[Blueprint Programming Overview](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/Overview/)


## C++
C++ can be intimidating at first, but Unreal provides free garbage collection and lots of macros/libraries/etc that will make you feel right at home as a Unity/C# developer.
I recommend using [Rider](https://www.jetbrains.com/rider/) as it will help you avoid the many, many footguns that exist in C++ ~~(Yes the license costs money, but it's worth the $15 a month)~~ (Rider is now free for non-commercial use!).

### I've never used C++ before
Oh you sweet summer child, I'm here to help. C++ does a lot of things differently from other languages and it's important to at least understand the basics before jumping in.

[Tom Looman's C++ Guide](https://www.tomlooman.com/unreal-engine-cpp-guide/) is probably the best place to start if you're brand new to C++. Pay special attention to the pointers section, they are the key to understanding how C++ works.

If you know Java (or C#), you can also get started pretty quickly with Patricia Aas's talk (though some of her advice is more safety-oriented than Unreal is)

[Patricia Aas - C++ for Java Developers](https://www.youtube.com/watch?v=i9TWNlj0I6A)

### I did some C++ in college and kinda remember the basics

Laura's Unreal blog will probably get you up to speed more quickly:

[Unreal C++ Speedrun](https://landelare.github.io/2023/01/07/cpp-speedrun.html)

### Main things to know with Unreal C++
* Macros are the glue that holds everything together, come C++ developers will tell you macros are bad and they kind of are, but they make Unreal much nicer to work with.
* Unreal will handle Garbage Collection of any UObject (the base class for almost all classes in Unreal) as long as you are tagging usage with the UProperty macro.
* Unreal maintains their own alternatives to pretty much every container STL provides and you should prefer them over STL versions.

### Continuing your C++ journey
At this point you know just enough to be dangerous, so get out there and start making something!

If you really want to dig deeper into C++, here are a few resources I would recommend:
* [CPPReference.com](https://en.cppreference.com/w/) - The most complete documentation for C++. It's not sexy, but it's always up to date, and you should get used to reading it.
* [Effective Modern C++](https://www.amazon.com/Effective-Modern-Specific-Ways-Improve/dp/1491903996) - This is THE book on newer, more advanced C++ features like smart pointers and move operations (Also available as a [Free PDF Here](https://moodle.ufsc.br/pluginfile.php/2377667/mod_resource/content/0/Effective_Modern_C__.pdf))

## Structuring your Gameplay code
Unreal comes with a lot more structure than you might be used to coming from Unity. I'll attempt to highlight the pieces I find most critical/useful here:
* [Actors](https://dev.epicgames.com/documentation/en-us/unreal-engine/actors-in-unreal-engine) - Actors are the foundation of Unreal and are analogous to Game Objects in Unity. Anything that exists with a transform in your scene must be an Actor. 
* [Pawns](https://dev.epicgames.com/documentation/en-us/unreal-engine/pawn-in-unreal-engine) - These are your characters that you want to be controlled by Players and/or Complex AI, they come with logic for spawning and linking with Player Controllers. They should contain levers for everything your character can do and how it behaves.
  * If you want to do a conventional third/first person character, check out the [Character](https://dev.epicgames.com/documentation/en-us/unreal-engine/characters-in-unreal-engine) subclass.
* [Player Controllers](https://dev.epicgames.com/documentation/en-us/unreal-engine/player-controllers-in-unreal-engine) - These are used to "Possess" A Pawn so that a player can control it (it is a 1-1 relationship). They should handle everything related to input handling, camera management, and UI/HUD Elements.
  * To change Camera angles look for [Set View Target with Blend](https://www.youtube.com/watch?v=uW86ZGxesmc)
  * To add UI Widgets look for [Create Widget & Add to Viewport](https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-widgets-in-unreal-engine)
* [Game Modes](https://dev.epicgames.com/documentation/en-us/unreal-engine/game-mode-and-game-state-in-unreal-engine#gamemodes) - Each Map has a Game Mode and it controls the rules of your game and sets up all the default classes used during gameplay. You will want a blueprint version of this class so you can override and set your own Pawn, Player Controller, Game State, and Player State classes. I like to use my game mode as a place to contain the main flow of my game and dispatch events that are used to orchestrate other actors.
  * In Unity you probably had some game object named Game Manager or something like that. This is what you would use instead of making something like that on your own.
* [Game State](https://dev.epicgames.com/documentation/en-us/unreal-engine/game-mode-and-game-state-in-unreal-engine#gamestate) - Used for storing the overall state of the game. This is where you'll want to put things like overall score, time remaining, etc.
  * There is also Player State which is state created for every player in your game.
* [Subsystems](https://dev.epicgames.com/documentation/en-us/unreal-engine/programming-subsystems-in-unreal-engine) - Engine-managed Singletons. You can use these in any place where you would have rolled your own Singleton class in Unity and as a bonus Unreal will manage their lifecycle and scope automatically for you!
* [Delegates](https://benui.ca/unreal/delegates-intro/) - Delegates are similar to UnityEvents or C# Actions, they provide easy ways to do things like Observable Updates, Message Broadcasts, whatever you need.

### What do I do instead of using Prefabs???
You should think of blueprint subclasses as your analogue to prefabs. In-fact, if you want a setup that is as close to Unity's prefab workflow you can get that and here's how:
1. Make C++ base class
2. Create a Blueprint class that inherits from that base class
3. (For variants) Create new Blueprint classes that inherit from that

That's it, you can extend those classes even further for different variants, but from here you can just drop those actors in the scene or set them as properties.

#### Some Common Gotchas/Tips:
* You can't serialize component references as properties on a blueprint in the editor like you would on a prefab in Unity. If you want to access a component in C++, you should define the component hierarchy in your C++ constructor.
* You should always have a base class for a blueprint, it doesn't have to be C++, but it shouldn't directly reference assets in it because every-time you need to do a cast it will bloat your memory. (See: **My in-game loading times are slow, what do I do?**)
* If you can get away with it, avoid adding unnecessary visual scripting to a new blueprint class and try to get by just changing properties. Doing so will create a Data-Only Blueprint which has some memory benefits.


# Extra Credit:
This gives good overview of the lifecycles that exist within Unreal and how everything fits together.

**The Unreal Engine Game Framework: From int main() to BeginPlay:**
<div class="video-wrap">
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/IaU2Hue-ApI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>

Multiplayer is one of Unreal's best features, so if you're interested, try learning more about it. Property replication is your go-to tool when making multiplayer things.

**Unreal vs. Unity: Actors & Components, Inheritance & Composition:**
<div class="video-wrap">
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/JOJP0CvpB8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>



# Misc things:
## But I really need to nest actors under other actors like in Unity:
First think about if you really need to, is this functionality better as a reusable component?

If you still decide you really need to, you should do it at runtime with [AttachActorToComponent](https://docs.unrealengine.com/5.0/en-US/BlueprintAPI/Transformation/AttachActorToComponent/)

here's an example from my bowling game of how I attach a ball to a hand socket:

{% highlight cpp %}
    const FAttachmentTransformRules ballAttachmentRules(
        EAttachmentRule::KeepRelative, //  Match Parent Location
        EAttachmentRule::KeepRelative, // Match Parent Rotation,
        EAttachmentRule::KeepWorld,  // Maintain Current Scale
        false); // Don't Weld Bodies (not usually relevant)
    bool attachSuccessful = CurrentBall->AttachToComponent(BallAnchorComp, ballAttachmentRules)
    // Check is important here because this can fail for a variety of reasons
    check(attachSuccessful);
{% endhighlight %}


## FOV Scaling:
Unreal and Unity use opposite FOV Scaling (Unity keeps it consistent as you stretch horizontally), you can change this to be more consistent with Unity by going to `Config/DefaultEngine.ini` and adding the following snippet to the end of it:
{% highlight ini %}
    [/script/engine.localplayer]
    AspectRatioAxisConstraint=AspectRatio_MaintainYFOV
{% endhighlight %}

## Alternatives to common Unity Assets/Libraries:
* Cinemachine - Unreal has a [decent camera system built in](https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/ProgrammingWithCPP/CPPTutorials/AutoCamera/), but it's not as powerful out of the box as cinemachine. For more complex camera setups look into [Camera Modifiers](https://www.youtube.com/watch?v=BOtItHPL39k)
  * Update: Good News! The original creator of Cinemachine has made [a new Camera plugin for Unreal](https://blackeyetechnologies.com/) with all the goodness you loved in Cinemachine!
* DOTween - In Blueprints, look into [Timelines](https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/Blueprints/UserGuide/Timelines/), in C++ there's not really anything equivalent to this. I'm currently working on my own alternative plugin called [DUETween](/games/DUETween/)
* Zenject (or other DI system) - [Type Containers](https://docs.unrealengine.com/4.27/en-US/API/Runtime/Core/Misc/TTypeContainer/) are basically a DI container system, but be forewarned, they are not well-supported and within Epic are only used in the Unreal launcher.

## My compile times are slow, what do I do?
Usually the advice for improving compile times goes:
1. Use [Forward Declarations](https://unrealcommunity.wiki/forward-declarations-teqxgfp6) in your header files instead of includes wherever possible (and generally remove un-used includes)
2. Make sure Unreal and your IDE are both installed on an SSD
3. Use Live Coding to avoid doing full recompiles wherever possible (Note: you still have to restart after editing header files)
4. Upgrade your computer with a faster CPU or more RAM

## My in-game loading times are slow, what do I do?
9 times out of 10, this is because you're loading too many assets at once.

Look at your [Asset Dependency Chain](https://www.youtube.com/watch?v=4-oRyDLfo7M), then convert things to [Soft References](https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/ProgrammingWithCPP/Assets/ReferencingAssets/) that aren't needed all the time.

# Other Helpful guides for transitioning Unity Developers:
* [Ugh, I Guess I Want To Move From Unity To Unreal (Dot Com)](https://ughiguessiwanttomovefromunitytounreal.com/)
* [JIP's Unreal Notes](https://jip.dev/notes/unreal-engine/) - Very comprehensive overview of most of Unreal's core features.
* [Ben🌱ui](https://benui.ca/) - Great articles on making UI widgets, as well as [Very Useful Documentation for Unreal's version of Attributes](https://benui.ca/unreal/uproperty/)
* [Unreal Slackers](https://unrealslackers.org/) - The largest discord community for Unreal, very helpful if you run into any issues.
* [Unreal Community Wiki](https://unrealcommunity.wiki/) - Better documentation than Epic.
* [Tom Looman - UE Learning Resources](https://www.tomlooman.com/unreal-engine-resources/) - Collection of knowledge resources curated by Tom Looman (fairly influential Unreal teacher).
* [Tom Looman - Professional Game Development in C++ and Unreal Engine](https://courses.tomlooman.com/p/unrealengine-cpp?coupon_code=COMMUNITY15) - A very pricey course that is good (but not essential), consider it if you need structure, but the first 9 lectures are all you really need to get started.
* [Multiplayer Network Compendium](https://cedric-neukirchen.net/docs/category/multiplayer-network-compendium) - Lots of good information about Multiplayer.