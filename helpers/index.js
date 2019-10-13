export const setValueInLocalStorage = (key,value) =>{
    if(value)
        localStorage.setItem(key, JSON.stringify(value))
    else 
    console.log("error in setting local storage value")
}

export const getValuefrmLocalStorage = (key) =>{
    if(key)
      return JSON.parse(localStorage.getItem(key))
    else 
        console.log('Error in getting local storage value')
}