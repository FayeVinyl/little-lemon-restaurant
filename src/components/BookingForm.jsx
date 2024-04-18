import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./booking.css";


const BookingForm = (props) => {

  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [seating, setSeating] = useState("false");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [specialReq, setSpecialReq] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }



  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const getIsFormValid = () => {
  return (
    date &&
    finalTime &&
    firstName &&
    lastName &&
    telephone &&
    validateEmail(email)
  );
};

const clearForm = () => {
  setDate("");
  setFinalTime("");
  setGuests("");
  setOccasion("");
  setSeating("");
  setFirstName("");
  setLastName("");
  setTelephone("");
  setEmail("");
  setSpecialReq("");
};

const handleSubmit =(e) => {
  e.preventDefault();
  clearForm();
}

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>

        <fieldset>
          <h2>Find a table</h2>

          <div className="Field">
            <label htmlFor="res-date">Choose date <sup>*</sup></label>
            <input
              type="date"
              id="res-date"
              name="date"
              required
              value={date}
              onChange={handleDateChange}
              />
          </div>

          <div className="Field">
            <label htmlFor="res-time">Choose time <sup>*</sup></label>
            <select 
              id="res-time"
              name="time"
              required
              >
                {finalTime}
            </select>
          </div>

          <div className="Field">
            <label htmlFor="guests">Number of guests <sup>*</sup></label>
            <input
              type="number"
              placeholder="select"
              min={1}
              max={10}
              id="guests"
              name="guests"
              required
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          <div className="Field">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Other</option>
            </select>
          </div>

          <div className="Field">
            <label htmlFor="seating">Seating Options</label>
            <select
              id="seating"
              name="seating"
              value={seating}
              onChange={(e) => setSeating(e.target.value)}
              >
                <option>Standard</option>
                <option>Outdoors</option>
                <option>Bar</option>
              </select>
          </div>

          <div className="Field">
              <label htmlFor="firstName">First Name: <sup>*</sup></label>
              <input
                type="text"
                placeholder="First Name"
                id="firstName"
                name="first-name"
                required
                minLength={1}
                maxLength={50}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

            <div className="Field">
              <label htmlFor="lastName">Last Name: <sup>*</sup></label>
               <input
                 type="text"
                 placeholder="Last Name"
                 id="lastName"
                 name="last-name"
                 required
                 minLength={1}
                 maxLength={50}
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}
                 />
            </div>

            <div className="Field">
              <label htmlFor="telephone">Phone Number: <sup>*</sup></label>
              <input
                type="tel"
                id="telephone"
                name="phone"
                required
                placeholder="(xxx)xxx-xxxx"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                />
            </div>

            <div className="Field">
              <label htmlFor="email">Email: <sup>*</sup></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="Field">
              <label htmlFor="specialReq">Special Requests:</label>
              <textarea
                type="textarea"
                id="specialReq"
                placeholder='additional comments or requests'
                name="special-req"
                rows={4}
                value={specialReq}
                onChange={(e) => setSpecialReq(e.target.value)}
                />
            </div>
          <Link className="confirm-booking" to="/confirmation">
          <button
            type="submit"
            disabled={!getIsFormValid}
            defaultValue="Make Your reservation">
              Make Your Reservation
          </button>
          </Link>

        </fieldset>
      </form>
    </div>

  )
}

export default BookingForm