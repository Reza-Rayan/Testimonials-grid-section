import React from "react";
import Kira from "./assets/image-kira.jpg";

const Profile = ({ image, author }) => {
  return (
    <div className="flex gap-6 animateProfile">
      <div>
        <img src={image} className="rounded-full h-14 w-14" />
      </div>
      <div className="mt-1">
        <h4 className=" font-medium text-[15px]">{author}</h4>
        <div className=" text-[13px] opacity-70">Verified Graduate</div>
      </div>
    </div>
  );
};

export default Profile;
