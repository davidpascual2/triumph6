import React from 'react';
import './coreValues.css';

export default function CoreValues() {
    return (
        <>
            <div className='coreValuesComp pb-1'>
                <div className="coreValuesTitle">
                    <h1>Core Values</h1>
                </div>

                <div className="valuesCont">
                    <div className="row">
                        <div className='value col-md-6 col-12'>
                            <h4>Worship</h4>
                            <p>Worship God individually, in small groups & as a large body.</p>
                        </div>

                        <div className='value col-md-6 col-12'>
                            <h4>Community</h4>
                            <p>Nurturing one another through fellowship & intentional relationships.</p>
                        </div>

                        <div className='value col-md-6 col-12'>
                            <h4>Bible Study & Prayer</h4>
                            <p>Digging Deeper through Bible study & prayer. </p>
                        </div>

                        <div className='value col-md-6 col-12'>
                            <h4>Service</h4>
                            <p>Meeting the spiritual & physical needs of our church the local community & the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
