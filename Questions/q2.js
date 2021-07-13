// Question 2
// Use JavaScript program to add all numbers in between any two given numbers.

const q2 = document.querySelector("#q2");
q2.addEventListener("click", () => {
    let number1 = parseInt(prompt("Enter 1st number"));
    let number2 = parseInt(prompt("Enter 2nd number"));
    const q2_ans = document.getElementById("q2-ans");
    if(Number.isNaN(number1))
    {
        if(Number.isNaN(number2))
        {
            alert("Enter a valid number");
        }
    }
    else
    {
        q2_ans.innerHTML = `The sum of numbers between ${Math.min(number1,number2)} and ${Math.max(number1,number2)} is `;
        let sum = 0;
        for(let i = Math.min(number1,number2); i <= Math.max(number1,number2); i++)
        {
            sum += i;
        }
        q2_ans.innerHTML += sum;
    }

})
