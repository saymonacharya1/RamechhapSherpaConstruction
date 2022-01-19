import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './index.css';


const CustomTab = ({ children }) => (
    <Tab>
      <h1 className='title'>{children}</h1>
    </Tab>
  );
  
  CustomTab.tabsRole = 'Tab';

const OurProjects = () => {
    return (
        <section className="ourprojects" id='ourprojects'>
            <h1>Our <span>Projects</span></h1>

            <Tabs>
                <TabList className="projectbutton">
                    <CustomTab>ALL</CustomTab>
                    <CustomTab>RUNNING PROJECTS</CustomTab>
                    <CustomTab>DELIVERED PROJECTS</CustomTab>
                </TabList>

                <TabPanel>
                <div className="projectimages" label="All">
                <img id='1' src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c0077cc31358e5b43383ffc%2F0x0.jpg" alt="" />
                <img id='2' src="https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg" alt="" />
                <img id='3' src="https://media.istockphoto.com/photos/construction-site-view-with-tower-crane-picture-id940251778?k=20&m=940251778&s=612x612&w=0&h=bV_JpVkR4NDwsTzNffJPyhhPfmqzUTiJLi9OfodjiCY=" alt="" />
                <img id='4' src="https://media.istockphoto.com/photos/professional-engineer-architect-worker-with-protective-helmet-and-picture-id1041465228?k=20&m=1041465228&s=612x612&w=0&h=0lbYwwD2R35MRUzDw7IKZyTVEs7CDxLxdlb8fs3EQmM=" alt="" />
                <img id='5' src="https://www.designingbuildings.co.uk/w/images/1/1d/Offsiteconstruction.jpg" alt="" />            
                <img id='6' src="https://assets-news.housing.com/news/wp-content/uploads/2021/03/08191855/All-about-the-Bihar-State-Building-Construction-Corporation-Limited-BSBCCL-FB-1200x700-compressed.jpg" alt="" />
                <img id='7' src="https://media.istockphoto.com/photos/delivering-quality-construction-for-a-quality-lifestyle-picture-id1297780288?b=1&k=20&m=1297780288&s=170667a&w=0&h=NDdDs9BBGULLwYUDUt1AjIOroHuwmFY9N6ZEDAYV7sE=" alt="" />
                <img id='8' src="https://hunter-water.imgix.net/assets/src/uploads/images/Save-water/In-business/13825372_Building_Developing_Large.jpg?auto=compress%2C%20format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&q=80" alt="" />                
                </div>
                </TabPanel>

                <TabPanel>
                <div className="projectimages" label="All">
                <img id='2' src="https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg" alt="" />
                <img id='3' src="https://media.istockphoto.com/photos/construction-site-view-with-tower-crane-picture-id940251778?k=20&m=940251778&s=612x612&w=0&h=bV_JpVkR4NDwsTzNffJPyhhPfmqzUTiJLi9OfodjiCY=" alt="" />
                <img id='4' src="https://media.istockphoto.com/photos/professional-engineer-architect-worker-with-protective-helmet-and-picture-id1041465228?k=20&m=1041465228&s=612x612&w=0&h=0lbYwwD2R35MRUzDw7IKZyTVEs7CDxLxdlb8fs3EQmM=" alt="" />
                </div>
                </TabPanel>

                <TabPanel>
                <div className="projectimages" label="All">
                <img id='2' src="https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg" alt="" />
                <img id='4' src="https://media.istockphoto.com/photos/professional-engineer-architect-worker-with-protective-helmet-and-picture-id1041465228?k=20&m=1041465228&s=612x612&w=0&h=0lbYwwD2R35MRUzDw7IKZyTVEs7CDxLxdlb8fs3EQmM=" alt="" />
                <img id='5' src="https://www.designingbuildings.co.uk/w/images/1/1d/Offsiteconstruction.jpg" alt="" />            
                <img id='7' src="https://media.istockphoto.com/photos/delivering-quality-construction-for-a-quality-lifestyle-picture-id1297780288?b=1&k=20&m=1297780288&s=170667a&w=0&h=NDdDs9BBGULLwYUDUt1AjIOroHuwmFY9N6ZEDAYV7sE=" alt="" />
                <img id='8' src="https://hunter-water.imgix.net/assets/src/uploads/images/Save-water/In-business/13825372_Building_Developing_Large.jpg?auto=compress%2C%20format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&q=80" alt="" />                
                </div>
                </TabPanel>
            </Tabs>
        </section>
        
    );
}
 
export default OurProjects;