import bmc from '/bmc-button.png'

function landing() {

  const closeWelcome = () => {
    document.getElementsByClassName("overlay")[0].classList.add("hide");
    // document.getElementById("soundMusic").play()
    // document.getElementById("soundMusic").volume = 0.2
    // document.getElementById("soundWater").play()
    // document.getElementById("soundWater").volume = 0.2
    
  }

  return (
    <div className="overlay">
      <div className="landing">
        <h1>
          WELCOME TO:<br /> 
          THE CURSE OF OAK ISLAND SLOT PROJECT
        </h1>
        <p>The slot machine does not use real money.</p>
        <p>This project is for entertainment purposes only. It does not promote gambling.</p>
        <p>All the rights reserved to the History Channel and Prometheus Entertainment.</p>
        <p>&nbsp;</p>
        <a onClick={closeWelcome} className="btnPlay">PLAY</a>
        <p>Created by <a href="http://lucassacheto.me" className="made-by" rel="noreferrer" target="_blank">Lucas Sacheto</a></p>
        <p>
          <a href="https://www.buymeacoffee.com/lucassacheto" className="bmc" rel="noreferrer" target="_blank"><img src={bmc} /></a>
        </p>
      </div>
    </div>
  );
}

export default landing;