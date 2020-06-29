import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Root from 'components/Root/Root';
import { AppProvider } from 'context/AppContext';
import { Container, CenteredContent, Loader } from 'components';

const App: React.FC = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <CenteredContent>
          <Loader />
        </CenteredContent>
      }
    >
      <AppProvider>
        <Container>
          <Root />
        </Container>
      </AppProvider>
    </Suspense>
  </BrowserRouter>
);

export default App;
