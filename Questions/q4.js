// Question 4
// Use JavaScript program to display table of any given number.

const q4 = document.querySelector("#q4");
q4.addEventListener("click", () => {
    const q4_para = document.getElementById("q4-ans");
    let number = prompt("Enter a number");
    number = parseInt(number);
    if(Number.isNaN(number))
    {
        alert("Enter a valid Number");
    }
    else
    {
        q4_para.innerHTML = `<br>The table of ${number} is <br>`;
        for(let i = 1; i <= 10; i++)
        {
            let result = i * number;
            q4_para.innerHTML += `${i} x ${number} = ${result}<br>`
        }
    }
})