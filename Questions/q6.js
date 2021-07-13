// Question 6
// Use JavaScript program to find greatest no. from any three given nos.

const q6 = document.querySelector("#q6");
q6.addEventListener("click", () => {
    let num1 = parseFloat(prompt("Enter a positive number: "));
    if(Number.isNaN(num1))
    {
        alert("Enter a valid number");
    }
    else
    {
        const q6_ans = document.getElementById("q6-ans");
        q6_ans.innerHTML = `The reverse of ${num1} is `;
        while(num1 > 0)
        {
            q6_ans.innerHTML += (num1 % 10);
            num1 = Math.floor(num1 / 10) ;
        }
    }
})