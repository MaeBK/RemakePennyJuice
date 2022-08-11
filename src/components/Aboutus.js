import React from 'react';


class Aboutus extends React.Component{
    render() {
        return (
            <>
           
            <h1 className="about-header">Premium Quality 100% Fruit Juice Concentrate.
            <br></br> 
                No Sugar Added. Non Refrigerated. </h1>
            
            <div className="about-container-1">
                <p className="about-p-1">Get delicious and nutritious 100% fruit juice from 
                Penny Juice of America. We provide 100% blended fruit juice 
                concentrates that are specially made for kids and meet all the 
                requirements of the FDA with regard to subsidy and nutrition.
                Customers prefer our products for their benefits, 
                features, variety, service, and competitive pricing.
                
                These blended fruit juice concentrates are for all 
                childcare centers and preschools. Penny Juice of America 
                uses only the highest quality fruit juice products.</p>
            <img 
                className="juice-bottles"
                src="../../images/juice-bottles.jpg"
                alt="Juice bottles"/>
            </div>

            <div className="about-container-1">
                <p className="about-p-2">
                Prepare all flavors using seven parts water and 
                one part juice concentrate. 
                <br></br>
                You don't need to refrigerate the concentrate 
                before or after opening it.
                <br></br>
                Reduce cost per ounce, storage and handling requirements. </p>
                <p className="about-p-3">Kids love penny juice concentrates because it's 
                available in various exciting flavors and colors.
                Each case contains six half-gallon bottles of 
                different flavors.
                <br></br>
                No contracts
                <br></br>
                Free delivery nationwide
                <br></br>
                Minimum order 1 case
                </p>
            </div>
            </>
            )
        }
    }
    
    export default Aboutus;