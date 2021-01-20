import React from 'react'
import './Complete.styles.css'
class Complete extends React.Component{
    constructor(props)
    {
      super(props);
    }
    render()
    {
        return(
            <div className="completeDetails">
                <div className="wordName">
                    <h2>{this.props.data.word ? this.props.data.word : null}</h2>
                </div>
                 <div className="dull-Details">
                     <p>{this.props.data.wordCategory.text.toUpperCase() ? this.props.data.wordCategory.text.toUpperCase() : null }</p>
                     <p>ORIGIN: {this.props.data.history ? this.props.data.history[0] : null}</p>
                 </div>
                 <div className="Definition">
                     <p>{this.props.data.definition}</p>
                     <ul>
                         <li>{this.props.data.examples ? this.props.data.examples[0].text : null}</li>
                     </ul>
                 </div>
                      {
                          this.props.data.otherDefinition ?  
                          <div className="otherDefinition Definition">
                               <p>{this.props.data.otherDefinition[0].definitions[0]}</p>
                                <ul>
                                    <li>{this.props.data.otherDefinition[0].examples[0].text}</li>
                                </ul>
                          </div>
                          : null
                      }
                 <div class="synonyms">
                     <p style={{fontWeight: 'bolder',marginBottom: '6px'}}>Synonyms:</p>
                    {
                   this.props.data.synonyms?( this.props.data.synonyms.map((e,i)=>i<5 ? <span id={i}>{e.text}<br></br>  </span>: null)) : null
                    } 
                 </div>
                 
            </div> 
        )
    }
}

export default Complete;