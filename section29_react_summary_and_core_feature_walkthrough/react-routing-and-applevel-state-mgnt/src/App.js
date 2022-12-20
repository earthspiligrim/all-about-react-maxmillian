import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetup from "./pages/AllMeetups";
import Favourites from "./pages/Favuorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path='/' element= {<AllMeetup/>}/>        
        <Route path='favourites' element= {<Favourites/>}/>        
        <Route path='new-meetup' element= {<NewMeetup/>}/> 
           {/* define your paths this way  */}
      </Routes>
    </div>
  );
}

export default App;
