import React from 'react'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'

const CustomersSayCard = () => {
    const users = [
      {
        image: user1,
        name: 'D. Vin',
        numStars: 5,
        review: "ut labore et dolore magna",
      },
      {
        image: user2,
        name: 'P. A',
        numStars: 4,
        review: "ut labore et dolore magna",
      },
      {
        image: user3,
        name: 'D. Kiin',
        numStars: 3,
        review: "ut labore et dolore magna",
      },
      {
        image: user4,
        name: 'J',
        numStars: 4,
        review: "ut labore et dolore magna",
      }
    ];

  const userReviews = users.map(user => {
    const image = user.image;
    const name = user.name;
    const numStars = user.numStars;
    const review = user.review;

    return (
      <div className="t-card-wrap-outer">
        <div className="t-card-wrap-inner">

            <div className="t-card">
                <div className="star-rating">{numStars}</div>
                <div className="user-image-name">
                    <div className="t-image-container">
                        <img src={image} alt="user"></img>
                    </div>
                    <div className="user-name">{name}</div>
                </div>
                <div>
                <div className="user-review flexible">"{review}"</div>
                </div>
            </div>

        </div>
      </div>
    )
  })

    return (
        <div>
            <div className="user-card">
                {userReviews}
            </div>
        </div>
    )
  }
  export default CustomersSayCard