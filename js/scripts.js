let DD = parseInt(prompt("DD"))
let MM = parseInt(prompt("MM"))
let CC = parseInt(prompt("CC"))
let YY = parseInt(prompt("YY"))
let name = (DD,MM,CC,YY) => {
    let results = ( ( parseInt(CC/4) -2*CC-1) + (parseInt(5*YY/4) ) + (parseInt(26*(MM+1)/10)) + DD ) % 7;
    if (results === 0)
    alert("SUNDAY")
    else if(results === 1)
    alert("MONDAY")
    else if(results === 2)
    alert("TUESDAY")
    else if(results === 3)
    alert("WEDNESDAY")
    else if(results === 4)
    alert("THURSDAY")
    else if(results === 5)
    alert("FRIDAY")
    else if(results === 6)
    alert("SATURDAY")
}
name(DD,MM,CC,YY);