import GetTo100 from "./getTo100/GetTo100";
import TextEditor from "./textEditor/TextEditor";

function Content({name, profilePage, newGame, setNewGame, openingScreen, setOpeningScreen}){
    let display = name === "Get To 100" ? <GetTo100 profilePage={profilePage}
                                                    newGame={newGame}
                                                    setNewGame={setNewGame}
                                                    openingScreen={openingScreen}
                                                    setOpeningScreen={setOpeningScreen}/> : <TextEditor />;
    return (
        <main>
            {display}
        </main>
    );
};

export default Content;