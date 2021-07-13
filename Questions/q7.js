// Question 7
// Use JavaScript code to display even numbers between 0 to 10

const q7 = document.querySelector("#q7");
q7.addEventListener("click", () => {
    const q7_ans = document.getElementById("q7-ans");
    q7_ans.innerHTML = `The even numbers between 0 and 10 are `;
        for(let i = 0; i <= 10; i++)
        {
            if(i % 2 == 0)
            {
                q7_ans.innerHTML += i;
                q7_ans.innerHTML += ` `;
            }
        }
})