import './App.css';
import Escena from './components/escena/Escena';
import phrases from "./components/escena/Phrases";


function App() {

  const oraciones = phrases.map(phrase => {
    return (
      phrase.text
    )
  });


  return (
    <div className="App">
      <header className="">
        <Escena
          frase={oraciones[0]}
        />
        <Escena
          frase={oraciones[1]}
        />
        <Escena
          frase={oraciones[2]}
        />
        <Escena
          frase={oraciones[3]}
        />

      </header>
    </div>
  );
}

export default App;
