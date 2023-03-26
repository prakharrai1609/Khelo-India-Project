import React, { useState } from 'react';
import RequestForm from './UserRequestForm';
import RequestList from './UserRequestList';
import '../../styles/userDashboard.css'

function Dashboard() {
    const [showForm, setShowForm] = useState(false);
    const [showPending, setShowPending] = useState(false);
    const [showCompleted, setShowCompleted] = useState(false);

    const handleCreateRequest = () => {
        setShowForm(true);
        setShowPending(false);
        setShowCompleted(false);
    };

    const handlePendingRequests = () => {
        setShowForm(false);
        setShowPending(true);
        setShowCompleted(false);
    };

    const handleCompletedRequests = () => {
        setShowForm(false);
        setShowPending(false);
        setShowCompleted(true);
    };

    return (
        <div className="dashboard-container">
            <button className="dashboard-btn" onClick={handleCreateRequest}>Create request</button>
            <button className="dashboard-btn" onClick={handlePendingRequests}>Pending requests</button>
            <button className="dashboard-btn" onClick={handleCompletedRequests}>Completed requests</button>
            {showForm && <RequestForm />}
            {showPending && <RequestList status="pending" />}
            {showCompleted && <RequestList status="completed" />}
        </div>
    );
}

export default Dashboard;
