import React, { useEffect } from 'react';
const About = () => {
  useEffect(() => {
    const categoryBlocks = document.querySelectorAll(".category-block-current");

    categoryBlocks.forEach((block) => {
      block.addEventListener("mouseenter", function () {
        block.style.transform = "scale(1.05)";
      });

      block.addEventListener("mouseleave", function () {
        block.style.transform = "scale(1)";
      });
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      categoryBlocks.forEach((block) => {
        block.removeEventListener("mouseenter", function () {
          block.style.transform = "scale(1.05)";
        });
        block.removeEventListener("mouseleave", function () {
          block.style.transform = "scale(1)";
        });
      });
    };
  }, []);
  return ( 
    <div>
    <section className="about" id="about">
      <div className="auto-container">
        <div className="text-center">
            <h2>ABOUT SASHAKT</h2>
            <p>SASHAKT is a fun, interactive, and engaging gamified platform that educates childern in India about their rights and empowers them to stand for themselves and others.</p>
        </div>

        <div className="category-container">
            <div className="category-block-current">
                <div className="inner-box-01">                                                                                                                  
                    <img src="images/play-section.jpg" alt="play-section" loading="lazy" />
                    <div className="content-box">
                        <h6 className="title"><span style={{ color: '#fff' }}>PLAY</span> section helps the child learn concepts and tracks progress while playing games.</h6>
                    </div>
                </div>
            </div>
            <div className="category-block-current">
                <div className="inner-box-01">
                    <img src="images/See-section.jpg" alt="See-section" loading="lazy" />
                    <div className="content-box">
                        <h6 className="title"><span style={{ color: '#fff' }}>SEE</span> section is loaded with audio-visual tools for better comprehension and holistic development.</h6>
                    </div>
                </div>
            </div>
            <div className="category-block-current">
                <div className="inner-box-01">
                    <img src="images/do-section.jpg" alt="do-section" loading="lazy" />
                    <div className="content-box">
                        <h6 className="title"><span style={{ color: '#fff' }}>DO</span> section consists of Do-it-Yourself activities for constructive engagement while at home.</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>

    <section className="mindful-curriculm" id="toddler program">
        <div className="auto-container mobile-set">
            <div className="row">
                <div className="text-center">
                    <h2 className="titel-h2">Program Features</h2>
                </div>
                
                <div className="top-row">
                    <div className="card55">
                        <div className="image-container">
                            <img src="https://img.freepik.com/free-vector/self-confidence-concept-illustration_114360-6635.jpg" className="card55-img" alt=""/>
                        </div>
                        <div className="card55-body">
                            <h1 className="card55-title">Confidence-Building</h1>
                            <p className="card55-info">Through age-appropriate challenges and encouragement, our program empowers toddlers to take small steps towards independence, fostering a strong sense of self-assurance.</p>
                        </div>
                        <div className="text-below-image">Confidence-Building</div>
                    </div>
    
                    <div className="card55">
                        <div className="image-container">
                            <img src="images/Sensory-Development.jpg" className="card55-img" alt=""/>
                        </div>
                        <div className="card55-body">
                            <h1 className="card55-title">Sensory Development</h1>
                            <p className="card55-info">Engaging sensory activities stimulate your child's senses, aiding in cognitive growth and enhancing their ability to explore the world around them.</p>
                        </div>
                        <div className="text-below-image">Sensory Development</div>
                    </div>
    
                    <div className="card55">
                        <div className="image-container">
                            <img src="https://travelingmochi.files.wordpress.com/2015/04/la_phonics.gif" className="card55-img" alt=""/>
                        </div>
                        <div className="card55-body">
                            <h1 className="card55-title">Linguistic Skills</h1>
                            <p className="card55-info">Our language-rich setting promotes vocabulary expansion and language comprehension, laying the groundwork for strong linguistic skills.</p>
                        </div>
                        <div className="text-below-image">Linguistic Skills</div>
                    </div>
                </div>
    
                <div className="bottom-row">
                    <div className="card55">
                        <div className="image-container">
                            <img src="images/Spatial-Relation.jpg" className="card55-img" alt=""/>
                        </div>
                        <div className="card55-body">
                            <h1 className="card55-title">Spatial Relations</h1>
                            <p className="card55-info">Through guided play and activities, toddlers develop a sense of spatial awareness and object relationships, crucial for cognitive development.</p>
                        </div>
                        <div className="text-below-image">Spatial Relations</div>
                    </div>
    
                    <div className="card55">
                        <div className="image-container">
                            <img src="images/Visual-and.jpg" className="card55-img" alt=""/>
                        </div>
                        <div className="card55-body">
                            <h1 className="card55-title">Visual and Auditory Skills</h1>
                            <p className="card55-info">Our well-rounded curriculum, designed by child development experts, ensures that your toddler thrives physically, cognitively, and socially.</p>
                        </div>
                        <div className="text-below-image">Visual and Auditory Skills</div>
                    </div>
    
                    <div className="card55">
                        <div className="image-container">
                            <img src="images/Fine-Motor-Skills.jpg" className="card55-img" alt=""/>
                        </div>
                        <div className="card55-body">
                            <h1 className="card55-title">Fine Motor Skills</h1>
                            <p className="card55-info">Our carefully designed activities hone fine motor skills, improving hand-eye coordination and dexterity, setting the stage for future academic and life tasks.</p>
                        </div>
                        <div className="text-below-image">Fine Motor Skills</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
   );
}
 
export default About;