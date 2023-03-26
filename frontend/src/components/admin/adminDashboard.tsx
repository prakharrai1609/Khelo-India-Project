import React, { useState } from 'react';
import { DropdownButton, Dropdown, Nav, Tab } from 'react-bootstrap';

function AdminDashboard() {
    const [stateFilter, setStateFilter] = useState('');
    const [cityFilter, setCityFilter] = useState('');
    const [costFilter, setCostFilter] = useState('');
    const [currentTab, setCurrentTab] = useState('pending');

    const handleStateFilterChange = (event: any) => {
        setStateFilter(event.target.value);
    };

    const handleCityFilterChange = (event: any) => {
        setCityFilter(event.target.value);
    };

    const handleCostFilterChange = (event: any) => {
        setCostFilter(event.target.value);
    };

    const handleRequestApproval = (requestId: any) => {
        // TODO: Implement request approval logic
    };

    let requests: any[] = [
        {
            "status": "pending",
            "id": 1,
            "state": "Rajasthan",
            "description": "This is for rajasthan state",
            "cost": 10000
        }
    ]

    const filteredRequests = requests.filter((request: any) => {
        return (
            (!stateFilter || request.state === stateFilter) &&
            (!cityFilter || request.city === cityFilter) &&
            (!costFilter || request.cost === costFilter)
        );
    });

    const pendingRequests = filteredRequests.filter(
        (request: any) => request.status === 'pending'
    );
    const approvedRequests = filteredRequests.filter(
        (request: any) => request.status === 'approved'
    );
    const rejectedRequests = filteredRequests.filter(
        (request: any) => request.status === 'rejected'
    );

    return (
        <div className="admin-portal-container">
            <h1 className="admin-portal-heading">Admin Portal</h1>
            <div className="admin-portal-filters">
                <div className="filter">
                    <label htmlFor="state-filter">State:</label>
                    <input
                        type="text"
                        id="state-filter"
                        value={stateFilter}
                        onChange={handleStateFilterChange}
                    />
                </div>
                <div className="filter">
                    <label htmlFor="city-filter">City:</label>
                    <input
                        type="text"
                        id="city-filter"
                        value={cityFilter}
                        onChange={handleCityFilterChange}
                    />
                </div>
                <div className="filter">
                    <label htmlFor="cost-filter">Cost:</label>
                    <DropdownButton id="cost-filter" title={costFilter || 'Select'}>
                        <Dropdown.Item onClick={() => setCostFilter('<$10000')}>
                            $10000
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setCostFilter('<$50000')}>
                            $50000
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setCostFilter('<$100000')}>
                            $100000
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <Tab.Container
                activeKey={currentTab}
                onSelect={(key: any) => setCurrentTab(key)}
            >
                <Nav variant="tabs" className="admin-portal-tabs">
                    <Nav.Item>
                        <Nav.Link eventKey="pending">Pending Requests</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="approved">Approved Requests</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="rejected">Rejected Requests</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="pending">
                        {pendingRequests.map((request: any) => (
                            <div key={request.id} className="request">
                                <p>
                                    <strong>{request.name}</strong> ({request.state},{' '}
                                    {request.city}):
                                </p>
                                <p>{request.description}</p>
                                <p>
                                    <strong>Cost:</strong> {request.cost}
                                </p>
                                <button
                                    className="approve-button"
                                    onClick={() => handleRequestApproval(request.id)}
                                >
                                    Approve
                                </button>
                            </div>
                        ))}
                    </Tab.Pane>
                    <Tab.Pane eventKey="approved">
                        {approvedRequests.map((request: any) => (
                            <div key={request.id} className="request">
                                <p>
                                    <strong>{request.name}</strong> ({request.state},{' '}
                                    {request.city}): Approve
                                </p>
                                <p>{request.description}</p>
                                <p>
                                    <strong>Cost:</strong> {request.cost}
                                </p>
                            </div>
                        ))}
                    </Tab.Pane>
                    <Tab.Pane eventKey="rejected">
                        {rejectedRequests.map((request: any) => (
                            <div key={request.id} className="request">
                                <p>
                                    <strong>{request.name}</strong> ({request.state},{' '}
                                    {request.city}): Rejected
                                </p>
                                <p>{request.description}</p>
                                <p>
                                    <strong>Cost:</strong> {request.cost}
                                </p>
                            </div>
                        ))}
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div >
    );
}

export default AdminDashboard;