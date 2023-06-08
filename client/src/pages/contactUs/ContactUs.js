import React from 'react';
import './contactUs.css';
import Navbar from '../../components/navbar/Navbar';

//===================================

export default function ContactUs() {
  return (
    <>
      <div className="contactusTitle">
        <h1>Contact Us</h1>
      </div>

      <div className="contactUsContainer">

        <div className="contactDesc">
          <p>Feel free to reach out to any of our dedicated church staff members for assistance, guidance, or simply to connect. 
            Our staff is here to serve and support you on your spiritual journey.
            <br/><br/>
            Additionally, we invite you to share your prayer requests and praises with us. 
            We believe in the power of prayer and the importance of lifting one another up in times of need and celebration. 
            Whether you have a specific prayer request or want to share a testimony of God's faithfulness in your life, we are here to listen, support, and join you in prayer.
          </p>
        </div>

        <div class="contactUsComp container">
          
          <form target="_blank" action="https://formsubmit.co/your@email.com" method="POST">
            <div class="form-group">
              <div class="form-col">
                <div class="col p-0">
                  <input type="text" name="name" class="form-control mb-3" placeholder="Name" required />
                </div>

                <div class="col p-0">
                  <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                </div>
              </div>
            </div>

            <div class="form-group col-12 p-0">
              <textarea placeholder="Your Message" class="form-control" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="contactUsButton btn btn-lg btn-block">Submit Form</button>
          </form>
        </div>
      </div>

    </>
  )
}
