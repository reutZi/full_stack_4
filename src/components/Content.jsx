import GetTo100 from "./getTo100/GetTo100";
import TextEditor from "./textEditor/TextEditor";

function Content({name}){
    let display = name === "Get To 100" ? <GetTo100 /> : <TextEditor />;
    return (
        <main>
            {display}
        </main>
    );
};

export default Content;