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
import TenLevel from './Components/TenLevel';
import CandyHome from './Components/CandyHome';
import CandyGame from './Components/CandyGame';
import CandyAbout from './Components/CandyAbout';
import Rights from './Components/Rights';
import Login from './Components/Login';
import CandyEatGame from './Components/CandyEatGame';
import Education from './Components/Education';
import DosAndDonts from './Components/DosAndDonts';
import RoadSafety from './Components/RoadSafety';
import Stories from './Components/Stories';
import Read2 from './Components/Read2';
import ReadQuiz2 from './Components/ReadQuiz2';
import LoginSignup from './Components/LoginSignup';

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
          <Route path='/submitted/:emojiUrl/:name/:age' element={<SubmittedInfo/>}/>
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
          <Route path='/ten' element={<TenLevel/>}/>
          <Route path='/candyhome' element={<CandyHome/>}/>
          <Route path='/candygame' element={<CandyGame/>}/>
          <Route path='/candyabout' element={<CandyAbout/>}/>
          <Route path='/rights' element={<Rights/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/candyeatgame' element={<CandyEatGame/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path="/DandD" element={<DosAndDonts/>}/>
          <Route path="/D" element={<RoadSafety/>}/>
          <Route path="/stories" element={<Stories/>}/>
          <Route path='/read2' element={<Read2/>}/>
          <Route path='/readquiz2' element={<ReadQuiz2/>}/>
          <Route path='/loginsignup' element={<LoginSignup/>}/>
        </Routes>
      </div>
  );
}

export default App;
