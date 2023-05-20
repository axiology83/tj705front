import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChatRoom from './components/chat-service/ChatRoom';
import ChatTest from './components/chat-service/ChatTest';
import Login from './components/auth/Login';
import MemberInsert from './components/user-service/MemberInsert';

function App() {
  return (
    <div>
      <header>헤더 자리</header>
      <BrowserRouter>
      <div>
      <Routes>
        <Route path="/member/signup" Component={MemberInsert}/>
        <Route path="/login" Component={Login}/>
        <Route path="/chatwith/:username" Component={ChatRoom}/>
        <Route path="/chattest" Component={ChatTest}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
