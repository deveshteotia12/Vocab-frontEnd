import React from 'react'
import Modal from 'react-modal'
import Input from '../InputWord/Input'
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './addWord.css'
class AddWord extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            isOpen: false
        }
    }
    customStyles = {
        
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(211, 211, 211, 0.4)',
          
        },
        content: {
          position: 'absolute',
          top: '30vh',
          left: '15vw',
          right: '15vw',
          bottom: '30vh',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
    };
    componentDidMount=()=>{
        console.log("Hii I got Mounted")
    }
    openModal=()=>{
        this.setState({isOpen: true})
    }
    closeModal=()=>{
        this.setState({isOpen: false})
    }
    render()
    {
        return(
            <div>
                <span className="addThis"><AddCircleIcon onClick={this.openModal} fontSize="large" style={{color: '#720D5D'}}></AddCircleIcon></span>
                <Modal isOpen={this.state.isOpen} onRequestClose={this.closeModal} style={this.customStyles}>
                    <Input closeModal={this.closeModal}></Input>
               </Modal>
            </div>

        )
    }
}

export default AddWord;