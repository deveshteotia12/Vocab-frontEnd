import React from 'react'
import Words from '../Word/words'
import {connect} from 'react-redux'

class WordList extends React.Component{
    constructor(props)
    {
        super(props);
    }
    componentDidUpdate()
    {
        console.log("Hii Do this")
        console.log(this.props.words.length)
    }
    render()
    {
        const{words,searched}=this.props;
        const filteredWord=words.filter((e)=> e.word.toLowerCase().includes(searched))
 
        return(
             <div className="wordList-Container" >
                 <div className="wordList-SubContainer">
                 {
                     filteredWord.map((e)=><Words data={e}></Words>)
                 }
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    words: state.Data.data,
    searched: state.Data.search
})
export default connect(mapStateToProps,null)(WordList)