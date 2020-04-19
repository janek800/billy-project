import Application from './Application'

const Apps = ({ filter, apps }) => (
  <div className='apps-container'>
    {filter === 'Alle'
  ?
  <div className='apps'>
    {apps.map((app) => (
      <Application key={app.id} name={app.name} type={app.type} description={app.description} image={app.image}/>
    ))}
  </div>
  :
  <div className='apps'>
    {apps.filter((app) => app.type === filter).map((app) => (
      <Application key={app.id} name={app.name} type={app.type} description={app.description} image={app.image}/>
    ))}
  </div>
  }
  <style jsx>{`
      .apps-container {
        padding-top: 2.813rem;
        border-top: 1px solid #e8eff4;
      }
      .apps {
        display: flex;
        flex-wrap: wrap;
        margin-right: -0.938rem;
        margin-left: -0.938rem;
      }
      `}</style>
  </div>

)

export default Apps

