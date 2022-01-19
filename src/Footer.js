import './index.css';

const Footer = () => {
    return ( 
        <section className='footer'>
            <div className="foot" id='foot'>
            <div className="foot1">
                <div className="header1">
                RAMECHAAP <p>SHERPA</p> CONSTRUCTION
                </div>
                <button>GET DIRECTION</button>
            </div>

            <div className="foot2">
                <div className="contact">
                    <div className="cont">
                    <i className="fas fa-phone-alt"></i>
                        <div>
                            <span className='pi'>PHONE</span>
                            <span><a href="tel:977-1-5555555">977-1-5555555</a></span>
                        </div>
                    </div>

                    <div className="cont">
                    <i className="fas fa-envelope"></i>
                        <div>
                            <span className='pi'>EMAIL</span>
                            <span><a href="mailto:info@ramechhapsherpaconstruction.com">info@ramechhapsherpaconstruction.com</a></span>
                        </div>
                    </div>
                    
                    <div className="cont">
                    <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <span className='pi'>LOCATION</span>
                            <span>Mahankal, Kathmandu, Nepal</span>
                        </div>
                    </div>
                </div>

                <div className="links">
                    <div className="same">
                        <h1>Quick Links</h1>
                        <p><a href="">Home</a></p>
                        <p><a href="">About Us</a></p>
                        <p><a href="">Projects</a></p>
                        <p><a href="">Contact</a></p>
                    </div>

                    <div className="same">
                        <h1>Services</h1>
                        <p><a href="">Building Construction</a></p>
                        <p><a href="">Hydropower</a></p>
                        <p><a href="">Irrigation</a></p>
                        <p><a href="">Roads</a></p>
                    </div>

                    <div className="same">
                        <h1>More</h1>
                        <p><a href="">News  Updates</a></p>
                        <p><a href="">Completed Projects</a></p>
                        <p><a href="">Running Projects</a></p>
                        <p><a href="">Testimonials</a></p>
                    </div>
                </div>

            </div>
            <div>
            </div>
        </div>
        <div className="copyright">
            <span>Copyright 2022, Ramechhap Construction. All Rights Reserved</span>
            <span>Designed By: Bidhee</span>
        </div>
        </section>
     );
}
 
export default Footer;