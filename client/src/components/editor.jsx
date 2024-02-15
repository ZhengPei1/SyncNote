import {marked} from "marked";

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
    const html = marked.parse(e.target.value);
    console.log(html);
    setMarkdown(html);
}

export default Editor;