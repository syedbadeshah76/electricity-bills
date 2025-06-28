function calculateBill() {
    let prevUnits = parseInt(document.getElementById("prevUnits").value);
    let currUniits = parseInt(document.getElementById("currUnits").value);
    let totalUnits = currUniits - prevUnits;
    let locationType = document.getElementById("typee").value;
    let billAmount=0;
    console.log(totalUnits)

    if (locationType === "domestic") {
        console.log("hello")
        if (totalUnits >= 0 && totalUnits < 50) {

            billAmount = totalUnits * 3;
        } else if (totalUnits >= 50 && totalUnits < 150) {
            billAmount = totalUnits * 5;
        }
        else if (totalUnits >= 150) {
            billAmount = totalUnits * 7;
        }
    } 
    else if (locationType === "commercial") {
        if (totalUnits >= 0 && totalUnits < 50) {
            billAmount = totalUnits * 5;
        } else if (totalUnits >= 50 && totalUnits < 150) {
            billAmount = totalUnits * 7;
        }
        else if (totalUnits >= 150) {
            billAmount = totalUnits * 9;
        }
    } else if (locationType === "industrial") {
        if (totalUnits >= 0 && totalUnits < 50) {

            billAmount = totalUnits * 9;
        } else if (totalUnits >= 50 && totalUnits < 150) {
            billAmount = totalUnits * 11;
        }
        else if (totalUnits >= 150) {
            billAmount = totalUnits * 13;
        }
    }

    // console.log(totalUnits)

    document.getElementById("unitss").innerHTML= totalUnits;
    document.getElementById("billOutput").innerHTML = billAmount;
}