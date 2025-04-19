import { useState, useEffect } from 'react';
import * as fighterService from './services/fighterService';
import FighterList from "./components/FighterList/FighterList"
import FighterDetail from './components/FighterDetails/FighterDetails';
import FighterForm from './components/FighterForm/FighterForm';


function App() {
  const [fighters, setFighters] = useState([])
  const [selected, setSelected] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleSelect = (fighter) => {
    setSelected(fighter)
  }

  const handleFormView = (fighter) => {
    if (!fighter._id) setSelected(null)
    setIsFormOpen(!isFormOpen)
  }

  const handleAddFighter = async (formData) => {
    try {
      const newFighter = await fighterService.create(formData)

      if (newFighter.err) {
        throw new Error(newFighter.err)
      }

      setFighters([...fighters, newFighter])
      setIsFormOpen(false)
    } catch (err) {
      console.log(err);
      
    }
  }

  const handleUpdateFighter = async (formData, fighterId) => {
    try {
      const updatedFighter = await fighterService.update(formData, fighterId)

      if (updatedFighter.err) {
        throw new Error(updatedFighter.err)
      }

      const updatedFighterList = fighters.map((fighter) => (
        fighter._id !== updatedFighter._id ? fighter : updatedFighter
      ))

      setFighters(updatedFighterList)
      setSelected(updatedFighter)
      setIsFormOpen(false)
    } catch (err) {
      console.log(err);
      
      
    }
  }

  const handleDeleteFighter = async (fighterId) => {
    try {
      const deletedFighter = await fighterService.deletedFighter(fighterId);

      if (deletedFighter.err) {
        throw new Error(deletedFighter.err);
      }

      setFighters(fighters.filter((fighter) => fighter._id !== deletedFighter._id));
      setSelected(null);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };


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
      <FighterList 
      fighters={fighters} 
      handleSelect={handleSelect} 
      handleFormView={handleFormView}
      isFormOpen={isFormOpen} 
      />
      {isFormOpen ? (
      <FighterForm selected={selected} 
      handleAddFighter={handleAddFighter} 
      handleUpdateFighter={handleUpdateFighter}
      />
      ) : (
      <FighterDetail selected={selected} 
      handleFormView={handleFormView} 
      handleDeleteFighter={handleDeleteFighter}
       />
      )}
    </>
  )
}

export default App
