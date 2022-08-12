import React from 'react';
import GetInTouch from './GetInTouch';

class Aboutus extends React.Component{
    render() {
        return (
            <>
           
            <h1 className="about-header">Premium Quality 100% Fruit Juice Concentrate.
            <br></br> 
                No Sugar Added. Non Refrigerated. 
            </h1>
            
            <div className="about-container-1">

                <p className="about-p">Get delicious and nutritious 100% fruit juice from 
                Penny Juice of America. We provide 100% blended fruit juice 
                concentrates that are specially made for kids and meet all the 
                requirements of the FDA with regard to subsidy and nutrition.
                Customers prefer our products for their benefits, 
                features, variety, service, and competitive pricing.
                These blended fruit juice concentrates are for all 
                childcare centers and preschools. Penny Juice of America 
                uses only the highest quality fruit juice products.
                </p>

            <img 
                className="juice-bottles"
                src="../../images-2/juice-bottles.jpg"
                alt="Juice bottles"/>
            </div>


            <div className="about-container-2">
                
                
                <div className="small-container-1">
                <h2 className="abt-title">Easy-To-Make Juice Concentrates</h2>

                <img
                className="squiggly-1"
                src="../../images-2/squiggly.png"/>

                <p className="about-p">
                Prepare all flavors using seven parts water and 
                one part juice concentrate. 
                <br/>
                You don't need to refrigerate the concentrate 
                before or after opening it.
                <br/>
                Reduce cost per ounce, storage and handling requirements.
                </p>
                </div>

                <div className="small-container-2">
                
                <h2 className="abt-title">Get Juice Concentrates in 
                a Variety of Flavors
                </h2>
                <img 
                className="squiggly-2"
                src="../../images-2/squiggly.png"/>

                <p className="about-p">
                Kids love penny juice concentrates because it's 
                available in various exciting flavors and colors.
                Each case contains six half-gallon bottles of 
                different flavors.
                <br/>
                No contracts
                <br/>
                Free delivery nationwide
                <br/>
                Minimum order 1 case
                </p>
                </div>
                </div>

                <GetInTouch/>
            </>

            )
        }
    }
    
    export default Aboutus;