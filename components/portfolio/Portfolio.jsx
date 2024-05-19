'use client';

import Image from 'next/image';
import 'photoswipe/dist/photoswipe.css';
import { useState } from 'react';
import Modal from 'react-modal';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import ModalTwo from './modal/ModalTwo';
import Link from 'next/link';

const Portfolio = () => {
  const [isOpenModalOne, setIsOpenModalOne] = useState(false);
  const [isOpenModalTwo, setIsOpenModalTwo] = useState(false);

  function toggleModalOne() {
    setIsOpenModalOne(!isOpenModalOne);
  }
  function toggleModalTwo() {
    setIsOpenModalTwo(!isOpenModalTwo);
  }

  const projects = [
    {
      title: 'Figur',
      tools: 'NextJs, TailwindCss, Typescript',
      description:
        'Built for individuals and businesses to experience seamless accessibility to pay bills effortlessly',
      link: 'https://figur.africa/',
      linkTitle: 'figur.africa',
    },
    {
      title: 'The Constitution of the Federal Republic of Nigeria',
      tools: 'NextJs, TailwindCss, Typescript',
      description:
        'Review of the Constitution of the Federal Republic of Nigeria',
      link: 'https://hccr.gov.ng/',
      linkTitle: 'hccr.gov.ng',
    },
    {
      title: 'Job Lynk',
      tools: 'NextJs, TailwindCss, Typescript',
      description:
        'Connect with top employers and get hired for the job you want. Let us help you achieve your career goals.',
      link: 'https://job-lynk.com/',
      linkTitle: 'job-lynk.com',
    },
  ];

  return (
    <>
      <div className="list_wrapper">
        <ul
          className="list_container"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          {projects.map((item, index) => (
            <li key={index} className="portfolio_list">
              <div className="items_container">
                <div className="project_details">
                  <h5>{item.title}</h5>
                  <small>{item.tools}</small>
                  <p>{item.description}</p>
                </div>
                <div className="social">
                  <Link href={item.link} target="_blank" rel="noreferrer">
                    <img src="/img/svg/link.svg" />
                    <span>{item.linkTitle}</span>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        ariaHideApp={false}
        isOpen={isOpenModalTwo}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <ModalTwo />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
