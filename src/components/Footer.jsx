import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h3>NAGN Nepal</h3>
            <p>
              Empowering Nepal&apos;s youth.
            </p>
          </div>
          <div className="footer-section footer-links-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/events">Events</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/donate">Donate</Link>
            </div>
          </div>
          <div className="footer-section footer-contact">
            <h3>Contact Info</h3>
            <p>
              <a href="https://www.facebook.com/nabn.nepal/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Follow Us</span>
              </a>
            </p>
            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Kathmandu, Nepal
            </p>
            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +977 9868232973
            </p>
            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              nabn.nepal@gmail.com
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} National Adolescent Girls&apos; Network Nepal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;