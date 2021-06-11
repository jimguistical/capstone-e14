import React from 'react';
import SiteCard from '../components/SiteCard';

function SitesView() {
  return (
    <div className='cardsHolder' id='sites'>
    {sites.map((siteObj) => (
      <SiteCard
      key={siteObj.building}
      />
    ))}
  </div>
  );
}

export default SitesView;
