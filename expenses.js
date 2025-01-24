const Listitems = document.getElementById("list-item")
const Submit = document.getElementById("submit")


Submit.addEventListener("click", () => {

    const Reason = document.getElementById("reason").value
    const Budget = document.querySelector("#budgets").value
    const Prices = document.getElementById("prices").value
    const items = document.querySelectorAll(".items")

    if(items.length == 5){
       alert("items limit to 5 only")
    }else{
        if(Reason == "" && Prices == ""){
            alert("Enter Reason and Prices")
        }else{
            const li = document.createElement("li")
            li.className = "items"
            li.textContent += Reason + " " + Budget + " " + Prices + "$"
            Listitems.append(li)
        }
    }  
})