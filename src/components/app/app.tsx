import { Main } from '../../pages/main/main';

type AppProps = {
  offerCount: number;
};

const App = (props: AppProps) => {
  const { offerCount } = props;

  return <Main offerCount={offerCount} />;
};

export { App };
