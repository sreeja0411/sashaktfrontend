import { Link } from 'react-router-dom';

const Activities = () => {
    return ( 
        <section className="activities" id="activities">
    
    <h1 className="heading">activities</h1>

    <div className="box-container">

        <button className="box-button">
            <Link to="/diy">
                <div className="box">
                    <img src="images/Fun-zone-activities.jpg" alt=""/>
                    <h3>DIY Activities</h3>
                </div>
            </Link>
        </button>

        <button className="box-button">
            <Link to="/see">
                <div className="box">
                    <img src="images/video-visuals.jpg" alt=""/>
                    <h3>video visuals</h3>
                </div>
            </Link>
        </button>

        <button className="box-button">
            <Link to="/games">
                <div className="box">
                    <img src="images/Interactive-games.jpg" alt=""/>
                    <h3>interactive games</h3>
                </div>
            </Link>
        </button>

        <button className="box-button">
            <Link to="/read">
                <div className="box">
                    <img src="images/Read-along-stories.jpg" alt=""/>
                    <h3>read along stories</h3>
                </div>
            </Link>
        </button>
    </div>
</section>
     );
}
 
export default Activities;