import './App.css';
import { Footer, Header, Main } from './containers';
import { Routes, Route } from "react-router-dom";
import { About, Menu, BookingPage, ConfirmBooking } from './components';


function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element= { <Main /> } />
          <Route path="/about" element= { <About /> }  />
          <Route path="/menu" element= { <Menu /> }  />
          <Route path="/booking-page" element= { <BookingPage /> }  />
          <Route path="/confirmation" element= { <ConfirmBooking /> }  />
        </Routes>
      <Footer />
    </>
  );
}

export default App;