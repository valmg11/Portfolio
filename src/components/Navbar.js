function Navbar() {
    return (
        <nav>
            <div className="navBar">
                <ul>
                    <li className="home">
                        <a className="navLinks" href="#intro">Val</a>
                    </li>
                </ul>
                <ul>
                     <li>
                        <a className="navLinks" href="#about">About</a>
                    </li>
                    <li>
                        <a className="navLinks" href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className="navLinks" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;