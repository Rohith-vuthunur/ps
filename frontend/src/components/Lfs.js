import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Lfs() {
    const [eventName, setEventName] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventFootfall, setEventFootfall] = useState('');
    const [date, setDate] = useState('');
    const [venue, setVenue] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState('');
    const navigate = useNavigate();

    const posting = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/event/lfs", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    eventname: eventName,
                    eventtype: eventType,
                    eventfootfall: Number(eventFootfall),
                    date,
                    venue,
                    description,
                    email,
                    phone
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccessAlert(true);
                setTimeout(() => {
                    setSuccessAlert(false);
                }, 3000);
                console.log('Event created successfully:', data);
                navigate('/');
            } else {
                setErrorAlert(data.error || 'Unknown error');
            }
        } catch (error) {
            console.error('Error during fetch:', error);
            setErrorAlert('An unexpected error occurred. Please try again.');
        }
    };

    const handleClick = async (event) => {
        event.preventDefault();

        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!/^[\d]{10}$/.test(phone)) {
            alert('Phone number must be exactly 10 digits.');
            return;
        }

        await posting();
    };

    return (
        <div className="container my-5">
            <div className="card shadow-lg p-4">
                <h3 className="card-title text-center mb-4">Create Event</h3>
                {successAlert && (
                    <div className="alert alert-success" role="alert">
                        Event created successfully!
                    </div>
                )}
                {errorAlert && (
                    <div className="alert alert-danger" role="alert">
                        {errorAlert}
                    </div>
                )}
                <form onSubmit={handleClick}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                        <label>Event Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="Event Type" value={eventType} onChange={(e) => setEventType(e.target.value)} />
                        <label>Event Type</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" placeholder="Expected Footfall" value={eventFootfall} onChange={(e) => setEventFootfall(e.target.value)} />
                        <label>Expected Footfall</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
                        <label>Event Date</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="Venue" value={venue} onChange={(e) => setVenue(e.target.value)} />
                        <label>Venue</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <label>Description</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <label>Phone</label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}
