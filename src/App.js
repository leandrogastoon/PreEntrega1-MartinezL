import logo from './logo.svg';
import './App.css';

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <ItemListContainer titulo= "titulo agregado con prop">
                <div>children</div>
      </ItemListContainer>
    </div>
  );
}

export default App;

