import React from 'react';
import Routes from './routes';
import GlobalStyle from './globalStyles';
import Layout from './components/layout';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes />
      </Layout>
    </>
  );
};

export default App;