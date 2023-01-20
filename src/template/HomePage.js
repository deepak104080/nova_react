import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LeftSideBar from './LeftSideBar';
import MainContent from './MainContent';

const HomePage = () => {
  return (
    <div>
        <div className="container">
            <Header/>

            <div className="row bg-warning-subtle">
                <LeftSideBar/>
                <MainContent/>
            </div>

            <Footer/>
        </div>
    </div>
  )
}

export default HomePage
