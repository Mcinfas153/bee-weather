import './App.css';
import BottomBar from './component/BottomBar';
import LeftBar from './component/LeftBar';
import RightBar from './component/RightBar';

function App() {
  return (
    <div className="App">
      <LeftBar />
      <RightBar />
      <BottomBar />
    </div>
  );
}

export default App;
