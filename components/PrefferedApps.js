import Application from './Application'

const PrefferedApps = ({ prefferedApps}) => (
  <div>
    <div className='preffered'>
      <h4>Fremhævede partnere</h4>
    </div>
    <div className='preffered-items'>
      {prefferedApps.map((app) => (
        <Application key={app.id} name={app.name} type={app.type} description={app.description} image={app.image}/>
      ))}
    </div>
    <style jsx>{`
      .preffered {
        display: flex;
        justify-content: center;
        margin-top: 1.875rem;
        padding-top: 2.188rem;
        padding-bottom: .938rem;
      }
      .preffered-items {
        display: flex;
        flex-wrap: wrap;
        margin-right: -.938rem;
        margin-left: -.938rem;
      }
      h4 {
        font-size: 1.5rem;
      }
      `}</style>
  </div>

)

export default PrefferedApps
