// Question 5
// Use JavaScript program to add all digits form given value

const q5 = document.querySelector("#q5");
q5.addEventListener("click", () => {
    let num1 = parseFloat(prompt("Enter a positive number: "));
    if(Number.isNaN(num1))
    {
        alert("Enter a valid number");
    }
    else
    {
        const q5_ans = document.getElementById("q5-ans");
        q5_ans.innerHTML = `The sum of digits of ${num1} is `;
        let sum = 0;
        while(num1 > 0)
        {
            sum += num1 % 10;
            num1 = Math.floor(num1 / 10) ;
        }
        q5_ans.innerHTML += sum;
    }
})