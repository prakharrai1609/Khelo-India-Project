import React, { useState } from 'react'
import '../../styles/userDashboard.css'
import TNC from './TNC'
import { Row, Col } from 'antd'

const RequestForm = () => {
  const [projectName, setProjectName] = useState('')
  const [location, setLocation] = useState('')
  const [area, setArea] = useState('')
  const [landOwnership, setLandOwnership] = useState('')
  const [facilities, setFacilities] = useState('')
  const [estimatedCost, setEstimatedCost] = useState('')
  const [centreShare, setCentreShare] = useState('')
  const [difference, setDifference] = useState('')
  const [existingFacilitiesDistance, setExistingFacilitiesDistance] = useState(
    '',
  )
  const [justification, setJustification] = useState('')
  const [completionTime, setCompletionTime] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    // submit form data here
  }

  return (
    <div className="m-4 container-fluid">
      <form onSubmit={handleSubmit}>
        <Row gutter={[6, 6]}>
          <Col xs={12}>
            <input
              required
              type="text"
              name="s2projectname"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </Col>
          <Col xs={12}>
            <input
              required
              type="text"
              name="s2location"
              placeholder="Proposed Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Col>
        </Row>
        <Row gutter={[6, 6]}>
          <Col xs={6}>
            <input
              required
              type="text"
              name="s2area"
              placeholder="Area of land"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </Col>
          <Col xs={12}>
            <input
              required
              type="text"
              name="s2owner"
              placeholder="Land Ownership (Owned/Leased)"
              value={landOwnership}
              onChange={(e) => setLandOwnership(e.target.value)}
            />
          </Col>
          <Col xs={6}>
            <input
              required
              type="text"
              name="s2cost"
              placeholder="Estimated Cost"
              value={estimatedCost}
              onChange={(e) => setEstimatedCost(e.target.value)}
            />
          </Col>
        </Row>
        <Row gutter={[6, 6]}>
          <Col xs={12}>
            <input
              required
              type="text"
              name="s2share"
              placeholder="Centre's share out of S.No. 9 above"
              value={centreShare}
              onChange={(e) => setCentreShare(e.target.value)}
            />
          </Col>
          <Col xs={12}>
            <input
              required
              type="text"
              name="s2diff"
              placeholder="How the difference between S.No. 9 and S.No. 10 will be met?"
              value={difference}
              onChange={(e) => setDifference(e.target.value)}
            />
          </Col>
        </Row>
        <Row gutter={[6, 6]}>
          <Col xs={8}>
            <input
              required
              type="text"
              name="s2existing"
              placeholder="Distance of existing sports facilities"
              value={existingFacilitiesDistance}
              onChange={(e) => setExistingFacilitiesDistance(e.target.value)}
            />
          </Col>
          <Col xs={8}>
            <input
              required
              type="text"
              name="s2justify"
              placeholder="Provide justification for the proposal"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
            />
          </Col>
          <Col xs={8}>
            <input
              required
              type="text"
              name="s2month"
              placeholder="Time require for the completion"
              value={completionTime}
              onChange={(e) => setCompletionTime(e.target.value)}
            />
          </Col>
        </Row>

        {/* <label required htmlFor="month">Time require for the completion</label> */}

        <Row gutter={[6, 6]} justify="center">
          <Col xs={6}>
            <button type="submit">Submit</button>
          </Col>
        </Row>
        <TNC />
      </form>
    </div>
  )
}

export default RequestForm
