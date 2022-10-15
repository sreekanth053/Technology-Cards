// Write your code here.
import './index.css'

const TechnologyCardsList = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={className}>
      <div className="technology-details-container">
        <h1 className="technology-name">{title}</h1>
        <p className="technology-details">{description}</p>
      </div>
      <img src={imgUrl} className="imgUrl" alt={title} />
    </li>
  )
}

export default TechnologyCardsList
