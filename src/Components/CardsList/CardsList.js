import { useEffect, useState } from 'react';
import { cardsData } from '../../utils/cardsData';
import { Card } from '../Card/Card';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import './CardsList.css';

function CardsList() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 1040 ? true : false;

  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [cardsCount, setCardsCount] = useState(9);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  // const tags = ['Show All', ...cards.map(card => card.tag).filter((tag, i, arr) => arr.indexOf(tag) === i)];
  const tags = ['Show All', 'Design', 'Branding', 'Illustration', 'Motion'];

  const [currentTag, setCurrentTag] = useState('Show All');

  useEffect(() => {
    setFilteredCards(filterByTag(cards, currentTag));
  }, [cards, currentTag]);

  const handleClickButton = () => {
    setCardsCount(cardsCount + 9);
  };

  const filterByTag = (arr, tag) => {
    if (tag === 'Show All') return arr;
    return arr.filter(card => card.tag === tag);
  };

  const handleClickTag = (e) => {
    e.stopPropagation();
    setCurrentTag(isMobile ? e.target.value : e.target.innerText);
    setFilteredCards(filterByTag(cards, currentTag));
  };

  const handleRemoveClick = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <section className='cards-list' >
      <div className='cards-list__container root__container'>
        {isMobile ? (
          <div className='cards-list__select-wrapper'>
            <select className='cards-list__select' onChange={handleClickTag}>
              {tags.map((tag, i) => (
                <option value={tag} key={i}>{tag}</option>
              ))}
            </select>
          </div>
        ) : (
          <ul className='cards-list__filters-list'>
            {tags.map((tag, i) => (
              <li className={`cards-list__filter ${tag === currentTag && 'cards-list__filter_active'}`} key={i} onClick={handleClickTag}>
                {tag}
              </li>
            ))}
          </ul>
        )}

        <ul className='cards-list__list'>{filteredCards.slice(0, cardsCount).map(card => (
          <Card key={card.id} card={card} handleClickTag={handleClickTag} handleRemoveClick={handleRemoveClick} />
        ))}
        </ul>
        {(filteredCards.length > 9) && (cardsCount < filteredCards.length)
          && <button className='cards-list__load-more-cards' type='button' onClick={handleClickButton}>load more</button>
        }
      </div>
    </section >
  );
}

export { CardsList };