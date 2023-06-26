import React from "react";
import Profile from "./Profile";
// IMAGE
import Kira from './assets/image-kira.jpg'

const Side = () => {
  return (
    <aside className="bg-white h-full flex flex-col px-8 py-4 card-style w-[370px]  shadow-box rounded-[8px] md:hover:scale-105 md:hover:rotate-6 transition-all ">
      <Profile author={"Kira Whittle"} image={Kira} />
      <div className="mt-4">
        <h4 className="text-[20px] font-semibold md:pr-10">
          Such a life-changing experience. Highly recommended!
        </h4>
        <p className="mt-2 md:mr-10">
          “ Before joining the bootcamp, I’ve never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I’ve
          often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend! ”
        </p>
      </div>
    </aside>
  );
};

export default Side;
