'use client';

import Intro from './Intro';
import Skills from './Skills';
import Resume from './Resume';

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
            <a href="/cv/Janet - CV.pdf" download>
              <span>Download CV</span>
            </a>
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
