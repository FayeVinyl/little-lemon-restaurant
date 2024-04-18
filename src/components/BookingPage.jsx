import React from 'react';
import { useReducer } from 'react';
import { fetchAPI } from './../BookingAPI'
import BookingForm from './BookingForm.jsx';
import './booking.css';


function BookingPage () {
    function updateTimes(date) {
        return fetchAPI(date);
    }
    const output = fetchAPI(new Date());

    const [ availableTimes, dispatch ] = useReducer(updateTimes, output);

    return (
        <section className="reservations">
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
        </section>
    )

}

export default BookingPage;