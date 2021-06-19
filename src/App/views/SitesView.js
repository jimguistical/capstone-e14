import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SiteCard from '../components/SiteCard';
import { getAllSites } from '../../helpers/data/siteData';

function SitesView({ user }) {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    getAllSites().then((sitesArray) => setSites(sitesArray));
  }, []);

  return (
    <>
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
  </>
  );
}

SitesView.propTypes = {
  user: PropTypes.any,
  sites: PropTypes.array,
  setSites: PropTypes.func,
};

export default SitesView;
