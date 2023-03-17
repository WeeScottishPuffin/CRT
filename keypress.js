const keypressSounds = ['./sounds/key_1.mp3','./sounds/key_2.mp3','./sounds/key_3.mp3'];
const byteSize = str => new Blob([str]).size;
var wd={}
folders={
  "Resume":{},
  "Projects":{
    "Project1.txt":["test"]
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
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0,,╓╓╦╦φφφφφφ╦╦╓╓╓,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0,,╔φ▒╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠╬▒▒╦╓\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0,╔φ╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠╬▒╦,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0╓φ╬╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▒µ\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0,φ╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▒µ\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0╔╣╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╦\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0╔╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠╠╠╬╠╠╬╠╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╦\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0;╣╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠╩╙░░░░░░░░░░░░░╙╚╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╦\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0φ╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠╩░░░░░░░░░░░░░░░░░░░░░╚╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▒\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0,╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬░░░░░░░░░░░░░░░░░░░░░░░░░╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬µ\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0]╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬░░░░░░░░░░░░░░░░░░░░░░░░░░░╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬ε\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0,╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠╕\xa0\xa0\xa0",
"-\xa0\xa0\xa0║╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬\xa0\xa0\xa0",
"-\xa0\xa0φ╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▒\xa0\xa0",
"-\xa0\xa0╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬ε\xa0",
"-\xa0]╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▒\xa0",
"-\xa0╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬\xa0",
"-\xa0╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬\xa0",
"-\xa0╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╠╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬\xa0",
"-\xa0╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░φ╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬\xa0",
"-\xa0▐╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠▒░░░░░░░░░░░░░░░░░░░░░░░░░░░╠╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬\xa0",
"-\xa0\xa0╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬░░░░░░░░░░░░░░░░░░░░░░░░░╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬Γ\xa0",
"-\xa0\xa0╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▒░░░░░░░░░░░░░░░░░░░░░░░╠╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬\xa0\xa0",
"-\xa0\xa0\xa0╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬░░░░░░░░░░░░░░░░░░░░░╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠⌐\xa0\xa0",
"-\xa0\xa0\xa0\"╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠▒░░░░░░░░░░░░░░░░░φ╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╩\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0╘╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬░░░░░░░░░░░░░░░░░╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╩\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\"╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╩░░░░░░░░░░░░░░░░░╚╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠╩\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0║╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╠╬╙░░░░░░░░░░░░░░░░░░░░░╙╠╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬`\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0╚╠╬╬╬╬╬╬╬╬╬╬╬╬╠╬╩╙░░░░░░░░░░░░░░░░░░░░░░░░░░░╙╚╬╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╩\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0╚╠╬╬╬╬╬╬╬╩╩░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╙╚╚╠╠╬╬╬╬╬╬╬╩\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0╚╬╩╚╙░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╙╙╚╠╠╩\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░Γ\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\"δ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░Γ\"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`\"░░░░░░░░░░░░░░░░░░░░░░░░░░░Γ\"\"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
"-\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\"\"\"\"ΓδΓΓΓΓΓΓΓΓΓ\"\"\"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
      "Anyways, this portfolio is far form finished, so please check back later!"
    ]
  }
}

const history=[];
var histindex=0;
var curDir = "/";
var helpTexts=[
  "Hi, I'm Naut van der Winden, and this is my portfolio... site... kinda.",
  "I am a software development enthousiast from the Netherlands.",
  "\xa0",
  "You can navigate my 'site' by using the following commands:",
  "cat <file>\xa0\xa0\xa0\xa0\xa0\xa0A command to open (text) files",
  "cd <path>\xa0\xa0\xa0\xa0\xa0\xa0\xa0Navigates to the given path",
  "clear\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Clears the screen of all text",
  "help\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Shows this help message",
  "ls\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Shows the contents of the current directory",
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
  window.scrollTo(0,window.innerHeight+16)
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
      }
      if (args[1]){
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
      
    default:
      addText("ERROR: Unknown command '"+args[0].toLowerCase()+"'");
      break;
  }
  
}

function onKeypress(e){
  if(!e.repeat){
    k=new Audio(keypressSounds[Math.floor(Math.random() * keypressSounds.length)])
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
  
  console.log(e.keyCode)
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