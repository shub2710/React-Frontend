import React,{useState, useEffect } from 'react'
import {Layout,  Menu, Icon, Slider, InputNumber,Spin } from 'antd';
import PageLayout from '../components/Layout'
import {setValueInLocalStorage, getValuefrmLocalStorage} from '../helpers'
import LoanDetails from '../components/LoanDetails'
import LoanInput from '../components/LoanInput'
import '../css/index.css'
import 'antd/dist/antd.css'

const { Header, Sider, Content } = Layout;


export default () =>  {

  const [loanAmount, setLoanAmount] = useState(501)
  const [loanDuration, setDurationAmount] = useState(6)
  const [errorMsg , setErrorMsg ] = useState(null)
  const [loanDetails, setLoanDetails] = useState(null)
  const [ loanHistory, setloanHistory ] = useState([])
  
  const getLoanDetails = async () =>{
    if(loanDuration < 24 && loanDuration > 6 && loanAmount >500 && loanAmount < 5000 ){
      // console.log('Fetching Loan details',loanAmount ,loanDuration );  
      try {
        const data = await fetch(`${process.env.API_URL}interest?amount=${loanAmount}&numMonths=${loanDuration}`);
        const loanDetails = await data.json();
        setLoanDetails(loanDetails)
        const history = getValuefrmLocalStorage('loanHistory')
        if( history !== null){
          history.push(loanDetails)
          setValueInLocalStorage('loanHistory',history)
        }
        else 
          setValueInLocalStorage('loanHistory',[loanDetails])

      setErrorMsg(null)
      getHistory()
      } catch (error) {
        setErrorMsg('Error in loading values')
      }
    } else {
      setErrorMsg('Select correct values')
    }
  }

  const getHistory = () => {
    const history = getValuefrmLocalStorage('loanHistory')
    if( history !== null){
      setloanHistory(history)
    }
  }

  // Get history 
  useEffect(()=>{
    getHistory()
  },[])

  // Get Loan Details on Loan Duration Value Changes
  useEffect(()=>{
    getLoanDetails()
  },[loanDuration])

  const loanAmountChangedValue = (value) => {
    getLoanDetails()
  }
  
   const loanDurationChange = (value) => {
    // console.log('changed', value);
    setDurationAmount(value)
  }

  const onLoanAmountChange = (value) =>{
    // console.log('Loan Amount has changed: ', value);
    setLoanAmount(value)
  }

 const selectHistoryItem = (selectedLoan) =>{
        setLoanAmount(selectedLoan.principal.amount)
        setDurationAmount(selectedLoan.numPayments)
        getLoanDetails()
  }

 
    return (
        <PageLayout loanHistory={loanHistory} selectHistoryItem={selectHistoryItem}>
          {
            // Page Content below 
          }
            <div>
                Select the below to get <b> Interest Rate </b> and <b> Monthly Payment amount.</b>
            </div>
              <br/>
           <LoanInput 
              loanAmount={loanAmount} 
              onLoanAmountChange={onLoanAmountChange} 
              loanAmountChangedValue={loanAmountChangedValue}
              loanDuration={loanDuration}
              loanDurationChange={loanDurationChange}

            />
          <LoanDetails loanDetails={loanDetails} errorMsg={errorMsg} />
        </PageLayout>
  
    );
  }