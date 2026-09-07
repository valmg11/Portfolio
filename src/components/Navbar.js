import Logo from '../assets/logoVG.png';

function Navbar() {
    return (
        <nav>
            <div className="navBar">
                <ul>
                    <li className="home">
                        <a className="navLinks" href="#intro"><img src={Logo} alt="VG Logo" style={{width: '50px', marginTop: '10px' }}/></a>
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