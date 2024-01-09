
import Stars from '/src/assets/stars.svg?react';
import TreasureWin from '/src/assets/treasurechest-win.png';

// This is a game score component. It will display the current score of the game. It will receive the points prop from the App component and display it.

function Score({credits, win}){

    if (win !== 0){

        if (win >= 100) {
            document.getElementById("epicwin").play();
            
        }else if (win >= 10) {
            setTimeout(() => {
                document.getElementById("bigwin").play();
            }, 1000);
        }
    }
    

    return (
        <>
        <div className="score">
            <div className="credits">{credits}</div>
            <div className="win">{win}</div>
        </div>
        {
            win !== 0 ?
                <div className="winMessage"> 
                {
                    win >= 100 ? 
                    <>  
                        {Array(win)
                        .fill(true)
                        .map((item, index) => (
                        <Stars key={index} id={'star'+index} />
                        ))}
                        
                        <img src={TreasureWin} className='treasure' /> 
                        <span className="epic">EPIC WIN <br />{win}</span>
                        </>
                    : win >= 10 ?
                    <>
                        {Array(win)
                            .fill(true)
                            .map((item, index) => (
                                <Stars key={index} id={'star'+index} />
                            ))   
                        }
                        <span className="big">BIG WIN <br />{win}</span>
                        
                        </>
                    : win <= 10 ?
                    <>
                        <span className="nice">NICE {win}</span>
                        </>
                    : null
                }
                </div> 
            : null
        }
        
        </>
        
    )
}

export default Score;

