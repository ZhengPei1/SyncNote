import Editor from "./components/editor.jsx"
import MarkdownArea from "./components/markdownArea.jsx"
import {useState} from "react";

function App() {
  

  const [markdown, setMarkdown] = useState("");
  return (
    <div id = "container">
      <div id = "heading">h</div>
      <Editor setMarkdown = {setMarkdown}></Editor>
      <MarkdownArea markdown = {markdown}></MarkdownArea>
    </div>
  )
}

export default App;