function Navbar() {
    return (
        <nav>
            <div className="navBar">
                <ul>
                    <li className="home">
                        <a className="nav" href="#intro">Val</a>
                    </li>
                </ul>
                <ul>
                     <li>
                        <a className="nav" href="#about">About</a>
                    </li>
                    <li>
                        <a className="nav" href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className="nav" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;