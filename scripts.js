// API CONSTS
const url = "https://economia.awesomeapi.com.br/last/"
const coins = "USD-BRL,EUR-BRL,GBP-BRL"

// getting elements
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulating input to receive only numbers
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

//cathing event of submit at the form and consuming the API to know the value of the currency
form.onsubmit = () => {
    event.preventDefault()

    const selectedCurrency = currency.value

    fetch(url + coins)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let rate
            let symbol
            switch (selectedCurrency) {
                case "USD":
                    rate = data.USDBRL.bid
                    symbol = "USD $"
                    break
                case "EUR":
                    rate = data.EURBRL.bid
                    symbol = "EUR €"
                    break
                case "GBP":
                    rate = data.GBPBRL.bid
                    symbol = "GBP £"
                    break
            }
            convertCurrency(amount.value, rate, symbol)
        })
}

// function to convert currency 
function convertCurrency(amount, rate, symbol) {
    console.log(amount, rate, symbol)

    try {
        // showing the rate of the selected currency
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(rate)}`

        // showing the full result
        let total = amount * rate
        total = formatCurrencyBRL(total).replace("R$", "")
        result.textContent = `${total} REAIS`

        // aplying the class that shows the footer result
        footer.classList.add("show-result")
    } catch ( error ) {
        console.log(error)
        // remove the footer class and removing it from the screen 
        footer.classList.remove("show-result")
        alert("Não foi possível realizar a conversão")
    }
}

function formatCurrencyBRL(value){
    //convert to number to use the localeString to convert to brasilian number
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

