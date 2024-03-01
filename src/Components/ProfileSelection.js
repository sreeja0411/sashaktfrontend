import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProfileSelection = () => {
  return (
    <div className="home1-container">
      <div className="back-container">
                <Link to="/loginsignup" className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
      </div>
      <h2 className="h2-text">MAKE IT YOURS</h2>
      <p className="texts-style">
        𝘗𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘻𝘦 𝘺𝘰𝘶𝘳 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦. 𝘌𝘷𝘦𝘳𝘺𝘰𝘯𝘦 𝘤𝘢𝘯 𝘩𝘢𝘷𝘦 𝘵𝘩𝘦𝘪𝘳 𝘰𝘸𝘯 𝘱𝘳𝘰𝘧𝘪𝘭𝘦
      </p>
      <div className="box1-container">
        <Link to="/adults">
          <div className="clickable-box box1">
            <img
              src="https://previews.123rf.com/images/denispc/denispc1903/denispc190300043/120257547-group-of-cartoon-young-children-teenagers.jpg"
              alt="First Box Image"
              className="image-style"
            />
            <h1 className="box1-text">FOR ALL AGES</h1>
          </div>
        </Link>
        <Link to="/kids">
          <div className="clickable-box box2">
            <img
              src="https://images.ctfassets.net/4cd45et68cgf/7wr8uvvWjbTJ55P41XllnA/6df63cb6fde6b9d599abbaa490ccdb79/COCOMELON.jpeg"
              alt="Second Box Image"
              className="image-style"
            />
            <h1 className="box2-text">FOR YOUNGER KIDS</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileSelection;
