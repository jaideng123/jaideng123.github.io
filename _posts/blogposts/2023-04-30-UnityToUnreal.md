---
layout: blog
title: "Learning Unreal as a Unity Developer"
description: "A small guide and collection of resources I found helpful when transitioning from Unity to Unreal"
image: /assets/images/unity-unreal.jpg
category: blog
---
Over the last year, I've been learning Unreal in my free time and having an absolute blast. Since then, multiple friends have asked me for resources I've found helpful during the process, so I'm collecting them here along with some tips I wish I would have had starting out.

Just a quick note that this information will mostly be from a technical perspective as that's my background, if you are just learning how to program and/or not familiar with Unity, these might not be the right resources for you.

# Getting Started:

To get the lay of the land, you should start with Alex Forsythes incredible video:

**Unreal vs. Unity: Actors & Components, Inheritance & Composition:**
<div class="video-wrap">
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/iQ3c-lrHO7o" title="YouTube video player" allowfullscreen></iframe>
  </div>
</div>


This will give a good overview of the game object model unreal uses. It's similar to Unity's but different in subtle ways like the fact that by default actors have no hierarchy with other actors and instead each actor has it's own hierarchy of components.

## Getting the Editor:
The editor is pretty intuitive and can be learned by just playing around with it, but it's worth it to check out [Unreal's documentation for Unity devs](https://docs.unrealengine.com/4.27/en-US/Basics/UnrealEngineForUnityDevs/) to ramp up faster.

# OK, but how do I start writing code?
Blueprints and C++ are the core of Unreal's progamming model and you should use them both.

Watch this first to understand when one works better than the other:

**Blueprints vs. C++: How They Fit Together and Why You Should Use Both:**
<div class="video-wrap">
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/VMZftEVDuCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>

One especially important thing to note is that whatever mixture you choose, DO NOT CALL BLUEPRINT FUNCTIONS DIRECTLY FROM C++ (Use a base method in C++ that the bluerint implements).

## Blueprints
Blueprints are a good place to start playing around with Unreal. I was personally not a believer in them at first, but when you combine them with C++, they are very powerful. I find them most useful for long-running chains of events, quick visual effects, and prototyping.

Unreal's documentation here is solid so check it out:

[Blueprint Programming Quickstart](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/QuickStart/)
[Blueprint Programming Overview](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/Overview/)


## C++
C++ can be intimidating at first, but Unreal provides free garbage collection and lots of macros/libraries/etc that will make you feel right at home as a Unity/C# developer.
I recommend using [Rider](https://www.jetbrains.com/rider/) as it will help you avoid the many, many footguns that exist in C++ (Yes the license costs money, but it's worth the $15 a month).

### I've never used C++ before
Oh you sweet summer child, I'm here to help. C++ does a lot of things differently from other languages and it's important to at least understand the basics before jumping in.

[Tom Looman's C++ Guide](https://www.tomlooman.com/unreal-engine-cpp-guide/) is probably the best place to start if you're brand new to C++. Pay special attention to the pointers section, they are the key to understanding how C++ works.

### I did some C++ in college and kinda remember the basics

Laura's Unreal blog will probably get you up to speed more quickly:

[Unreal C++ Speedrun](https://landelare.github.io/2023/01/07/cpp-speedrun.html)

### Continuing your journey
At this point you know just enough to be dangerous, so get out there and start making something!

If you really want to dig deeper into C++, here are a few resources I would recommend:
* [CPPReference.com](https://en.cppreference.com/w/) - The most complete documentation for C++. It's not sexy, but it's always up to date, and you should get used to reading it.
* [Effective Modern C++](https://www.amazon.com/Effective-Modern-Specific-Ways-Improve/dp/1491903996) - This is THE book on newer C++ features like smart pointers and move operations (Also available as a [Free PDF Here](https://moodle.ufsc.br/pluginfile.php/2377667/mod_resource/content/0/Effective_Modern_C__.pdf))

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
First think about if you really need to, is this functionality better as a component?

If you still decide you really need to, you have to do it at runtime with [AttachActorToComponent](https://docs.unrealengine.com/5.0/en-US/BlueprintAPI/Transformation/AttachActorToComponent/)

here's an example from my bowling game of how I attach a ball to a hand socket:

{% highlight cpp %}
    const FAttachmentTransformRules ballAttachmentRules(
        EAttachmentRule::KeepRelative, //  Match Parent Location
        EAttachmentRule::KeepRelative, // Match Parent Rotation,
        EAttachmentRule::KeepWorld,  // Maintain Current Scale
        false); // Don't Weld Bodies (not usually relevant)
    // Check is important here because this can fail for a variety of reasons
    check(CurrentBall->AttachToComponent(BallAnchorComp, ballAttachmentRules));
{% endhighlight %}


## FOV Scaling:
Unreal and Unity use opposite FOV Scaling (Unity keeps it consistent as you stretch horizontally), you can change this to be more consistent with Unity by going to `Config/DefaultEngine.ini` and adding the following snippet to the end of it:
{% highlight ini %}
    [/script/engine.localplayer]
    AspectRatioAxisConstraint=AspectRatio_MaintainYFOV
{% endhighlight %}

## Alternatives to common Unity Assets/Libraries:
* Cinemachine - Unreal has a [decent camera system built in](https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/ProgrammingWithCPP/CPPTutorials/AutoCamera/), but it's not as powerful out of the box as cinemachine. For more complex camera setups look into [Camera Modifiers](https://www.youtube.com/watch?v=BOtItHPL39k)
* DOTween - In Blueprints, look into [Timelines](https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/Blueprints/UserGuide/Timelines/), in C++ there's not really anything equivalent to this (which is why I'm making my own).
* Zenject (or other DI system) - [Type Containers](https://docs.unrealengine.com/4.27/en-US/API/Runtime/Core/Misc/TTypeContainer/) are basically a DI container system, but be forewarned, they are not well-supported and within Epic are only used in the unreal launcher.

## My compile times are slow, what do I do?
Usually the advice for improving compile times goes:
1. Use [Forward Declarations](https://unrealcommunity.wiki/forward-declarations-teqxgfp6) in your header files instead of includes wherever possible (and generally remove un-used includes)
2. Make sure Unreal and your IDE are both installed on an SSD
3. Use Live Coding to avoid doing full recompiles wherever possible (except when editing header files)
4. Upgrade your computer with a faster CPU or more RAM

## My in-game loading times are slow, what do I do?
9 times out of 10, this is because you're loading too many assets at once.

Look at your [Asset Dependency Chain](https://www.youtube.com/watch?v=4-oRyDLfo7M), then convert things to [Soft References](https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/ProgrammingWithCPP/Assets/ReferencingAssets/) that aren't needed all the time.

# General Resources:
* [JIP's Unreal Notes](https://jip.dev/notes/unreal-engine/) - Very comprehensive overview of most of Unreal's core features.
* [Ben🌱ui](https://benui.ca/) - Great articles on making UI widgets, as well as [Very Useful Documentation for Unreal's version of Attributes](https://benui.ca/unreal/uproperty/)
* [Unreal Slackers](https://unrealslackers.org/) - The largest discord community for Unreal, very helpful if you run into any issues.
* [Unreal Community Wiki](https://unrealcommunity.wiki/) - Better documentation than Epic.
* [Tom Looman - UE Learning Resources](https://www.tomlooman.com/unreal-engine-resources/) - Collection of knowledge resources curated by Tom Looman (fairly influential Unreal teacher).
* [Tom Looman - Professional Game Development in C++ and Unreal Engine](https://courses.tomlooman.com/p/unrealengine-cpp?coupon_code=COMMUNITY15) - A very pricey course that is good (but not essential), consider it if you need structure, but the first 9 lectures are all you really need.
* [Multiplayer Network Compendium](https://cedric-neukirchen.net/docs/category/multiplayer-network-compendium) - Lots of good information about Multiplayer.