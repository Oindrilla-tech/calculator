// console.log("oin");
// console.log(eval('2 + 2'));
// let str="";
// let all_button = document.querySelector(".btn");
function appendNumber(value) {
    
    if(document.getElementById('display').value =='0')
    {
        document.getElementById('display').value ='';
        document.getElementById('display').value += value;
    }
    else{
        document.getElementById('display').value += value;
    }
}
function reset() {
    document.getElementById('display').value = '0';
}

function calculate() {
    const expression = document.getElementById('display').value;
    const result = eval(expression); // Using eval for simplicity, but consider safer alternatives
    document.getElementById('display').value = result;
}
function deleteL() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
