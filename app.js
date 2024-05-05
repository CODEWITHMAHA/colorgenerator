const getColor =()=>{
    //hex code
    const randomNumber =Math.floor(Math.random()*16777215); //multiply Math.random() with 16777215 to convert any random number into hexadecimal number
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode);
}
//event call
document.getElementById("btn").addEventListener(
    "click",getColor
)
//initial call
getColor();