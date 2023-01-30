
import { useSelector } from 'react-redux';
import './App.css';
import { Header } from './Components/header/Header';
import { ModalContact } from './Components/modalContact/ModalContact';
import { MyJobs } from './Components/MyJobs/MyJobs';
import { Nav } from './Components/navBar/Nav';
import { Card } from './Components/PresentationCard/Card';
import { Techs } from './Components/Techs/Techs';


function App() {
  const {visible}= useSelector(state=> state.contact)
  return (
    <>
      <Nav/>
      { visible && <ModalContact isHidden={!visible}/>}
      <Card/> 
      <Header/>
      <Techs/>
      <MyJobs/>
    </>
  );
}

export default App;
