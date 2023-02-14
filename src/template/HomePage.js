import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LeftSideBar from './LeftSideBar';
import MainContent from './MainContent';

const HomePage = () => {
  return (
    <>
        <div className="container">
            <Header/>
            {/* menubar */}
            <div className="row bg-warning-subtle">
                <LeftSideBar/>
                <MainContent/>
            </div>

            <Footer/>
        </div>
    </>
  )
}

export default HomePage
