import React from 'react';
import GetInTouch from './GetInTouch';

class Contact extends React.Component{
    render() {
        return (
            <>
            <div className="contact-container">
                <h2 className="contact-title">Contact Us</h2>
                <div className="contact-input-bubble">
                    <input type="text" name="name" placeholder="First and Last Name"/>
                    <input type="email" name="email" placeholder="Email (Professional)"/>
                    <input type="text" name="organization" placeholder="Company name or Organization"/>
                </div>

                <div className="contact-text-area">
                    <textarea name="Comments" placeholder="Is there any flavor, samples, or extra product help you need please let us know!"/>
                </div>

                <input className="submit-btn" type="submit" />
            </div>

            <GetInTouch/>
            </>

            )
        }
    }
    
    export default Contact;