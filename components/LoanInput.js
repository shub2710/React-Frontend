// Includes Loan Input elements : Loan Amount and Loan Duration

import React from 'react'
import {Layout,  Menu, Icon, Slider, InputNumber,Spin } from 'antd';

export default (props) =>{
    return (
    <div>
        
        <label> Loan Amount($): </label>
         <Slider 
            value={props.loanAmount}  
            step={50} 
            defaultValue={500} 
            min={501} 
            max={4999} 
            onChange={props.onLoanAmountChange} 
            onAfterChange={props.loanAmountChangedValue}
         />
         <label>Loan Duration(Months): </label>
        <br/>
          <InputNumber
             defaultValue={0}
             min={6}
             max={23}
             value	= {props.loanDuration}
             onChange={props.loanDurationChange}
           />
    </div>
    )
}