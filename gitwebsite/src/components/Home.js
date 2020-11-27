import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"> 
            </span>
            <a className="navbar-brand d-none d-lg-inline-block" href="#">
                PING
            </a>
            <div className="w-100 text-right">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            <ul className="navbar-nav ml-auto flex-nowrap">
                <li className="nav-item">
                    <Link to="/"> <a className="nav-link m-2 menu-item nav-active">Home</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/features"> <a className="nav-link m-2 menu-item">Features</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/about"> <a className="nav-link m-2 menu-item">About</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/contactus"> <a className="nav-link m-2 menu-item">Contact Us</a></Link>
                </li>
            </ul>
        </div>
    </nav>

    <div className="hero-container container-fluid">
        <div className="hero-text">
            <h1><span>PING. </span></h1>
            <h2>AN ACCESSORY TO KEEP YOU SAFE</h2>
        </div>
    </div>

    <div className="mission container-fluid">
        <h2>Our Mission</h2>
        <div className="mission-text">
            <p>
                Sexual assault affects up to one out of six women in their lifetime. According RAINN, the Rape, Abuse and Incest National Network, 
                there are about just under half of a million victims of rape or sexual assault in the United States each year (link). Cases of sexual assault are underreported as 
                63% of sexual assault cases do not get reported to police or the authorities. Consequently, women feel unsafe when attending public events or large social gatherings.
            </p>
            <p>So what is our mission? To find an effective, simple way for individuals to continue throughout their daily lives knowing that they feel protected wherever they may be.</p>
        </div> 
    </div>

    <div className="facts">
        <div className="row no-gutters">
            <div className="col-lg-4">
                <div className="fact-container fact-container-one">
                    <h3>EASY TO USE</h3>
                    <p>A simple press of a button will send an alert to your assigned contacts. </p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="fact-container fact-container-two">
                    <h3>EASY TO FIND</h3>
                    <p>Tracks your location in real-time, so your selected response team will always know precisely where you are.</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="fact-container fact-container-three">
                    <h3>EASY TO ADJUST</h3>
                    <p>Pairs with an application on your mobile device to quickly adjust settings for the ring. Also allows control when alert messages for help are sent or cancelled.</p>
                </div>
            </div>
        </div>
    </div>
    
    <div className="solution">
        <div className="row">
            <div className="col-lg-7">
                <div className="solution-text">
                    <h2>Our Solution</h2>
                    <p>Our team has created a device that utilizes GPS technology and an alert system confined into a small, wearable piece for the user. 
                        It aims to add an extra layer of safety for the user by providing the user easy communication with authorities or loved ones in the event of 
                        safety issues or loss of cognitive control. This essentially lowers the risk of harm to the user in social interaction settings including, but not limited to, 
                        parties and concerts. By lowering this risk, this device combats the high possibility of sexual assault and violence and gives users the incentive to continue attending activities 
                        while feeling safe.
                    </p>
                </div>
                
            </div>
            <div className="col-lg-5">
                <div className="solution-image">
                    <img src="ringimage.png" alt=""/>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div className="row no-gutters justify-content-center align-items-center">
            <div className="col-lg-3">
                <div className="brand">
                    <h3>PING</h3>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="icon-bar">
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                    <a href="#" className="fa fa-instagram"></a>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="copyright">
                    <p>©Tau Class 2020</p>
                </div>
            </div>
        </div>
    </footer>

    </div>
);

export default Home;
