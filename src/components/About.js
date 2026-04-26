const aboutInfo = [
    "I'm a Web Development student at the University of Central Florida on track to obtain my Bachlor's degree.", 
    "With my skills, I would love to pursue a career that involves UI/UX Design. I was born and raised in Boca Raton and have always had a strong connection with art and its many forms.",
    "I've always kept music in my life, and I have been involved in various music ensembles since middle school. I currently play the baritone saxophone for the UCF University Band and Video Game Music Ensemble (VGM@UCF).",
    "Some of my prominent skills include HTML, CSS, JavaScript, React, PHP, GitHub, Figma, Canva, Photoshop, and Microsoft 365."
]

function About(props) {
    return (
       <>
       <section id="about">
        <div>
            <h2>{props.data[1]}</h2>
        </div>
        <div className="aboutDiv">
            <div>
                {aboutInfo.map((aboutInfo, index) => (
                    <p key={index}>{aboutInfo}</p>
                ))}
            </div>
        </div>
        </section>
        </>
    );
}

export default About;