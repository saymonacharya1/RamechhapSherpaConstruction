import './index.css';

const AboutUs = () => {
    return (
        <section className="about" id='about'>
            <div className="description">
                <h1>About <span>Us</span></h1>
                <p><span>Will make your construction Look Amazing</span></p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quos harum sapiente minima nisi fugiat magnam ratione dolores omnis eum iusto ea reprehenderit? Quisquam qui eaque culpa veritatis architecto? Autem?
                </p>
                <br />
                <button>READ MORE</button>
            </div>

            <div className="imageshape">
                <img src="images\constructionshape.png" alt="" />
            </div>
        </section>
    );
}
 
export default AboutUs;