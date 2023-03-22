import React from "react";
import "swiper/scss";

const ReviewsClient = ({ r }) => {
  const maxRating = 5;
  const rating = r.rating;

  return (
    
      <section className="reviews">
        {/* <article className="reviews__container" key={r.id}> */}
        <div className="reviews__icons"></div>

        {[...Array(maxRating)].map((e, i) => {
          return i < rating ? (
            <ion-icon color="warning" name="star"></ion-icon>
          ) : (
            <ion-icon name="star-outline"></ion-icon>
          );
        })}

        <h5 className="reviews__h3">{r.title}</h5>
        <div className="reviews__descContainer">
          <img
            className=" reviews__img"
            src={r.Product.image}
            alt={r.Product.name}
          />
          <p>{r.description}</p>
        </div>

        <div className="reviews__text">
          <h6>{r.User.userName}</h6>
          <span>{r.reviewDate}</span>
        </div>
        {/* </article> */}
      </section>
    
  );
};

export default ReviewsClient;
