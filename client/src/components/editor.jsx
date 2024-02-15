import axios from 'axios';
import showdown from "showdown";

const converter = new showdown.Converter();

function Editor(props){
    return(
        <textarea 
            id = "editor" 
            placeholder="write some notes here..."
            onKeyUp={(e) => handleKeyUp(e, props.setMarkdown)}>

        </textarea>
    )
}

function handleKeyUp(e, setMarkdown){
    html = converter.makeHtml(e.target.value);
    console.log("www" + html);
    setMarkdown(html);
}

export default Editor;