import './App.css';
import HeaderBar from './component/HeaderBar';
import SideBar from './component/SideBar';


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <div className="d-flex flex-column flex-root ">
        <div className="flex-row flex-column-fluid page">
          <SideBar />

        </div>
      </div>
    </div>
  );
}

export default App;
