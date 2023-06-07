import React from 'react';
import './events.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';

// import MyCalendar from './MyCalendar';

export default function Events() {

  // const calendarStyle = {
  //   border: '1px solid black',
  //   width: '800px',
  //   height: '600px',
  // };

  return (
    <>
      <div className="events container-fluid py-4">

        <div className="eventsTitle">
          <h1>Events</h1>
        </div>

        <div className="eventsContainer">
          <div className="calendar">
            {/* <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={[
                { title: 'Event 1', date: '2023-06-01' },
                { title: 'Event 2', date: '2023-06-03' },
              ]}
            /> */}


            {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23afc4c0&ctz=America%2FLos_Angeles&showPrint=0&showTabs=1&showTz=0&showTitle=0&showCalendars=0&showNav=1&showDate=1&src=MGFmZDJkMTljMmZjMmZhYzMzNWU2YTM0NjI1MDQ3ODVjNWEyM2RlZTM0MWQwMWJiYWM4NGQwZjBjZWJiOWZjZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23E4C441&color=%230B8043" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
            <Iframe

              url="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23afc4c0&ctz=America%2FLos_Angeles&showTitle=0&showPrint=0&showCalendars=0&showTz=0&src=ZDFhNmI0NzBiM2I3MjdjMzhkOWY3MzNmMzRkOTNkYTA3ZTVmZjIzY2I3NzcyMGU0MGJmN2Y5MjE4MzBlZGJlN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161&color=%230B8043"
              width="100%"
              height="100%"

              frameborder="0"
              scrolling="no"
              border="1px solid"
            />
          </div>

          {/* <div className="eventContents">

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

          </div> */}

        </div>

      </div>

    </>
  )
}
