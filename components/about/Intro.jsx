import React from 'react';

const Intro = () => {
  const introContent = {
    image: '/img/me/profile.jpg',
    name: 'Janet Ogenyi.',
    designation: 'Software Engineer',
    text: (
      <>
        <p>
          I'm a passionate software engineer based in Lagos, Nigeria. I combine
          my technical skills with a focus on user experience to create
          solutions that are both functional and delightful to use. My core
          values of growth, honesty & transparency, and kindness & empathy guide
          my approach to every project.
        </p>
        <p>
          I am dedicated to the open-source community, where I collaborate on
          projects that drive innovation and accessibility. I approach every
          project with an open mind and a collaborative spirit. I believe in
          continuous learning and building strong relationships with colleagues.
        </p>
        <p>
          In my free time, I love to travel, read books, and stay active through
          playing badminton and swimming.
        </p>
        <p>
          Thank you for your time! I'm eager to connect and explore how we can
          collaborate on building impactful solutions together.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;