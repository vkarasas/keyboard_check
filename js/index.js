window.addEventListener("keyup", (event) => {
    const keyName = event.key;
    const code = event.code;
    //button function with timeout 100 milleseconds
    button(code, keyName, false);
    setTimeout(() => {
        button(code, keyName, true);
    }, 100)
   
    // const p = document.createElement("p");
    // p.textContent = `KeyboardEvent: key=${keyName} | code:${code}`
    // document.getElementById("textarea").appendChild(p);
    // window.scrollTo(0, document.body.scrollHeight);
});

function button(code, keyName, reset) {
    console.log("code: ", code);
    console.log("keyName: ", keyName);
    const border = (!reset) ? '2px solid red': '2px solid black'
    document.getElementById(code).style.border = border;
    const color = (!reset) ? 'red' : 'black'
    document.getElementById(code).style.color = color;
}
