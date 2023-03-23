import React from "react";
import "swiper/scss";

const ReviewsClient = ({ r }) => {
  const maxRating = 5;
  const rating = r.rating;

  return (
    <section className="reviews" key={r.id}>
      <div className="reviews__descContainer">
        <img
          className=" reviews__img"
          src={r.Product.image}
          alt={r.Product.name}
        />
      </div>
      <section className="reviews__desc">
        <section className="reiviews__icons">
          {[...Array(maxRating)].map((e, i) => {
            return i < rating ? (
              <span key={i}>
                <ion-icon color="warning" name="star"></ion-icon>
              </span>
            ) : (
              <span key={i}>
                <ion-icon name="star-outline"></ion-icon>
              </span>
            );
          })}
        </section>
        <h5 className="reviews__h3">{r.title}</h5>

        <div className="reviews__text">
          <p>{r.description}</p>
          <div className="reviews__user">
            <span>{r.User.userName}</span>
            <span>{r.reviewDate}</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ReviewsClient;
