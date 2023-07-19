type TOfferGoodsProps = {
  goods: string[];
};

const OfferGoods = ({ goods }: TOfferGoodsProps) => (
  <div className="offer__inside">
    <h2 className="offer__inside-title">Whats inside</h2>
    <ul className="offer__inside-list">
      {goods.map((good) => (
        <li key={good} className="offer__inside-item">
          {good}
        </li>
      ))}
    </ul>
  </div>
);

export { OfferGoods };
