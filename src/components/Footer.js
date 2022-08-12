import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-basic">
            <img src="../../images-2/footerLogo.png" 
                 alt ="Penny Juice Logo 2">
                 </img>
            <footer>
              <div className="social">
                <a href="https://www.instagram.com">
                  <i className="icon ion-social-instagram" />
                </a>
                <a href="https://www.twitter.com">
                  <i className="icon ion-social-twitter" />
                </a>
                <a href="https://www.facebook.com">
                  <i className="icon ion-social-facebook" />
                </a>
              </div>
              <p className="copyright">Penny Juice of America © 2022</p>
            </footer>
            <p className="penny-contact">
            Phone: (563) 386-1999
            <br/>
            pennyjuice@hotmail.com
            <br/>
            915 40th Ave Bettendorf, IA 52722
            </p>
          </div>
        );
    }
}

export default Footer;