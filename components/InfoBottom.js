
const InfoBottom = () => (
  <div className='block-white'>
    <div className='info-bottom-container'>
      <div className='benefit-left'>
        <div className='billy-bottom-img-container'>
          <img className='billy-bottom-img' src="https://d33wubrfki0l68.cloudfront.net/13b8feb0c8c02658a8dd38de89c33be86eb1a239/dabf3/assets/images/illustrations/billy-heads/billy-wink-blue.svg"/>
        </div>
        <h2>Fordele med Billy</h2>
        <p>Som bruger af Billy kan du gøre brug af en række fordele hos vores samarbejdspartnere. Her kan du se én af vores mest populære fordele.</p>
        <a className='nav-link' href="https://www.billy.dk/apps/mobilepay/">
          Klik her for at se alle fordele.
          <img className='arrow' src={'https://d33wubrfki0l68.cloudfront.net/ff0d5c197f69896be1b3fedd0d7b387fc9de4bfc/587bd/assets/images/icons/arrows/arrow.svg'}/>
        </a>
        
      </div>

      <div className='benefit-right'>
        <div className='benefit-right-top-container'>
          <a href="/">
            <img className='benefit-right-top-img' src="https://d33wubrfki0l68.cloudfront.net/991066acc5cabffc0dd950de7cb41449a6ef3fd3/58e0f/assets/images/logos/partners/bluegarden/bluegarden-logo-stacked.svg"/>
          </a>
        </div>
        <div className='benefit-right-footer'>
          <h5>Rabat på personalejuridisk rådgivning</h5>
          <div className='benefit-right-footer-bottom'>
            <div className='benefit-right-footer-pricing'>
              <p className='link-color'>0 kr./2 md.</p>
              <p className='line-through'>fra 62 kr./md.</p>
            </div>
            <div className='benefit-right-button'>
              <a className='btn btn-sm btn-primary' href="https://www.billy.dk/apps/mobilepay/">Læs mere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .block-white {
        background-color: #fff;
        padding-top: 5.625rem;
        padding-bottom: 5.625rem;
        display: flex;
        justify-content: center;
      }
      .info-bottom-container {
        display: flex;
        max-width: 41.66667%;
      }
      .billy-bottom-img-container {
        display: flex;
        justify-content: center;
        height: 9.188rem;
      }
      .billy-bottom-img {
        width: 8rem;
        height: 8.25rem;
      }
      .benefit-left {
        width: 27.813rem;
        padding-right: 0.938rem;
      }
      .benefit-left > h2 {
        font-size: 2rem;
      }
      .benefit-left > p {
        margin: 0 0 1rem 0;
      }
      .benefit-right {
        width: 15.938rem;
        border: 1px solid #b5c6ce;
        border-radius: 0.313rem;
        margin-left: 0.938rem;
      }
      .benefit-right-top-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
      }
      .benefit-right-top-img {
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
        width: 9.375rem;
        height: 6.5rem;
      }
      .benefit-right-footer {
        height: 6.625rem;
        padding-top: 1.25rem;
        padding-bottom: 1.563rem;
        background-color: #f7fafc;
        border-top: 1px solid #b5c6ce;
      }
      .benefit-right-footer-pricing {
        font-size: .75rem;
        padding-left: .9375rem;
        text-align: left;
        padding: 0 .938rem;
        width: 6.938rem;
      }
      .benefit-right-footer-pricing > p {
        margin: 0;
      }
      .line-through {
        text-decoration: line-through;
      }
      .link-color {
        color: #399de5
      }
      .benefit-right-footer > h5 {
        text-align: center;
        font-weight: 300;
        font-size: 1.188rem;
        padding 0 .938rem;
        margin-bottom: .5rem;
      }
      .benefit-right-footer-bottom {
        display: flex;
        padding-top: .938rem;
      }
      .benefit-right-button {
        padding: 0 .938rem;
      }
      `}</style>
  </div>
)

export default InfoBottom;