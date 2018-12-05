import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/parking_banner.jpg'
import pic02 from '../assets/images/iphone8spacegrey_portrait.png'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Slot" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>What is Slot?</h2>
                </header>
                <p>Slot seeks to revolutionize parking by taking advantage of unused residential parking. We use a model similar to famous companies like Airbnb and HomeAway but for residential parking spots. 
                  Hosts make money renting unused parking spots and renters get guaranteed parking with no hassle.</p>
                <ul className="actions">
                  <li><Link to="/generic" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={pic02} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>The Pillars</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-mobile"></span>
                <h3>The App</h3>
                <p>The app will be the hub where you can find, reserve, and access your parking spots. It will be available IOS, Android, and Web.</p>
              </li>
              <li>
                <span className="icon major style3 fa-user"></span>
                <h3>The Host</h3>
                <p>The hosts provide unused residential parking spots so you don't rely on finding empty parking garages. Earn extra money to fund your next dream.</p>
              </li>
              <li>
                <span className="icon major style5 fa-car"></span>
                <h3>The Renter</h3>
                <p>Rent a spot on the app, arrive, park, and continue with a peace of mind. Don't waste anymore time circling the parking lots.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          {/* <section id="second" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section> */}

          <section id="cta" className="main special">
            <header className="major">
              <h2>Coming Soon</h2>
              <p>Join us as we get started on our adventure.<br/>
              We will be launching our beta in March 2019, with a full release targeting in August 2019.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get notified on release</Link></li>
                <li><Link to="/generic" className="button">Investors</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
