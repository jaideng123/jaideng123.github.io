---
layout: blog
title: "The Art of Gluing Things Together"
# image: /assets/images/ClawAndOrder/Cover.gif
category: blog
---
# (WORK IN PROGRESS)
<!-- 
 Thoughts:
 - How I Like to Use it
 - Common Pitfalls
 - Tabbed for Each Engine
 - Folded Code
 -->

There are a lot of tutorials out there about how to make flashy features for a game like a crafting system or a grappling hook, but very few about how to take all these disparate pieces make a whole game work. In this post I wanted to talk about what I affectionately refer to as "Glue Code" these are things that manage your gameplay flow, let systems talk to one another, and just generally allow you to make a real game instead of just a youtube-friendly tech demo.

I want to preface all of this by first saying that the structure of a game that feels right is inextricably tied to your own personal aesthetic. One programmers spaghetti code can be another's simple and effective depending on their background and what kind of problems they've encountered in the past. For this reason I'm not going to be too prescriptive here. I'm just going to lay out various patterns and talk a bit about how and when they're useful. I'm also going to try to keep this as engine-agnostic as I can, but I will talk about some applications in Unreal, Godot, and Unity.

With all that out of the way, let's start moving through various patterns from least to most complex!

# Singleton Game Manager
A Game Manager is simply a top-level object that controls the overall flow of your game.
This Game Manager will almost always be a [Singleton](https://en.wikipedia.org/wiki/Singleton_pattern) meaning that it will have one instance that is globally accessible. 
It may spawn initial actors for a level, emit events for other actors, or manage a global state machine if your gameplay is structured into distinct phases. 
Game Managers can go by many names like Game Controller, Root State, or even just Game (As is the case in [this famously silly example from the source code for VVVVVV](https://github.com/TerryCavanagh/VVVVVV/blob/f7c0321b715ceed8e87eba2ca507ad2dc28a428d/desktop_version/src/Game.h#L17)). 
Oftentimes programmers stumble onto this pattern making their first game, something needs to be in charge of how the game works after all.

Here's an example of how my Game Manager for [Rogue Hike](/games/RogueHike/) looked:

{% highlight cpp %}
class GameManager {
 public:
  int gameProgress = 0;
  int biomeProgress = 0;
  StateMachine levelStateMachine;
  PlayerCharacter* playerCharacter;
  static GameManager* Instance;
  void OnGameStart() {
    Instance = this;
    gameProgress = 0;
    biomeProgress = 0;
    levelStateMachine.ResetStateMachine();
    activePlayerCharacter = Instantiate<PlayerCharacter>();
    levelStateMachine.ChangeState("NewDay");
  }
  void OnNewDay() {
    biomeProgress = 0;
    gameProgress += 1;
    if (gameProgress == 1) {
      LoadForestBiome()
    } else if (gameProgress == 2) {
      LoadRockyBiome();
    } else if (gameProgress == 3) {
      LoadNewBiomeScene(snowyBiomeScene);
    }
    levelStateMachine.ChangeState("SelectLevel");
  }
  void OnPlayerEntrance() { ... }
  void OnAnimalsTurn() { ... }
  void OnTimePasses() { ... }
  void OnEndTurn() { ... }
  void LoadForestBiome() { ... }
  void LoadRockyBiome() { ... }
  void LoadSnowBiome() { ... }
};
{% endhighlight %}

If your game is small/simple enough, this structure alone can often take from prototyping to ship without much issue. I want to emphasize that last part again, **this is a perfectly fine way to make a game** and if it's working for your project, keep on rockin it!

It's not however without pitfalls, those usually being:
* The file for this class becoming so large that it becomes harder and hard to reason about as your project grows in scale.
* It will naturally create a lot of coupling which will make it hard to re-use or adapt systems to different parts of your game.
* It can often become a dumping ground for things that don't fit exactly in other places in the codebase. Whenever you can put something in any place other than the game manager, you should put it in that other place (or make a place for it to go).

## Creating a Game Manager
**In Unity:** Attach a C# script on a game object with references to all the things it needs to touch that is created on load and never destroyed.

**In Unreal:** You should use the built-in [GameMode & GameState classes](https://dev.epicgames.com/documentation/en-us/unreal-engine/game-mode-and-game-state-in-unreal-engine) in-place of you own implementation since it works better with the rest of the Unreal ecosystem. If you really want/need to roll your own thing, you can do it in a custom [Subsystem](https://dev.epicgames.com/documentation/en-us/unreal-engine/programming-subsystems-in-unreal-engine).

**In Godot:** This would just a script on your top-level Node that is accessed via a [Group](https://docs.godotengine.org/en/stable/tutorials/scripting/groups.html) (of 1) and emits events via Signals.

# Global Events / Pub-Sub
Event systems are another common tool to reach for as the size of your game grows. Events are pretty simple at their core, an object in your game generates an event of a certain type (optionally with some data), and other objects listen for those those events and respond accordingly.

A good example of where an event might be useful in a game is defeating a boss. After the player fells the boss, you probably want to:
1. Trigger an auto save
2. Play a victory sound
3. Start a cut-scene
4. Record EXP
5. Unlock an achievement
Since these are all disparate systems, dispatching a global event is much simpler and more flexible than trying to call all these methods directly.

I like to reserve events for cases where I have 2 or more mostly unconnected systems/objects that need to talk to one another for a few specific cases. That said, if you already have a reference to something, method calls are preferable since they are cheaper and easier to trace. It also goes without saying that you should avoid situations where you are generating events every tick, as this can add large overheads to the performance of your game.

Events are tricky to reason about as they (by-design) decouple the parts of your gameplay code, which is why you shouldn't over-use them.

## Pub-Sub
Publish & Subscribe systems take the concept of events and make it a bit more granular. Instead of all events going out into the ether, you can make dedicated streams for events to fall into. This can make your event system much easier to reason about, but also less flexible.

## Creating an event system
**In Unity:** I actually recommend using something similar to the Scriptable-Objects-Based method Schell Games developed for their games. You have to do more wiring in the editor, but the overall result is very flexible and designer-friendly.

**In Unreal:** Unreal already has a very solid system for Delegates/Events built-in, though it's not global by default.

**In Godot:** Signals provide a natural starting point for building out events. You can get a pretty decent one together by creating signals on a top-level EventManager Node.

# Observers
The Observer pattern is kind of ironically named because in most implementations an observer is not actively watching what is being observed, but is being pinged when it updates. When your level starts, observers will subscribe to the observable values that are relevant to them, then when the owner of that value changes it, it will go through each active subscriber and notify them that the value has changed. Values can be simple values like ints, bools, or floats or they can be larger objects like the entire game state.

Observers are good to use when you have a value that rarely updates and affects multiple things. UI elements like a health-bar work really well because it only changes when the player is hurt or heals and as a bonus, you can easily wire in visual effects that accentuate the change.

In general, you should try to be as granular as possible in terms of what data is being observed to avoid notifying too many things at once. That being said, you can reach a point where you have so many little bits of data that it becomes hard to reason about. I usually recommend grouping things together that make sense logically, and then breaking them out later as you start to have performance issues.

## Implementing an Observer system
**In Unity:** Once again, I recommend the Scriptable-Objects-Based method Schell Games developed for their games. They are easy to use and allow you to re-use and test different components in isolation.

**In Unreal:** A Delegate with a single argument can act as an observable, you just have to remember to update it when you update the value tied to it.

**In Godot:** Signals work great for this and you can easily make one for any value, you will just have to remember to invoke it when you update the underlying value (or make your own wrapper)

# States
States are your go-to tool when you need to logically separate different parts of gameplay or behavior. To understand states it's useful to think about 2 different examples of state at different scales.

Starting with the small scale, imagine you are creating an enemy in a platformer that runs at the player when they are close, but otherwise patrols. You would define 2 states: `Patrol` and `Chase`. `Patrol` would follow a pre-defined path and if the player is in range transition to `Chase`. `Chase` would move towards the player and if the player moves out of range transition to `Patrol`. This is a pretty simple example, but it leads to behavior that is much easier to reason about and extend than a giant if-else statement.

## Implementing a State system
**In Unity:** 

**In Unreal:**

**In Godot:** 

## State Machines
When you're working at a small scale, it's very easy to cleanly encapsulate the behavior in a few scripts, but what if we had not only states for characters, but for our overall gameplay? This is where a state machine comes in to play.

State machines are a pattern where you have an active state, a set of possible states, and transitions between them. They're very useful for high level gameplay flow where you have a lot of systems that need to be coordinated.

For example, in my game ArrowBall I set up a state machine to control a round of play with the following States:
- GameStart
- CountDown
- ActiveRound
- Score
- Celebration
- GameEnd

I don't opt for strict transitions for the sake of flexibility, but it ends up looking something like this:

![Diagram showing arrowball states and when the transitions between them happen](/assets/images/arrowball-states.png)

The real magic starts when you realize can hook a state machine up to your events system to broadcast events when you enter and exit certain states. Doing this allows you to trigger animations, particle effects, sounds, UI, or whatever else you need in a way that's flexible and extensible.

For instance in ArrowBall when the Score state is entered it triggers:
1. A horn sound
2. The ball to explode into confetti
3. The score UI to slide in
4. The game manager incrementing the score on the game state then changing the state machine to `Celebration`

Lots of different systems, all working in harmony, doesn't get any better than that!

### Implementing a State Machine
**In Unity:** 

**In Unreal:**

**In Godot:** 

## State Stack

# Services

# Dependency Injection & Service Locators