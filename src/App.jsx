import { useState, useEffect } from 'react';
import * as fighterService from './services/fighterService';
import FighterList from "./components/FighterList/FighterList"
import FighterDetail from './components/FighterDetails/FighterDetails';
import FighterForm from './components/FighterForm/FighterForm';
import { Route, Router, Routes } from 'react-router-dom';
import LandingPage from './components/landing/landingPage';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import NavBar from './components/NavBar/NavBar';


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
      setSelected(newFighter)
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
      const deleteFighter = await fighterService.deleteFighter(fighterId);

      if (deleteFighter.err) {
        throw new Error(deleteFighter.err);
      }

      setFighters(fighters.filter((fighter) => fighter._id !== deleteFighter._id));
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
    <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/fighterList' element={<FighterList fighters={fighters} handleSelect={handleSelect} handleFormView= {handleFormView} isFormOpen={isFormOpen} />} />
        <Route path='/fighterForm' element={<FighterForm selected={selected} handleAddFighter={handleAddFighter}  handleUpdateFighter={handleUpdateFighter}/>}/>
        <Route path='/fighterDetails' element={<FighterDetail selected={selected} handleFormView={handleFormView} handleDeleteFighter={handleDeleteFighter}/>}/>
        <Route path='/signUp' element={<SignUpForm/>}/>
        <Route path='/signIn' element={<SignInForm/>}/>
      </Routes>
    </>
  )
}

export default App
