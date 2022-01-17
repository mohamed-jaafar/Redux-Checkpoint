import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { add } from '../Redux/actions';

const AddTask=()=>{
    const [description, setDescription] = useState('');
    const dispatch = useDispatch()
    return (
        <div style={{display:'flex', gap:'20px'}}>   
                <form style={{width:'90%'}} >
                <div  >
                <input tsype="text" placeholder="tape a task" onChange={(e)=>setDescription(e.target.value)} style={{width:'95%',height:'30px'}} ></input>
                </div>
            </form>
                <button onClick={()=>dispatch(add({description:description,id:Math.random(),isEdit:false,isDone:false}))} style={{color:'black', height:'30px',width:'100px',borderRadius:'10px 10px',border:0}}>add</button>
        </div>
    )
}

export default AddTask
