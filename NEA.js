// Function to Go to a different page
CurrentPageId = 'page1'
function websiteGoTo(PageId){
    document.getElementById(CurrentPageId).style.display = "none"
    document.getElementById(PageId).style.display = "inline-block"
    CurrentPageId = PageId
    
}





// Function to Total and output the Incomes
totalincome=0
function TotalIncome(){

    CustomIncome1=parseInt(document.getElementById('CustomIncome1').value)
    CustomIncome2=parseInt(document.getElementById('CustomIncome2').value)
    wage=document.getElementById('wage').value
    Irregular=document.getElementById('IrregularIncome').value
    if(wage == "" || Irregular == ""){
        document.getElementById('TotalIncome').value='Please Enter Valid Data'
    }
    
    else{
        wage=parseInt(wage)
        Irregular=parseInt(Irregular)

        totalincome=wage+Irregular+CustomIncome1+CustomIncome2
        document.getElementById('TotalIncome').value='Total income = ' + totalincome  
    }
  
}





// Function Calculating total Expenses
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

    groceries=document.getElementById('Groceries').value
    eatOut=document.getElementById('Eat-Out').value


    if(rent == "" || electric == "" || water == "" || gas== "" || clothing == "" || phone == "" || subs == "" || groceries == "" || eatOut == ""){
        document.getElementById('TotalExpense').value='Please Enter Valid Data'
    }
    
    else{
        rent=parseInt(rent)
        electric=parseInt(electric)
        water=parseInt(water)
        gas=parseInt(gas)

        clothing=parseInt(clothing)
        phone=parseInt(phone)
        subs=parseInt(subs)
        
        groceries=parseInt(groceries)
        eatOut=parseInt(eatOut)

        totalexpense=rent+electric+gas+water+clothing+phone+subs+groceries+eatOut+CustomExpense1+CustomExpense2
        document.getElementById('TotalExpense').value='Total expense = ' + totalexpense  
    }
  
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