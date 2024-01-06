


// This is a game score component. It will display the current score of the game. It will receive the points prop from the App component and display it.

function Score({credits, win}){
    return (
        
        <div className="score">
            <div className="credits">{credits}</div>
            <div className="win">{win}</div>
        </div>
        
    )
}

export default Score;