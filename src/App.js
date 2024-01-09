import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Activities from './Components/Activities';
import Emergency from './Components/Emergency';
import GameHome from './Components/GameHome';
import Participation from './Components/Participation';
import Labour from './Components/Labour';
import { Route, Routes } from 'react-router-dom';
import Adults from './Components/Adults';
import Kids from './Components/Kids';
import YouTubeVideo from './Components/YouTubeVideo';
import Videoquiz from './Components/Videoquiz';
import Read from './Components/Read';
import Games from './Components/Games';
import Card from './Components/Card';
import GameCompletePopup from './Components/GameCompletePopup';
import GameBoard from './Components/GameBoard';
import Data from './Components/data';
import Youtubepage from './Components/YoutubePage';
import QuizPage from './Components/QuizPage';
import DisplayEmoji from './Components/DisplayEmoji';
import SubmittedInfo from './Components/SubmittedInfo';
import ProfileSelection from './Components/ProfileSelection';
import DIY from './Components/DIY';
import Pikachu from './Components/Pikachu';
import Jumpingfrog from './Components/Jumpingfrog';
import Rose from './Components/Rose';
import ReadQuiz from './Components/ReadQuiz';
import MazeHome from './Components/MazeHome';
import Levels from './Components/Levels';
import OneLevel from './Components/OneLevel';
import TwoLevel from './Components/TwoLevel';
import ThreeLevel from './Components/ThreeLevel';
import FourLevel from './Components/FourLevel';
import FiveLevel from './Components/FiveLevel';
import SixLevel from './Components/SixLevel';
import SevenLevel from './Components/SevenLevel';
import EightLevel from './Components/EightLevel';
import NineLevel from './Components/NineLevel';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Activities' element={<Activities/>}/>
          <Route path='/Emergency' element={<Emergency/>}/>
          <Route path='/gamehome' element={<GameHome/>} />
          <Route path='/part' element={<Participation/>}/>
          <Route path='/lab' element={<Labour/>}/>
          <Route path='/adults' element={<Adults/>}/>
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/yt/:vid' element={<YouTubeVideo/>}/>
          <Route path='/vidquiz' element={<Videoquiz/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/games' element={<Games/>}/>
          <Route path='/data' element={<Data/>}/>
          <Route path='/Card' element={<Card/>}/>
          <Route path='GameCompletePopup' element={<GameCompletePopup/>}/>
          <Route path='/memory' element={<GameBoard/>}/>
          <Route path='/see' element={<Youtubepage/>}/>
          <Route path='/quiz' element={<QuizPage/>}/>
          <Route path='/display-emoji/:emojiUrl' element={<DisplayEmoji/>}/>
          <Route path='/submitted/:emojiUrl/:name' element={<SubmittedInfo/>}/>
          <Route path='/select' element={<ProfileSelection/>}/>
          <Route path='/diy' element={<DIY/>}/>
          <Route path='/pikachu' element={<Pikachu/>}/>
          <Route path='/frog' element={<Jumpingfrog/>}/>
          <Route path='/rose' element={<Rose/>}/>
          <Route path='/readquiz' element={<ReadQuiz/>}/>
          <Route path='/maze' element={<MazeHome/>}/>
          <Route path='/level' element={<Levels/>} />
          <Route path='/one' element={<OneLevel/>} />
          <Route path='/two' element={<TwoLevel/>} />
          <Route path='/three' element={<ThreeLevel/>}/>
          <Route path='/four' element={<FourLevel/>}/>
          <Route path='/five' element={<FiveLevel/>}/>
          <Route path='/six' element={<SixLevel/>}/>
          <Route path='/seven' element={<SevenLevel/>}/>
          <Route path='/eight' element={<EightLevel/>}/>
          <Route path='/nine' element={<NineLevel/>}/>
        </Routes>
      </div>
  );
}

export default App;
