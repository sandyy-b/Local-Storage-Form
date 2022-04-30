// console.log("This is the table page!");
window.addEventListener('load', function (){
    displayData()
});

function displayData() {
    let getData = JSON.parse(localStorage.getItem("users"));
    if (getData != null) {
        let html = '';
        let sno = 1;
        for (let k in getData) {
            html +=
            `<tr>
                <td>${sno}</td>
                <td>${getData[k].firstName}</td>
                <td>${getData[k].lastName}</td>
                <td>${getData[k].firstName + " " + getData[k].lastName}</td>
                <td>${getData[k].email}</td>
                <td>${getData[k].phoneNumber}</td>
            </tr>`
            sno++;
        }
        document.getElementById("tableBody").innerHTML = html;
    }
}