import Image from 'next/image';
import React from 'react';

const Skills = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: 'left',
      title: 'Technologies & Skills',
      content: [
        'Javascript',
        'Typescript',
        'Reactjs',
        'Nextjs',
        'React Native',
        'Vite',
        'Redux',
        'React/Tanstack Query',
        'Tailwind CSS',
        'SCSS',
        'Styled Components',
        'Nodejs',
        'Git',
        'SEO',
        'PWAs',
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <Image
                      width={10}
                      height={10}
                      className="svg"
                      src="/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
