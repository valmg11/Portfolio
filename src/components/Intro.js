import headshot from '../assets/headshot.jpg'

function Intro(props) {
    return (
        <>
        <section id="intro">
            <div className="introScreen">
                <h2>{props.data[0]}</h2>
            </div>
            <div className="introDiv">
                <div>
                    <p>Welcome to my portfolio!</p>
                    <p>I'm a web developer <br></br>based in Orlando, FL</p>
                </div>
                <div>
                    <img className="headshot" src={headshot} alt="my headshot"/>
                </div>
            </div>
        </section>
        </>
    );
}

export default Intro;