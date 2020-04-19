import Header from './Header';
import Footer from './Footer';


const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
    <style jsx global>{`
      body {
        position: static !important;
        padding-top: 3.75rem;
        font-family: "proxima-nova","Arial","Gill Sans","Calibri",sans-serif;;
        margin: 0;
        font-size: 1rem;
        font-weight: 400;
        opacity: 1;
        line-height: 1.5;
        color: #354a59;
        text-align: left;
        background-color: #fff;
      }
      h1 {
        font-size: 2.5rem;
      }
      h1, h2, h3, h4, h5 {
        font-family: sans-serif;
        margin-top: 0;
        margin-bottom: .5rem;
        font-weight: 300;
        line-height: 1.2;
        color: inherit;
      }
      .nav-link {
        color: #399de5;
        font-weight: 600;
        font-size: 1rem;
        opacity: 1;
        text-decoration: none;
        cursor: pointer;
      }
      .text-center {
        text-align: center !important;
      }
      .btn {
        display: flex;
        font-weight: 600;
        color: #354a59;
        align-items: center;
        justify-content: center;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        padding: .6rem 1.25rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;
        transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
        transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;
      }
      .btn-success {
        background-color: #66cc6e;
        border-color: #42a54a;
        color: #fff;
      } 
      .btn-success:hover, .btn-success:active, .btn-success:focus {
        color: #fff;
        background-color: #6ecf75;
        border-color: #48b451;
      }
      .btn-primary {
        color: #fff;
        background-color: #399de5;
        border-color: #399de5;
        border-color: #1377bf;
        color: #fff;
        text-decoration: none;
      }
      .btn-primary:hover, .btn-primary:active, .btn-primary:focus {
        color: #fff;
        background-color: #42a1e6;
        border-color: #1583d2;
      }
      .btn-sm {
        width: 3.875rem;
        height: 1.313rem;
        padding: .25rem .5rem;
        font-size: .775rem;
        line-height: 1.5;
        border-radius: .2rem;
      }
      .arrow {
        width: 1.125rem;
        height: 0.8125rem;
        margin-left: 5px;
      }
      
    `}</style>
  </div>
);

export default Layout;