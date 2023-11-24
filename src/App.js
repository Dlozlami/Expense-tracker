import './App.css';
import AddTransaction from './Components/add';
import DisplayTransaction from './Components/displayTransaction';
import {useState} from 'react';

function App() {
  const [transactions,setTransactions] = useState([]);

  const add = (transactionItem,amount,transactionType)=>{
    setTransactions((transactions)=>[...transactions,{transactionItem:transactionItem,amount:amount,transactionType:transactionType}]);
    console.log(transactions);
  };

  const testFunc = ()=>{
    return 6;
  }
  
  return (
    <div className="container">
      <div>learn react in {testFunc} months</div>
      <DisplayTransaction transactions={transactions}/>
      <AddTransaction addItem={add}/>
    </div>
  );
}

export default App;
