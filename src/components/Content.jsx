import GetTo100 from "./getTo100/GetTo100";
import TextEditor from "./textEditor/TextEditor";

function Content(props){
    let display = props.name === "Get To 100" ? <GetTo100 profilePage={props.profilePage}
                                                    newGame={props.newGame}
                                                    setNewGame={props.setNewGame}
                                                    openingScreen={props.openingScreen}
                                                    setOpeningScreen={props.setOpeningScreen}
                                                    setGameBoard={props.setGameBoard}
                                                    gameBoard={props.gameBoard}
                                                    setShowButtons={props.setShowButtons}
                                                    showButtons={props.showButtons}
                                                    setPlayers={props.setPlayers}
                                                    players={props.players}/>
                                                    : <TextEditor />;
    return (
        <main>
            {display}
        </main>
    );
};

export default Content;