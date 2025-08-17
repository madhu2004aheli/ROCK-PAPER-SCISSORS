let usersscore=0;
let computerscore=0;
let move=10;


let choices=document.querySelectorAll(".pic");
let massage=document.querySelector("#move");
let uscore=document.querySelector("#uscore");
let comscore=document.querySelector("#comscore");
let moveleft=document.querySelector("#move2");
let winname=document.querySelector("#winnername");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       let userchoice= choice.getAttribute("id");
       playgame(userchoice);
        updatemoves(); 
    });
});


let playgame=(userchoice)=>{
     let comchoice=computerchoice();
      if(userchoice===comchoice){
        massage.innerHTML="Game was draw"
        massage.style.backgroundColor="black"
        massage.style.color="white"
      }
      else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=comchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=comchoice==="scissors"?false:true;
        }
        else{
            userwin=comchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,comchoice);
        updatescore(userwin);
      }
}


let computerchoice=()=>{
    let options=["rock","paper","scissors"];
    let ranchoice=Math.floor(Math.random()*3);
    return options[ranchoice];
}


let showwinner=(userwin,userchoice,comchoice)=>{
    if(userwin===true){
        massage.innerHTML=`You Win! Your ${userchoice} beats ${comchoice}`;
        massage.style.backgroundColor="greenyellow";
          massage.style.color="black"
    }
    else{
        massage.innerHTML=`You Loose! computer ${comchoice} beats ${userchoice}`;
         massage.style.backgroundColor="orangered";
           massage.style.color="black"
    }
}

let updatescore=(userwin)=>{
    if(userwin===true){
        usersscore++;
        uscore.innerHTML= `${usersscore}`;
    }
    else{
        computerscore++;
        comscore.innerHTML=`${computerscore}`;
    }
}

let updatemoves=()=>{
    move--;
    moveleft.innerHTML=`Move left ${move}`;
    stopgame(move);
}

let stopgame=(move)=>{
        if(move===0){
            choices.forEach(choice=>{
                choice.style.pointerEvents="none";
            });
            winnername();
    }
};

let winnername=()=>{
    if(usersscore === computerscore){
        winname.innerHTML="*Oh No! This match is Draw*";
        winname.style.color="white"
    }
    else if(usersscore > computerscore){
        winname.innerHTML="*Congratulation! You Win this Match*";
         winname.style.color="greenyellow"
    }
    else{
         winname.innerHTML="*Sorry! You loose this Match*";
          winname.style.color="red"
    }
}

let resetbtn=()=>{
     choices.forEach(choice=>{
                choice.style.pointerEvents="auto";
     });
                usersscore=0;
                computerscore=0;
                move=10;

                uscore.innerHTML=0;
                comscore.innerHTML=0;
                moveleft.innerHTML="10 Moves Left";
                massage.innerHTML="Play Your Move";
                massage.style.backgroundColor="transparent";
                winname.innerHTML="";
};