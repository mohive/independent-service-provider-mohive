import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import Owner from '../Owner/Owner';


const owners=[
    {id:1, name:'Will Smith', img: expert1},
    {id:2, name:'Crish Rock', img: expert2},
    {id:3, name:'Dwayane Rock', img: expert3}
]
const Owners = () => {
  
    return (
        <div id='owners' className='container'>
            <h2 className='text-primary text-center mt-5'>Our Executive Member</h2>
            <div className="row">
                {
                owners.map(owner=><Owner
                key={Owner.id}
                owner={owner}></Owner>)
                }
            </div>
        </div>
    );
};

export default Owners;