import { CardsList } from '../CardsList/CardsList';
import { Promo } from '../Promo/Promo';

function Portfolio() {
  return (
    <main className='portfolio'>
      <Promo title='Portfolio'>
        Agency provides a full service range including technical skills, design, business understanding.
      </Promo>
      <CardsList />
    </main>
  );
}

export { Portfolio };