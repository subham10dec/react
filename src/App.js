// import logo from './logo.svg';
// import './App.css';
import Tasks from './components/Tasks/Tasks';
import store from './store';
import {Provider} from 'react-redux'

function App() {
  return (
      <Provider store={store}>
 <Tasks />

<p>ddddddd</p>





      </Provider>
     
   
  );
}

export default App;
