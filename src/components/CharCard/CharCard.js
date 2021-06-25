import React from "react";

function CharCard(props) {
  const { name, gender, vision, description } = props.data;

  return (
    <div className="col l4 m6 s12">
      <div className="card">
      <h5>{name}</h5>
      <div className='card-wrapper'>     
         <div className="card-image">
            <img src={`https://genshinlist.com/assets/img/characters/${name.toLowerCase()}.png`} alt={name}/>
        </div>
        <div className="card-info">
          gender: {gender} <br />
          vision: {vision}
        </div>
      </div>
      <div className="card-content">{description}</div>
      <div className="card-action">
        <a href="/#">Подробнее</a>
      </div>
      </div>
    </div>
  );
}

export default CharCard;
