import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <div class="homeHero">
          <div class="homeHeroText">
            <h1>
              100% Blended fruit juice concentrate specifically designed for
              childcare centers!!
            </h1>
            <p></p>
          </div>
        </div>

        <div class="homeOrangeOne">
          <div class="orangeOneHeader">
            <h1 className="homeOrangeOne">Rainbow of exciting flavors</h1>
          </div>
          <div class="orangeOneBits">
            <div class="orangeOneContents">
              <h3>
                Many fun and fruity flavors, including color free flavors! Each
                flavor case contains 6.5 gallon bottles of your choice. We've
                designed them specifically for childcare, daycare, preschool,
                afterschool and extended daycares! Get in touch with us Today!
              </h3>
              <button className="homeButtons">Learn More!</button>
            </div>
            <div class="OrangeOneImg">
              <img
                src="https://cdn.discordapp.com/attachments/1006773653821734962/1007510825453506570/image_27_1.png"
                alt="Juice Img"
              ></img>
            </div>
          </div>
        </div>

        <div class="homeTeal">
          <div class="tealHeader">
            <h1 className="homeTeal">Healthy Juice Concentrates for All!</h1>
          </div>
          <div class="tealBits">
            <div class="tealImg">
              <img
                src="https://cdn.discordapp.com/attachments/823287867870019676/1007515801009537054/image_24.png"
                alt="Juice Img"
              ></img>
            </div>
            <div class="tealContents">
              <h3>
                We provide a veriety of flavors that all kids enjoy! All the
                juice concentrates that we sell are compliant with the USDA and
                FDA guidelines. You don't need to refrigerate the concentrates
                before or after opening them!
              </h3>
              <button className="homeButtons">Learn More!</button>
            </div>
          </div>
        </div>

        <div class="homeOrangeTwo">
          <div class="orangeTwoHeader">
            <h1>Our Best Sellers</h1>
          </div>
          <div class="homeBestSellers">
            <div class="orangeTwoApple">
              <img
                src="https://cdn.discordapp.com/attachments/823287867870019676/1007520998930792519/pj-apple_1.png"
                alt="Apple"
              />
              <h3>Apple</h3>
              <button className="homeButtons">Order Now</button>
            </div>
            <div class="orangeTwoBlue">
              <img
                src="https://cdn.discordapp.com/attachments/823287867870019676/1007523498350092328/pj-blu-raz_1.png"
                alt="Blue Raspberry"
              />
              <h3>Blue Raspberry</h3>
              <button className="homeButtons">Order Now</button>
            </div>
            <div class="orangeTwoStrawnana">
              <img
                src="https://cdn.discordapp.com/attachments/823287867870019676/1007523498886967296/pj-straw-nana_1.png"
                alt="Strawberry Banana"
              />
              <h3>Strawberry Banana</h3>
              <button className="homeButtons">Order Now</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
