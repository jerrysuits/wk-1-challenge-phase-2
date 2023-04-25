import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './table.css';

function Table() {
     const [data, setData] = useState([])
     const [date, setDate] = useState('')
     const [description, setDescription] = useState('')
     const [category, setCategory] = useState('')
     const [amount, setAmount] = useState('')

     useEffect(()=> {
           axios.get('http://localhost:3000/transactions')
          .then(res => setData(res.data))
          .catch(er => console.log(er))
     },[])

const handleSubmit = (event) => {
     event.preventDefault();
     axios.post('http://localhost:3000/transactions' , {date: date, description: description, category: category, amount: amount})
     .then(res => {
          Location.reload()
     })
     .catch(er => console.log(er))
}

const handleDelete = (id) => {
     axios.delete('http://localhost:3000/transactions' + id)
     .then(res => {
          Location.reload()
     })
}

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
          <form onSubmit={handleSubmit}>
               <input type='date' placeholder='Enter date' onChange={e => setDate(e.target.value)}></input>
               <input type='text' placeholder='Enter description' onChange={e => setDescription(e.target.value)}></input>
               <input type='text' placeholder='Enter category' onChange={e => setCategory(e.target.value)}></input>
               <input type='number' placeholder='Enter amount' onChange={e => setAmount(e.target.value)}></input>
               <button>Add</button>
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
                                             <button onClick={() => handleDelete(transactions.id)}>Delete</button>
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