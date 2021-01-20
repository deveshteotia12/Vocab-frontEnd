import React from 'react'
import './Input.css'
import {connect} from 'react-redux'
class Input extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            word: ''
        }
    }
    handelSubmit=(e)=>{
         e.preventDefault();
         fetch(" https://vocab-pp.herokuapp.com/wordSubmit",{
             method: "POST",
             body: JSON.stringify({
                 word: e.target.word.value
             }),
             headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
         }).then((response)=>response.json())
         .then((data)=> this.props.setData(data))
         .then(()=>this.props.closeModal())
         .catch((e)=> console.log(e))
    }
    render()
    {
        return(
            <div className="BookSubmit">
                <form onSubmit={this.handelSubmit}>
                    <h3>Add To Dictionary</h3>
                    <label style={{display: 'block'}}>Word</label>
                    <input name="word" placeholder="Enter Your Word" value={this.state.word} onChange={(e)=>this.setState({word: e.target.value})}/>
                    <div className="button-Bag">
                        <button type="submit" >Add</button>
                        <button onClick={()=>this.props.closeModal()}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>({
    setData: (data)=>dispatch({type: 'UPDATE_DATA',payload: data})
})
export default connect(null,mapDispatchToProps)(Input);