import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Lts() {
    const [orgName, setOrgName] = useState('');
    const [industry, setIndustry] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [price, setPrice] = useState('');
    const [requirements, setRequirements] = useState('');
    const [event, setEvent] = useState('');
    const [imgurl, setimgurl] = useState('');
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState('');
    const navigate = useNavigate();

    const posting = async () => {
        try {
            const response = await fetch("https://ps-47lx.onrender.com/api/event/lts", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    orgname: orgName,
                    industry,
                    email,
                    description,
                    phone,
                    price: Number(price),
                    requirements,
                    event,
                    imgurl
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccessAlert(true);
                setTimeout(() => {
                    setSuccessAlert(false);
                }, 3000);
                console.log('Organization created successfully:', data);
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
                <h3 className="card-title text-center mb-4">Register Organization</h3>
                {successAlert && (
                    <div className="alert alert-success" role="alert">
                        Organization registered successfully!
                    </div>
                )}
                {errorAlert && (
                    <div className="alert alert-danger" role="alert">
                        {errorAlert}
                    </div>
                )}
                <form onSubmit={handleClick}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="Organization Name" value={orgName} onChange={(e) => setOrgName(e.target.value)} />
                        <label>Organization Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="Industry" value={industry} onChange={(e) => setIndustry(e.target.value)} />
                        <label>Industry</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <label>Description</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <label>Phone</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        <label>Price</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Requirements" value={requirements} onChange={(e) => setRequirements(e.target.value)} />
                        <label>Requirements</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="Event" value={event} onChange={(e) => setEvent(e.target.value)} />
                        <label>Event</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="Event" value={imgurl} onChange={(e) => setimgurl(e.target.value)} />
                        <label>Image URL</label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}
