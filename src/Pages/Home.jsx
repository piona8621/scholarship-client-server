import React from 'react';
import Banner from '../Components/Banner';
import TopScholarShip from '../Components/TopScholarShip';
import UpcomingDeadlines from '../Components/UpcomingDeadlines';
import EligibilityChecker from '../Components/EligibilityChecker';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> ProFellow | Home</title>
      </Helmet>
      <Banner></Banner>
      <TopScholarShip></TopScholarShip>
      <UpcomingDeadlines></UpcomingDeadlines>
      <EligibilityChecker></EligibilityChecker>
    </div>
  );
};

export default Home;