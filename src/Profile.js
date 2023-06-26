import React from "react";
import Kira from "./assets/image-kira.jpg";

const Profile = ({ image, author }) => {
  return (
    <div className="flex gap-4 animateProfile">
      <div>
        <img src={image} alt={image} className="rounded-full h-14 w-14" />
      </div>
      <div className="mt-2">
        <h4 className=" font-medium text-[15px]">{author}</h4>
        <div className=" text-[13px] opacity-70">Verified Graduate</div>
      </div>
    </div>
  );
};

export default Profile;
