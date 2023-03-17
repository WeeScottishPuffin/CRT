const kps = [new Audio('./sounds/key_1.mp3'),new Audio('./sounds/key_2.mp3'),new Audio('./sounds/key_3.mp3')];

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


function startup() {
  setTimeout(() => { startSeq() }, 1000);
}

function startSeq() {
  var startupObj = document.getElementById("startup");
  var startupOverlayObj = document.getElementById("overlay");
  startupOverlayObj.style["animation-name"] = "startupOverlay";
  startupObj.style["animation-name"] = "startup";
  setTimeout(() => { startSeqText() }, 2000);
}

function startSeqText() {
  var contentObj = document.getElementById("content");
  var startTexts = Array.from(document.getElementsByClassName("t"));
  startTexts.forEach(element => element.style.opacity = 0)
  var bootText = document.getElementsByClassName("boot")[0];
  bootText.style.opacity = 1;
  bootText.setAttribute("class","boot start")
  contentObj.style.display = "flex";
  setTimeout(() => { seqEnd() }, 10000);
  
}

function onKeypressOld(e){
  kps[Math.floor(Math.random() * kps.length)].play();
  if (e.key=="y"){
    document.documentElement.requestFullscreen();
    document.body.setAttribute("onkeydown","onKeypress(event)")
    NT=document.createElement("p");
    NT.setAttribute("class", "t");
    NT.appendChild(document.createTextNode(">"));
    document.getElementById("content").appendChild(NT);
    document.getElementById("f").innerHTML="Type 'help' to get help with commands.";
  } else if (e.key=="n") {
    document.body.setAttribute("onkeydown","onKeypress(event)")
    NT=document.createElement("p");
    NT.setAttribute("class", "t");
    NT.appendChild(document.createTextNode(">"));
    document.getElementById("content").appendChild(NT);
    document.getElementById("f").innerHTML="Type 'help' to get help with commands.";
  }
}

function seqEnd() {
  removeElementsByClass("boot");
  var startTexts = Array.from(document.getElementsByClassName("t"));
  document.body.setAttribute("onkeydown","onKeypressOld(event)")
  startTexts.forEach(element => element.style.opacity = 1)
}