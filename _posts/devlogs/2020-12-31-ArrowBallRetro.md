---
layout: blog
title: "ArrowBall Post-Mortem"
role: "Solo Developer"
categories: [devlogs]
permalink: /games/ArrowBall/PostMortem/
---

## About The Game:
[ArrowBall](/games/ArrowBall) is a game where you can challenge your friends in 1v1 or 2v2 competitions where both teams try to get THE BALL into the opposing team's goal to score points. Run, jump, fire explosive arrows, use Clutch Mode to set up the perfect shot, or launch a devastating Super Arrow.

![Super Arrow Gif](/assets/images/ArrowBall/super.gif)

**Made with:** Unity

**Project Length:** 18 Months

**Role:** Sole Developer

## Retrospective

After shipping [TRITIX](/games/TRITIX), I felt a strong desire to make a game that was wholely my own and didn't re-implement an existing game. One of the highlights of my time in college was getting together with a group of friends and spending hours playing games together like Super Smash Bros, Rocket League, and Duck Game. There was something about needing to make time to physically be with people and engage in some good-natured competition that I thought was really special so I set out to make a game that re-captured some of that magic.

The idea for the core mechanic came to me one night when I was having trouble sleeping and was thinking about the mechanic in Breath of the Wild where time would slow when you jumped in the air and aimed your bow. I imagined a moment where that arrow exploded and sent a ball flying into a goal as a crowd roared. I was excited by the idea and figured it would straightforward to build a prototype so I spent the next few days whipping one up in Unity.

I was able to borrow a lot of the code from [MowMowMow](/games/MowMowMow/) (which I thought this would just be a quick detour from), and fashioned a 2D character controller based on [Sebastian Lague's Tutorial Series](https://www.youtube.com/playlist?list=PLFt_AvWsXl0f0hqURlhyIoAabKPgRsqjz). I worked first on nailing down the core mechanic of just shooting a ball around with explosive arrows, making sure the interaction and behavior felt good before adding a second player. After getting the feel of the core mechanic just right, I whipped up a quick build with 2 players, unlimited arrows, and unlimited slow-mo time (which would later be clutch mode) and enlisted a friend of mine to help play-test. During the play-test my friend and I felt genuine tension and excitement and I knew I was on the right track, so I continued to iterate on the game in my free time over the next few months. During this time, I worked on making the game more interesting by adding complementary mechanics such as new movement options, Super Arrows, and multiple Stages to play on and play-testing with any friends that were interested. After my first 4-player play-test, I uploaded some footage on twitter and got [a surprisingly positive reaction](https://twitter.com/JaidenG123/status/1226030016124743685) (relative to the sparse number of followers I have) so I started thinking about how I wanted to release it.

With this being my first wholly original long-term project, I didn't want to over-invest my time, so I set a deadline for completion sometime around June 2020. I decided early on that I wanted to focus on local multiplayer in order to minimize technical complexity and that I wanted to sell the game for a premium (not because I needed the money but mostly for the satisfaction of knowing someone thought it was worth spending money on). For these reasons I went with Steam as it provided good discoverability and Steam Remote Play Together provided online play with very little effort required on my part. Before making my Steam page I researched about how to structure them and came across this [wonderful GDC talk by Chris Zukowski](https://www.youtube.com/watch?v=UJiv14uPOac) (Seriously, he's great, go read all his stuff [https://howtomarketagame.com/blog/](https://howtomarketagame.com/blog/)) which helped me think about how to structure my page and write my descriptions to make it easy to scan. I also cut together a simple trailer with some clips of gameplay set to some background music. I launched my Steam page and started getting a veeeerrrrryyyy slow trickle of wish-lists, but I was happy to see that people were even mildly interested in what I was working on.

By June, I reached my internal deadline and had the game content complete with 8 Super Arrows and 6 Stages all implemented. From here I thought about releasing early(My public launch window was late 2020), but instead I decided to submit the game to some festivals hoping that they could help me get some more buzz or at the very least, some useful feedback to make the game better. In the end I entered ArrowBall into Indiecade and Seattle Indie Expo(SIX). My experience with Indiecade was less than stellar. It was expensive, the submission process required a lot of documentation, and in the end none of the keys I provided were ever redeemed and I have yet to receive any written feedback (which I had to pay extra for) 6 months after submission. Luckily, my experience with SIX was the complete opposite, the submission form was short, the submission fee was dirt cheap, and even though I didn't get a nomination, I got a lot of invaluable feedback that really helped improve the game.

Even though I had a few months before my planned launch there was still a lot of work that needed to be done. Based on feedback from SIX, I decided to take another pass at the visuals of the game to see if I could make them more interesting by adding some new particle effects, amping up existing effects, and making the levels cleaner. The end result still looked basic, but not as much as it could have been. I invested in making the keyboard controls better by adding mouse aiming in response to a surprising number of players choosing it as their preferred option. In order to make the controls feel as smooth and tight as possible I implemented some common input forgiveness mechanics from 2d platformers(coyote time, jump buffering, etc.) and made the ball respond to explosions in a way that better matched player expectations by adding a grace period and making the direction of the shot line up with the arrow. In addition to the fun work I also had all the normal release tasks such as cutting together a launch trailer (which was much better than my initial trailer with the knowledge provided by [Derek Lieu](https://www.derek-lieu.com/start-here)), getting the game through the Steam approval process, adding more metrics, achievements, etc. 

By late September, the game was in a complete and stable state, but I decided to move the internal release deadline to November so that I could participate in the Autumn Steam Games Festival. I spent time whipping up a quick demo with a few arrows and stages, made the some posts on Steam, and by October the demo was out and the festival was on. I won't provide my analysis of the festival here since it's been done to death but suffice it to say it resulted in a good uptick in wish-lists (though not many plays for the actual demo) and I think it was mostly worth the effort of putting together the demo, though much more worth it if your game is big enough to get a feature (which mine was not).

Finally, it was November and time to release the game for real. As expected from a first release on Steam, there wasn't much buzz and the only review I got was from my brother-in-law, but I do see people playing occasionally via metrics so I assume they're enjoying it ¯\\_(ツ)_/¯. Numbers-wise, I had accrued ~200 wish-lists before launch and sold 25 units over the first month which was enough to recoup the cost of Steam submission and most of the assets I purchased so financially it ended being a wash, which I totally expected (don't quit your day job people).

In the end, I'm very proud of the game ArrowBall turned out to be, even if it didn't find an audience. Throughout the process of taking an idea all the way to shipping I learned a lot of lessons(more about that in the next section), found a great community in the Seattle Indie scene, and pushed myself as both a designer and a developer. It's also not lost on me that I somehow managed to ship my first major game on Steam during a global pandemic and I would commend any other developer that was able to ship something during this hellish year. So now I find myself in a similar position as before ArrowBall where I have no idea what my next project will be, but once I figure it out, I have much more knowledge and experience to draw from.

## Lessons Learned

- Play-Test with more than just friends, get as much feedback as possible from multiple players (even if you don't use all of it)
- Don't work in the dark, share your game with people even at early stages
- Leverage your local game-dev community by sharing progress, asking for help, getting critique
- Don't launch your Steam page cold (This will hurt you with THE ALGORITHM)
- Invest in good capsule images for your Steam Page (Still trying to figure out how to find an artist for this)
- Do some research into the viability of the genre you're tackling (avoid making 4 player local multiplayer-only games)
    - Just make sure it's something you can succeed in based on level of complexity + expectations of audience for art, etc.
    - Be mindful of and minimize any accessibility barriers (IE needing a controller on PC, Friends)
- Spend time developing an interesting visual style for your game (expectations these days are quite high on this front)
    - Twitter is a great place to A/B test these things
    - Shaders, Particles, Effects, and Asset Stores are all accessible tools for programmers to make things look better w/o much artistic technique
- Avoid festivals that cost money and don't guarantee prompt, useful feedback if they don't pick your game *(Cough IndieCade Cough)*
    - Local festivals (Shout-out to [Seattle Indie Expo](https://six.seattleindies.org/)) are usually your best bet
    - This of course changes if your game has more buzz, a larger audience, or appeals more to organizers
- Do these devlogs as you go instead of waiting until post-release to do a big info dump

But most of all if you are making a game on your own **Be compassionate with yourself** the things you are doing are often handled by multiple teams of people at larger studios, you will not get everything right, you will not know everything, you will likely not succeed like you hoped you would, you are still learning, most people are still learning.

