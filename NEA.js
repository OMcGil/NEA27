// Function to Go to a different page
let CurrentPageId = 'page1'
function websiteGoTo(PageId){
    document.getElementById(CurrentPageId).style.display = "none"
    document.getElementById(PageId).style.display = "inline-block"
    CurrentPageId = PageId
    
}





// Function to Total and output the Incomes
let totalincome=0
DashboardIncome=0
function TotalIncome(){

    CustomIncome1=parseInt(document.getElementById('CustomIncome1').value)
    CustomIncome2=parseInt(document.getElementById('CustomIncome2').value)
    wage=document.getElementById('wage').value
    Irregular=document.getElementById('IrregularIncome').value
    if(wage == "" || Irregular == ""){
        document.getElementById('TotalIncome').textContent='Please Enter Valid Data'
        document.getElementById('DashboardIncome').textContent=0
    }
    
    else{
        wage=parseInt(wage)
        Irregular=parseInt(Irregular)

        totalincome=wage+Irregular+CustomIncome1+CustomIncome2
        document.getElementById('TotalIncome').textContent='Total income = ' + totalincome  
        document.getElementById('DashboardIncome').textContent = totalincome
    }
  
    return totalincome
}





// Function Calculating total Expenses
let totalexpense=0
DashboardExpense=0
function TotalExpense(){
    CustomExpense1=parseInt(document.getElementById('CustomExpense1').value)
    CustomExpense2=parseInt(document.getElementById('CustomExpense2').value)
    rent=document.getElementById('Rent').value
    electric=document.getElementById('Electric').value
    water=document.getElementById('Water').value
    gas=document.getElementById('Gas').value

    clothing=document.getElementById('Clothing').value
    phone=document.getElementById('Phone').value
    subs=document.getElementById('Subs').value
    savings=document.getElementById('Savings').value

    groceries=document.getElementById('Groceries').value
    eatOut=document.getElementById('Eat-Out').value

    
    if(rent == "" || electric == "" || water == "" || gas== "" || clothing == "" || phone == "" || subs == "" || savings == "" || groceries == "" || eatOut == ""){
        document.getElementById('TotalExpense').textContent='Please Enter Valid Data'
        document.getElementById('DashboardExpense').textContent=0
    }
    
    else{
        rent=parseInt(rent)
        electric=parseInt(electric)
        water=parseInt(water)
        gas=parseInt(gas)

        clothing=parseInt(clothing)
        phone=parseInt(phone)
        subs=parseInt(subs)
        savings=parseInt(savings)
        
        groceries=parseInt(groceries)
        eatOut=parseInt(eatOut)

        totalexpense=rent+electric+gas+water+clothing+phone+subs+savings+groceries+eatOut+CustomExpense1+CustomExpense2
        document.getElementById('TotalExpense').textContent='Total expense = ' + totalexpense
        document.getElementById('DashboardExpense').textContent = totalexpense

    }

  
    return totalexpense
}





// Function that displays the hidden custom income inputs
function CustomIncome(){
    check = document.getElementById('CustomIncome1').style.display
    if(check == "inline-block"){
        document.getElementById('CustomIncome2').style.display = "inline-block"
        document.getElementById('RemoveCustomIncome2').style.display = "inline-block"    
    }
    
    else{
        document.getElementById('CustomIncome1').style.display = "inline-block"
        document.getElementById('RemoveCustomIncome1').style.display = "inline-block"   
    }



}





// Function that displays the hidden custom expense inputs
function CustomExpense(){
    check = document.getElementById('CustomExpense1').style.display
    if(check == "inline-block"){
        document.getElementById('CustomExpense2').style.display = "inline-block"
        document.getElementById('RemoveCustomExpense2').style.display = "inline-block"    
    }
    
    else{
        document.getElementById('CustomExpense1').style.display = "inline-block"
        document.getElementById('RemoveCustomExpense1').style.display = "inline-block"   
    }



}

// Button to remove custom inputs
function RemoveCustom(Custom, Pressed){
    document.getElementById(Custom).value=0
    document.getElementById(Custom).style.display = "none"
    document.getElementById(Pressed).style.display = "none"
}

// Function To calculate the final profit
function CalcProfit(){
    Profit = totalincome - totalexpense
    document.getElementById('Profit').value = Profit
}


// Function to calculate compound or simple interest interest
function CalcInterest(type){
    
    saved=document.getElementById('Saved').value
    interest=document.getElementById('Interest').value
    years=document.getElementById('Years').value

    if(saved=="" || interest=="" || years==""){
        document.getElementById('Result').value='Please Fill all Fields'
        return
    }

    total=0
    saved=Number(saved)
    interest=Number(interest)/100
    years=Number(years)

    if(type=='compound'){
        total=saved*(1+interest)**years
    }

    if(type=='simple'){
        total=saved+(saved*interest*years)
    }

        total=total.toFixed(2)
        difference=total-saved
        difference=difference.toFixed(2)

        document.getElementById('Result').value='Total Savings after '+years+ ' years is £'+total+' (+£'+difference+')'
}
