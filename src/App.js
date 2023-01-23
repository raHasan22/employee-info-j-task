import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
  },[])
  return (
      <div className="max-w-[1200px] mx-auto my-5">
      {users?.map(user =>
        <div className="card lg:card-side bg-[white] shadow-xl grid sm:grid-cols-1 lg:grid-cols-5 my-5">
        <div className="card-body justify-center"><h4 className='text-3xl'>{user.name}</h4></div>
        <div className="card-body">
          <h2 className='text-xl font-bold'>Contact</h2>
          <p>{user.address.street}</p>
          
        </div>
        <div className="card-body">
          <h2 className='text-xl font-bold'>City</h2>
          <p>{user.address.city}</p>
          
        </div>
        <div className="card-body">
          <h2 className='text-xl font-bold'>Suite</h2>
          <p>{user.address.suite}</p>
          
        </div>
        <div className="card-body card-actions justify-center text-center">
            <button onClick={()=> setShow(!show)} className="btn btn-error btn-sm text-white">{show === true ? "Hide Details" : "View Details"}</button>
          </div>
          {
            show && <div className='card lg:card-side lg:col-span-5 m-5 shadow-xl grid sm:grid-cols-1 lg:grid-cols-2'>
            <div className="card-body lg:col-span-2">
              <h2 className='text-xl font-bold'>Email</h2>
              <p>{user.email}</p>
            </div>
            <div className="card-body">
              <h2 className='text-xl font-bold'>User Name</h2>
              <p>{user.username}</p>
            </div>
            <div className="card-body">
              <h2 className='text-xl font-bold'>Phone</h2>
              <p>{user.phone}</p>
            </div>
            <div className="card-body">
              <h2 className='text-xl font-bold'>WebSite</h2>
              <p>{user.website}</p>
            </div>
            <div className="card-body">
              <h2 className='text-xl font-bold'>City</h2>
              <p>{user.address.city}</p>
            </div>
            <div className="card-body">
              <h2 className='text-xl font-bold'>Zip Code</h2>
              <p>{user.address.zipcode}</p>
            </div>
            <div className="card-body">
              <h2 className='text-xl font-bold'>Company Name</h2>
              <p>{user.company.name}</p>
            </div>
            <div className="card-body">
              <h2 className='text-xl font-bold'>Position</h2>
              <p>{user.company.catchPhrase}</p>
            </div>
            <div className="card-body">
              <h2 className='text-xl font-bold'>Duty</h2>
              <p>{user.company.bs}</p>
            </div>
          </div>
          }
      </div>)}
    </div>
  );
}

export default App;
