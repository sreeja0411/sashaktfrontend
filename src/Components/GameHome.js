import React from "react";
import "./gamehome.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const GameHome = () => {
    return ( 
        <div>
            <div className="back-container">
                <Link to="/games" className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
            </div>
        <div className="heading-box">
                Jigsaw Puzzle
            </div>
        <div class="main">
<div class="card1">

<div class="image">
   <img src="https://www.togetherscotland.org.uk/media/1463/re-1-web-livwan-together-illustration-2.jpg?anchor=center&mode=crop&quality=70&width=800&height=480&rnd=132513863240000000"/>
</div>
<div class="title">
 <h1>
Right to Participation</h1>
</div>
<div class="des">
<Link to="/part"><button>Let's Play</button></Link>

</div>
</div>


<div class="card1">

<div class="image">
   <img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2023/5/8/w1200X800/child_labour.jpg"/>
</div>
<div class="title">
 <h1>
Child Labour</h1>
</div>
<div class="des">

<Link to="/lab"><button>Let's Play</button></Link>
</div>
</div>

<div class="card1">

<div class="image">
   <img src="https://img.freepik.com/free-vector/girls-boys-students-with-lockers-noteboard_24640-45516.jpg"/>
</div>
<div class="title">
 <h1>
Right to Education</h1>
</div>
<div class="des">

<Link to="/education"><button>Let's Play</button></Link>
</div>
</div>

</div>
</div>
     );
}
 
export default GameHome;