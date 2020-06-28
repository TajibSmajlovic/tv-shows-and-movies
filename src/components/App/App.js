import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Root from 'components/Root/Root';
import { AppProvider } from 'context/AppContext';
import { Container } from 'components';

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Container>
        <Root />
      </Container>
    </AppProvider>
  </BrowserRouter>
);

export default App;
