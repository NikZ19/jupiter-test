import './App.css';
import { Header } from './Components/Header/Header';
import { Portfolio } from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="root">
      <Header />
      <Portfolio />
    </div>
  );
}
export { App };