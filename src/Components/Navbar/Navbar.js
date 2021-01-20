import React from 'react'
import "./Navbar.css"
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import {connect} from 'react-redux'
class Navbar extends React.Component{
    constructor()
    {
        super();
        this.state={
            searchState: false,
            search: ''
        }
    }
    render()
    {
    return(
        <div className="nav-largeContainer">
            {
                this.state.searchState===true ?
                <div className="Search-Bar">
                    <input placeholder="Search Your Word" value={this.props.searched} onChange={(e)=>{this.props.Search(e.target.value)}}></input>
                    <span className="Icons"><CloseIcon  onClick={()=>{this.setState({searchState: false}); this.props.Search('')}}></CloseIcon></span>
                </div>
                :
                <div className="nav-Container">
                    <div className="nav-Heading">
                        <h2>Vocabulary</h2>
                    </div>
                    <div className="word-search"> 
                        <span className="Icons"><SearchIcon onClick={()=>this.setState({searchState: true})}></SearchIcon></span>
                    </div>
                </div>
            }
            <div className="navBottom">
                 <span>WordList</span>
            </div>
        </div>
    )
    }
}
const mapDispatchToProps=(dispatch)=>({
  Search: (data)=>dispatch({type: 'SEARCH_DATA',payload: data})
})
const mapStateToProps=(state)=>({
     searched: state.Data.search
})
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);