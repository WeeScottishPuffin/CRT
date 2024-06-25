//Started implementing download (16/09)
const keyPressAudio = ['./sounds/key_1.mp3','./sounds/key_2.mp3','./sounds/key_3.mp3'];
const byteSize = str => new Blob([str]).size;
var wd={}
folders={
  "Resume":{},
  "Projects":{
    "CRT.txt":["#CRT Portfolio",
               "This is a small... interactive 'website' I made to touch up on my javscript and css skills.",
               "It's mostly a proof of concept and it isn't really a finished, polished or user-friendly product.",
               "I had fun making it though.",
               "",
               "The sourcecode can be found at: 'https://github.com/WeeScottishPuffin/CRT'"],
    "Saturated.txt":["#Saturated BetterDiscord theme",
                     "This is just a small betterdiscord theme I cooked up.",
                     "It is meant to make discord easier on the eye.",
                     "It isn't approved by the BetterDiscord mod team, so it is only available to download via my github, at: 'https://github.com/WeeScottishPuffin/Saturated'"],
    "DRPC.txt":["#Discord Fake RPC","This simple python program sets your discord 'Now playing' status to that of a custom (fake) game. Right now, it supports GTA 6 and the Elder Scrolls 6: Hammerfell. Both are unreleased games, so you can use this program to trick your friends.","You will need python 3 to run this program."],
    "Vibe_bot.txt":["#Vibe bot","A simple discord bot, which keeps track of how much users swear. It is far from perfect, and is more a proof of concept. It also served as an introduction to the discord.py library."],
    "SOSF.txt":["#SOSF Faction Website","This was a small project I used to work on with a friend of mine. This site is unfinished and not really polished at all. A lot of images are missing and the content is no longer relevant. Anyways, the site is still available via the link below."],
    "Old_portfolio.txt":["#Old portfolio site","This was one of my first tries at making my portfolio website, but I wasn't happy with how it turned out. It is still online via github. Even though it turned out quite bad, it still was a learning experience. You can visit the site using the link below, or look at the code on my github.","My portfolio started as a static GitHub Pages site in early 2020. Later I swapped to a Flask site to easily be able to add new projects. However, I had trouble figuring out hosting and later switched to another static site (old.scottishpuff.in). I didn't like the design, and the functionality was quite limited. After all this, I made a new site using Flask, starting from the ground up. This time, I hosted it via replit. After the hosting changes on replit, I gave up for some time, before I switched back to GitHUb Pages. This time, I swapped flask for HTML/CSS/JS and kind of recreated Flask templates using Javascript. Frankly, I'm embarrassed that it took me so long to figure out that I could use Javascript instead of Flask."],
    "IntEx.txt":["#Orientation Internship Exercises","In my second to last year of HAVO (highschool-ish?) I had to do an orientation internship. I had to make a few exercises for them, which are hosted on the website linked above, along with other small school projects.","The first exercise of (above) they asked me to make was to recreate an image they provided in html/css/js. It was quite an easy exercise. I also had to recreate a webpage (non responsive), make a simple password generator, recreate a working elevator panel (html/css/js) and finally create a simple alarm webapp. Ultimately, the exercises were a good way to reinforce my knowledge of html/css/js and were not too challenging. Sadly, the internship only lasted three days, so there wasn't a lot of time to get to the harder exerrcises.","I'm currently remaking some of the exercises to see how I have improved, and how I'll do without any time restrictions."],
    "Vesti.txt":["#Vesti parking CLI","I made this project as a intake exercise for my MBO school. It is a simple CLI (?) to interact with a fictional set of parking garages and cars. It is written in python. The github repository is linked below."]
  },
  "About":{
    "AboutMe.txt":[
      "##About Me",
      "Hiya, I'm Naut van der Winden, a software development enthusiast from the Netherlands. But you'll probably know me as 'ScottishPuffin' or 'SirMisterMactavish'. I enjoy programming, gaming and cycling. I'm also rather interested in old (60's - 80's) music. I too like late soviet music (and early russian) from bands like 'Альянс' and 'Кино'.",
      "I'm currently attending Secondary education (HAVO). I've been interested in programming and software development since I was young, and it is my dream to become a software developer. As of now, I am going to attend MBO (equiv. to a junior college education). I can confidently program in HTML/CSS/JS and python3. I am also going to be learning Java and broadening my knowledge of HTML/CSS/JS at the MBO that I'm going to be attending. I also hope to learn more about front-end and web design.",
      "\xa0",
      "Anyways, this site is far form finished, so please check back later!"
    ]
  }
}
setvars={
  "enableVFX":"true",
  "keyPressAudio":"true",
}

const history=[];
var histindex=0;
var curDir = "/";
var helpTexts=[
  "Hi, I'm Naut van der Winden, and this is my portfolio... site... kinda.",
  "I am a software development enthousiast from the Netherlands.",
  "\xa0",
  "You can navigate my 'site' by using the following commands:",
  "cat <file>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0A command to open (text) files",
  "cd <path>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Navigates to the given path",
  "clear\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Clears the screen of all text",
  "help\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Shows this help message",
  "ls\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Shows the contents of the current directory",
  "download <project>\xa0\xa0Downloads project (if available)"
];

function addText(text,i=false,s=false){
  NT=document.createElement("p");
  NT.setAttribute("class", "t");
  if(i){
    NT.setAttribute("class", "t i");
  }
  if(s){
    NT.setAttribute("style", "font-size:"+s+"px;")
  }
  NT.appendChild(document.createTextNode(text));
  document.getElementById("content").appendChild(NT);
  document.getElementById("overlay1").style["height"] = document.documentElement.scrollHeight + "px"
  document.getElementById("overlay2").style["height"] = document.documentElement.scrollHeight + "px"
  document.getElementsByClassName("t")[document.getElementsByClassName("t").length-1].scrollIntoView({block:"end"})
}

function cdEvalute(element){
  if (element == ".." && curDir != "/"){
    curDir="/";
  } else if(element in folders && curDir=="/"){
    curDir="/"+element
  } else {
    addText("Cannot evaluate path '"+element+"'")
  }
}

function evaluate(i){
  history.push(i)
  histindex = history.length;
  args=i.split(" ")
  switch (args[0].toLowerCase()){
    case "download":
      if(args[2]){
        addText("ERROR: Command 'download' doesn't support multiple arguments.")
        break;
      }
      if (args[1]){
        if (downloads[args[1]]){
          
        }
      }else{
        addText("ERROR: Command 'download' needs at least one argument.")
        break;
      }
      break;
    case "cd":
      if(args[2]){
        addText("ERROR: Command 'cd' doesn't support multiple arguments.")
        break;
      }
      if (args[1]){
        a=args[1].split("/")
        a.forEach(element => cdEvalute(element))
      }else{
        addText(curDir)
      }
      break;

    case "ls":  
      if(args[1]){
        addText("ERROR: Command 'ls' doesn't support arguments.")
        break;
      }
      if(curDir == "/"){
        addText("Contents of "+curDir)
        addText("")
        for (const [key, value] of Object.entries(folders)) {
          addText("("+Object.keys(value).length+") "+key)
        }
      }else{
        addText("Contents of "+curDir)
        addText("")
        for (const [key, value] of Object.entries(folders[curDir.split("/")[curDir.split("/").length-1]])) {
          addText("("+value.length+") "+key)
        }
      }
      break;

    case "clear":
      if(args[1]){
        addText("ERROR: Command 'clear' doesn't support arguments.")
        break;
      }
      document.getElementById("content").innerHTML="";
      break;

    case "help":
      if(args[1]){
        addText("ERROR: Command 'help' doesn't support arguments.")
        break;
      }
      addText("PixelOS Help",true);
      helpTexts.forEach(element => addText(element))
      break;

    case "exit":
      window.close();
      break;
      
    case "cat":
      if(args[2]){
        addText("ERROR: Command 'cat' doesn't support multiple arguments.")
        break;
      } else if (args[1]){
        if (folders[curDir.slice(1)] && args[1] in folders[curDir.slice(1)]){
          folders[curDir.slice(1)][args[1]].forEach(element => {
            if (element.startsWith("##")){
              addText(element.slice(2),false,32)
            } else if (element.startsWith("#")){
              addText(element.slice(1),true)
            } else if (element.startsWith("-")){
              addText(element.slice(1),false,8)
            } else {
              addText(element)
            }
          })
        } else {
          addText("ERROR: Invalid file")
        }
      }
      break;

    case "set":
      if(args[3]){
        addText("ERROR: Command 'set' doesn't support more than two arguments.")
        break;
      } else if (args[2]){
        if(setvars[args[1]]){
          setvars[args[1]] = args[2].toLowerCase()
          if(setvars["enableVFX"] == "true"){
            document.getElementById("content").setAttribute("class", "content");
          } else {
            document.getElementById("content").setAttribute("class", "content disabled");
          }
        } else {
          addText("ERROR: Unknown enviormental variable '"+args[1]+"'")
        }
      } else if (args[1]){
        if (setvars[args[1]]){
          addText(setvars[args[1]])
        } else {
          addText("ERROR: Unknown enviormental variable '"+args[1]+"'")
        }
      } else {
        for (var key in setvars){
          addText(key+": "+setvars[key])
        }
      }
      break;
      
    default:
      addText("ERROR: Unknown command '"+args[0].toLowerCase()+"'");
      break;
  }
  
}

function onKeypress(e){
  if(!e.repeat && setvars["keyPressAudio"] == "true"){
    k=new Audio(keyPressAudio[Math.floor(Math.random() * keyPressAudio.length)])
    k.play();
  }
  textTU=document.getElementsByClassName("t")[document.getElementsByClassName("t").length-1]
  keyp=e.key

  if (e.keyCode == 192){
    var startupObj = document.getElementById("startup");
    var startupOverlayObj = document.getElementById("overlay");
    startupOverlayObj.style["animation-name"] = "";
    startupObj.style["animation-name"] = "";
  }
  if(e.keyCode == 13){
    if(textTU.innerHTML.slice(4).length>0){
      evaluate(textTU.innerHTML.slice(4))
      addText(">")    
    }
  }else if(e.keyCode==32){
    textTU.innerHTML += " ";
  }else if(e.keyCode==8){
    if(textTU.innerHTML.length > 4){
      textTU.innerHTML = textTU.innerHTML.substring(0,textTU.innerHTML.length-1);
    }
  }else if(e.keyCode==38){
    if (history.length>0){
      histindex=Math.min(Math.max(histindex-1, 0), history.length-1);
      textTU.innerHTML = ">"+history[histindex];
    }
  }else if(e.keyCode==40){
    if (history.length>0){
      histindex=Math.min(Math.max(histindex+1, 0), history.length-1);
      textTU.innerHTML = ">"+history[histindex];
    }
  }else if(e.key.length==1){
    if (e.shiftKey){
      textTU.innerHTML += keyp;
    } else{
      textTU.innerHTML += keyp.toLowerCase();
    }
  }
}