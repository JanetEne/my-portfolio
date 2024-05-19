import React from 'react';

const Resume = () => {
  const resumeContent = [
    {
      id: 2,
      colClass: 'left',
      title: 'Experience',
      resume: [
        {
          id: 1,
          year: '2022 - Now',
          institute: 'Truparse, Nigeria',
          degree: 'Frontend Engineer',
        },
        {
          id: 2,
          year: '2022 - 2022',
          institute: 'Viwlo',
          degree: 'Frontend Engineer',
        },
      ],
    },
    {
      id: 1,
      colClass: 'right',
      title: 'Education',
      resume: [
        {
          id: 1,
          year: '2014 - 2018',
          institute: 'Benue State University',
          degree: 'Bachelors Degree',
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
