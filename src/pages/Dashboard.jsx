import React from 'react' 
import Header from '../Components/Global/Header';
import Banner from '../Components/Dashboard/Banner/Banner';
import Counter from '../Components/Dashboard/Counter/Counter';
import LaunchingSoon from '../Components/Dashboard/LaunchingSoon/LaunchingSoon';
import LaunchingProjects from '../Components/Dashboard/LaunchingProjects/LaunchingProjects';
import Research from '../Components/Dashboard/Research/Research';

const Dashboard = () => {
  return (
    <>
        <Header/> 
        <Banner/>
        <Counter/>
        <LaunchingSoon/>
        <LaunchingProjects/>
        <Research/>
    </>
  )
}

export default Dashboard