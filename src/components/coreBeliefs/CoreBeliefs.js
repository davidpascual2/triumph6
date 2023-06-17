import React from 'react';
import './coreBeliefs.css';

export default function CoreBeliefs() {
    return (
        <>
            <div className=' pb-1'>
                <div className="coreValuesTitle">
                    <h1>Core Beliefs</h1>
                </div>

                <div className="valuesCont">
                    <div className="row justify-content-center">
                        <div className='value col-md-7 col-12'>
                            <h4>Follow Jesus</h4>
                            <p>It’s all about Jesus. We believe he loves, he cares, and we are better when we follow him.</p>
                        </div>

                        <div className='value col-md-7 col-12'>
                            <h4>Love others </h4>
                            <p>We are not a social club. We don’t care just for our insiders. We actively seek to love people outside of our community.</p>
                        </div>

                        <div className='value col-md-7 col-12'>
                            <h4>Extend the Kingdom</h4>
                            <p>We are on a mission to make the world a better place. We firmly believe that our best bet to achieve that is by spreading the good news of Jesus. </p>
                        </div>

                        {/* <div className='value col-md-6 col-12'>
                            <h4>Service</h4>
                            <p>Meeting the spiritual & physical needs of our church the local community & the world.</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
