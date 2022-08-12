import React from 'react';


class GetInTouch extends React.Component{
    render() {
        return (
            <>
            <div className="about-container-3">
                    <h2 className="about-header">
                    Get in Touch if you have any questions!
                    </h2>
                    <p className="about-p-last">
                    We're a family-owned business that was
                    <br/>
                    founded in 2001 with many years of experience
                    <br/> 
                    in the beverage industry
                    </p>

                    <div className="input-bubble">
                    <input type="email" name="email" placeholder="Email here"/>
                    </div>

                </div>
            </>
        )
    }
}

export default GetInTouch;