const contacts = ["LinkedIn", "Handshake", "GitHub", "Instagram"]

function Contact(props) {
    return (
       <>
       <section id="contact">
        <div>
            <h2>{props.data[3]}</h2>
        </div>
        <div className="contactDiv">
            <div className="buttonDiv">
                <a href="https://www.linkedin.com/in/valentina-gandolfo-126046306/" className="contactButtons">{contacts[0]}</a> <br></br>
                <a href="https://ucf.joinhandshake.com/profiles/5gen4z" className="contactButtons">{contacts[1]}</a>
            </div>
            <div className="buttonDiv">
                <a href="https://github.com/valmg11" className="contactButtons">{contacts[2]}</a> <br></br>
                <a href="https://www.instagram.com/valmgandolfo/" className="contactButtons">{contacts[3]}</a>
            </div>
        </div>
        </section>
        </>
    );
}

export default Contact;