import React from 'react'
import { useEffect } from 'react';

const TNC = () => {

  let myFormStyle: React.CSSProperties = {
    textAlign: 'center',
    display: ''
  }

  function openForm() {
    // myFormStyle.display = "block";
    myFormStyle = {
      textAlign: 'center',
      display: 'block'
    }
  }

  function closeForm() {
    // myFormStyle.display = "none";
    myFormStyle = {
      textAlign: 'center',
      display: 'none'
    }
  }

  return (
    <div>
      <button onClick={openForm} className="open-button" id="myForm">Terms and Conditions</button> {/* onclick="openForm()"*/}

      <div style={myFormStyle} className="form-popup" id="myForm">
        <div>
          <p>
            <b>📌</b> The land on which the project is proposed to be executed should be owned by Govt. and free from all
            encumbrances.
          </p>
          <p>
            <b>📌</b> The grant money should be utilized for the purpose for which it is sanctioned and the unspent money of
            grant if any, shall be refunded by grantee immediately after completion of project
          </p>
          <p>
            <b>📌</b> The excess amount if incurred, over and above the grant released by govt. of india shall be borne by the
            grantee only. In other words no additional grants over and above the admissible grant should be given
          </p>
          <p>
            <b>📌</b> Assets Required, Wholly or substantially, out of Govt. Grant, except those declared Obsolete and
            unserviceable or condemned in accordance with the procedure laid down in the GFR shall not be disposed off.
            Without obtaining the prior approval.
          </p>
          <p>
            <b>📌</b> The grantee shall ensure that the interest of SC/ST are protected, not only at the time of execution but
            also at the time of utilization of the sports facility, created out by grant released by govt.
          </p>
          <p>
            <b>📌</b> The accounts of the grantee should be maintained in accordance with the provisions contained in GFRs.
            2005 as may be amended from time to time. The accounts of the grantee shall be open to the inspection by the
            audit both by the comptroller and the Auditor General of the India under the provisions of the CAG(DPC)act,
            1977 and the internal audit by the Principal Accounts Office of the Ministry of Youth Affairs ans Sports,
            whenever the grantee is called upon to do so.
          </p>


          <button onClick={closeForm} type="button" className="btn btn-danger">Close</button> {/* onclick="closeForm()"*/}
        </div>
      </div>
    </div>
  );
}

export default TNC