
import { useCatImage } from './hooks/useCatImage.js' //custom hook que devuelve la imageurl a partir de un fact
import { useCatFact } from './hooks/useCatFact.js'
import './App.css'


function App() {

  const {fact, refreshFact} = useCatFact()
  const {imageUrl} = useCatImage({fact})

  //Boton para pedir nuevos facts
  const handleClick = async () => {
    refreshFact()
  }
  

  return (
    <main>
      <h1>App de gatos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Imagen extraida usando la primera palabra de la primera API: ${fact}`}/>}
    </main>
  )
}

export default App
