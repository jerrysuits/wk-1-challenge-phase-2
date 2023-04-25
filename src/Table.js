import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './table.css';

function Table() {
     const [data, setData] = useState([])
     useEffect(()=> {
           axios.get('http://localhost:3000/transactions')
          .then(res => setData(res.data))
          .catch(er => console.log(er))
     },[])
  return (
    <div>
          <table>
               <thead>
                    <div className='nav'>
                    <tr>
                         <th className='date'>Date</th>
                         <th className='description'>Description</th>
                         <th className='category'>Category</th>
                         <th className='amount'>Amount</th>
                    </tr>
                    </div>
                    <div>
          <form action=''>
               <input type='date' placeholder='Enter date'></input>
               <input type='text' placeholder='Enter description'></input>
               <input type='text' placeholder='Enter category'></input>
               <input type='number' placeholder='Enter amount'></input>
          </form>
     </div>
               </thead>
               <tbody>
                    {
                         data.map((transactions, index) =>(
                              <tr key={index}>
                                  <ol>
                                            <td>{transactions.date}</td>
                                             <td>{transactions.description}</td>
                                             <td>{transactions.category}</td>
                                             <td>{transactions.amount}</td>
                                  </ol>
                                        <td>
                                             <button>Delete</button>
                                        </td>
                              </tr>
                         ))
                    }
               </tbody>
          </table>
    </div>
  )
}

export default Table