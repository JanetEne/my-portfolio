import React from 'react';

const mailtoLink = `mailto:${'janeteneogenyi@gmail.com'}`;

const SocialShare = [
  {
    iconName: 'github',
    link: 'https://github.com/JanetEne',
  },
  {
    iconName: 'linkedin',
    link: 'https://www.linkedin.com/in/janet-ene-ogenyi/',
  },
  { iconName: 'twitter-x', link: 'https://twitter.com/Jane_eniie' },
  {
    iconName: 'envelope-fill',
    link: mailtoLink,
  },
];

const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
