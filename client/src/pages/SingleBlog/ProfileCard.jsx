import React from "react";

function ProfileCard() {
  return (
    <div className="singleblog-profilecard-wrapper">
      <div className="singleblog-profile-header">
        <img
          src="https://res.cloudinary.com/dkeu1esux/image/upload/v1561510053/Authors%20Haven/mfollucfhxvjj3fctevv.jpg"
          alt=""
        />
      </div>
      <div className="singleblog-profilecard-content">
        <h5>About me</h5>
        <p>
          Blog lite is responsive theme that allows you to create stunning blogs
          and websites. It is perfect for blogs, journals, news, photo blogging,
          writers, travelers, bloggers, business and other creative websites.
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
