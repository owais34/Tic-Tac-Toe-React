import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Board from './components/Board/Board';
import CreateGame from './components/CreateGame/CreateGame';
import Home from './components/Home/Home';
import JoinGame from './components/JoinGame/JoinGame';
import Wait from './components/Wait/Wait';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/create">
        <CreateGame/>
      </Route>
      <Route path="/join">
        <JoinGame/>
      </Route>
      <Route path="/board">
        <Board/>
      </Route>
      <Route path="/waitingrc">
        <Wait motive={"room creation"}/>
      </Route>
      <Route path="/waitingo">
        <Wait motive={"opponent"}/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
