import {marked} from "marked";
import * as DOMPurify from 'dompurify';

const initialText = 
"> type your notes here using Markdown\n" 
+">> like this\n\n" 
+ "*or this*";

const initialMarkdown = marked.parse(initialText);

function Editor(props){
    props.setMarkdown(initialMarkdown);
    return(
        <textarea 
            id = "editor" 
            placeholder="write some notes here..."
            onKeyUp={(e) => handleKeyUp(e, props.setMarkdown)}>
                {initialText}
        </textarea>
    )
}

async function handleKeyUp(e, setMarkdown){
    const html = DOMPurify.sanitize(marked.parse(e.target.value));
    setMarkdown(html);
}

export default Editor;