// Question 1
// Use JavaScript to calculate the sum of first 10 natural nos.
const q1 = document.querySelector("#q1");
q1.addEventListener("click", () => {
    let number1 = 1;
    let number2 = 10;
    const q1_ans = document.getElementById("q1-ans");
    q1_ans.innerHTML = `The sum of numbers between ${Math.min(number1,number2)} and ${Math.max(number1,number2)} is `;
    let sum = 0;
    for(let i = Math.min(number1,number2); i <= Math.max(number1,number2); i++)
    {
        sum += i;
    }
    q1_ans.innerHTML += sum;
})
