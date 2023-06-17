import React from 'react';
import './coreBeliefs.css';

export default function CoreBeliefs() {
    return (
        <>
            <div className='container-fluid pb-5'>
                <div className="coreBeliefs">
                    <h1>Core Beliefs</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-10 py-4">

                        {/* <h3>Our Church Beliefs</h3> */}
                        <p>At our church, we are guided by a set of beliefs that shape our faith and practice. We believe in the divine inspiration and authority of the Bible, the existence of one God in three persons, the Father, Son, and Holy Spirit, and the importance of living a life of love and service to others. Our beliefs also include the sanctity of the Sabbath, the hope of Christ's second coming, and the promise of eternal life in a new earth. To explore our full set of beliefs, please click the button below.</p>

                        <div className="row justify-content-center my-md-5 mt-3 order-2 order-md-3">
                            <a
                                type="submit"
                                className="giveButton col-md-6 col-12 text-center"
                                href='https://www.adventist.org/beliefs/#'
                                target="_blank"
                            >
                                Explore Our Fundamental Beliefs
                            </a>
                        </div>
                    </div>
                </div>


                {/* <div className="valuesCont px-md-5 py-5">
                    <div className="row justify-content-center">
                        <div className='value col-md-3 col-12'>
                            <h4>The Holy Scriptures</h4>
                            <p>The Bible is the inspired Word of God and the ultimate authority for faith and practice.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Trinity</h4>
                            <p>There is one God—Father, Son, and Holy Spirit—coeternal and coequal.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Father</h4>
                            <p>God the Father is the loving Creator and sustainer of all things.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Son</h4>
                            <p>Jesus Christ is fully God and fully human, the Savior of humanity and the mediator between God and humanity.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Holy Spirit</h4>
                            <p>The Holy Spirit is a divine Person who guides, convicts, and empowers believers.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>Creation</h4>
                            <p>God is the Creator of all things in six literal days.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Nature of Humanity</h4>
                            <p>Human beings were created in the image of God, but sin has marred that image.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Great Controversy</h4>
                            <p>There is an ongoing cosmic conflict between good and evil, with humanity as a central part of the conflict.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Life, Death, and Resurrection of Christ</h4>
                            <p>Jesus lived a sinless life, died on the cross for our sins, and was resurrected, providing salvation and eternal life.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Experience of Salvation</h4>
                            <p>Salvation is a gift from God through faith in Jesus Christ, resulting in a transformed life.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>Growing in Christ</h4>
                            <p>Through the power of the Holy Spirit, believers can grow in their relationship with Christ and become more like Him.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Church</h4>
                            <p>The church is the community of believers who follow Jesus Christ and are called to proclaim the gospel to the world.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Remnant and Its Mission</h4>
                            <p>The remnant church is called to proclaim God's final message of hope and prepare people for Christ's second coming.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>Unity in the Body of Christ</h4>
                            <p>God calls His people to unity in faith and love.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>Baptism</h4>
                            <p>Baptism is a public declaration of faith and a symbol of the believer's union with Christ.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Lord's Supper</h4>
                            <p>The Lord's Supper is a memorial of Christ's sacrifice and a symbol of His ongoing presence.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>Spiritual Gifts and Ministries</h4>
                            <p>The Holy Spirit equips believers with various spiritual gifts for ministry and service.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Gift of Prophecy</h4>
                            <p>God has provided the gift of prophecy as a source of guidance and instruction for His people.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Law of God</h4>
                            <p>God's law, summarized in the Ten Commandments, is an expression of His character and a guide for righteous living.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Sabbath</h4>
                            <p>The seventh-day Sabbath is a day of rest and worship, established by God at creation and upheld throughout Scripture.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>Stewardship</h4>
                            <p>Everything we have comes from God, and we are called to be faithful stewards of His blessings.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>Christian Behavior</h4>
                            <p>As followers of Christ, we are called to live holy and godly lives, reflecting His character.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>Marriage and the Family</h4>
                            <p>Marriage was instituted by God as a lifelong union between one man and one woman, and the family is the foundational unit of society.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>Christ's Ministry in the Heavenly Sanctuary</h4>
                            <p>Jesus is currently ministering in the heavenly sanctuary, interceding on behalf of His people.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Second Coming of Christ</h4>
                            <p>Jesus will return to earth, bringing an end to sin and establishing His eternal kingdom.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>Death and Resurrection</h4>
                            <p>The dead sleep in unconsciousness until the resurrection, when both the righteous and the wicked will be raised.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The Millennium and the End of Sin</h4>
                            <p>After Christ's second coming, there will be a thousand-year period (the millennium) during which the earth will be desolate.</p>
                        </div>

                        <div className='value col-md-3 col-12'>
                            <h4>The New Earth</h4>
                            <p>God will create a new heaven and a new earth, and His redeemed people will live with Him in eternity.</p>
                        </div>





                    </div>
                </div> */}
            </div>
        </>
    )
}
