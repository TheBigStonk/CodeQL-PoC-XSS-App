import clown from './clown.svg';
import './App.css';

// Custom React Components, one of which has an XSS vulnerability
import UpperCaseTextForm from './components/UpperCaseTextForm/UpperCaseTextForm';
import UpperLowerTextForm from './components/UpperLowerTextForm/UpperLowerTextForm';
import SpaceyTextForm from './components/SpaceyTextForm/SpaceyTextForm';
import LowerCaseTextForm from './components/LowerCaseTextForm/LowerCaseTextForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={clown} className="App-clown" />
        <UpperLowerTextForm></UpperLowerTextForm>
        <UpperCaseTextForm></UpperCaseTextForm>
        <SpaceyTextForm></SpaceyTextForm>
        <LowerCaseTextForm></LowerCaseTextForm>
      </header>
    </div>
  );
}

export default App;
