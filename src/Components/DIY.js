import { Link } from 'react-router-dom';

const DIY = () => {
    return ( 
        <section className="activities">
            <h1 className="heading">Origami</h1>
            <div className="box-container">
                <div className="box-button">
                    <Link to="/pikachu" className="card">
                        <div className="image-wrapper">
                            <img src="https://www.origamiway.com/images/pikachu/origami-pikachu.jpg" alt="Pikachu"/>
                        </div>
                        <div className="card-content">
                            <h3>PIKACHU</h3>
                        </div>
                    </Link>
                </div>
                <div className="box-button">
                    <Link to="/frog" className="card">
                        <div className="image-wrapper">
                            <img src="https://www.origamiway.com/images/jumping-frog/origami-jumping-frog.jpg" alt="Jumping Frog"/>
                        </div>
                        <div className="card-content">
                            <h3>JUMPING FROG</h3>
                        </div>
                    </Link>
                </div>
                <div className="box-button">
                    <Link to="/rose" className="card">
                        <div className="image-wrapper">
                            <img src="https://www.origamiway.com/images/rose/origami-rose-instructions.jpg" alt="Swan"/>
                        </div>
                        <div className="card-content">
                            <h3>ROSE</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default DIY;
