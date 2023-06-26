import React from "react";
import Side from "./Side";
import Profile from "./Profile";
import Card from "./Card";
// IMPORT IMAGES
import Daniel from './assets/image-daniel.jpg'
import Jonathan from './assets/image-jonathan.jpg'
import Jeanette from './assets/image-jeanette.jpg'
import Patrick from './assets/image-patrick.jpg'

function App() {
  return (
    <section className="lg:grid grid-cols-3 block sm:w-[1300px]   mx-auto h-screen items-center gap-4">
      <div className="col-span-2 ">
        <div className="lg:grid   lg:grid-cols-3 lg:gap-4">
          <div className="bg-[#733FC8] text-white  col-span-2 py-8 px-5 rounded-[8px] card-style  cama-bg lg:w-full    shadow-box hover:scale-105 hover:rotate-6 transition-all ">
            <Profile  author={"Daniel Clifford"} image={Daniel} />
            <Card
              title={
                "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth."
              }
              text={
                <p className="text-[#ffffff70]">
                  “ I was an EMT for many years before I joined the bootcamp.
                  I’ve been looking to make a transition and have heard some
                  people who had an amazing experience here. I signed up for the
                  free intro course and found it incredibly fun! I enrolled
                  shortly thereafter. The next 12 weeks was the best - and most
                  grueling - time of my life. Since completing the course, I’ve
                  successfully switched careers, working as a Software Engineer
                  at a VR startup. ”
                </p>
              }
            />
          </div>
          
          <div className="bg-[#48556A]  text-white p-8 rounded-[8px]  card-style shadow-box hover:scale-105 hover:rotate-12 transition-all ">
            <Profile author={"Jonathan Walters"} image={Jonathan} />
            <Card
              className=""
              title={"The team was very supportive and kept me motivated "}
              text={
                <p className="text-[#ffffff70]">
                  “ I started as a total newbie with virtually no coding skills.
                  I now work as a mobile engineer for a big company. This was
                  one of the best investments I’ve made in myself. “
                </p>
              }
            />
          </div>
        </div>

        <div className="lg:grid block grid-cols-3 lg:gap-4 mt-4">
          <div className="bg-[#ffffff]  p-8 rounded-[8px] shadow-box card-style hover:scale-105 hover:rotate-12 transition-all ">
            <Profile author={"Jeanette Harmon"} image={Jeanette} />
            <Card
              title={"An overall wonderful and rewarding experience"}
              text={
                <p className="text-[#48556A70] pt-8 ">
                  “ Thank you for the wonderful experience! I now have a job I
                  really enjoy, and make a good living while doing something I
                  love. ”
                </p>
              }
            />
          </div>
          <div className="bg-[#19202D] text-white  col-span-2 p-8 card-style rounded-[8px]  shadow-box hover:scale-105 hover:rotate-6 transition-all ">
            <Profile author={"Patrick Abrams"} image={Patrick} />
            <Card
              title={
                "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth."
              }
              text={
                <p className="text-[#ffffff70]">
                  “ The staff seem genuinely concerned about my progress which I
                  find really refreshing. The program gave me the confidence
                  necessary to be able to go out in the world and present myself
                  as a capable junior developer. The standard is above the rest.
                  You will get the personal attention you need from an
                  incredible community of smart and amazing people. ”
                </p>
              }
            />
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <Side />
      </div>
    </section>
  );
}

export default App;
