import React from "react";
import { Link } from "react-router-dom";

const Rights = () => {
  const cardData = [
    {
      id: 1,
      image: "https://res.cloudinary.com/djpqj3nhr/image/upload/v1704871608/ri8mowal2w6h32edhn7m.jpg",
      title: "Right to Education",
      link: "https://en.wikipedia.org/wiki/Right_to_education",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxtQqOi3rw7oiV5adjHujvMV8lpNrNgKQHg&usqp=CAU",
      title: "Right against Child Labour",
      link: "https://en.wikipedia.org/wiki/Child_labour_law",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/djpqj3nhr/image/upload/c_crop,w_244,h_169/v1704867220/images_jlgwgv.jpg",
      title: "Right to Protection",
      link: "https://vikaspedia.in/education/child-rights/child-protection-1/right-to-protection",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/djpqj3nhr/image/upload/v1704880979/r2pvdo6ochs6judupoyh.jpg",
      title: "Right to Identity",
      link: "https://www.humanium.org/en/identity/#:~:text=From%20birth%2C%20each%20individual%20has%20the%20right%20to%20have%20a,the%20eyes%20of%20the%20law.",
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHuGurilUYSkxgrG74niSS-Kxx8ir-KRtG6w&usqp=CAU",
      title: "Right to Participation",
      link: "https://childhub.org/en/child-protection-online-library/fact-sheet-right-participation",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/djpqj3nhr/image/upload/c_crop,w_225,h_155/v1704869737/images_pp04uj.jpg",
      title: "Right to Freedom of Expression",
      link: "https://www.humanium.org/en/fundamental-rights/freedom/",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/djpqj3nhr/image/upload/v1704870018/images_zantn8.jpg",
      title: "Right against Discrimination",
      link: "https://www.unicef.org/reports/rights-denied-discrimination-children",
    },
    {
      id: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ERpFgGhfGCl0661TvtYxXIgXHJpgc9k4yQ&usqp=CAU",
      title: "Right to Equality",
      link: "https://unacademy.com/content/clat/study-material/logical-reasoning/right-to-equality/",
    },
  ];

  return (
    <div className="background75">
    <div className="container mt-4">
      <div className="heading-box text-center mb">
        <h1>KNOW YOUR RIGHTS</h1>
      </div>
      <div className="card75-container">
        {cardData.map((card) => (
          <div key={card.id} className="card75">
            <img
              className="card75-img-top"
              src={card.image}
              alt={card.title}
              style={{ objectFit: "cover", height: "200px", width: "100%" }}
            />
            <div className="card75-body">
              <h5 className="card75-title">{card.title}</h5>
              <Link to={card.link} className="btn btn-outline-warning">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Rights;
