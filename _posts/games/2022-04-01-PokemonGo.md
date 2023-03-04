---
layout: game
title: "Pokémon Go"
role: "Gameplay Programmer"
categories: [games]
permalink: /games/PokemonGo/
previewImage: "/assets/images/PokemonGo/pokemongo.jpg "
imageNeedsText: true
category: job
screenshots: [
    "/assets/images/PokemonGo/pokemongo.jpg",
    "/assets/images/PokemonGo/catch.png",
    "/assets/images/PokemonGo/gofest.jpg",
        "/assets/images/PokemonGo/ticket-gifting.jpg",
]
ongoingProject: true
priority: 10
---

**What I've done so far:** 

As a Gameplay Engineer on the Pokémon Go team, I've collaborated with designers to create tools to quickly tune the overall speed of our animations and transitions in the game, implemented advanced haptics to improve feedback and game feel, and am currently leading the (game client-side) technical design and engineering for a large upcoming gameplay feature (which I can't talk about just yet).

**Platforms:** Android, iOS

**Engine & Tools:** Unity
<!--more-->

<div class="google-play-badge__container">
    <a href='https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=en_US&gl=US&pli=1'>
        <img alt='Get it on Google Play' class="google-play-badge" src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
    </a>
</div>

# Animation Tuning Work

In collaboration with our design and tech art team I architected and built internal tools to tune all our animations and transitions in the game.

The tools had to be built on a very short timeline as we had to get the changes fine-tuned and approved by the Creative Director from the Pokémon Company who would only be in our office for 2 days. During the visit I also provided direct support by adding new tuning parameters and answering questions from the Creative Director as they dialed in on a more snappy flow.

In the end, the Creative Director was very pleased with the tooling we were able to stand-up, and our players loved the new flow that made the game much snappier to play.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Trainers, we are happy to announce that in the 0.255 update we have updated various animations, including the Pokémon catch sequence, to be both faster and smoother. We hope this new update provides an even more enjoyable experience for our Trainers!</p>&mdash; Niantic Support (@NianticHelp) <a href="https://twitter.com/NianticHelp/status/1593725739836342272?ref_src=twsrc%5Etfw">November 18, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


# Ticket Gifting for Go Fest 2022

## Gifting Sale

As part of our 2022 Go-Fest Finale, we had an ask from our Marketing & Ops team to support a sale for gifted event tickets. To do this, we would need to support new restrictions on our in-game ticket gifting that could be configured remotely.

Since I had bandwidth, I led the technical effort for this, working with our Ops team to figure out exactly what behavior and game configuration variables they needed, coordinating with our server engineer on the project to rough out an end-to-end technical design, syncing with QA so that they could be ready to test the functionality, and delivering the project on a tight timeline.

In the end, we were able to deliver the functionality on-time and with no major defects. I was able to decompose the requirements into several pieces that we could use later to support other kinds of sales in the future, which the Ops team has since greatly appreciated.

![Screenshot from the web page showing the sale](/assets/images/PokemonGo/gift-sale.png)

## Block Paid Gifts

In response to our ticket gifting feature, we had [a lot of community requests](https://www.reddit.com/r/TheSilphRoad/comments/wq6v8s/we_need_a_do_not_gift_tickets_option/) for the ability to block unwanted gifts from others (especially among our community leaders).

Though the project had technically wrapped, I was able to band together with our UX Designer and Server engineer to quickly implement a toggle that allowed players to block paid gifts.

Once we had the feature ready to go, I worked with my manager to push it through our QA & release process to get it into the hands of our players.

![Screenshot from Pokemon Go App showing the block gifts toggle](/assets/images/PokemonGo/block-gifts.png)