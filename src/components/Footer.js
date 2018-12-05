import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>The team</h2>
            <p>Our team consists of aspiring entrepreneurs from Purdue University. </p>
            <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul>
        </section>
        <section>
            <h2>Contact Information</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>1234 State St &bull; West Lafayette, IN 47906 &bull; USA</dd>
                <dt>Phone</dt>
                <dd>(000) 000-0000</dd>
                <dt>Email</dt>
                <dd><a href="#">hello@slotparking.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
    </footer>
)

export default Footer
