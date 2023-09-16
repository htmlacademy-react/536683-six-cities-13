import { PropsWithChildren } from 'react';
import { Logo } from '../logo/logo';

type THeaderProps = PropsWithChildren;

const Header = ({ children }: THeaderProps) => (
  <header className="header" data-testid="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo />
        </div>
        {children}
      </div>
    </div>
  </header>
);

export { Header };
