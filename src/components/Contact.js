import './Contact.css'

function Contact(){
    return(
        <div className="Contact">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/3.jpg"/>
            <div class="status">
                <ul>
                    <li class="name">{"nom"}</li>
                    <li class="status-online">{"statut"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact