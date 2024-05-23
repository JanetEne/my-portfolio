import React from 'react';

const Intro = () => {
  const introContent = {
    image: '/img/me/profile_dark.jpg',
    name: 'Janet Ogenyi',
    designation: 'Software Engineer',
    text: (
      <>
        <p>
          A passionate software engineer based in Lagos, Nigeria. I combine my
          technical skills with a focus on user experience to create solutions
          that are both functional and delightful to use. My core values of
          growth, honesty & transparency, and kindness & empathy guide my
          approach to every project.
        </p>
        <p>
          I am passionate about the open-source community, and collaborate on
          projects that drive innovation and accessibility. I approach every
          project with an open mind and a collaborative spirit. I believe in
          continuous learning and building strong relationships with colleagues.
        </p>
        <p>
          In my free time, I love to travel, tinker with technology, read books,
          and stay active through playing badminton and swimming.
        </p>
        <p>
          Thank you for your time! I am excited to to connect and explore how we
          can collaborate on building impactful solutions together.
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
