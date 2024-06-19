"use strict";let timerDisplay=document.querySelector(".timerDisplay"),stopBtn=document.getElementById("stopBtn"),startBtn=document.getElementById("startBtn"),resetBtn=document.getElementById("resetBtn"),msec=0,secs=0,mins=0,timerId=null;function startTimer(){msec++,100==msec&&(msec=0,secs++,60==secs&&(secs=0,mins++));let e=msec<10?`0${msec}`:msec,t=secs<10?`0${secs}`:secs,s=mins<10?`0${mins}`:mins;timerDisplay.innerHTML=`${s} : ${t} : ${e}`}startBtn.addEventListener("click",(function(){null!==timerId&&clearInterval(timerId),timerId=setInterval(startTimer,10)})),stopBtn.addEventListener("click",(function(){clearInterval(timerId)})),resetBtn.addEventListener("click",(function(){clearInterval(timerId),timerDisplay.innerHTML="00 : 00 : 00",msec=secs=mins=0}));