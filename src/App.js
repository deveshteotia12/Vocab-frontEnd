import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import WordList from './Components/WordList/wordList'
import AddWord from './Components/AddWord/addWord'
import {connect} from 'react-redux'
import './App.css'
class App extends React.Component{
  constructor(props)
  {
    super(props);
  }
  componentDidMount()
  {
       fetch(' https://vocab-pp.herokuapp.com/')
       .then((response)=> response.json())
       .then(json=>this.props.setData(json))
       .then(()=>console.log(this.props.wordData))
       .catch((e)=>console.log(e))
  }
  render()
  {
    return(
   
      <div class="Main">
        <div className="navbar-position">
         <Navbar></Navbar>
         </div>
        <WordList></WordList>
        <AddWord></AddWord>
      </div>
    )
  }
}
const mapStateToProps=(state)=>({
    wordData: state.Data.actualData
})
const mapDispatchToProps=(dispatch)=>({
     setData: (data)=>dispatch({type: 'UPDATE_DATA',payload: data})
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
