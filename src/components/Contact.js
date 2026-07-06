import LinkedIn from '../assets/linkedin.png';
import Handshake from '../assets/handshake.png';
import Github from '../assets/github.png';


// const contacts = ["LinkedIn", "Handshake", "GitHub", "Instagram"]

function Contact(props) {
    return (
       <>
       <section id="contact">
        <div>
            <h2>{props.data[3]}</h2>
        </div>
        <div className="contactDiv">
            <div className="buttonDiv">
                <a href="https://ucf.joinhandshake.com/profiles/5gen4z" className="contactButtons"><img src={Handshake} alt="Handshakes Logo" style={{ width: '50px' }}/></a>
                <a href="https://www.linkedin.com/in/valentina-gandolfo-126046306/" className="contactButtons"><img src={LinkedIn} alt="LinkedIn Logo" style={{ width: '50px' }}/></a> <br></br>
                <a href="https://github.com/valmg11" className="contactButtons"><img src={Github} alt="Github Logo" style={{ width: '50px' }}/></a> <br></br>
            </div>
        </div>
        </section>
        </>
    );
}

export default Contact;