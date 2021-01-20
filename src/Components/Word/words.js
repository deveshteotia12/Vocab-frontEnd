import React from 'react'
import Modal from 'react-modal'
import Complete from '../completeWord/Complete'
import CloseIcon from '@material-ui/icons/Close';


import "./word.css";

class Words extends React.Component{
    constructor(props)
    {
       super(props);
       this.state={
           isOpen: false
       }
    }
    componentDidMount()
    {
        Modal.setAppElement('body')
    }
    openModal=()=>{
        this.setState({isOpen: true})
    }
    closeModal=()=>{
        this.setState({isOpen: false})
    }
    customStyles = {
        
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              
             backgroundColor: 'rgba(255, 255, 255, 1)'
            },
            content: {
              position: 'absolute',
               top: '0px',
              left: '0px',
              right: '0px',
              bottom: '0px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          
     };
    render()
    {
        return(
           <div className="wordContaine-L">
            <div className="wordContainer" onClick={this.openModal}>
                <h3>{this.props.data.word}</h3>
                <p>{this.props.data.definition}</p>
            </div>
            <Modal isOpen={this.state.isOpen} onRequestClose={this.closeModal} style={this.customStyles}>
                <Complete data={this.props.data}></Complete>
                <span className="ModalClose"><CloseIcon onClick={this.closeModal}></CloseIcon></span>
            </Modal>
            
            </div>
        )
    }
}

export default Words