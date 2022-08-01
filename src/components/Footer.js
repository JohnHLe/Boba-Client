import React from 'react'
import { SpecialButton } from './SpecialButton'
import './css/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
       <section className='footer-flier'>
            <p className="footer-flier-heading">
                Join our Team!
            </p>
            <p className="footer-flier-text">
                Drop your email below to join our team
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                    <SpecialButton buttonStyle='btn--outline'> Join us now</SpecialButton>
                </form>
            </div>
       </section>
       <div className="footer-links">
            <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to='/sign-up'>We're just a humble, new Boba Shop</Link> 
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
       </div>
       <section className="social-media">
            <div className='social-media-wrap'>
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                        BobaHome
                        <i className="fas fa-mug-saucer"></i>
                    </Link>
                </div>
                <small className='website-rights'>BobaHome © 2022</small>
                <div className="social-icons">
                    <Link
                        className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                    >
                    <i className='fab fa-facebook-f' />
                    </Link>
                    <Link
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                    >
                    <i className='fab fa-instagram' />
                    </Link>
                    <Link
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                    >
                    <i className='fab fa-youtube' />
                    </Link>
                    <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                    >
                    <i className='fab fa-twitter' />
                    </Link>
                    <Link
                        className='social-icon-link LinkedIn'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                    <i className='fab fa-linkedin' />
                    </Link>
              </div>
            </div>
       </section>
    </div>
  )
}

export default Footer;