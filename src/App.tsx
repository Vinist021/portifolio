import { ThemeProvider } from 'styled-components';

import original from 'react95/dist/themes/original'

import Page from './page/page';

const App = () => (
  <div>
    <ThemeProvider theme={original}>
      <Page />
    </ThemeProvider>
  </div>
);

export default App;