
function Card({title,description}){
    return(
      <div className="card">
        <img src="" alt="" />
        <h1>{title} </h1>
        <p>{description}</p>
        <span>&star;</span>
      </div>
    )
  }

export default Card