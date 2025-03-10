const getcolor = () => {
    const randomnumber = Math.floor(Math.random()*16777215);
    const hexcode = "#" + randomnumber.toString(16);
    document.body.style.backgroundColor = hexcode;
    document.getElementById("color-code").innerText=hexcode;
    navigator.clipboard.writeText(hexcode);
    
}

document.getElementById("btn").addEventListener("click",getcolor);

getcolor();