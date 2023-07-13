import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddNewMovie from "./components/AddNewMovie";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import UpdateMovie from "./components/UpdateMovie";
import TheaterList from "./components/TheaterList";
import Login from "./components/Login";
import Registration from "./components/Registration";
import BookTicket from "./components/BookTicket";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<MovieList />} />
          <Route exact path="/" element={<MovieList />} />
          <Route path="/movieList" element={<MovieList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/theater-list" element={<TheaterList />} />
          <Route path="/book-ticket" element={<BookTicket />} />
          <Route path="/add-movie" element={<AddNewMovie />} />
          <Route path="/edit-movie/:movieName" element={<UpdateMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
