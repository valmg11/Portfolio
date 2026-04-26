function About(props) {
    return (
       <>
       <section id="about">
        <div>
            <h2>{props.data[1]}</h2>
        </div>
        <div className="aboutDiv">
            <div>
                <p>I'm a Web Development student at the University of Central Florida <br></br>on track to obtain my Bachlor's degree.</p>
                <p>I'm passionate about designing and music, and would love to obtain a role in the future in UI/UX design.</p>
            </div>
            {/* <div>
                <p>block 2</p>
                <p>tsuki</p>
            </div> */}
        </div>
        </section>
        </>
    );
}

export default About;