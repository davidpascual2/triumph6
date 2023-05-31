import React from 'react';
import './events.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ReactDOM from 'react-dom';
// import MyCalendar from './MyCalendar';

export default function Events() {
  
  return (
    <>

      <div className="eventsTitle">
          <h1>Events</h1>
      </div>
      <div className="eventsContainer">
        <div className="calendar">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: 'Event 1', date: '2023-06-01' },
              { title: 'Event 2', date: '2023-06-03' },
            ]}
          />
        </div>  

        <div className="eventContents">

          <div className="eventItem">
            <p className='m-0'>Camping Trip</p>
            <p className='m-0'>June 8</p>
          </div>

          <div className="eventItem">
              <p className='m-0'>Feeding the homeless</p>
              <p className='m-0'>June 21</p>
          </div>

          <div className="eventItem">
              <p className='m-0'>Game Day</p>
              <p className='m-0'>June 21</p>
          </div>

          {/* <div className="eventItem">
            <h5 className='m-0'>Game Day</h5>
            <p className='m-0'>July 12</p>
          </div> */}
        
        </div>

      </div>
        {/* <div>
            <h1>Events</h1>
            <div className='calendar'>
              calendar here
            </div>

            <div className='events'>

                <div className='event'>
                  event 1
                </div>

                <div className='event'>
                  event 2
                </div>
                  
                <div className='event'>
                  event 3
                </div>

            </div>
        </div> */}
    </>
  )
}
