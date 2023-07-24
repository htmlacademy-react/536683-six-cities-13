import cn from 'classnames';

type TOfferHostProps = {
  hostInfo: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
    description: string;
  };
};

const OfferHost = ({ hostInfo }: TOfferHostProps) => {
  const { isPro, name, avatarUrl, description } = hostInfo;

  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div
          className={`offer__avatar-wrapper  user__avatar-wrapper ${cn({
            'offer__avatar-wrapper--pro': isPro,
          })}`}
        >
          <img
            className="offer__avatar user__avatar"
            src={avatarUrl}
            width={74}
            height={74}
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">{name}</span>
        {isPro && <span className="offer__user-status">Pro</span>}
      </div>
      <div className="offer__description">
        <p className="offer__text">{description}</p>
      </div>
    </div>
  );
};

export { OfferHost };
