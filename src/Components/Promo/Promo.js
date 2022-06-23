import './Promo.css';

function Promo({children, title}) {
  return (
    <section className='promo'>
      <div className='promo__container root__container'>
        <h1 className='promo__title'>{title}</h1>
        <p className='promo__description'>{children}</p>
      </div>
    </section>
  );
}

export { Promo };