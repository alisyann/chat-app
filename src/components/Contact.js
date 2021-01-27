import React from 'react'
import "./Contact.css";

class Contact extends React.Component {

    state = {
      online: false,
    };
  

  onOff=() =>{
    const newStatus = !this.state.online
    this.setState({online: newStatus})
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
        <div className="status">
          <h4 className="name">{this.props.name}</h4>
          <span className={this.state.online? "status-online": "status-offline"} onClick={this.onOff}  
          ></span>
          <h5 className="status-text">{this.state.online? 'online': 'offline'}</h5>
          
        </div>
      </div>
    );
  }
}

export default Contact;
