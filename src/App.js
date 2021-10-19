import './App.css';
import BottomBar from './component/BottomBar';
import LeftBar from './component/LeftBar';
import RightBar from './component/RightBar';

function App() {
  return (
    <div className="App h-screen bg-cover bg-center bg-app-background">
      <div className="grid grid-cols-2 gap-5">
        <div className="px-10 py-5">
          <LeftBar />
        </div>
        <div className="px-10 py-5">
          <RightBar />
        </div>
      </div>
      <div className="grid grid-cols-full">
        <BottomBar />
      </div>
    </div>
  );
}

export default App;
