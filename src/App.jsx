import { useState, useEffect } from 'react';
import * as fighterService from './services/fighterService';
import FighterList from "./components/FighterList/FighterList"

function App() {
  const [fighters, setFighters] = useState([])

  useEffect(() => {
    const fetchFighters = async () => {
      try {
        const fetchedFighters = await fighterService.index()
        if (fetchedFighters.err) {
          throw new Error(fetchedFighters.err);
        }
        setFighters(fetchedFighters);
      } catch (err) {
        console.log(err);
      }
    };

     fetchFighters()
  }, [])

  return (
    <>
      <FighterList fighters={fighters} />
    </>
  )
}

export default App
