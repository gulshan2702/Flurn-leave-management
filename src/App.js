import './App.css';
import LeaveForm from './CreateLeave/LeaveForm';
import EditLeaveScreen from './EditLeave/EditLeaveScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './Login/LoginForm';
import RegisterForm from './Register/RegisterForm';
import Leaves from './GetLeavesFiltered/Leaves';
import CalendarPage from './Calendar/CalendarPage';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/leave" element={<LeaveForm />}></Route>
          <Route path="/update/:id" element={<EditLeaveScreen />}></Route>
          <Route path="/listleaves" element={<Leaves />}></Route>
          <Route path="/calendar" element={<CalendarPage />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
