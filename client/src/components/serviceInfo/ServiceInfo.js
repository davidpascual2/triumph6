import React from 'react';
import './serviceInfo.css';

const scheduleTimes = {
    songworship: "11:45AM",
    sabbathschool: "12:00PM",
    announcements: "12:40PM",
    offering: "12:50PM",
    songworship2: "1:00PM",
    prayer: "1:15PM",
    sermon: "1:30PM"
}

//=====================================
export default function ServiceInfo() {
    return (
        <>
            {/* <div className='schedule'>

            <div className="scheduleTitle">
                <h1>Worship With Us</h1>
            </div>

            <div className="scheduleContainer">
                <h5>Saturday Schedule</h5>

                <div className="scheduleContents">
                    <div className="scheduleItems">
                        <p>Sabbath School</p>
                        <p>{scheduleTimes.sabbathschool}</p>
                    </div>

                    <div className="scheduleItems">
                        <p>Announcements</p>
                        <p>{scheduleTimes.announcements}</p>
                    </div>

                    <div className="scheduleItems">
                        <p>Song Worship</p>
                        <p>{scheduleTimes.songworship}</p>
                    </div>

                    <div className="scheduleItems">
                        <p>Sermon</p>
                        <p>{scheduleTimes.sermon}</p>
                    </div>
                </div>
            </div>
        </div> */}
            <div className="ServiceInfo pt-2 pb-5 container-fluid">


                <div className="scheduleTitle row justify-content-center">
                    <div className="col-11 col-md-12">

                        <h1>Worship With Us</h1>
                    </div>
                </div>
                <div className="row justify-content-center">


                    <div className="scheduleContents col-md-7 col-11">

                        <h5>Saturday Schedule</h5>

                        <div className="scheduleItemsCont">
                            <div className="scheduleItem">
                                <p className='m-0'>Sabbath School</p>
                                <p className='m-0'>12:00 PM</p>
                            </div>

                            <div className="scheduleItem">
                                <p className='m-0'>Announcements</p>
                                <p className='m-0'>1:00 PM</p>
                            </div>

                            <div className="scheduleItem">
                                <p className='m-0'>Song Worship</p>
                                <p className='m-0'>1:00 PM</p>
                            </div>

                            <div className="scheduleItem">
                                <p className='m-0'>Sermon</p>
                                <p className='m-0'>1:30 PM</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
