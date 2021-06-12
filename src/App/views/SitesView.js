import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SiteCard from '../components/SiteCard';

function SitesView({ sites, setSites }) {
  useEffect(() => {
    // getSites().then((sitesArray) => (setSites(sitesArray)));
  }, []);

  return (
    <div className='cardsHolder' id='sites'>
    {sites.map((siteObj) => (
      <SiteCard
      key={siteObj.building}
      setSites={setSites}
      {...siteObj}
      />
    ))}
  </div>
  );
}

SitesView.propTypes = {
  // user: PropTypes.any,
  sites: PropTypes.array,
  setSites: PropTypes.func,
};

export default SitesView;
