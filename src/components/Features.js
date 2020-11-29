import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => (
    <div>
        <div className="mini-hero-container">
            <div className="mini-hero-text">
                <h1>Learn more about PING.</h1>
            </div>
        </div>

        <div className="background-info-container">
            <div className="what-is-section">
                <h2>What is PING?</h2>
                <p>
                    The Tau Class sought to create a device that tests one’s cognition and sends out alerts when needed. The PING houses an internal
                    vibrating disk and GPS technology in a small, wearable ring. It will perform a cognitive test on the user at certain time intervals.
                    When this test is not passed, the PING will send an SOS message to the user’s preset contacts. The user also has the option of sending
                    the message at will. The PING will be paired with an application via Bluetooth. The application pairs the PING with the user’s account.
                    It allows the user to adjust the settings for the PING’s various features, displays the battery percentage, and provides a user guide.
                    This device’s primary audience is people who seek to have another layer of safety during social interactions. This includes, but is not
                    limited to, parties and concerts where one is often surrounded by many unfamiliar individuals. The PING aims to combat the possibility
                    of sexual assault and violence and provide a feeling of safety when attending large events to its users.
            </p>
            </div>
            <div className="behind-name-section">
                <h2>Behind the Name</h2>
                <p>PING is a combination of “protective” and “ring.” The name encapsulates the PING’s function: be a wearable safety device.
                It is also onomatopoeic for the sound of receiving a message, as sending out SOS messages is one of the PING’s abilities.
            </p>
            </div>
        </div>

        <div className="project-overview-container">
            <h2>Project Overview</h2>
            <div className="row">
                <div className="col-lg-4">
                    <div className="project-overview-cell">
                        <div className="overview1">
                            <img src="assets/overview1.png" alt="" />
                        </div>
                    </div>

                    <p>
                        The PING was designed to be as space-efficient as possible, with all hardware components fitting into a two-finger
                        ring. The casing is secure enough to go through wear and tear, though at the same time removable for access to the
                        rechargeable battery.
                </p>
                </div>
                <div className="col-lg-4">
                    <div className="project-overview-cell">
                        <div className="overview2">
                            <img src="assets/overview2.png" alt="" />
                        </div>
                    </div>

                    <p>
                        The PING provides a cognition test and a way to call for help, all at the tip of one’s fingers. The button serves multiple
                        purposes: 1) press on it at certain intervals to check cognitive state 2) press on it to immediately send out SOS messages.
                </p>
                </div>
                <div className="col-lg-4">
                    <div className="project-overview-cell">
                        <div className="overview3">
                            <img src="assets/overview3.png" alt="" />
                        </div>
                    </div>

                    <p>
                        The PING’s attributes are all customizable to fit the user’s changing needs. Want to turn off the cognition test, change the vibration
                        intervals, or change your contacts? All settings can be found and saved on the PING app.
                </p>
                </div>
            </div>
        </div>

        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className="question-container">
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <p>How do I send out SOS messages immediately?</p>
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <p>
                                    You can send out SOS messages immediately by holding down the button for 7 consecutive seconds.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <p>How do I make an account?</p>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>
                                    You can create an account using our app. Users can sign up just an email/phone number and unique password.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <p>What if I don’t need a cognition test?</p>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>
                                    You have the ability to turn off the cognition test by going into the setting on the app and switching the toggle button to the off position.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFour">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <p>Is it waterproof/how durable is it?</p>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>
                                    We are still currently working on this feature. However you can sign up for our email list for any upcoming updates at: ucitauclass@gmail.com.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFive">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <p>How will my preferred contacts know where I am?</p>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>
                                    You can turn on location tracking and your location will be included in the SOS message. NOTE: This is an optional feature that can be disabled.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingSix">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    <p>How does the cognition test work?</p>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>
                                    The ring is programmed to vibrate every 15 minutes. The user must press the button for 3 consecutive seconds to stop the buzzing.
                                    If the user fails to do so this registers as a failed cognition test and messages to preassigned contacts will be sent out. In the app, the user has the ability to change the frequency of vibration (i.e. every 25 minutes).
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Features;
