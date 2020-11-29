import React from 'react';

const Home = () => (
    <div>
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
                    Sexual assault affects up to one out of six women in their lifetime. According to <a href="https://www.rainn.org/statistics/victims-sexual-violence">RAINN</a>, the Rape, Abuse and Incest National Network,
                    there are about just under half of a million victims of rape or sexual assault in the United States each year. Cases of sexual assault are underreported as
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
                        <img src="ringimage.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;
