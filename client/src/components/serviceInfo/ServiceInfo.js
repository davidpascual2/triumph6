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

export default function ServiceInfo() {
  return (
    <>
        <div className='schedule'>
            <div className="scheduleTitle">
                <h1>Worship With Us</h1>
            </div>

            <h5>Saturday schedule</h5> 

            <div className="scheduleContainer">
                <div className="">
                    <p>{scheduleTimes.sabbathschool}</p>
                    <p>Sabbath School</p>
                </div>

                <div className="">
                    <p>{scheduleTimes.announcements}</p>
                    <p>Announcements</p>
                </div>

                <div className="">
                    <p>{scheduleTimes.songworship}</p>
                    <p>Announcements</p>
                </div>

                <div className="">
                    <p>{scheduleTimes.sermon}</p>
                    <p>Announcements</p>
                </div>
            </div>
            
        </div>
    </>
  )
}
