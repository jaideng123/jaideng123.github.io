---
layout: blog
title: "Learning Unreal as a Unity Developer"
category: blog
---
![Unity & Unreal Logos](/assets/images/unity-unreal.jpg)

Over the last year, I've been learning Unreal in my free time and having an absolute blast. Since then, multiple friends have asked me for resources I've found helpful during the process, so I'm collecting them here along with some tips I wish I would have had starting out.

Just a quick note that this information will mostly be from a technical perspective as that's my background, if you are just learning how to program and/or not familiar with Unity, these might not be the right resources for you.

# Getting Started:

To get the lay of the land, you should start with Alex Forsythes incredible videos.

Unreal vs. Unity: Actors & Components, Inheritance & Composition:
<iframe width="560" height="315" src="https://www.youtube.com/embed/iQ3c-lrHO7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
This will give a good overview of the game object model unreal uses. It's similar to Unity's but different in subtle ways like the fact that actors have no hierarchy with other actors and instead each actor has it's own hierarchy of components.

## Using the Editor:
Check out Unreal's documentation:

[https://docs.unrealengine.com/4.27/en-US/Basics/UnrealEngineForUnityDevs](https://docs.unrealengine.com/4.27/en-US/Basics/UnrealEngineForUnityDevs/)


# How do I write code?
Watch this first:


Blueprints vs. C++: How They Fit Together and Why You Should Use Both:
<iframe width="560" height="315" src="https://www.youtube.com/embed/VMZftEVDuCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
Blueprints and C++ are the core of Unreal's progamming model and you should use them both.

## Blueprints
Blueprints are a good place to start playing around with Unreal. I was personally not a believer in them at first, but when you combine them with C++, they are very powerful. I find them most useful for long-running chains of events, quick visual effects, and prototyping.

Unreal's documentation here is solid so check it out:

[https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/QuickStart/](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/QuickStart/)
[https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/Overview/](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/Overview/)


## C++
C++ can be intimidating at first, but Unreal provides free garbage collection and lots of macros/libraries/etc that will make you feel right at home as a Unity/C# developer.
I recommend using [Rider](https://www.jetbrains.com/rider/) as it will help you avoid the many, many footguns that exist in C++ (Yes the license costs money, but it's worth the $15 a month).


Laura's Unreal blog is great place to start:

[https://landelare.github.io/2022/07/16/unity-starter-pack.html](https://landelare.github.io/2022/07/16/unity-starter-pack.html)

They also provide a quick primer on Unreal Style C++:

[https://landelare.github.io/2023/01/07/cpp-speedrun.html](https://landelare.github.io/2023/01/07/cpp-speedrun.html)

# Misc things:
Unreal and Unity use opposite FOV Scaling (Unity keeps it consistent as you stretch horizontally), you can change this to be more consistent with Unity by going to `Config/DefaultEngine.ini` and adding the following snippet:
    [/script/engine.localplayer]
    AspectRatioAxisConstraint=AspectRatio_MaintainYFOV


# Extra Credit:
The Unreal Engine Game Framework: From int main() to BeginPlay:
<iframe width="560" height="315" src="https://www.youtube.com/embed/IaU2Hue-ApI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
This gives good overview of the lifecycles that exist within Unreal and how everything fits together.


Multiplayer in Unreal Engine: How to Understand Network Replication 
<iframe width="560" height="315" src="https://www.youtube.com/embed/JOJP0CvpB8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
Multiplayer is one of Unreal's best features, so if you're interested, try learning more about it. Property replication is your go-to tool when making multiplayer things.

# General Resources:
* [JIP's Unreal Notes](https://jip.dev/notes/unreal-engine/) - Very comprehensive overview of most of Unreal's core features.
* [Ben🌱ui](https://benui.ca/) - Great articles on making UI widgets, as well as [Very Useful Documentation for Unreal's version of Attributes](https://benui.ca/unreal/uproperty/)
* [Unreal Slackers](https://unrealslackers.org/) - The largest discord community for Unreal, very helpful if you run into any issues.
* [Unreal Community Wiki](https://unrealcommunity.wiki/) - Better documentation than Epic.
* [Tom Looman - UE Learning Resources](https://www.tomlooman.com/unreal-engine-resources/) - Collection of knowledge resources curated by Tom Looman (fairly influential Unreal teacher).
* [Tom Looman - Professional Game Development in C++ and Unreal Engine](https://courses.tomlooman.com/p/unrealengine-cpp?coupon_code=COMMUNITY15) - A very pricey course that is good (but not essential), consider it if you need structure, but the first 9 lectures are all you really need.
* [Multiplayer Network Compendium](https://cedric-neukirchen.net/docs/category/multiplayer-network-compendium) - Lots of good information about Multiplayer.