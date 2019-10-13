import  React from 'react'

export default (props) =>{
    return (
        <div className="loadingContainer">
        
        {props.errorMsg ? props.errorMsg : props.loanDetails && props.loanDetails.interestRate ? 
         <div>
            <b>Loan Details: </b> 
            <br/>
             Interest Rate : {props.loanDetails.interestRate}
             <br/>
             Monthly Payment: {props.loanDetails.monthlyPayment && props.loanDetails.monthlyPayment.amount || 0}
          </div>
        
        : 'Select or Change the above values'}
      </div>
    )
}