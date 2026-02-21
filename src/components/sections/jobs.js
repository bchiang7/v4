import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import { KEY_CODES } from '@utils';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--dark-slate)')};
  font-family: var(--font-sans);
  font-size: var(--fz-s);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var (--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
    color: var(--green);
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 200%;
  height: auto;
  max-height: 600px; /* Set the maximum height */
  overflow-y: auto; /* Make the content scrollable */
  padding: 10px 5px;
  padding-right: 20px;

  scrollbar-color: var(--dark-slate) var(--light-navy);

  // For WebKit browsers
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: var(--light-navy);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate)
    border-radius: 10px;
  }
  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;
    color: var(--lightest-slate);
    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
  }

  .location {
    margin-bottom: 10px;
    margin-top: 10px;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const Jobs = () => {
  const jobsData = [
    {
      frontmatter: {
        title: 'Software Engineer, Backend – Core Product Team',
        company: 'Otter.ai',
        location: 'Mountain View, CA',
        range: 'October 2024 - Present',
        url: 'https://otter.ai/',
      },
      html: `<ul>
  <li>Built and launched <strong>Daily Digest</strong>, an AI-powered daily email aggregating action items, summaries, and upcoming meetings into a personalized productivity view</li>
  <li>Optimized a high-traffic API powering the product's main navigation, improving latency by <strong>60%</strong> and significantly reducing database load through query and serializer refactoring</li>
  <li>Drove DB migration and data-lifecycle work, removing ~80% of ephemeral data and reducing database load through safe table decoupling and purge execution</li>
  <li>Primary backend owner of Otter's email infrastructure, managing multiple high-volume email surfaces with complex business logic, scheduling, experimentation, and suppression rules</li>
  <li>Contributed to a side-by-side <strong>LLM evaluation</strong> project that enables users to compare and choose between multiple AI-generated meeting overviews</li>
  <li>Served as frontline <strong>KTLO</strong> owner for our team, resolving production issues and maintaining reliability across critical product paths</li>
  <li>Mentored engineers on backend systems, improving onboarding speed and increasing team autonomy</li>
</ul>

        `,
    },
    {
      frontmatter: {
        title: 'Software Engineer',
        company: 'Super Micro Computer, Inc.',
        location: 'San Jose, CA',
        range: 'March 2024 - October 2024',
        url: 'https://www.supermicro.com/en/',
      },
      html: `<ul>
  <li>Developed <strong>full stack applications</strong> with <strong>React</strong>, <strong>Node.js</strong>, and <strong>Express</strong> to create internal tools used daily across the global production line</li>
  <li>Implemented <strong>GraphQL</strong> with <strong>Apollo Server</strong> to streamline data fetching and improve API efficiency</li>
  <li>Managed and deployed <strong>Kubernetes</strong> on a bare metal server, transitioning the deployment management from <strong>Ansible</strong> to <strong>Helm</strong></li>
  <li>Increased unit test coverage to over 95% for most of the existing projects using <strong>Jest</strong></li>
  <li>Refactored legacy codebase with <strong>modularization</strong> and simplifying complex code logic, reducing technical debt</li>
  <li>Created a <strong>CI/CD pipeline</strong> using <strong>Drone CI</strong> to automate deployment and testing of applications, ensuring minimal downtime delivery</li>
  <li>Debugged and resolved critical production-level bugs, resulting in a reduction in system downtime and improved application stability</li>
  <li>Designed and maintained database services utilizing <strong>MariaDB</strong> and <strong>ScyllaDB</strong>, implementing <strong>Galera Cluster</strong> for syncing, ensuring high availability and data consistency across multiple countries</li>
  <li>Designed, planned, and built a comprehensive development environment for local testing through <strong>Docker containers</strong></li>
</ul>

        `,
    },
    {
      frontmatter: {
        title: 'Software Engineer',
        company: 'Informed.IQ',
        location: 'San Francisco, CA',
        range: 'November 2021 - March 2023',
        url: 'https://informediq.com/',
      },
      html: `<ul>
    <li>Optimized extraction algorithms to increase recall and precision rates by <strong>20%</strong> for <strong>Google OCR</strong> data</li>
    <li>Integrated and tested a new API product that accurately calculates applicant income from various documents</li>
    <li>Ensured <strong>100% data accuracy</strong> for incoming client information by designing and implementing a <strong>RESTful API</strong> validator</li>
    <li>Worked on the seamless transition from a monolithic single deployment code base to a <strong>microservices architecture</strong></li>
    <li>Developed and maintained <strong>Terraform</strong> configurations for consistent and reproducible deployments across environments</li>
    <li>Implemented customized metrics for each microservice using <strong>AWS CloudWatch</strong>, enabling real-time monitoring with dashboards</li>
</ul>

      `,
    },
    {
      frontmatter: {
        title: 'Software Engineer Intern',
        company: 'Equifax',
        location: 'Remote - St. Louis, MO',
        range: 'May 2021 - Aug 2021',
        url: 'https://www.equifax.com/',
      },
      html: `<ul>
    <li>Automated new hire workflow through <strong>Java microservices</strong> to optimize and expedite the onboarding process for employees</li>
    <li>Utilized <strong>Google Cloud Platform’s Firebase</strong>, <strong>Cloud Firestore</strong>, and <strong>Kubernetes</strong> for secure information storage</li>
    <li>Created unit tests for each microservice using <strong>JUnit</strong> and <strong>Mockito</strong>, improving workflows by ensuring reliability and security</li>
</ul>

      `,
    },
    {
      frontmatter: {
        title: 'Software Engineer Intern',
        company: 'Kenway Consulting',
        location: 'Remote - Chicago, IL',
        range: 'Aug 2020 – May 2021',
        url: 'https://www.kenwayconsulting.com/',
      },
      html: `<ul>
    <li>Developed a web application in <strong>Angular</strong> that calculates each employee’s bonus based on a value-cost projection</li>
    <li>Integrated and tested API backend services for the web app using <strong>HTML</strong>, <strong>CSS</strong>, <strong>TypeScript</strong>, and <strong>Postman</strong>, ensuring seamless functionality and user experience</li>
</ul>

      `,
    },
  ];

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  useEffect(() => focusTab(), [tabFocus]);

  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Work Experience</h2>

      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
          {jobsData &&
            jobsData.map(({ frontmatter }, i) => {
              const { company } = frontmatter;
              return (
                <StyledTabButton
                  key={i}
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  ref={el => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}>
                  <span>{company}</span>
                </StyledTabButton>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {jobsData &&
            jobsData.map(({ frontmatter, html }, i) => {
              const { title, url, company, range, location } = frontmatter;

              return (
                <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">
                  <StyledTabPanel
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}>
                    <h3>
                      <span>{title}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={url} className="inline-link">
                          {company}
                        </a>
                      </span>
                    </h3>
                    <p className="location">{location}</p>
                    <p className="range">{range}</p>

                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </StyledTabPanel>
                </CSSTransition>
              );
            })}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
