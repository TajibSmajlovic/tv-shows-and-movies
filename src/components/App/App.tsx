import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Root from 'components/Root/Root';
import { AppProvider } from 'context/AppContext';
import { Container, Loader } from 'components';

const App: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <AppProvider>
        <Container>
          <Root />
        </Container>
      </AppProvider>
    </Suspense>
  </BrowserRouter>
);

export default App;
