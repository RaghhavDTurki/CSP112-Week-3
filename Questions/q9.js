// Question 9
// Use JavaScript code to display all numbers in between 1 and 30 which are divisible by 3

const q9 = document.querySelector("#q9");
q9.addEventListener("click", () => {
    let number1 = 1;
    let number2 = 30;
    const q9_ans = document.getElementById("q9-ans");
    q9_ans.innerHTML = `The numbers between ${Math.min(number1, number2)} and ${Math.max(number2,number1)} which are divisible by 3 are `;
        for(let i = Math.min(number1, number2); i <= Math.max(number2, number1); i++)
        {
            if(i % 3 == 0)
            {
                q9_ans.innerHTML += i;
                q9_ans.innerHTML += ` `;
            }
        }
})