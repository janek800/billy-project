import { useState, useEffect, useRef } from 'react';
import phone from '../images/phone.svg';
import envelope from '../images/envelope.svg';
import facebook from '../images/facebook.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';

const Footer = () => {

  const ref = useRef();

  const [isModalOpen, setModalOpen] = useState('hidden');

  useOnClickOutside(ref, () => setModalOpen('hidden'));
  
  return (
    <div className='footer'>
    <div className='container-fluid'>
      <div className='footer-row text-center footer-navigation'>
        <ul className='footer-navigation-list' ref={ref}>
          <li className='list-item' key={1} >
            <a onClick={() => setModalOpen('Om os')} >Om os</a>
            <div className={(isModalOpen === 'Om os')? "dropdown-content dropdown-content-om" : 'dropdown-content-hidden'}>
              <a className='dropdown-item' href='/'>Team</a>
              <a className='dropdown-item' href='/'>Medier</a>
              <a className='dropdown-item' href='/'>Historie</a>
              <a className='dropdown-item' href='/'>Kontakt</a>
              <a className='dropdown-item' href='/'>Pressekit</a>
              <a className='dropdown-item' href='/'>Jobs</a>
            </div>
          </li>
          <li className='list-item' key={2} >
            <a onClick={() => setModalOpen('Revisor')} >Revisor</a>
            <div className={(isModalOpen === 'Revisor')? "dropdown-content" : 'dropdown-content-hidden'}>
              <a className='dropdown-item' href='/'>Find revisor</a>
              <a className='dropdown-item' href='/'>For revisorer</a>
            </div>
          </li>
          <li className='list-item' key={3}>
            <a onClick={() => setModalOpen('Samarbejde')} >Samarbejde</a>
            <div className={(isModalOpen === 'Samarbejde')? "dropdown-content" : 'dropdown-content-hidden'}>
              <a className='dropdown-item' href='/'>Integrationer</a>
              <a className='dropdown-item' href='/'>For udviklere</a>
              <a className='dropdown-item' href='/'>Affiliate partner</a>
            </div>
          </li>
          <li className='list-item' key={4}><a href='/'>Bøger</a></li>
          <li className='list-item' key={5}><a href='/'>Blog</a></li>
          <li className='list-item' key={6}><a href='/'>Status</a></li>
          <li className='list-item' key={7}><a href='/'>Nyhedsbrev</a></li>
          <li className='list-item' key={8}><a href='/'>Nye funktioner</a></li>
          <li className='list-item' key={9}>
            <a onClick={() => setModalOpen('Bogføringshjælp')} >Bogføringshjælp</a>
            <div className={(isModalOpen === 'Bogføringshjælp')? "dropdown-content" : 'dropdown-content-hidden'}>
              <a className='dropdown-item' href='/'>Billy Bogføringshjælp</a>
              <a className='dropdown-item' href='/'>Billypedia</a>
            </div>
          </li>
        </ul>
        <a className='btn btn-success' href="/">Prøv gratis i 30 dage</a>
      </div>
      <div className='footer-second-line'>        
        <div className='contact'>
          <img className='phone' src={phone} />
          <a href="tel:+4560246024/">60 24 60 24</a>
        </div>
        <div className='contact'>
          <img className='envelope' src={envelope} />
          <a href="mailto:billy@billy.dk">billy@billy.dk</a>
        </div>
        <div className='icons-social'>
          <a href="https://www.facebook.com/regnskabsprogram.online/" target='_blank'>
          <img className='follow' src={facebook} />
          </a>
          <a href="https://www.linkedin.com/company/billysbilling/" target='_blank'>
            <img className='follow' src={linkedin} />
          </a>
          <a href="https://twitter.com/BillyRegnskab/" target='_blank'>
            <img className='follow' src={twitter} />
          </a>
        </div>
        <div className='info'>
          <div className='info-item'>© 2010-2020 Billy</div>
          <div className='info-item'>
            <a onClick={() => setModalOpen('GDPR')} >GDPR</a>
            <div className={(isModalOpen === 'GDPR')? "dropdown-content dropdown-content-gdpr" : 'dropdown-content-hidden'}>
              <a className='dropdown-item' href='/'>Cookie- og privatslivspolitik</a>
              <a className='dropdown-item' href='/'>Databehandleraftale</a>
              <a className='dropdown-item' href='/'>ISAE 3000 certificering</a>
            </div>
          </div>
          <div className='info-item'>
            <a href='/'>Betingelser</a>
          </div>
        </div>
        <div className='info'>
          <div className='info-item'>Vesterbrogade 1C</div>
          <div className='info-item'>1620 København V</div>
          <div className='info-item'>CVR-nr. 33239106</div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .footer {
        background-color: #399de5;
        color: #fff;
        height: 18.75rem;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0 .9375rem;
        height: 11.5625rem;
      }
      .footer-navigation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .9375rem;
      }
      .footer-navigation-list {
        margin: 0;
        padding-left: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
      }
      .container-fluid {
        padding-right: .938rem;
        padding-left: .938rem;
        margin-right: auto;
        margin-left: auto;
      } 
      .footer-row {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -.938rem;
        margin-left: -.938rem;
      }
      .list-item {
        margin-right: 1.125rem;
        display: inline-block;
        cursor: pointer;
      }
      .dropdown-content {
        position: absolute;
        z-index: 1000;
        display: block;
        float: left;
        min-width: 10rem;
        padding: .5rem 0;
        margin: .125rem 0 0;
        font-size: 1rem;
        color: #354a59;
        text-align: left;
        list-style: none;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0,0,0,0.15);
        border-radius: .25rem;
      }
      .dropdown-content-om {
        transform: translate3d(0rem, -14.688rem, 0rem);
      }
      .dropdown-content-gdpr {
        transform: translate3d(0rem, -8.75rem, 0rem);
      }
      a {
        text-decoration: none;
        color: #fff;
        cursor: pointer;
        font-weight: 600;
      }
      .dropdown-content-hidden {
        display: none;
      }
      .dropdown-item {
        display: block;
        padding: .25rem 1.5rem;
        clear: both;
        font-weight: 400;
        color: #212529;
        text-decoration: none;
        text-align: inherit;
        white-space: nowrap;
        background-color: transparent;
        border: 0;
      }
      .footer-second-line {
        border-top: solid 2px #2c95e1;
        padding-top: 1.563rem;
        display: flex;
        flex-direction: row;
      }
      .contact {
        margin-right: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .phone {
        width: .8125rem;
        height: 1.125rem;
        position: relative;
        margin-right: .4rem;
        bottom: .0625rem;
      }
      .envelope {
        width: 1.3125rem;
        height: 1rem;
        position: relative;
        margin-right: .4rem;
        bottom: .0625rem;
      }
      .icons-social {
        margin-top: 0;
      }
      .follow {
        margin-right: .9375rem;
        width: 1.25rem;
        height: 1.25rem;
        position: relative;
        bottom: .0625rem;
      }
      .info {
        display: flex;
      }
      .info-item {
        margin-right: 0;
        margin-left: 1.25rem;
      }
    `}</style>
    
  </div>
  )
}

function useOnClickOutside(ref, handler) {
  useEffect(

    () => {
      const listener = event => {

        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    [ref, handler]
  );
}

export default Footer
