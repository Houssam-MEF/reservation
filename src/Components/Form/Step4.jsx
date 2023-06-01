import React from "react";
import './form.css';
import {BsCreditCard2BackFill} from "react-icons/bs";
import {BsPaypal} from "react-icons/bs";


function Step4({ formData, setFormData }) {
  return (
    <table>
             <tr>
      <td colSpan={2}>
      payment-method : 
          <input type="radio" name="class" value="card" defaultChecked={true}
          onChange={(e) => {
            setFormData({ ...formData, pmethode: e.target.value });
          }}/> <BsCreditCard2BackFill/>Card
          <input type="radio" name="class" value="paypal" 
          onChange={(e) => {
            setFormData({ ...formData, pmethode: e.target.value });
          }}/> <BsPaypal/>Paypal
 
          </td>
      </tr>
      <tr>
        <td>
          <input
          type="text"
          placeholder="Card CVC"
          value={formData.cvc}
          onChange={(e) => {
            setFormData({ ...formData, cvc: e.target.value });
          }}
        />
        </td>
        </tr>
        <tr>
        <td>
          <input
          type="text"
          placeholder="Month"
          value={formData.month}
          onChange={(e) => {
            setFormData({ ...formData, month: e.target.value });
          }}
          />
        </td>
        <td>
          <input
          type="text"
          placeholder="Years"
          value={formData.year}
          onChange={(e) => {
            setFormData({ ...formData, year: e.target.value });
          }}
          />
        </td>
      </tr>
 
      
      
      
      
   

      
     

    </table>
  );
}

export default Step4;