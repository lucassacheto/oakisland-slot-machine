

import { useEffect, useState } from 'react'

import './App.css'
import Score from './components/Score'
import Landing from './components/Landing'


import IntroSound from '/src/assets/bgIntro.mp4'
import BgSong from '/src/assets/bgSong.mp4'
import RotateSound from '/src/assets/rotate.mp3'
import BigWin from '/src/assets/bigwin.wav';
import EpicWin from '/src/assets/epicwin.mp4';

import BtnRun from '/src/assets/btnRun.png';

import PirateSorry from '/src/assets/piratesorry.png';

function App() {

  const [credits, setCredits] = useState(9999)
  const [win, setWin] = useState(0)

  // ELEMENTS NAMES TO LOAD THE IMAGES
  const elementsNames = [
    'rick', 'marty', 'craig', 'dan', 'gary', 'alex', 'jack', 'cross', 'pit', 'billy', 'bronze', 'silver', 'gold', 'brooch', 'fiber', 'bones', 'chain', 'map', 'coin', 'logo']
  
  // ELEMENT SCORES/POINTS
  const elementsScores = { 
    rick: '10', 
    marty: '10', 
    craig: '10', 
    dan: '5',
    gary: '50', 
    alex: '5', 
    jack: '5', 
    cross: '4',
    pit: '1', 
    billy: '1', 
    bronze: '1', 
    silver: '3',
    gold: '50', 
    brooch: '4', 
    fiber: '2', 
    bones: '2',
    chain: '2', 
    map: '3', 
    coin: '5', 
    logo: '50' 
  }


  // PRELOAD IMAGES
  window.onload = () => {
    
    const getCol1 = document.getElementById('col1');
    const getCol2 = document.getElementById('col2');
    const getCol3 = document.getElementById('col3');
    const getCol4 = document.getElementById('col4');
    const getCol5 = document.getElementById('col5');

    
    getCol1.innerHTML += 
    '<img src="/imgItems/' + elementsNames[1] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[2] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[3] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[4] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'>';

    getCol2.innerHTML +=
    '<img src="/imgItems/' + elementsNames[5] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[6] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[7] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[8] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'>';

    getCol3.innerHTML +=
    '<img src="/imgItems/' + elementsNames[9] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[10] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[11] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[12] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'>';

    getCol4.innerHTML +=
    '<img src="/imgItems/' + elementsNames[13] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[14] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[15] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[16] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'>';

    getCol5.innerHTML +=
    '<img src="/imgItems/' + elementsNames[17] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[18] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[19] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'> <img src="/imgItems/' + elementsNames[0] + '.jpg" alt='+elementsNames[1]+' class='+elementsNames[1]+'>';
    
  
}


  // RANDOMIZE NUMBER IN 4 ARRAYS 
  function randomize(){
    let items = [];
    for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * 20); // Generate a random number between 0 and 19
        //let randomNumber = 5 // EPIC WIN
        items.push(getName(randomNumber));
    }
    return items;
  }
  
  // GET SPECIFIC NAME FROM ARRAY RANDOMIZED
  function getName(n){
    for (let i = 0; i < elementsNames.length; i++) {
        if (i === n) {
            return elementsNames[i];
        }
    }
  }
  
  // CHECK COLLUMNS ARE EQUAL IN AT LEAST 3 ELEMENTS TO SCORE
  function getPoints(randomCol1, randomCol2, randomCol3, randomCol4, randomCol5){
    
    const getCommon = (one, two) => {
      return one.filter(num => two.includes(num))
    }
    
    const validatePoint = getCommon(randomCol1, randomCol2)
  
    if( validatePoint.length !== 0 ){
      
      // const validatePoint = getCommon(validatePoint , randomCol3)
      //console.log(validatePoint);

      const validatePoint2 = getCommon(validatePoint , randomCol3)
      //console.log(validatePoint2);

      if (validatePoint2.length !== 0) {
        //setWin(elementsScores[validatePoint3[0]])
        //console.log(" WIN ");

        const allNotWin = document.querySelectorAll('.spin img:not(.'+validatePoint2[0]+')');
        allNotWin.forEach(item => {
          item.classList.add('lost');
        });
        //console.log(allNotWin);

        const allWin = document.querySelectorAll('.spin img.'+validatePoint2[0]);
        allWin.forEach(item => {
          const itemName = item.className;
          //console.log( elementsScores[itemName] * allWin.length);
          setWin(elementsScores[itemName] * allWin.length)
          setCredits(credits + elementsScores[itemName] * allWin.length)
        });

      }else{
        console.log("BETTER LUCK NEXT TIME");
      }

      //const validatePoint3 = getCommon(validatePoint2 , randomCol4)
      //console.log(validatePoint3);

      //const validatePoint4 = getCommon(validatePoint3 , randomCol5)
      //console.log(validatePoint4);
  
    }else{
      console.log("BETTER LUCK NEXT TIME");
    }
  
  }
  
  function rotate(slotItems){

    
    //const animated = document.getElementById("rotate");
    const animated = document.getElementById("rotate");
    //console.log(animated);
    animated.addEventListener("animationstart", () => {
      console.log("Animation started");
      
      document.getElementById("bgSong").volume = 0.12;
      document.getElementById("rotateSound").play();

      document.getElementById("btnRun").style.pointerEvents = 'none';
      document.getElementById("btnRun").style.opacity = '0.5';

    });

    animated.classList.toggle("active")

    animated.addEventListener("animationend", () => {
      console.log("Animation ended");
      animated.classList.remove("active")
      
      slotItems.forEach(item => {
        item.classList.remove('animate');
       });

      const listStars = document.querySelectorAll('svg')
      const AllStars = document.querySelectorAll('svg g')
      //console.log(AllStars);
      //console.log(listStars.length);
      listStars.forEach(item => {
        item.style.left = Math.floor(Math.random() * 800) + 'px';
        item.style.top = Math.floor(Math.random() * 500) + 'px';
      });
      AllStars.forEach(item => {
        item.style.animationDuration = Math.random() * 5 + 's';
      });

      document.getElementById("bgSong").volume = 0.10;

      setTimeout(() => {
        document.getElementById("btnRun").style.pointerEvents = 'auto';
        document.getElementById("btnRun").style.opacity = '1';
      }, 800);
      
    });

  }
  
  function run(){

    setWin(0)

    document.getElementById("epicwin").currentTime = 0;
    document.getElementById("epicwin").pause();

    function startSpin() {
      const slotItems = document.querySelectorAll('.spin');
      slotItems.forEach(item => {
       item.classList.add('animate');
      });
      //console.log(slotItems);
      rotate(slotItems)
    }
    startSpin()
    
    let randomCol1 = randomize();
    let randomCol2 = randomize();
    let randomCol3 = randomize();
    let randomCol4 = randomize();
    let randomCol5 = randomize();
    
    const getCol1 = document.getElementById('col1');
    const getCol2 = document.getElementById('col2');
    const getCol3 = document.getElementById('col3');
    const getCol4 = document.getElementById('col4');
    const getCol5 = document.getElementById('col5');
  
    getCol1.innerHTML = ""
    getCol2.innerHTML = "";
    getCol3.innerHTML = "";
    getCol4.innerHTML = "";
    getCol5.innerHTML = "";
  
  
    for (let i = 0; i < 4; i++) {
        getCol1.innerHTML += '<img src="/imgItems/' + randomCol1[i] + '.jpg" alt='+randomCol1[i]+' class='+randomCol1[i]+'>';
        getCol2.innerHTML += '<img src="/imgItems/' + randomCol2[i] + '.jpg" alt='+randomCol2[i]+' class='+randomCol2[i]+'>';
        getCol3.innerHTML += '<img src="/imgItems/' + randomCol3[i] + '.jpg" alt='+randomCol3[i]+' class='+randomCol3[i]+'>';
        getCol4.innerHTML += '<img src="/imgItems/' + randomCol4[i] + '.jpg" alt='+randomCol4[i]+' class='+randomCol4[i]+'>';
        getCol5.innerHTML += '<img src="/imgItems/' + randomCol5[i] + '.jpg" alt='+randomCol4[i]+' class='+randomCol5[i]+'>';
    }
  
    setCredits(credits - 1.0)
    
    getPoints(randomCol1, randomCol2, randomCol3, randomCol4, randomCol5)

  }

  return (
    <>

      <Landing />

      <audio id="introSound" src={IntroSound} loop></audio>
      <audio id="bgSong" src={BgSong} loop></audio>
      <audio id="rotateSound" src={RotateSound}></audio>
      <audio id="bigwin" src={BigWin}></audio>
      <audio id="epicwin" src={EpicWin}></audio>
      

      <div className="windowSize">
      <p><img src={PirateSorry} className="pirate-sorry" /></p>
        <p>PLEASE RESIZE WINDOW FOR BETTER EXPERIENCE</p>
      </div>

      <div className="contentWrapper">
        <div className="bg">

          <div id="display" className="display">
              <div id="col1" className="spin"></div>
              <div id="col2" className="spin"></div>
              <div id="col3" className="spin"></div>
              <div id="col4" className="spin"></div>
              <div id="col5" className="spin"></div>
          </div>

          <a id="btnRun" onClick={run}><img id='rotate' src={BtnRun} /></a>

          <Score credits={credits} win={win}  />

        </div>
      </div>
    </>
  )
}

export default App
