import React, { useState } from 'react';
import '../../styles/userDashboard.css';
import TNC from './TNC';

// function RequestForm() {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');

//     const handleSubmit = (e: any) => {
//         e.preventDefault();
//         // code to submit form data goes here
//     };

//     return (
//         <div className="request-form-container">
//             <form onSubmit={handleSubmit} className="request-form">
//                 <label htmlFor="title">Title:</label>
//                 <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     required
//                 />
//                 <label htmlFor="description">Description:</label>
//                 <textarea
//                     id="description"
//                     name="description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default RequestForm;


const RequestForm = () => {
    const [projectName, setProjectName] = useState('');
    const [location, setLocation] = useState('');
    const [area, setArea] = useState('');
    const [landOwnership, setLandOwnership] = useState('');
    const [facilities, setFacilities] = useState('');
    const [estimatedCost, setEstimatedCost] = useState('');
    const [centreShare, setCentreShare] = useState('');
    const [difference, setDifference] = useState('');
    const [existingFacilitiesDistance, setExistingFacilitiesDistance] = useState('');
    const [justification, setJustification] = useState('');
    const [completionTime, setCompletionTime] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // submit form data here
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input required type="text" name="s2projectname" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                <input required type="text" name="s2location" placeholder="Proposed Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                <input required type="number" name="s2area" placeholder="Area of land" value={area} onChange={(e) => setArea(e.target.value)} />
                <input required type="text" name="s2owner" placeholder="Land Ownership (Owned/Leased)" value={landOwnership} onChange={(e) => setLandOwnership(e.target.value)} />
                <input required type="text" name="s2facilities" placeholder="Sports facilities to be created for construction of multipurpose indoor hall" value={facilities} onChange={(e) => setFacilities(e.target.value)} />
                <input required type="number" name="s2cost" placeholder="Estimated Cost" value={estimatedCost} onChange={(e) => setEstimatedCost(e.target.value)} />
                <input required type="text" name="s2share" placeholder="Centre's share out of S.No. 9 above" value={centreShare} onChange={(e) => setCentreShare(e.target.value)} />
                <input required type="text" name="s2diff" placeholder="How the difference between S.No. 9 and S.No. 10 will be met?" value={difference} onChange={(e) => setDifference(e.target.value)} />
                <input required type="name" name="s2existing" placeholder="Distance of existing sports facilities" value={existingFacilitiesDistance} onChange={(e) => setExistingFacilitiesDistance(e.target.value)} />
                <input required type="name" name="s2justify" placeholder="Provide justification for the proposal" value={justification} onChange={(e) => setJustification(e.target.value)} />
                {/* <label required htmlFor="month">Time require for the completion</label> */}
                <input required type="month" name="s2month" placeholder="Time require for the completion" value={completionTime} onChange={(e) => setCompletionTime(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
                <TNC />
            </form>
        </div>
    );
}

export default RequestForm;