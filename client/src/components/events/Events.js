import React from 'react';
import './events.css';

export default function Events() {
  return (
    <>
        <div>
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
        </div>
    </>
  )
}
