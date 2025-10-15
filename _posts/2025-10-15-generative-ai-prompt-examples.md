---
layout: post
title:  "How I prompt AI tools to generate stuff"
author: dmimukto
categories: [ ai, prompt engineering ]
published: true
---

## 1) Faculty of Survival (browser game in NextJS, Vite)
This was the prompt I input on [bolt.new](https://bolt.new/):

```
create a static site game which uses this spritesheet "https://dwmk.github.io/delta-telekom/Assets/spritesheet.png" that is 936x864 and has 12 columns and 8 rows, with 3 columns and 4 rows per character (there are 6 characters in total). For each character, the middle column of the 3 columns contains stationary sprite, and the first row contains down/forward facing, 2nd row contains left-facing, 3rd row contains right facing, and 4th row contains up facing sprites. When animating movement, just cycle through the sprites in the particular row corresponding to current direction. The game will be called "Faculty of Survival" where the player controls a teacher character and the rest of the 5 character variations would represent hostile students who are running towards the teacher with all their requests and complaints which will appear above their heads as chat bubbles picking from a random list of 50 such demands. Player will use WASD or arrow keys to move and try to survive for as long as they can. Touched by a student sprite would decrease health. Health regenerates over time. The maps would be procedurally generated for each run, and would be 64x64 (even though full viewport would not be needed and map would scroll automatically when player moves to a different location). Use a JS library to produce procedural background tunes for music, too. Use Google fonts for pixel-like appearance and let maps use black-and-white square tiles for walkable floors and a red-brown colored rectangles/polygons for obstructive walls. Student NPCs would be able to communicate with each other. So if one spots the teacher, they will chase the teacher until too far away and then student will find nearest student and band up together to find teacher again. NPCs can see if they are in line of sight. Got it? Implement everything, no placeholders.

The viewport should be zoomed in. Other regions remain clipped temporarily. There should be walls for generating corridors, rooms, etc. procedurally. Also when stationary, all characters should remain still and only use the middle column of their spritesheet regions for no animation. Use webkit audio context for real-time background music tunes and sound effects. This game should be similar to Pac Man, but instead of ghosts it would be students and instead of PacMan, it would be the teacher. Maybe draw some floating coins, too, for the teacher to pick up. The map will be like a maze but a bit more sophisticated to resemble a university campus.

Features:
Animated floating coins with bobbing effect
Health bar, score, and survival timer HUD
Students have 4 states: IDLE, CHASING, INFORMED, and SEARCHING
When a student loses sight of the teacher, they find the nearest student and band together
Banded students show "..." in their chat bubbles (INFORMED state)
When any member of a group spots the teacher, ALL group members are instantly alerted and begin chasing
If no nearby student is found, they enter SEARCHING mode and randomly patrol the area
Both teacher and student speeds increase by 10% every minute of survival
Game becomes progressively more challenging as time goes on
Speed multiplier calculated based on survival time
```

## 2) Phocheton 2 (Android app in Kotlin)

This was the prompt I input on [ChatGPT](https://chatgpt.com/):

```
Android Studio Narwhal | 2025.1.1 Patch 1
Build #AI-251.25410.109.2511.13752376, built on July 9, 2025
Runtime version: 21.0.6+-13391695-b895.109 amd64
VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
Toolkit: sun.awt.windows.WToolkit
Windows 11.0
GC: G1 Young Generation, G1 Concurrent GC, G1 Old Generation
Memory: 2048M
Cores: 8
Registry:
&nbsp; ide.experimental.ui=true
&nbsp; com.android.studio.ml.activeModel=com.android.studio.ml.AidaModel

Using this, provide step by step guide on how to use Material You and make a comprehensive, powerful accurate information dumper in real time. It should be like CPU-Z and G-CPU and HWinfo but for smartphones. It should have different tabs for various sections, e.g. SoC and filesystem overview, CPU, GPU, Apps, Battery, Network, and Cameras. Each tab would detail as much info (or all) as possible by the Android SDK and Android OS itself. Target from Android 7+ devices. Apps tab should list all apps with their names icons sizes and also have search bar and a switch beside it to allow showing system apps, too. Clicking on an app would reveal more details about all permissions used, origin of vendor, installation source, origin of certificate, installation date, etc. 
```

## 3) MuTube (browser extension)

This was the prompt I input on [ChatGPT](https://chatgpt.com/):

```
"MuTube" a universal browser extension that works on Chrome, Edge, Firefox, Brave, Safari, etc. and works by staying active in the background and automatically creating a new blank tab whenever a "https://www.youtube.com/watch?v=wOTFGRSUQ6Q" youtube watch link is detected. So it will immediately close the actual youtube tab and open "https://www.youtube.com/embed/wOTFGRSUQ6Q" that fits up the entire tab screen in the new tab. Be sure to declare the webRequestBlocking permission in your manifest. Provide all code and show steps to install it.
```

## 4) MandelEx 3 (fractal explorer+renderer in plain HTML, CSS, JS + WebGL 2)

This was the prompt I input on [ChatGPT](https://chatgpt.com/):

```
GPT-5, provide code and steps on "MandelEx" a very powerful and very fast and very accurate Mandelbrot fractal explorer that can utilize Intel Iris Xe GPUs and CPUs efficiently. Mouse-wheel scroll for zoom-in/zoom-out, mouse middle button for panning. Also keyboard arrow keys for panning and "W" and "S" for zooming in and out respectively. Also add some floating buttons for manually clicking to control. Also button for reset. Also button to enable/disable a smaller Julia viewport that shows stuff based on what point the mouse cursor is hovering on Mandelbrot. Everything in real-time. Can go full-screen or maximized window if required. Intro splash screen pop-up that shows up everytime on load and shows "MandelEx" in big bold font and then "version 0.9" in normal grey font below it, then some space and "Made by Dewan Mukto" in normal black font, and pop-up disappears after 5 seconds. In case of any errors or crashes, show error pop-up before terminating.
```

## 5) MizuCV (online CV builder in NextJS, Vite)

This was the prompt I input on [bolt.new](https://bolt.new/)

```
Build a mobile-first online CV builder that can export PDFs of CVs that look exactly like this! Use a PDF library to generate PDF. mobile-first UI and UX that takes in all inputs as a form with additional entries for categories available to be added or removed, and it should keep the data in persistent browser storage. This is going to be "MizuCV" an easy online CV builder. Use blob storage/format for the image if provided. Use best knowledge, common sense, and make the UI even better. There should be 2 tabs at the top, one for "Your Info" and the other for "Preview CV". Make sure to add arrows for reordering items and also add section at bottom for "Additional Notes".
```
I had attached an image of a CV layout I had designed on [Canva](https://canva.com/)

## 6) Muxday (social platform in NextJS, NeonDB)

This was the prompt I input on [v0.dev](https://v0.dev/):

```
Create an  entire full stack social platform app compressed enough so that you can provide full code in just 1 iteration of your message reply. Pick the most simplest frameworks.
```

## 7) Survey platform (NextJS)

This was the prompt I input on [v0.dev](https://v0.dev/):

```
create a much more better and modern platform than Google Forms for creating forms and surveys. There should be user accounts to be able to manage forms/surveys and then export data out from them in CSV format or otherwise. "Surveys" should be the platform name and it should appear in the top left corner of every screen, even though it can also be used for forms. Forms and surveys are more or less the same thing! The footer should contain "© 2025 Dewan Mukto Co.". UI should be focused on neutral shades of blacks, whites, greys, and also it should blend in with the shades of any other majority colors picked out from the form design itself so that it works similar to Google's Material You adaptive colors. The UI should be very modern, minimalist, corporate style, and glassy like Apple. For form creation and design, the user should be able to add all the varieties of question/field types as available on Google Forms. Remember, this is a competitor to all other form creation services online. Use Iconify "Solar" icons by 480 design wherever possible, in the bold duotone mode. For everything else, think of common sense and best design practices. No placeholders! This should be a production-ready platform.
```

## 8) Generating image with Grok

This was the prompt I input on [Grok](https://x.com/i/grok):

```
create a side-by-side meme image in a cute artistic style showing a sad anime girl holding a cup of starbucks coffee between her long sleeves of the hoodie she is wearing to protect against the Canada cold, and a cool anime guy on the right wearing sunglasses and having a big excited smile with aquiline nose and wide forehead and cool hairstyle and holding a cup of warm coffee. The left-side panel should have a caption above "Past Nostalgia Sufferer" and the right-panel should have caption "Optimistic Future Enjoyer".
```

## 9) Generating image with Bing Image Creator

These are some prompts I had input on [Bing Image Creator](https://www.bing.com/images/create):

```
Anime man holding books in one hand and a pen in the other standing on an elevated platform below which 3 other men (a billionaire, a mafia politician, an influencer) are standing and looking up at wonder with text "When they see you juggling knowledge, They'll drop their money berries from the hedge, And stand up from their thrones of courage, From all their influence they'll disengage, Just to grab a hold of your elevated ledge!" and poet's name "- Dewan Mukto"
```

```
anime man backside view walking down a brick lane that slowly ascends in front of man and slowly breaks up into pieces and turning into dust above the air,  with fancy serif text beside man saying "When I feel like I need to talk to someone for advice or motivation, I prefer communicating directly with God Himself. Through prayers and reading His holy scripture." accurately.
```

```
comparison image with a split in the middle, one side shows anime man being destructive and causing chaos and lightning strikes in the background, other side shows anime man being confident calm peaceful and just educating group of criminals and sinners with holy light in background
```

## 10) ClassVader (university-niche static webapp)

This was the prompt I input on [ChatGPT](https://chat.openai.com/):

```
provide code for a fluid Material You style mobile-first static site webapp in HTML, CSS, JS only so that it will be called "Class Vader" in a stylish funky sharp Google font and it will have 4 tabs (a stylish sans serif Google font for these) below: "Active Classes", "Empty Classes", "Active Labs", "Empty Labs".
And it's functionality is to accept a day of the week (Sunday, Monday, Tuesday, ... Saturday) and a timeslot (8:00 am - 9:20 am, 9:30 am - 10:50 am, 11:00 am - 12:20 pm, ... 5:00 pm - 6:20 pm) from drop-down lists. And then based on the selections, it will show a list of course codes, teacher/faculty/instructor info, and room/locations. The column headers should have arrows pointing up/down (up if sorting ascending, down if sorting descending, none if not being sorted by this attribute). There should be a search icon button too so that clicking on it will reveal a search bar to the left that temporarily covers the column header and allows user to type in a query/phrase to easily filter out results in real-time. By default, arrange results in ascending order of course codes. That's the functionality for the active classes and active labs so far. For the empty classes and labs, use clever searching techniques on the entire dataset to figure out. The empty classes/labs don't need a drop-down selector for timeslots. Rather, the user should only pick day of the week, and the empty classes/labs would have an additional column for timeslot that shows how long they are empty.

Make proper adjustments based on data source provided (file attached is a sample snapshot from the remote JSON source). Actual JSON should always be fetched from: https://usis-cdn.eniamza.com/connect.json 
```
