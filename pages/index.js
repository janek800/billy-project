import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import InfoTop from '../components/InfoTop';
import InfoBottom from '../components/InfoBottom';
import PrefferedApps from '../components/PrefferedApps';
import Apps from '../components/Apps';
	
import { Client } from '../prismic-configuration'


 const Index = ({ doc }) => {

  const [filter, setFilter] = React.useState('Alle');

  const infoTopFilter = doc.data.info.map((element) => element.type);


  return (
    <Layout >
      <div className='block-blue-gray'>
        <div className='container'>
          <Title />
          <div>
              <ul className='navigation'>
                <li key={1} onClick={() => setFilter('Alle')}>
                  <a className={`nav-link nav-link-navigation ${(filter === 'Alle') && 'nav-link-selected'}`}>Alle</a>
                </li>
                <li key={2} onClick={() => setFilter('Webshop')}>
                  <a className={`nav-link  nav-link-navigation ${(filter === 'Webshop') && 'nav-link-selected'}`}>Webshop</a>
                </li>
                <li key={3} onClick={() => setFilter('POS')}>
                  <a className={`nav-link nav-link-navigation ${(filter === 'POS') && 'nav-link-selected'}`}>POS</a>
                </li>
                <li key={4} onClick={() => setFilter('Inkasso')}>
                  <a className={`nav-link nav-link-navigation ${(filter === 'Inkasso') && 'nav-link-selected'}`}>Inkasso</a>
                </li>
                <li key={5} onClick={() => setFilter('Billy')}>
                  <a className={`nav-link nav-link-navigation ${(filter === 'Billy') && 'nav-link-selected'}`}>Billy</a>
                </li>
                <li key={6} onClick={() => setFilter('Andre')}>
                  <a className={`nav-link nav-link-navigation ${(filter === 'Andre') && 'nav-link-selected'}`}>Andre</a>
                </li>
              </ul>
          </div>
          {infoTopFilter.includes(filter) && <InfoTop filter={filter} info={doc.data.info}/>}
          
          {filter === 'Alle' 
          ? 
          <div>
            <PrefferedApps prefferedApps={doc.data.prefferedapps}/>
            <Apps filter={filter} apps={doc.data.apps}/> 
          </div>
          :
          <Apps filter={filter} apps={doc.data.apps}/>
          }
          
        </div>
        
      </div>
      <InfoBottom />
      <style jsx>{`
      .block-blue-gray {
        background-color: #f7fafc;
        padding-bottom: 3.75rem 
      }
      .container {
        padding-top: 2.8125rem;
        padding-bottom: 3.75rem
        padding-right: .938rem;
        padding-left: .938rem;
        width: 71.25rem;
        margin-right: auto;
        margin-left: auto;
      }
      .navigation {
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style: none;
        margin: 0 0 1rem 0;
        padding: .625rem 0;
      }
      .nav-link-navigation {
        padding: 0 .625rem;

      }
      .nav-link-selected {
        text-decoration: underline;
      }
      
    `}</style>
    </Layout>
  );
}

Index.getInitialProps = async function({ req }) {
  try {
    const doc = await Client(req).getByUID("billy_data",'apps');

    return {
      doc
    };
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default Index


