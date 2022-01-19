
import './index.css';
import Navbar from './Navbar';
import Banner from './Banner';
import OSC from './OSC';
import OE from './OE';
import AboutUs from './AboutUs';
import OurProjects from './OurProjects';
import Footer from './Footer';

const Home = () => {
    return ( 
        
        <div id='home' className='home'>
            <Navbar /> 
            <Banner /> 
            <OSC />
            <OE />
            <AboutUs />
            <OurProjects />
            <Footer />
        </div>

     );
}
 
export default Home;
