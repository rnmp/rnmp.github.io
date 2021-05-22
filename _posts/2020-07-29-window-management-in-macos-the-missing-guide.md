---
title: "Window Management in macOS: The Missing Guide"
---

{: .hero}
![](/assets/2020-07/macos-window-management.png)

When it comes to taking advantage of your larger displays, having a tool that helps you split and arrange windows quickly goes a long way. In this guide, I take this concept further by helping you create a workflow where every corner of your screen has a purpose, and apps can be launched and rearranged quickly with keystrokes. All with a dose of beautiful a e s t h e t i c s.

# Choosing the right tool

If you don’t have a window management app yet, that’s a good place to start. I will be focusing the guide on Moom but the specific tool doesn’t really matter as long as it supports these killer features:

## Grids

![](/assets/2020-07/moom-grids.png)

Your chosen app should allow you define areas on your screen based on a grid that you can customize to your liking. In my case, I divide my screen in an 8x8 grid for fine-control.

## Keyboard shortcuts

Many solutions out there have menus that you can click in order to rearrange windows. This can be convenient at times, but if you’re dealing with large displays, using your mouse for this is going to be time consuming.

## Gaps between windows

![](/assets/2020-07/window-gaps.png)

When running commands to divide or rearrange your windows, you’ll want your window management app to leave some space or gap between them. While it make seem like a subjective aesthetic choice, it will give you some breathing room and better sense of space. Plus it looks good.

# Creating a default layout

A default layout is how your windows will be arranged most of the time. You may move them around for certain tasks, but having a layout to default to will keep your workflow consistent. Before we jump to specifics, let’s first answer this question:

> What apps do you use the most and what are they used for?

Make sure you group them by category. Order doesn’t matter. This is my answer:

- Internet browsing: Google Chrome
- Main work tool: kitty, a Terminal.app alternative
- Communications: Slack, WhatsApp, Messages
- File management: Finder.app

## Designing the layout

This will depend entirely on your personal preference and hardware situation, but what you generally want to do is grab the apps from above and arrange them in such a way that it matches the time you spend on them and the space they actually need.

Another advice is to keep apps in the same category (such as Slack, Messages and WhatsApp) stacked since you can switch between them easily.

Here’s my layout:

{% caption
  I used a 8x8 grid to help create the right proportion. E.g. I needed my browser to be a bit wider than half the screen.
%}
  ![](/assets/2020-07/zones-layout.png)
{% endcaption %}

I have two monitors that are the exact same size. I find that my eyes default more to the right monitor so having my work tool (3) occupy the entire screen there is more ergonomic to me. I need my browser (2) conveniently close for reference or previewing changes, but also general browsing so occupying the majority of the left screen feels right also.

Communications apps (1) are stacked up on the same quadrant on the top left of my setup and I switch to them based on need. That leaves a convenient location for file management (4) on the bottom left.

This is a screenshot of how it actually looks:

{% caption Click to zoom. %}
  ![](/assets/2020-07/macos-window-management.png)
{% endcaption %}


## Supercharge with hotkeys

Once you’re satisfied with the layout, it’s time to make it easy to re-create with your window management tool. Moom will let you select a part of your screen and set a keyboard shortcut:

![](/assets/2020-07/moom-settings-1.png)

On the top right out of each of these custom settings, I can set a key to use in combination with Moom’s hotkey, which is <kbd>Control + ↑</kbd> in my case. I chose 1 because its the first area from left to right. So, if I want to move Slack or any other communication tool like (Messages) to area 1, I press <kbd>Control + ↑ + 1</kbd>.

{% caption
  For area 3, I use <kbd>Control + ↑ + Space</kbd>. This is a default hotkey
  from Moom to occupy the entire screen.
%}
  ![](/assets/2020-07/zones-shortcuts.png)
{% endcaption %}

Moom also has a custom setting that saves your window/app arrangement and lets you set up a key for it using the _Arrange Windows_ custom setting:

{% caption
  "Ignore obstructed windows" is checked by default, but I kept it on because I want other communication tools to be moved as well (even if they’re not visible)
%}
  ![](/assets/2020-07/moom-settings-2.png)
{% endcaption %}

In this case, if I want to quickly re-create my entire default layout, all I have to do is press <kbd>Control + ↑ + D</kbd>. If something looks off, you can move your windows again (or close apps you don’t want to be affected by this layout) and then click on _Update Snapshot_ to save your changes.

# Everyday layouts

Depending on your workflow, you may need to move windows quickly in addition to your default layout.

## Side by side layout

![](/assets/2020-07/split-windows.png)

Useful when you want to cross reference information or previewing. You probably already use it to some capacity, but here are some hotkeys I use that make that process easier:

- Move a window to the left half of the screen: <kbd>Control + ↑ + ←</kbd>
- Move a window to the right half of the screen: <kbd>Control + ↑ + →</kbd>

A setting like Moom’s _Arrange Windows_ also comes handy for this, all you have to do is put the two type of windows you want side by side and set it up:

{% caption
  In this case, I do want to _Ignore obstructed windows_ because I only care about the windows visible.
%}
  ![](/assets/2020-07/moom-settings-3.png)
{% endcaption %}

So the keyboard shortcut for this ends up being <kbd>Control + ↑ + S</kbd>. If you use a setting like this, you may need to do it per app/window combination.

## Zen layout

![](/assets/2020-07/zen-mode.png)

Even with so much productivity and multi-tasking gains from your default layout, sometimes you just want to focus on one thing at a time. Now, you could take an app fullscreen, but dealing with a big display the contents of that window can look weird or unappealing.

What I call a _zen layout_ is really just a combination of two things:

1. A hotkey to center a window and give it just the right width so the content inside of it doesn’t look weird.
2. Hide everything else with the Mac’s standard shortcut <kbd>Option + ⌘ + H</kbd>

In Moom, a setting for my zen layout looks like this:

![](/assets/2020-07/moom-settings-4.png)

So now I can trigger this configuration with <kbd>Control + ↑ + ↵ Enter</kbd>.

# Launch or switching apps with hotkeys

Using <kbd>⌘ + Tab</kbd> should not be your main way to move between apps. The order of the list changes constantly, and you waste time moving around in order to find the app you want.

Instead, give your most accessed apps a hotkey. This way, you’ll know exactly what app is opening and it will become second nature. These are my hotkeys:

1. Communications (Slack): <kbd>F1</kbd>
2. Internet browsing (Chrome): <kbd>F2</kbd>
3. Main work tool ([kitty](https://sw.kovidgoyal.net/kitty/): <kbd>F3</kbd>
4. File management (Finder): <kbd>F4</kbd>
5. Communications (Messages): <kbd>F5</kbd>
6. Communications (WhatsApp): <kbd>F6</kbd>

I use function keys because they’re close to me on the keyboard and the number roughly matches their location on screen, but please choose something that is comfortable and convenient to you, otherwise you won’t stick to it.

To setup these hotkeys, I made an Alfred workflow (below) but you can get similar results with a tool like BetterTouchTool.

## Alfred Workflow

![](/assets/2020-07/alfred-workflow.png)

A very important point here is to [make sure triggers are executed instantly](https://www.alfredapp.com/help/workflows/triggers/hotkey/#faster-hotkeys):

{% caption
  If you don't do this, you will be waiting about a second to access each app.
%}
  ![](/assets/2020-07/alfred-workflow-tweaks.png)
{% endcaption %}

[Download .alfredworkflow](/assets/2020-07/app_hotkeys__alfred_workflow.zip)

## Launch or switching to other apps

Use <kbd>⌘ + Space</kbd> and type the first three or four letters of less common apps instead of using <kbd>⌘ + Tab</kbd>. Trust me, it’s faster. Not to mention it’s the same command you can use to open for files or folders; or to perform other quick actions.

# Centralizing the Finder window

If you’re like me and have a hotkey to focus on the Finder window and also allocated a dedicated space for it in your default layout, I strongly suggest you make tabs the default behavior for it.

What this means is that whenever you reveal a file or folder on Finder (via Alfred, Spotlight, etc.) they will now open on a new tab on the same window you already have open. You’ll never have to go dig for multiple Finder windows again.

All you have to do is open your Dock settings on System Preferences:

{% caption
  These setting will ensure that whenever you open folders using Alfred, your terminal or code editor it is done in a predictable location
%}
  ![](/assets/2020-07/finder-settings.png)
{% endcaption %}

# Minimal aesthetics

Make room for beautiful wallpapers by getting rid of noise on your screen.

## No desktop icons

Every time you need to grab something from your desktop, it means you have to move windows to the side and waste time looking for where things are. A computer is supposed to help us find things easily. Access your Desktop through your central Finder window instead.

Unfortunately, there isn't a way to hide your Desktop icons through any settings. So you’ll have to run some commands on your terminal:

{% caption One-liner to hide icons %}
~~~
defaults write com.apple.finder CreateDesktop -bool false && killall Finder
~~~
{% endcaption %}

{% caption One-liner to undo this  %}
~~~
defaults write com.apple.finder CreateDesktop -bool true && killall Finder
~~~
{% endcaption%}

## No dock

{% caption
  My Dock preferences pane. Notice "Automatically hide and show the Dock".
%}
  ![](/assets/2020-07/settings-dock.png)
{% endcaption %}

Some people like to have the dock to the side (a la Ubuntu). I prefer to not see it. I don't really need to see what apps are open, I already know.

## No menu bar

{% caption
  My General preferences pane. Notice "Automatically hide and show the menu bar".
%}
![](/assets/2020-07/settings-general.png)
{% endcaption %}

Similarly, I always know which app I'm on, and I'm aware of most of the keyboard shortcuts I need the majority of the time, so no need to see this information either. The menu bar is always there if I need it by using <kbd>option+cmd+d</kbd> or hovering to the top of the desktop.

# Wrapping things up

Hopefully these tips make your life a bit easier. A partying piece of advice is to always experiment with new layouts and configurations until you find one that works for you. I used to prefer working on my smaller laptop screen until I took the time to explore my options with larger displays and multiple monitors. Only then did I realize how much more productive I could me.
