import {useState} from 'react';

export default function AddTransaction({addItem}){

    const [transcationItem,setTransactionItem] = useState('');
    const [amount,setAmount] = useState('');
    const [transcationType,setTransactionType] = useState('');

    const add = ()=>{
        addItem(transcationItem,amount,transcationType);
    }

    return(
        <div>
            <h1>Add a new transcation</h1>

            <input type='text' placeholder='Enter item' onChange={(event)=>setTransactionItem(event.target.value)}/><br/>
            <input type='text' placeholder='Enter amount' onChange={(event)=>setAmount(event.target.value)}/><br/>

            <select onChange={(event)=>setTransactionType(event.target.value)}>
                <option>Income</option>
                <option>Expense</option>
            </select>
            <br/>

            <button onClick={add}>Add a transcation</button>
        </div>
    );
}
