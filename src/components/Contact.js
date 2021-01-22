import './Contact.css'

function Contact(){
    return(
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/3.jpg"/>
            <div className="status">
                <h4 className="name">{"nom"}</h4>
                <span className="status-online"></span>
                <h5 className="status-text">{"Online"}</h5>
            </div>
        </div>
    )
}

export default Contact