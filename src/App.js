import './App.css';
import { useState } from "react";
import Nav from "./components/escena/Nav"
import Escena from './components/escena/Escena';
import phrases from "./components/escena/Phrases";
import { ButtonsDiv } from "./components/escena/styled";


function App() {

  const [count, setCount] = useState(1);

  // const oraciones = phrases.map(phrase => {
  //   return (
  //     phrase.text
  //   )
  // });

  function handleClick(i) {
    setCount((prevCount) => {
      if (prevCount + i > phrases.length || prevCount + i <= 0) return prevCount;
      // console.log(i);
      // console.log(count);
      // console.log(prevCount);
      return prevCount + i;
    });
  }



  return (
    <div className="App">
      <header className="">

        <ButtonsDiv>
          <Nav handleClick={handleClick} />
        </ButtonsDiv>

        <Escena
          numEscena={count}
        />

        
        {/* <Escena
          frase={oraciones[0]}
          numEscena={count}
        />
        <Escena
          frase={oraciones[1]}
          numEscena={count}
        />
        <Escena
          frase={oraciones[2]}
          numEscena={count}
        />
        <Escena
          frase={oraciones[3]}
          numEscena={count}
        /> */}

      </header>
    </div>
  );
}

export default App;
