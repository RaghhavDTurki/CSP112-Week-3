// Question 8
// Use JavaScript code to display all odd numbers between any two given numbers.

const q8 = document.querySelector("#q8");
q8.addEventListener("click", () => {
    let number1 = parseInt(prompt("Enter 1st number"));
    let number2 = parseInt(prompt("Enter 2nd number"));
    const q8_ans = document.getElementById("q8-ans");
    if(Number.isNaN(number1))
    {
        if(Number.isNaN(number2))
        {
            alert("Enter a valid number");
        }
    }
    else{
        q8_ans.innerHTML = `The odd numbers between ${Math.min(number1, number2)} and ${Math.max(number2,number1)} are `;
        for(let i = Math.min(number1, number2); i <= Math.max(number2, number1); i++)
        {
            if(i % 2 == 1)
            {
                q8_ans.innerHTML += i;
                q8_ans.innerHTML += ` `;
            }
        }
    }
})