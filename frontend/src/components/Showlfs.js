// import React, { useEffect, useState } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";

// const EventCard = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch("https://ps-47lx.onrender.com/api/event/lfs"); // Replace with actual API URL
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setEvents(Array.isArray(data) ? data : []);
//       } catch (error) {
//         setError("Failed to fetch events. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   if (loading) {
//     return <div className="container mt-5 text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="container mt-5 text-center text-danger">{error}</div>;
//   }

//   if (events.length === 0) {
//     return <div className="container mt-5 text-center text-info">No events available.</div>;
//   }

//   return (
//     <div className="container mt-5">
//       {events.map((event) => (
//         <div key={event._id} className="border p-4 my-3">
//           <h2 className="text-center fw-bold">{event.name}</h2>
//           <div className="row mt-4">
//             <div className="col-md-6">
//               <p className="fw-bold">Event Type: {event.type}</p>
//               <p className="fw-bold">Event Venue: {event.venue}</p>
//               <p className="fw-bold">Event Footfall: {event.footfall}</p>
//             </div>
//             <div className="col-md-6 text-end">
//               <p className="fw-bold">Event Date: {event.date}</p>
//               <div className="border p-3 mt-3">
//                 <p className="fw-bold">Event Description:</p>
//                 <p>{event.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventCard;
import React, { useState, useEffect } from 'react';

export default function OrganizationCard() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://ps-47lx.onrender.com/api/event/lfs", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    const errorData = await response.text();
                    console.error('Response not OK:', response.status, errorData);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Received data:', data);
                
                // Ensure correct data structure
                if (data && Array.isArray(data)) {
                    setEvents(data);
                } else if (data && data.data && Array.isArray(data.data)) {
                    setEvents(data.data);
                } else {
                    setEvents([]);
                }
            } catch (error) {
                console.error('Fetch error details:', error);
                setError('Failed to fetch events. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="container">
            {loading ? (
                <div className="text-center p-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Loading events...</p>
                </div>
            ) : error ? (
                <div className="alert alert-danger" role="alert">
                    {error}
                    <p className="mt-2 mb-0">Please check your connection and try again.</p>
                </div>
            ) : events.length === 0 ? (
                <div className="alert alert-info" role="alert">
                    No events available at the moment.
                </div>
            ) : (
                events.map((event) => (
                    <div key={event._id} className="border p-4 my-3">
                        <h2 className="text-center fw-bold">{event.eventname || 'No Name'}</h2>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <p className="fw-bold">Event Type: {event.eventtype || 'N/A'}</p>
                                <p className="fw-bold">Event Venue: {event.venue || 'N/A'}</p>
                                <p className="fw-bold">Event Footfall: {event.eventfootfall || 'N/A'}</p>
                            </div>
                            <div className="col-md-6 text-end">
                                <p className="fw-bold">
                                    Event Date: {event.date ? new Date(event.date).toLocaleDateString() : 'N/A'}
                                </p>
                                <div className="border p-3 mt-3">
                                    <p className="fw-bold text-center">Event Description:</p>
                                    <p>{event.description || 'No description available'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
