# Discord-ChaosBot
!!IMPORTANT!!
Due to major updates to discord.js you have to use version 12.5.1 for this bot to work. I plan on fixing this soon but for now just run `npm i discord.js@12.5.1` In the path with all the other files

A discord bot made to cause chaos. Full of messy and bad code because I don't know what I'm doing.

Usage Instructions

Step 1: Install Discord.JS to the directory where you downloaded or cloned this repo to by opening a command prompt there and typing npm install discord.js. You need node.js for this to work

Step 2: Make a token.json file like this 

{
"token":"YOUR TOKEN HERE"
}

Step 3: Run botStart.bat and the bot should be up and running 


To change the Status, Command Prefix or Video thats linked when you click on watch just edit them in config.json


WARNING: USING ANY COMMAND THAT SENDS A LOT OF MESSAGES TOO MUCH IN TOO MANY CHANNELS CAN EASILY GET YOU RATE LIMITED.
 
To use the banlist put someones ID in the quotes in config.json. If you want only you to be able to use the bot put your id in it and in index.js where it says `if(message.author id === x) ` on line 32 replace === with !==. To add more than 2 id's to the banlist just add `,""` after the 2nd id in config.json and put the id in the quotation marks

Please don't use this bot in a malicous way. I just made it to test what I can do so please dont harass or damage anyones server in any way.

If you need any help just contact me on discord @TweedleGloop#7902

TODO: 
- Update to new discord.js
- Add images to the readme to make it easier to follow
- Comment the code (If I'm not lazy)
- Make a standalone exe version so the bots easier to use