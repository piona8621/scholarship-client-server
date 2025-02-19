import React from 'react';
import Banner from '../Components/Banner';
import TopScholarShip from '../Components/TopScholarShip';
import UpcomingDeadlines from '../Components/UpcomingDeadlines';
import { Helmet } from 'react-helmet-async';
import StudentSuccessStories from '../Components/StudentSuccessStories';
import RecentScholarships from '../Components/RecentScholarships';
import SalesPromotion from '../Components/SalesPromotion';
import NewsletterSignup from '../Components/NewsletterSignup';
import ScholarshipInfo from '../Components/ScholarshipInfo';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> ProFellow | Home</title>
      </Helmet>
      <Banner></Banner>
      <TopScholarShip></TopScholarShip>
      <StudentSuccessStories></StudentSuccessStories>
      <RecentScholarships></RecentScholarships>
      <UpcomingDeadlines></UpcomingDeadlines>
      <SalesPromotion></SalesPromotion>
      <ScholarshipInfo></ScholarshipInfo>
      <NewsletterSignup></NewsletterSignup>
      
    </div>
  );
};

export default Home;