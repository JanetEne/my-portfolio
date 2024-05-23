'use client';

import React from 'react';
import { ReactTyped } from 'react-typed';
import Social from '../Social';

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: 'url(/img/me/dark_profile.jpg)',
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Janet Ogenyi</h3>
            <h4 className="typer">
              <ReactTyped
                strings={['Software Engineer']}
                loop
                typeSpeed={120}
              />
            </h4>

            <p className="job">
              A Software Engineer committed to creating inclusive user
              experiences. My expertise spans Fintech, e-commerce, and law
              firms, where I leverage React Native, ReactJs, NextJs, JavaScript,
              and TypeScript to transform ideas into accessible and aesthetic
              interfaces.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
