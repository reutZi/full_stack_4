import GetTo100 from "./GetTo100";
import TextEditor from "./TextEditor";

function Content({name}){
    let display = name === "Get To 100" ? <GetTo100 /> : <TextEditor />;
    return (
        <main>
            {display}
        </main>
    );
};

export default Content;