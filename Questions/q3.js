// Question 3
// Use JavaScript program to display table of 5.


const q3 = document.querySelector("#q3");
q3.addEventListener("click", () => {
    const q3_para = document.getElementById("q3-ans");
    let number = 5;
    q3_para.innerHTML = `<br>The table of ${number} is <br>`;
    for(let i = 1; i <= 10; i++)
    {
        let result = i * number;
        q3_para.innerHTML += `${i} x ${number} = ${result}<br>`
    }
})