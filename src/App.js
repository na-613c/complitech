import './App.css';
import FloorPlan from './components/FloorPlan/FloorPlan';
import UserList from './components/UserList/UserList';

const App = ({ floor }) => {

  return (
    <div className="App">
      <UserList />
      <FloorPlan floor={floor} />
    </div>
  );
}

export default App;
