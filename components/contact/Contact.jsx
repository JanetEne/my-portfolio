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
              I'm always interested in hearing about new projects, opportunities
              to collaborate, or simply connecting with fellow tech enthusiasts.
              Feel free to reach out to me
            </p>

            <div className="contact_links">
              <Link href="tel:+2348164400387">
                <img src="/img/svg/social/telephone.svg" alt="telephone" />
              </Link>

              <Link href={mailtoLink}>
                <img src="/img/svg/social/envelope-fill.svg" alt="envelope" />
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
