var UserRoll;
var comp;
userScore=0;
computerScore=0;
var draw=0;


function rock(){
 UserRoll=document.getElementById("u").innerHTML= "Rock";
comp=getComputerChoice();
// alert(comp);

// alert("you chose" +UserRoll+ "computer chose" +comp);
document.getElementById("status").innerHTML= "User Choose "+"<b>" + UserRoll + "</b>"+" " + "Computer Choose " +"<b>" + comp +"</b>";  

Match();

}


function paper(){
    UserRoll=document.getElementById("u").innerHTML= "Paper";

    comp=getComputerChoice();
    // alert("you chose" +UserRoll+ "computer chose" +comp);
    document.getElementById("status").innerHTML= "User Choose " +"<b>" + UserRoll + "</b>"+" " + "Computer Choose " + "<b>" + comp +"</b>";  
    Match();

    }
    

function scissors(){
 UserRoll= document.getElementById("u").innerHTML= "Scissors";

 comp=getComputerChoice();
    
document.getElementById("status").innerHTML= "User Choose " +"<b>" + UserRoll + "</b>"+" " + "Computer Choose " + "<b>" + comp +"</b>";  
Match(); 

}

function Match(){
// alert(UserRoll +" "+comp);
    if(UserRoll === comp)
{
    draw++;
    document.getElementById("DrawScore").innerHTML=draw;
    document.getElementById("result").innerHTML="<b>DRAW</b>" ;

    document.getElementById("user").innerHTML=" ";
    document.getElementById("computer").innerHTML=""; 
    document.getElementById("DrawScore").style.color = "yellow";
    // document.getElementById("draw-gif").innerHTML= "" +"<img src=img/draw.gif>";

  

}


 else if(UserRoll === "Rock")
{
    if(comp === "Paper"){
   
        computerScore++;
        document.getElementById("CompScore").innerHTML=computerScore;
      
        document.getElementById("user").innerHTML="YOU LOST" +"<img src=img/useranger.gif class=giph-lose>";
    document.getElementById("result").innerHTML="";
        
        document.getElementById("computer").innerHTML=                "Computer Wins" +"<img src=img/comgiph.gif class=computerGif>"; 

        document.getElementById("useScore").style.color = "red";

document.getElementById("CompScore").style.color = "Green";
        



        // document.getElementById("computer").innerHTML=                "Computer Wins" + compw; 

    }

    else if(comp === "Scissors"){
       
      

        userScore++;
        document.getElementById("useScore").innerHTML=userScore;
        document.getElementById("user").innerHTML="User Wins" + "<img src=img/user.gif class=giph-lose>";
        document.getElementById("computer").innerHTML="Computer Lost" +"<img src=img/comploss.gif class=compgif>";
        document.getElementById("result").innerHTML="";
        document.getElementById("useScore").style.color = "Green";
document.getElementById("CompScore").style.color = "red";


    }
}

else if(UserRoll === "Paper"){
        if(comp === "Rock"){

     
            userScore++;
            document.getElementById("useScore").innerHTML=userScore;
        document.getElementById("computer").innerHTML="Computer Lost" +"<img src=img/comploss.gif  class=compgif>";
        document.getElementById("result").innerHTML="";

            document.getElementById("user").innerHTML="User Wins" + "<img src=img/user.gif class=giph-lose>";
        document.getElementById("useScore").style.color = "Green";
        document.getElementById("CompScore").style.color = "red";


      
        }
        else if(comp === "Scissors"){

            computerScore++;
           
            document.getElementById("CompScore").innerHTML=computerScore;
            document.getElementById("user").innerHTML="YOU LOST" +"<img src=img/userangry.gif class=giph-lose>";
            document.getElementById("result").innerHTML="";
            document.getElementById("CompScore").style.color = "Green";

            document.getElementById("computer").innerHTML="Computer Wins" +"<img src=img/comgiph.gif class=computerGif>";
        document.getElementById("useScore").style.color = "red";

        // document.getElementById("computer").innerHTML=                "Computer Wins" +compw; 




        }

}
else if (UserRoll === "Scissors"){
        if(comp === "Rock" ){

            computerScore++;
            document.getElementById("CompScore").innerHTML=computerScore;
            document.getElementById("user").innerHTML="YOU LOST" +"<img src=img/userangry.gif class=giph-lose>";
            document.getElementById("result").innerHTML="";
            document.getElementById("CompScore").style.color = "Green";

            document.getElementById("computer").innerHTML="Computer Wins" +"<img src=img/comgiph.gif class=computerGif>";
        document.getElementById("useScore").style.color = "red";

        // document.getElementById("computer").innerHTML=                "Computer Wins" +compw; 

  
        }
        else if(comp === "Paper"){

          
            userScore++;
            document.getElementById("useScore").innerHTML=userScore;
            document.getElementById("result").innerHTML="";

            document.getElementById("computer").innerHTML="Computer Lost" +"<img src=img/comploss.gif  class=compgif>";

            document.getElementById("user").innerHTML="User Wins" + "<img src=img/userwin.gif class=usergif>";
        document.getElementById("useScore").style.color = "green";
document.getElementById("CompScore").style.color = "red";
        



        }


}
else
{
    alert("print mistake");
}






}

function getComputerChoice() {
   let compchoice= Math.random();
//    alert("comp : " +compchoice);
    var plays = ['Rock', 'Paper', 'Scissors'];
    var Computerchoice =plays[Math.floor( compchoice*plays.length)];
  
return Computerchoice;
  }




  function resetting(){

    computerScore=0;
    userScore=0;
    draw=0;
document.getElementById("useScore").innerHTML=0;
document.getElementById("CompScore").innerHTML=0;
document.getElementById("DrawScore").innerHTML=0;
document.getElementById("DrawScore").innerHTML=0;

document.getElementById("user").innerHTML="";

document.getElementById("computer").innerHTML="";
document.getElementById("status").innerHTML="";


    // alert(computerScore,userScore);

    
  }
