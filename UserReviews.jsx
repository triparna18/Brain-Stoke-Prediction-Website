import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const reviews = [
  { id: 1, name: "John Doe", review: "Amazing platform! The AI predictions are very accurate." },
  { id: 2, name: "Jane Smith", review: "Loved the user-friendly interface and insightful reports." },
  { id: 3, name: "Michael Lee", review: "Great experience! Highly recommend this service." },
  { id: 4, name: "Emily Johnson", review: "Very helpful and easy to use. The results were insightful!" },
  { id: 5, name: "Daniel Brown", review: "A game-changer in medical predictions. Highly satisfied!" },
  { id: 6, name: "Sophia Wilson", review: "The AI model is impressive, and the results are reliable." },
  { id: 7, name: "Oliver Martinez", review: "Fast and accurate health insights. Definitely recommend it!" },
  { id: 8, name: "Ava Garcia", review: "User-friendly and informative. I trust the AI’s predictions." }
];

const UserReviews = () => {
  return (
    <div className="container py-5 mt-5" style={{minHeight: "85vh"}}>
      <h2 className="text-center mb-4 ">User Reviews</h2>
      <div className="row">
        {reviews.map((review) => (
          <div key={review.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-white">{review.name}</h5>
                <p className="card-text text-white">"{review.review}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;