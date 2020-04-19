import React from 'react';
import logoSmile from '../images/logoSmile.svg';
import logoWink from '../images/logoWink.svg';


const Header = () => {
  
  const [billy, wink] = React.useState('smile');

  return (
      <div className = 'header fixed-top'>
        <a href="/" className = 'navbar-brand'>
          <img 
          onMouseEnter={() => wink('wink')} 
          onMouseLeave={() => wink('smile')} 
          src={billy === 'smile' ? logoSmile : logoWink} 
          />
        </a>
        <ul className = 'navbar'>
          <li key={1}>
            <a href="/" className='nav-link nav-link-top'>Funktioner</a>
          </li>
          <li key={2}>
            <a href="/" className='nav-link nav-link-top'>Pris</a>
          </li>
          <li key={3}>
            <a href="/" className='nav-link nav-link-top'>App Store</a>
          </li>
          <li key={4}>
            <a href="/" className='nav-link nav-link-top'>For revisiorer</a>
          </li>
          <li key={5}>
            <a href="/" className='nav-link nav-link-top'>Support</a>
          </li>
        </ul>
        <ul className = 'navbar'>
          <li key={1}>
            <a href="/" className='nav-link nav-link-top'>Opret gratis bruger</a>
          </li>
          <li key={2}>
            <a href="/" className='nav-link nav-link-top'>Log ind</a>
          </li>
        </ul>
      
      <style jsx>{`
        .header {
          background-color: #399de5;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: .625rem 1rem;
        }
        .fixed-top {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 1030;
          height: 2.5rem;
        }
        .navbar {
          display: flex;
          flex-direction: row;
          list-style: none;
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          margin: 0rem;
        }
        .navbar-brand {
          width: 7.5rem;
          height: 2.5rem;
        }
        .nav-link-top {
          color: #fff;
          padding-right: .9rem;
          padding-left: .9rem;
        }
        
      `}</style>
    </div>
  )
    
  
};

export default Header;

// <svg class="wink" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 801.78 266.37">
// <path d="M243.58,68.5l-6.19,65.33C234,104.41,217.48,69.65,196,51.36c.67-1-.38-8,.48-8.86Z" transform="translate(-1.11 -0.31)" fill="#6d5b53"></path>
// <path d="M237.39,135.93C237.86,72.6,186.15,19.27,122,19.55A115.71,115.71,0,0,0,6.44,136C6.92,198.69,58.06,250.59,122,250.59S236.91,198.78,237.39,135.93Z" transform="translate(-1.11 -0.31)" fill="#ffd4cc"></path>
// <path d="M46.06,159.55,34.25,151,31.4,134l1.24-17.52,6.57-11.33s16.76-5.43,18.38-5,32.67,2.57,32.67,2.57l18.48,8.67s1.71,7,1.71,8.67-6.67,19.52-6.67,19.52l-4.67,9s-4.38,6.38-6,7.24-7.24,3.24-10.86,3.62-12.29.76-13.9.38-11.52.76-11.52.76Z" transform="translate(-1.11 -0.31)" fill="#fff"></path>
// <path d="M203.48,156.59l6.67-6.86,6.1-17.14,2-17.14-10.38-8.38s-11.14-4.76-12.76-4.38-34.67.29-34.67.29l-21.52,5.14s-.76,10.19-.76,11.71,1.81,21,1.81,21l9.71,8.38s4.76,6,6.38,6.76,5.14,4.38,8.76,4.76,15.14.76,16.76.38,10.76-.86,10.76-.86Z" transform="translate(-1.11 -0.31)" fill="#fff"></path>
// <circle cx="70.19" cy="126.19" r="10.1" fill="#595959"></circle>
// <path d="M137.49,102.79h0A30.23,30.23,0,0,1,126,105.07s-7.71,0-7.71.1c-5.62-.1-8.76-1-10.19-1.62C75.68,87,17.3,101,17.3,101l.1,11.9c5.81,2.76,7.52,18.67,7.71,19.24,4.57,32,20.76,30.67,41.24,30.67,35,0,43.81-23.24,45.52-40.09a7.2,7.2,0,0,1,7.33-6.1h6c2.29,0,5.9,1.52,6.86,6.48h0c1.9,16.76,10.76,39.62,45.52,39.62,20.48,0,36.76,1.33,41.24-30.67.29-.48,1.9-16.38,7.71-19.24l.1-11.9C226.72,101,170.15,87.45,137.49,102.79ZM60.92,157.45S38.25,159,34.44,142.12c-3.52-15.24-5.81-33.43,14.76-37.43,8.48-1.52,55.71-5,56.09,13.43C104.54,137.64,98.25,157.45,60.92,157.45Zm148.47-15.33c-3.81,16.86-26.48,15.33-26.48,15.33-37.24,0-43.62-19.81-44.47-39.33.38-18.48,47.62-15,56.09-13.43C215.2,108.69,212.91,127,209.39,142.12Z" transform="translate(-1.11 -0.31)" fill="#595959"></path>
// <polygon points="15.62 44.48 31.33 44.48 31.33 30 42.09 40.76 46.19 44.86 30 58.86 15.62 44.48" fill="#735f50"></polygon>
// <path d="M210.06,35.07H191.2l38.09-14.76s-61.62-20-87.14-20C130.25.31,104.25,12,79.87,24.6,71.58,28.88,1.11,68.41,1.11,68.41s5.24,61.71,5.52,61.24A113.85,113.85,0,0,1,35.2,59.93C45.68,49.17,72,41.07,86.44,40.69c48.19,48.09,89.9,25.52,110.28,8.1C196.82,48.79,210.06,35.07,210.06,35.07Z" transform="translate(-1.11 -0.31)" fill="#6d5b53"></path>
// <path d="M333.1,37.93h20.38V86.12L353,108c11-9.71,24.38-16.86,37.71-16.86,31.33,0,47.9,24.09,47.9,61.33,0,41.24-24.57,65.33-52.19,65.33-11.14,0-23.81-5.43-34.57-15h-.76l-1.71,11.9H333l.1-176.85ZM383,200.59c19.9,0,34.57-18.1,34.57-47.9,0-26.57-9-44.48-31.81-44.48-10.19,0-20.86,5.71-32.28,16.38v63.33C364.14,197.07,375.1,200.59,383,200.59Z" transform="translate(-1.11 -0.31)" fill="#fff"></path>
// <path d="M467.28,56c0-7.9,6.19-13.14,14.19-13.14S495.66,48.12,495.66,56c0,7.71-6.19,13.14-14.19,13.14S467.28,63.74,467.28,56ZM471,94h20.38V214.78H471Z" transform="translate(-1.11 -0.31)" fill="#fff"></path>
// <path d="M532,37.93h20.38v154c0,6.48,2.76,9,5.71,9a18.1,18.1,0,0,0,4.48-.48l2.76,15.43c-2.76,1.24-6.19,2-11.71,2-15.43,0-21.62-9.71-21.62-27.33V37.93Z" transform="translate(-1.11 -0.31)" fill="#fff"></path>
// <path d="M595.47,37.93h20.38v154c0,6.48,2.76,9,5.72,9a18.09,18.09,0,0,0,4.48-.48l2.67,15.33c-2.76,1.24-6.19,2-11.71,2-15.43,0-21.62-9.71-21.62-27.33l.09-152.47Z" transform="translate(-1.11 -0.31)" fill="#fff"></path>
// <path d="M659.75,249.73c13.62,0,22.38-11,27.33-25.81l2.76-9L641.37,94h21.14l24.57,66.85c3.72,10.48,7.9,22.86,11.71,34h1c3.52-11,7-23.33,10.19-34L731.56,94h19.9L706,224.69c-8.48,23.81-20.86,42-45.24,42a39.78,39.78,0,0,1-14.19-2.48l4-16.19A34.61,34.61,0,0,0,659.75,249.73Z" transform="translate(-1.11 -0.31)" fill="#fff"></path>
// <path d="M779.08,40.12A21.9,21.9,0,1,1,757.18,62a21.91,21.91,0,0,1,21.9-21.9m0-2a23.81,23.81,0,1,0,23.81,23.81,23.82,23.82,0,0,0-23.81-23.81Z" transform="translate(-1.11 -0.31)" fill="#fff"></path>
// <path d="M785,73.46l-5.52-9.71h-4.19v9.71h-3v-23h7.24c4.67,0,8.09,1.71,8.09,6.48,0,3.62-2,5.71-5.14,6.57l5.91,10.1H785v-.1Zm-9.71-12.1h3.9c3.62,0,5.52-1.52,5.52-4.48s-2-4.1-5.52-4.1h-3.9Z" transform="translate(-1.11 -0.31)" fill="#fff"></path>
// <rect x="161.42" y="123.49" width="20.2" height="5.4" fill="#595959"></rect>
// <path d="M105.8,206.4c-.4,0-26.4-3.1-51.3-24.2l-2.8,3.1c2.6,2.2,5.3,4.3,7.9,6.2,23.3,16.5,45.4,19,45.7,19.1Z" transform="translate(-1.11 -0.31)" fill="#515050"></path>
// </svg>