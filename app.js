const getColor = () => {
    const randomeNumber = Math.floor(Math.random() * 16777215);
    const randomeCode = "#" + randomeNumber.toString(16);
    document.body.style.backgroundColor = randomeCode;
    document.getElementById("color-code").innerText = randomeCode;

    navigator.clipboard.writeText(randomeCode);
}    

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor();