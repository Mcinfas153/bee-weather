import './App.css';
import BottomBar from './component/BottomBar';
import LeftBar from './component/LeftBar';
import RightBar from './component/RightBar';

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-2">
        <div className="bg-red-500 ">
          <LeftBar />
        </div>
        <div className="bg-green-500">
          <RightBar />
        </div>
      </div>
      <div className="grid grid-cols-full bg-blue-500">
        <BottomBar />
      </div>
    </div>
  );
}

export default App;
