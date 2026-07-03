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


    wage=document.getElementById('wage').value
    Irregular=document.getElementById('IrregularIncome').value

    CustomIncome1=document.getElementById('CustomIncome1').value
    CustomIncome2=document.getElementById('CustomIncome2').value
    
    // Validation, checking if any of the inputs are empty
    if(wage == "" || Irregular == "" || CustomIncome1 == "" || CustomIncome2 == ""){
        document.getElementById('TotalIncome').textContent='Please Enter Valid Data'
        document.getElementById('DashboardIncome').textContent=0+'  (Fields Empty)'
    }
    
    // Turn all the inputs into numbers so they can be used in the calculation
    
    else{
        wage=Number(wage)
        Irregular=Number(Irregular)

        CustomIncome1=Number(CustomIncome1)
        CustomIncome2=Number(CustomIncome2)

        totalincome=wage+Irregular+CustomIncome1+CustomIncome2
        document.getElementById('TotalIncome').textContent='Total income = £' + totalincome.toFixed(2)
        document.getElementById('DashboardIncome').textContent = totalincome.toFixed(2)
    }
  
    return totalincome
}





// Function Calculating total Expenses
let totalexpense=0
DashboardExpense=0
function TotalExpense(){

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

    CustomExpense1=document.getElementById('CustomExpense1').value
    CustomExpense2=document.getElementById('CustomExpense2').value    

    // Validation, checking if any of the inputs are empty

    if(rent == "" || 
    electric == "" || 
    water == "" || 
    gas== "" || 
    clothing == "" || 
    phone == "" || 
    subs == "" || 
    savings == "" || 
    groceries == "" || 
    eatOut == "" || 
    CustomExpense1 == "" ||
    CustomExpense2 == ""){

        document.getElementById('TotalExpense').textContent='Please Enter Valid Data'
        document.getElementById('DashboardExpense').textContent=0+ '    (Fields Empty)'
    }
    
    // Turn all the inputs into numbers so they can be used in the calculation
    
    else{
    pievalues=[
        rent=Number(rent),
        electric=Number(electric),
        water=Number(water),
        gas=Number(gas),

        clothing=Number(clothing),
        phone=Number(phone),
        subs=Number(subs),
        savings=Number(savings),
        
        groceries=Number(groceries),
        eatOut=Number(eatOut),

        CustomExpense1=Number(CustomExpense1),
        CustomExpense2=Number(CustomExpense2)
    ]

        totalexpense=rent+electric+gas+water+clothing+phone+subs+savings+groceries+eatOut+CustomExpense1+CustomExpense2
        document.getElementById('TotalExpense').textContent='Total expense = £' + totalexpense.toFixed(2)
        document.getElementById('DashboardExpense').textContent = totalexpense.toFixed(2)

    }

  
    return totalexpense, pievalues
}





// Function that displays the hidden custom inputs
// Checks to see if the first category is showing before showing the second, allowing for them to be added individually
function CustomCategory(type){
    if(type=='income'){
        check = document.getElementById('CustomIncome1').style.display
        if(check == "inline-block"){
            document.getElementById('CustomIncome2').style.display = "inline-block"
            if(document.getElementById('CustomIncome2').value == 0){
                document.getElementById('CustomIncome2').value=""    
            }
            document.getElementById('RemoveCustomIncome2').style.display = "inline-block"    
        }

        else{
            document.getElementById('CustomIncome1').style.display = "inline-block"
            if(document.getElementById('CustomIncome1').value == 0){
                document.getElementById('CustomIncome1').value=""    
            }
            document.getElementById('RemoveCustomIncome1').style.display = "inline-block"   
        }
    }

    // Add custom expenses
    if(type=='expense'){
        
        // Validation for checking if the first one is already displayed
        check = document.getElementById('CustomExpense1').style.display
        if(check == "inline-block"){
            document.getElementById('CustomExpense2').style.display = "inline-block"
            if(document.getElementById('CustomExpense2').value == 0){
                document.getElementById('CustomExpense2').value=""    
            }
        
            
            // Display the remove custom expense button
            document.getElementById('RemoveCustomExpense2').style.display = "inline-block"    
        }
    
        
        else{
            document.getElementById('CustomExpense1').style.display = "inline-block"
            if(document.getElementById('CustomExpense1').value == 0){
                document.getElementById('CustomExpense1').value=""    
            }
            document.getElementById('RemoveCustomExpense1').style.display = "inline-block"   
    }

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
    document.getElementById('Profit').value = Profit.toFixed(2)
}


// Function to calculate compound or simple interest interest
// Also makes the graph
let chart

function CalcInterest(type){

    let saved = document.getElementById('Saved').value
    let interest = document.getElementById('Interest').value
    let years = document.getElementById('Years').value

    // Validation, checking if any inputs are empty
    
    if(saved=="" || interest=="" || years==""){
        document.getElementById('Result').value='Please Fill all Fields'
        return
    }

    // Turn the inputs into numbers so they can be used in the calculation
    // Divide interest by 100 to turn it from a percentage to a decimal

    let total = 0
    saved = Number(saved)
    interest = Number(interest)/100
    years = Number(years)

    // Making empty strings for the values in the graph
    const labels = []
    const values = []

    // For loop Repeat the calculations for the amount of years needed
    
    for(let year = 0; year <= years; year++){

        labels.push(year)

        let value

        if(type == 'compound'){
            value = saved * Math.pow(1 + interest, year)
        }

        if(type == 'simple'){
            value = saved + (saved * interest * year)
        }

        // Push the value of each year to an array for the graph
        values.push(value.toFixed(2))
    }


    total = values[values.length - 1]

    // Calculating a difference
    
    let difference = (total - saved).toFixed(2)

    
    // Output for valid data
    document.getElementById('Result').value =
        'Total Savings after ' + years +' years is £' + total +' (+£' + difference + ')'



    // Delete existing chart
    
    if(chart){
        chart.destroy()
    }
    // Everything for the chart

    // Draw chart
    const LineChartId = document.getElementById('myChart')
    chart = new Chart(LineChartId, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Savings Value (£)',
                data: values,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value (£)'
                    }
                }
            }
        }
    })
}

function pie(){
    if(chart){
    chart.destroy()
    }
    const PieChartId=document.getElementById('pie-chart')
    chart = new Chart(PieChartId, {
    type: 'pie',
    data: {
        labels: ['Rent', 'Electric', 'Water', 'Gas','Clothing','Phone','Subscription','Savings','Groceries','Eating Out','Custom Expense 1','Custom Expense 2'],
        datasets: [{
            data: pievalues,
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(122, 57, 245)',
            'rgb(0, 0, 0)',
            'rgb(253, 122, 0)',
            'rgb(104, 0, 22)',
            'rgb(255, 0, 0)',
            'rgb(102, 255, 0)',
            'rgb(255, 255, 255)',
            'rgb(0, 255, 213)',
            'rgb(225, 250, 0)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,

    }
})
}