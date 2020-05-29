let DD = parseInt(prompt("DD"))
let MM = parseInt(prompt("MM"))
let CC = parseInt(prompt("CC"))
let YY = parseInt(prompt("YY"))
let gender = prompt("gender")
let name = (DD,MM,CC,YY) => {
    let results = ( ( parseInt(CC/4) -2*CC-1) + (parseInt(5*YY/4) ) + (parseInt(26*(MM+1)/10)) + DD ) % 7;
    if (results === 0 && male)
    alert("SUNDAY"); else alert("SONDAY");
    if(results === 1&& male)
    alert("MONDAY"); else alert ("MONDAY")

}
name(DD,MM,CC,YY);