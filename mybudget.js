const budgetList = document.getElementById("budget-list")
const addList = document.getElementById("add")


addList.addEventListener("click", () => {

    const budgetItems = document.querySelectorAll(".budget-item")

    if(budgetItems.length == 12){
        alert("Limit budget items list")
    }else{
        const createBudget = document.getElementById("createbudget").value
        const addPrices = document.getElementById("budgetprices").value

        if(createBudget == "" && addPrices == ""){
            alert("Please enter your budget")
        }else{
             
        const div1 = document.createElement("div")
        const div2 = document.createElement("div")
        const div3 = document.createElement("div")
        const p = document.createElement("p")
        const h3 = document.createElement("h3")
        const hr = document.createElement("hr")
    
        h3.textContent = createBudget
        p.textContent = `Budgets : ${addPrices}$`
    
        hr.style.width = "100%"
        div1.className = "budget-item"
        div2.className = "progress-bar"
        div3.style.width = "100%"
        div3.style.backgroundColor = "white"
    
        div1.append(h3)
        div1.append(hr)
        div1.append(p)
        div1.append(div2)
        div1.append(div3)
        budgetList.append(div1)
      } 
    }
})
