---
layout: blog
title: "The Art of Gluing Things Together"
# image: /assets/images/ClawAndOrder/Cover.gif
category: blog
---
# (WORK IN PROGRESS)

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

# Events / Pub-Sub

# Observers

# State Machines

# State Stack

# Dependency Injection & Service Locators

# Custom Update/Tick