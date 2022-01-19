import './index.css'

const Navbar = () => {
    return (
        <div className='navbar'>
        <nav>
            <div className="header1">
            RAMECHAAP <p>SHERPA</p> CONSTRUCTION
            </div>
            
            <div className="header2">
                <div className="info">
                    <div className="infocontact">
                        <p><span>Phone:</span><a href="tel:01-5555555">01-5555555</a></p>
                        <p><span>Email:</span><a href="mailto:info@ramechhapconstruction.com">info@ramechhapconstruction.com</a></p>
                    </div>

                    <div className="infosocial">
                    <p><a href="facebook.com"><i className="fab fa-facebook-f"></i></a></p>
                    <p><a href="instagram.com"><i className="fab fa-instagram"></i></a></p>
                    <p><a href="youtube.com"><i className="fab fa-youtube"></i></a></p>
                    </div>
                </div>

                <div className="pages">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT US</a></li>
                    <li><a href="#ourexpertise">SERVICES</a></li>
                    <li><a href="#ourprojects">PROJECT</a></li>
                    <li><a href="">OUR TEAM</a></li>
                    <li><a href="#ourprojects">GALLERY</a></li>
                    <li><a href="#foot">CONTACT US</a></li>
                </div>
            </div>
        </nav>
        </div> 
     );
}
 
export default Navbar;