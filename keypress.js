//Started implementing download (16/09)
const keyPressAudio = ['./sounds/key_1.mp3','./sounds/key_2.mp3','./sounds/key_3.mp3'];
const byteSize = str => new Blob([str]).size;
var wd={}
folders={
  "Resume":{},
  "Projects":{
    "CRT.txt":["#CRT Portfolio",
               "This is a small... interactive 'website' I made to touch up on my javscript and css skills.",
               "I'll also use this project as a second portfolio, but it isn't really a finished, polished or user-friendly product.",
               "It was fun making it though.",
               "",
               "The sourcecode is located at: 'https://github.com/WeeScottishPuffin/CRT'"],
    "Saturated.txt":["#Saturated BetterDiscord theme",
                     "This is just a small betterdiscord theme I cooked up.",
                     "It is meant to make discord easier on the eye.",
                     "It isn't approved by the BetterDiscord mod team, so it is only available to download via my github, at: 'https://github.com/WeeScottishPuffin/Saturated'"]
  },
  "About":{
    "AboutMe.txt":[
      "##About Me",
      "Hi, I'm Naut van der Winden, and this is my portfolio... site... kinda.",
      "I am a software development enthousiast from the Netherlands.",
      "I've enjoyed programming from a young age and love working on projects like these.",
      "\xa0",
      "##Skills",
      "I've learned to code from a young age, and am confident in my coding abilities in Python, CSS and HTML.",
      "I am also familiar with other coding languages like Java, Lua and Javascript.",
      "I do not possess any qualifications as of now, as I am currently attending the Havo (Dutch secondary education).",
      "\xa0\xa0",
      "Anyways, this portfolio is far form finished, so please check back later!"
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