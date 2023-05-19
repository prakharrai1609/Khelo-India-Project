import React, { useEffect, useState } from 'react';
import API from '../../axios';
import { useSearchParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';

function RequestList({ status }: { status: string }) {
    const [filteredRequests, setFilteredRequests] = useState([]);

    useEffect(() => {
        const userId = window.location.href.split('/').slice(-1)[0];
        const getData = async () => {
            return await API.get('/user/get-requests', {
                params: {
                    status: status,
                    userId: userId
                }
            });
        }

        getData().then((response) => {
            setFilteredRequests(filteredRequests => response?.data);
        })
    }, []);

    return (
        <div className="request-list-container">
            {filteredRequests.length ? filteredRequests?.map((request: any) => (
                <div className={`request-card ${request.status}`} key={request.id}>
                    <h2>{request.title}</h2>
                    <p>{request.description}</p>
                    <p>
                        <span>Status:</span> {request.status}
                    </p>
                    {status === 'REJECTED' && <p>{request.rejectReason}</p>}
                </div>
            )) : <img src={require('../../images/empty.jpg')} className="team-member" />}
        </div>
    );
}

export default RequestList;
