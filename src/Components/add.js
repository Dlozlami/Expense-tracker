export default function AddTransaction(){
    return(
        <div>
            <h1>Add a new transcation</h1>

            <input type='text' placeholder='Enter amount'/><br/>
            <input type='text' placeholder='Enter amount'/><br/>

            <select>
                <option>Income</option>
                <option>Expense</option>
            </select>
            <br/>
            
            <button>Add a transcation</button>
        </div>
    );
}
