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
                    <p>block 2</p>
                    <p>tsuki</p>
                </div>
            </div>
        </section>
        </>
    );
}

export default Intro;