import Deezer from './components/Deezer';
import Artist from './components/Artist';
import Genre from './components/Genre';
import Track from './components/Track';
import './App.css';

function App(data) {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <Deezer />
      <Artist data={data} />
      <Genre data={data} />
      <Track data={data} />
    </div>
  );
}

export default App;
