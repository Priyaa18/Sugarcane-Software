import React, { useEffect, useState } from 'react'


function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/bank_master')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
    3
  },[])

  return (
  
    <div style={
      {padding: "50px", margin:"30px",display:"flex", fontSize:"25px", backgroundColor:"lightgreen",justifyContent:"center"}
    }>
      <table>
        <thead>
          <th>Bank_cd</th>
          <th>Bank_name</th>
        </thead>
        <tbody>
          {data.map((d, i) =>(
            <tr key={i}>
              <td>{d.Bank_cd}</td>
              <td>{d.Bank_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}

export default App