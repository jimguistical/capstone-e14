import React from 'react';
import PropTypes from 'prop-types';
import SiteCard from '../components/SiteCard';

function SitesView({ user, sites, setSites }) {
  return (
    <div className='cardsHolder' id='sites'>
    {sites.map((siteObj) => (
      <SiteCard
      user={user}
      key={siteObj.building}
      setSites={setSites}
      {...siteObj}
      />
    ))}
  </div>
  );
}

SitesView.propTypes = {
  user: PropTypes.any,
  sites: PropTypes.array,
  setSites: PropTypes.func,
};

export default SitesView;
