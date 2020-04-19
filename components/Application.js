
const Application = ({ name, type, description, image }) => (
  <div className='app-item'>
    <a href="/" className='app-link'>
      <div className='application-row'>
        <img src={image} className='app-img'/>
                  
        <div className='app-description'>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{description}</p>
        </div>
      </div>
    </a>
    <style jsx>{`
      .app-item{
        display: flex; 
      }
      .app-link {
        font-size: .875rem;
        color: #354a59;
        font-weight: 600;
        opacity: 1;
        text-decoration: none;
      }
      .application-row {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 23.75rem;
        height: 8rem;
        border-bottom: 
      }
      .application-row:hover {
        background-color: #e8eff4;;
      }
      .app-img {
        height: 5.125rem;
        width: 5.125rem;
        padding: 0 .938rem;
      }
      .app-description {
        width: 14.063rem;
        height: 5.125rem;
      }
      p {
        margin: 0;
      }
      h3 {
        font-size: 1rem;
        font-weight: 600;
        margin: 0;
      }
      `}</style>
  </div>
)

export default Application