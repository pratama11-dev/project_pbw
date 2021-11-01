import './App.css';
import HeaderBar from './component/HeaderBar';
import SideBar from './component/SideBar';
import HomeScreen from './screen/HomeScreen';


function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column flex-root ">
        <div className="d-flex flex-row flex-column-fluid page">
          <SideBar />
          <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
            <HeaderBar />
            <HomeScreen />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
