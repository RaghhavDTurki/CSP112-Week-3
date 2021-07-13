// Question 10
// Use JavaScript code to display all numbers in between any two given numbers which are not divisible by 3

const q10 = document.querySelector("#q10");
q10.addEventListener("click", () => {
    let number1 = parseInt(prompt("Enter 1st number"));
    let number2 = parseInt(prompt("Enter 2nd number"));
    const q10_ans = document.getElementById("q10-ans");
    if(Number.isNaN(number1))
    {
        if(Number.isNaN(number2))
        {
            alert("Enter a valid number");
        }
    }
    else{
        q10_ans.innerHTML = `The numbers between ${Math.min(number1, number2)} and ${Math.max(number2,number1)} which are divisible by 3 are `;
        for(let i = Math.min(number1, number2); i <= Math.max(number2, number1); i++)
        {
            if(i % 3 == 0)
            {
                q10_ans.innerHTML += i;
                q10_ans.innerHTML += ` `;
            }
        }
    }
})