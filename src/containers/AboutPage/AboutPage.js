import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About TruckConnection',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Bridging the gap between Contractors who need trucks and Truck Drivers who need jobs</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Finding an available truck shouldn't be complicated.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
              A community marketplace that connects truck drivers with customers...
              </h2>

              <p>
              <b>Customers:</b> Need a truck? Tired of cold-calling trucking companies
              and owner-operators? Truck Connection is the solution to your trucking
              logistical needs. See an updated calendar of trucks available now
              in your area.
              </p>


              <p>
              <b>Truck Drivers:</b> Need a job? Tired of relying on word-of-mouth to
              keep your dump truck busy? Truck Connection keeps your schedule
              full by matching you with customers who need your trucks.
              </p>

            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
