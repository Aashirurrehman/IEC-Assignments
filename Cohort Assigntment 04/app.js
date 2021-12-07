function getNumber(num){
    console.log(num)
    var result = document.getElementById("result");

    result.value += num;
}

function getResult() {

    var result = document.getElementById("result");
    console.log (result.value = "")


}

function getOutput(){
    var result = document.getElementById("result");

    console.log(result.value = eval(result.value))



}