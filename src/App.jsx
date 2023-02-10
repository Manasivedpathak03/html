
import './App.css';
import logo from './arrow.png';
function App() {
  return ( 
    <>
     <div className='main'>
<table class ="center" >
    <tr>
    <th>Name</th>
    <th>Date</th>
    <th>Status</th>
    <th>A</th>
    <th>Invoice</th>
    </tr>
    <tr>
        <td>Inv 1</td>
        <td> 07/03/2023  </td>
        <td> PAID </td>
        <td> 70x </td>
        <td><img src={logo} alt="Logo" /></td>
       
    </tr>
    
    <tr>
        <td>Inv 2</td>
        <td> 10/03/2023  </td>
        <td> PAY</td>
        <td> 70x </td>
        <td><img src={logo} alt="Logo" /></td>
       
    </tr>




</table>
        
    
</div>
    </>
   
  );
}

export default App;
