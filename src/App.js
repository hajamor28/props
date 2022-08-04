import './App.css';
import FullName from './Component/Profile/FullName';
import Image from './image/img.png';
import Profession from './Component/Profile/Profession';
import Bio from './Component/Profile/Bio';

function App() {
  const handle = ()=>{
    alert(`Hello ${user.name}`)
  }
  
  let user={
    id:1,
    name:'kawther',
    lastName:'HAJAMOR',
    Image : Image,
    profession : 'technicien',
    Gender : "Femelle",
    Intersres : "Learning"
    
  }
  return (
    <div>
    
    <h1> Profile </h1>
       <FullName firstName ={user.name} lastName= {user.lastName} Handle={handle}>
        <img src={Image} alt='image' />
       </FullName>
       <Profession profession={user.profession}></Profession>
       <Bio  Gender= {user.Gender}  Intersres= {user.Intersres}></Bio>
        
    <p> Bonjour </p>
  </div>  
  );

}

export default App;
