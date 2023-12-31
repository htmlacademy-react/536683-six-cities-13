import { FormEvent, useRef } from 'react';
import { Header } from '../../components/header/header';
import { useAppSelector } from '../../hooks/use-app-selector';
import { AppRoute, AuthStatus } from '../../const';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { login } from '../../store/async-actions';
import { getAuthStatus } from '../../store/user-process/selectors';
import { getRandomLocation } from '../../utils/utils';
import { changeLocation } from '../../store/app-process/app-process';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const randomLocation = getRandomLocation();

  const handleRandomLocationClick = () => {
    dispatch(changeLocation(randomLocation));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      const email = emailRef.current.value.trim();
      const password = passwordRef.current.value.trim();

      dispatch(login({ email, password }));
    }
  };

  if (authStatus === AuthStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  pattern="\d+[a-zA-Z]+|[a-zA-Z]+\d+"
                  minLength={2}
                  ref={passwordRef}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Root}
                onClick={handleRandomLocationClick}
              >
                {randomLocation}
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export { LoginPage };
