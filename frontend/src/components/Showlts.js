import React, { useState, useEffect } from 'react';

export default function OrganizationCard() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:2000/api/event/lts", {
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
                
                // Chec  k the structure of your data and set it accordingly
                if (data && data.length > 0) {
                    setEvents(data);
                } else if (data && data.data && data.data.length > 0) {
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

    // Check if the API endpoint is accessible
    // console.log('API URL:', "https://ps-47lx.onrender.com/api/event/lts");

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
                    <div key={event._id} className="card p-4 my-3 shadow-sm">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="border p-3 text-center h-100">
                                    <h5>{event.orgname || 'No Name Available'}</h5>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/* <h2 className="text-center mb-4">{event.organizationName || 'No Name Available'}</h2> */}
                                    <h4 className="text-center mb-4">Organization Description</h4>
                                <div className="border p-3 h-100">
                                    <p>{event.description || 'No description available'}</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="border p-3 h-100">
                                    <h5>Looking to Sponsor</h5>
                                    <div className="border mt-3 p-2">
                                        <p className="mb-2">Event Type: {event.event || 'Not specified'}</p>
                                        <p className="mb-0">Requirements: {event.requirements || 'Not specified'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}