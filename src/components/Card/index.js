import React from "react";

function Card({ props, name, image, id, title}) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Job Title:</strong> {title}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeCard(id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default Card;