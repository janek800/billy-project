
const InfoTop = ({ filter, info }) => {  

  const textToDisplay = info.filter((element) => element.type === filter);

  return (
    <div className='info-top'>
    <div className='info-top-text'>
      <p className='mb-10'><b>{textToDisplay[0].bold}</b></p>
      <h4>{textToDisplay[0].h4}</h4>
      <p>{textToDisplay[0].p}</p>
      <a href={textToDisplay[0].link} className='nav-link'>{textToDisplay[0].linktext}
        <img className='arrow' src={'https://d33wubrfki0l68.cloudfront.net/ff0d5c197f69896be1b3fedd0d7b387fc9de4bfc/587bd/assets/images/icons/arrows/arrow.svg'}/>
      </a>
    </div>
    <div>
      <img className='info-top-img' src={textToDisplay[0].img} />
    </div>
    <style jsx>{`
      .info-top {
        display: flex;
        margin-bottom: 1.875rem;
      }
      .info-top-text {
        width: 45.625rem;
      }
      .mb-10 {
        margin-bottom: .625rem
      }
      h4 {
        font-size: 1.5rem;
      }
      .info-top-img {
        width: 21.875rem;
        height: 12.5rem;
      }
      
      `}</style>
  </div>
  )
}

export default InfoTop

