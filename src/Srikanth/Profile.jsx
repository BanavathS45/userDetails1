import React from "react";

const Profile = ({ id, title, url, thumbnailUrl }) => {
  return (
    <div className="card1">
      <img src={thumbnailUrl} />
      <p>{title}</p>
      <button>
        {" "}
        <a href={url}>View</a>
      </button>
    </div>
  );
};

export default Profile;
