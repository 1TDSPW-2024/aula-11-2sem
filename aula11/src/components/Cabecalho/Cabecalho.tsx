
import Menu from "../Menu/Menu";
import "../../style/style.scss";
import { useState } from "react";
 
export default function Cabecalho(){
 
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
 
  const trocaTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark': 'light'))
  }
 
  return(
    <div>
      <header className={`app ${theme}`}>
        <h1>Cabeçalho</h1>
        <button onClick={() => trocaTheme()}>Mude o Thema</button>
        <Menu/>
      </header>
    </div>
  );
}