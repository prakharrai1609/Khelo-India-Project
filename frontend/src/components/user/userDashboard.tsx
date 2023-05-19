import React, { useState } from 'react'
import RequestForm from './UserRequestForm'
import RequestList from './UserRequestList'
import '../../styles/userDashboard.css'

function Dashboard() {
  const [showForm, setShowForm] = useState(false)
  const [showPending, setShowPending] = useState(false)
  const [showCompleted, setShowCompleted] = useState(false)
  const [showRejected, setShowRejected] = useState(false)

  const handleCreateRequest = () => {
    setShowForm(true)
    setShowPending(false)
    setShowCompleted(false)
    setShowRejected(false)
  }

  const handlePendingRequests = () => {
    setShowForm(false)
    setShowPending(true)
    setShowCompleted(false)
    setShowRejected(false)
  }

  const handleCompletedRequests = () => {
    setShowForm(false)
    setShowPending(false)
    setShowCompleted(true)
    setShowRejected(false)
  }

  const handleRejectedRequests = () => {
    setShowForm(false)
    setShowPending(false)
    setShowCompleted(false)
    setShowRejected(true)
  }

  return (
    <>
      <div className="dashboard-container">
        <button className="dashboard-btn" onClick={handleCreateRequest}>
          Create request
        </button>
        <button className="dashboard-btn" onClick={handlePendingRequests}>
          Pending requests
        </button>
        <button className="dashboard-btn" onClick={handleCompletedRequests}>
          Completed requests
        </button>
        <button className="dashboard-btn" onClick={handleRejectedRequests}>
          Rejected requests
        </button>
      </div>
      <div className="container">
        {showForm && <RequestForm />}
        {showPending && <RequestList status="PENDING" />}
        {showCompleted && <RequestList status="APPROVED" />}
        {showRejected && <RequestList status="REJECTED" />}
      </div>
    </>
  )
}

export default Dashboard
