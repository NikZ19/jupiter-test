import { useState } from 'react';
import './Card.css';

function Card({ card, handleClickTag, handleRemoveClick }) {
  const { title, tag, img, id } = card;
  const [cardIsActive, setCardIsActive] = useState(false);

  const handleClickCard = () => {
    setCardIsActive(!cardIsActive);
  };

  return (
    <li className={`card ${cardIsActive && 'card_active'} `} onClick={handleClickCard}>
      <img className='card__image' src={img} alt={`Изображение ${title}`} />
      {cardIsActive && (
        <button className='card__remove' type='button' onClick={() => handleRemoveClick(id)}>Delete</button>
      )}
      <div className='card__info'>
        <span className='card__tag' onClick={handleClickTag}>{tag}</span>
        <h2 className='card__title'>{title}</h2>
      </div>
    </li>
  );
}

export { Card };