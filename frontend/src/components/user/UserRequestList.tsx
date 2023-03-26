import React from 'react';

function RequestList({ status }: { status: string }) {
    let requests: any[] = [
        {
            "status": "completed",
            "title": "This is the first title",
            "description": "This is the first description"
        },
        {
            "status": "completed",
            "title": "This is the second title",
            "description": "This is the first description"
        },
        {
            "status": "pending",
            "title": "This is the first title",
            "description": "This is the first description"
        },
        {
            "status": "pending",
            "title": "This is the first title",
            "description": "This is the first description"
        },
        {
            "status": "pending",
            "title": "This is the first title",
            "description": "This is the first description"
        }
    ];
    const filteredRequests = requests.filter((request: any) => request.status === status);

    return (
        <div className="request-list-container">
            {filteredRequests.map((request: any) => (
                <div className={`request-card ${request.status}`} key={request.id}>
                    <h2>{request.title}</h2>
                    <p>{request.description}</p>
                    <p>
                        <span>Status:</span> {request.status}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default RequestList;
