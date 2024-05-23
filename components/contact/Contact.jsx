'use client';
import Link from 'next/link';

const Contact = () => {
  const mailtoLink = `mailto:${'janeteneogenyi@gmail.com'}`;

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_contact">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <h3>Get in Touch</h3>
              </div>
            </div>
          </div>

          <div className="contact_content">
            <p>
              Whether you have a project in mind, a question, or just want to
              say hello, feel free to reach out! I'm always open to discussing
              new opportunities, creative ideas, or ways to bring your visions
              to life.
            </p>

            <div className="contact_links">
              <Link href="tel:+2348164400387">
                <img src="/img/svg/social/telephone.svg" alt="telephone" />{' '}
                <span>Phone</span>
              </Link>

              <Link href={mailtoLink}>
                <img src="/img/svg/social/envelope-fill.svg" alt="envelope" />{' '}
                <span>Email</span>
              </Link>

              <Link href={'https://github.com/JanetEne'}>
                <img src="/img/svg/social/github.svg" alt="github" />{' '}
                <span>Github</span>
              </Link>

              <Link href={'https://www.linkedin.com/in/janet-ene-ogenyi/'}>
                <img src="/img/svg/social/linkedin.svg" alt="linkedIn" />{' '}
                <span>LinkedIn</span>
              </Link>

              <Link href={'https://twitter.com/Jane_eniie'}>
                <img src="/img/svg/social/twitter-x.svg" alt="twitter" />{' '}
                <span>Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
