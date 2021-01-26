import './Contact.css'

function Contact(props){
    return(
        <div className="Contact">
            <img className="avatar" src={props.avatar}/>
            <div className="status">
                <h4 className="name">{props.name}</h4>
                <span className="status-online"></span>
                <h5 className="status-text">{props.online}</h5>
            </div>
        </div>
    )
}

export default Contact