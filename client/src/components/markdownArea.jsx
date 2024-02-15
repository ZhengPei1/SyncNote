function MarkdownArea(props){
    return(
        <div id = "markdown" 
        dangerouslySetInnerHTML={{__html : props.markdown}}>
                
        </div>
    )
}

export default MarkdownArea;