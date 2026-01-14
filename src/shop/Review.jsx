import React, { useState } from 'react'
import Ratting from '../components/Ratting';

const reviwtitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];


const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);
    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
                <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Reviews 4</li>
            </ul>

            {/* Description and Review Content ---  */}
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                {/* Review Showing part */}
                <div className="review-showing">
                    <ul className="content lab-ul">
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className='post-thumb'>
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className="entry-content">
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    {/* Add Review field - */}
                    <div className="client-review">
                        <div className="review-form">
                            <div className='review-title'>
                                <h5>{reviwtitle}</h5>
                            </div>
                            <form action="action" className="row">
                                <div className="col-md-4 col-12">
                                    <input type="text" name="name" id="name" placeholder="Full Name *" />
                                </div>
                                <div className="col-md-4 col-12">
                                    <input type="email" name="email" id="email" placeholder="Your Email *" />
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="rating">
                                        <span className='me-1'>Your Rating </span>
                                        <Ratting />
                                    </div>
                                </div>
                                <div classname="col-md-12 col-12">
                                    <textarea name="message" id="message" rows="7" placeholder="Type Your Message Here..."></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="default-button">
                                        <span>Submit Review </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                {/* Description showing Part --- */}
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad inventore, modi ea aliquam quos vitae cupiditate dicta ducimus nemo sed autem nobis quo placeat, iure magni unde fuga sequi voluptatum tempora totam dolores esse impedit adipisci. Odio totam, error minus accusamus vitae voluptatum alias delectus deserunt. Ex.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum at, laudantium nostrum consequatur iste fugit soluta, blanditiis doloremque dolore et dolorem asperiores voluptate inventore eos illo nesciunt velit dignissimos ratione, accusantium quis exercitationem assumenda voluptatum minima veritatis? Soluta, odio aut.</p>
                    <div className="post-item">
                        <div className="post-thumb">
                            <img src="01.jpg" alt="" />
                        </div>
                        <div className="post-content"> 
                                <ul className="lab-ul"> 
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad inventore </li>
                                    <li>Lorem ipsum dolor sit amet c elit. Harum ad inventore </li>
                                    <li>Lorem ipsum dolor sit amet consectetur adiHarum ad inventore </li>
                                    <li>arum ad inventore </li>
                                    <li>Lectetur adipisicing elit. Harum ad inventore </li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad inventore </li>
                                    <li>Lorem ipsum dolor sit amet ing elit. Harum ad inventore </li>
                                    </ul>
                            </div>
                    </div> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad inventore, modi ea aliquam quos vitae cupiditate dicta ducimus nemo sed autem nobis quo placeat, iure magni unde fuga sequi voluptatum tempora totam dolores esse impedit adipisci. Odio totam, error minus accusamus vitae voluptatum alias delectus deserunt. Ex.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum at, laudantium nostrum consequatur iste fugit soluta, blanditiis doloremque dolore et dolorem asperiores voluptate inventore eos illo nesciunt velit dignissimos ratione, accusantium quis exercitationem assumenda voluptatum minima veritatis? Soluta, odio aut.</p>
                </div>
            </div>
        </>
    )
}

export default Review