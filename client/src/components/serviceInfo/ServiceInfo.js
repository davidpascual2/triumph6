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

            <div className="scheduleTitle">
                <h1>Worship With Us</h1>
            </div>

            <div className="scheduleContents">

                <h5>Saturday Schedule</h5>

                <div className="example">
                    <div className="scheduleItem">
                        <p className='m-0'>Sabbath School</p>
                        <p className='m-0'>June 8</p>
                    </div>

                    <div className="scheduleItem">
                        <p className='m-0'>Feeding the homeless</p>
                        <p className='m-0'>June 21</p>
                    </div>

                    <div className="scheduleItem">
                        <p className='m-0'>Game Day</p>
                        <p className='m-0'>June 21</p>
                    </div>
                </div>

            </div>
    </>
  )
}
