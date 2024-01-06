

import { useState } from 'react'

import './App.css'
import Score from './components/Score'



function App() {


  const [credits, setCredits] = useState(9999)
  const [win, setWin] = useState(0)

  const elementsNames = [
    'rick', 'marty', 'craig', 'dan', 'gary', 'alex', 'jack', 'cross', 'pit', 'billy', 'bronze', 'silver', 'gold', 'brooch', 'fiber', 'bones', 'chain', 'map', 'coin', 'logo']
  
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
  
  
  function randomize(){
  
    let items = [];
    for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * 20); // Generate a random number between 0 and 19
        items.push(getName(randomNumber));
        
    }
    return items;
  }
  
  function getName(n){
    for (let i = 0; i < elementsNames.length; i++) {
        if (i === n) {
            return elementsNames[i];
        }
    }
  }
  
  function getPoints(randomCol1, randomCol2, randomCol3, randomCol4, randomCol5){
    
    const getCommon = (one, two) => {
      return one.filter(num => two.includes(num))
    }
    
    console.log(randomCol1);
    const validatePoint = getCommon(randomCol1, randomCol2)
  
    if( validatePoint.length !== 0 ){
      
      // const validatePoint = getCommon(validatePoint , randomCol3)
      console.log(validatePoint);

      const validatePoint2 = getCommon(validatePoint , randomCol3)
      console.log(validatePoint2);

      const validatePoint3 = getCommon(validatePoint2 , randomCol4)
      console.log(validatePoint3);

      const validatePoint4 = getCommon(validatePoint3 , randomCol5)
      console.log(validatePoint4);

      // console.log(randomCol3);
      //console.log(elementsScores[validatePoint[0]]);
  
    }else{
      console.log("no");
    }
  
  }
  
  function rotate(slotItems){
    
    const animated = document.getElementById("rotate");
    console.log(animated);
    animated.addEventListener("animationstart", () => {
      console.log("Animation started");
    });

    animated.classList.toggle("active")
    

    animated.addEventListener("animationend", () => {
      console.log("Animation ended");
      animated.classList.remove("active")
      
      slotItems.forEach(item => {
        item.classList.remove('animate');
       });

    });
 
  }
  
  function run(){

    let randomCol1 = randomize();
    let randomCol2 = randomize();
    let randomCol3 = randomize();
    let randomCol4 = randomize();
    let randomCol5 = randomize();
  
    getPoints(randomCol1, randomCol2, randomCol3, randomCol4, randomCol5)
  
    // console.log(randomCol1);
    // console.log(randomCol2);
    // console.log(randomCol3);
    // console.log(randomCol4);
    // console.log(randomCol5);
  
    const getCol1 = document.getElementById('col1');
    const getCol2 = document.getElementById('col2');
    const getCol3 = document.getElementById('col3');
    const getCol4 = document.getElementById('col4');
    const getCol5 = document.getElementById('col5');
  
    
  
    function startSpin() {
      const slotItems = document.querySelectorAll('.spin');
      slotItems.forEach(item => {
       item.classList.add('animate');
      });
      console.log(slotItems);
      rotate(slotItems)
    }
    
  
    getCol1.innerHTML = "";
    getCol2.innerHTML = "";
    getCol3.innerHTML = "";
    getCol4.innerHTML = "";
    getCol5.innerHTML = "";

    startSpin()
  
    
    // document.getElementById("col1").className = "animate";
    // document.getElementById("col2").className = "animate";
    // document.getElementById("col3").className = "animate";
    // document.getElementById("col4").className = "animate";
    // document.getElementById("col5").className = "animate";
  
    for (let i = 0; i < 4; i++) {
        getCol1.innerHTML += '<img src="/public/imgItems/' + randomCol1[i] + '.jpg" alt='+randomCol1[i]+'>';
        getCol2.innerHTML += '<img src="/public/imgItems/' + randomCol2[i] + '.jpg" alt='+randomCol1[i]+'>';
        getCol3.innerHTML += '<img src="/public/imgItems/' + randomCol3[i] + '.jpg" alt='+randomCol1[i]+'>';
        getCol4.innerHTML += '<img src="/public/imgItems/' + randomCol4[i] + '.jpg" alt='+randomCol1[i]+'>';
        getCol5.innerHTML += '<img src="/public/imgItems/' + randomCol5[i] + '.jpg" alt='+randomCol1[i]+'>';
    }
  
    setCredits(credits - 1.0 )
    
  }

  return (
    <>

      <div className="bg">

        <div id="display" className="display">
            <div id="col1" className="spin"></div>
            <div id="col2" className="spin"></div>
            <div id="col3" className="spin"></div>
            <div id="col4" className="spin"></div>
            <div id="col5" className="spin"></div>
        </div>

        <a id="btnRun" onClick={run}><img id='rotate' src='/public/btnRun.png' /></a>

        <Score credits={credits} win={win}  />

      </div>
    </>
  )
}

export default App
