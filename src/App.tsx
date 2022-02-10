import { RoutesApp } from './routes';
import GlobalStyles from './global';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <RoutesApp />
    </>
  );
}

export default App;
