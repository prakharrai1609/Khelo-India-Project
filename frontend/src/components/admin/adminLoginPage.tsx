import React, { useEffect } from 'react'
import axios from 'axios'

const AdminLoginPage = () => {
  async function getdata() {
    let data = await axios.get("https://randomuser.me/api/");
    console.log(data);

  }

  useEffect(() => {
    (async () => {
      await getdata();
    })();
  })

  return (
    <div>adminLoginPage</div>
  )
}

export default AdminLoginPage;