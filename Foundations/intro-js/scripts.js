function add7(a){
    return a + 7;
}

function multiply(a){
    return 2 * a;
}

function capitalize(str){
    let start = str[0].toUpperCase()
    let end = str.substring(1, str.length).toLowerCase()
    return start + end
}

console.log(capitalize("hELLO"));