'use client';

import Intro from './Intro';
import Skills from './Skills';
import Resume from './Resume';
import Link from 'next/link';

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="tokyo_tm_about">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <h3>About Me</h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <Intro />

          {/* End personal info */}

          <div className="tokyo_tm_button" data-position="left">
            <Link
              href={
                'https://docs.google.com/document/d/14z--NbEvhJvWXaU7xbkodM4-mNIYGtVSHaL8s-uULOQ/edit?usp=sharing'
              }
              target="_blank"
            >
              <span>Resume</span>
            </Link>
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="tokyo_tm_resumebox">
        <div className="container">
          <div className="in">
            <Resume />
          </div>
        </div>
      </div>

      <div className="tokyo_tm_skillbox">
        <div className="container">
          <div className="in">
            <Skills />
          </div>
        </div>
      </div>
      {/* End tokyo_tm_resumebox */}

      {/* /ABOUT */}
    </>
  );
};

export default AboutMain;
