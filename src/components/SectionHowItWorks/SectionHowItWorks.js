import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { OwnListingLink } from '../../components';

import css from './SectionHowItWorks.css';

const SectionHowItWorks = props => {
  const { rootClassName, className, currentUserListing, currentUserListingFetched } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="How TruckConnection works..." />
        <br />
        <FormattedMessage id="SectionHowItWorks.titleLineTwo" />
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="1. Contractors:" />
          </h2>
          <p>
            <FormattedMessage id="Browse a full, searchable list of trucks available in your area. Sort and filter by the type of truck needed and the time and date of the availability. Truck Connection doesn't charge commission... fill as many jobs as possible for one low, monthly rate." />
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="2. Truck Drivers" />
          </h2>
          <p>
            <FormattedMessage id="Post your truck(s) and update your calendar to indicate when you're available, and wait for the job offers to roll in! Update your availability in your profile to ensure you stay as busy and efficient as possible." />
          </p>
        </div>

        <div className={css.step}>

        </div>
      </div>
      <div className={css.createListingLink}>
        <OwnListingLink listing={currentUserListing} listingFetched={currentUserListingFetched}>
          <FormattedMessage id="SectionHowItWorks.createListingLink" />
        </OwnListingLink>
      </div>
    </div>
  );
};

SectionHowItWorks.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionHowItWorks;
