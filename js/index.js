window.addEventListener("keyup", (event) => {
    const keyName = event.key;
    const code = event.code;
    const p = document.createElement("p");
    p.textContent = `KeyboardEvent: key=${keyName} | code:${code}`
    document.getElementById("textarea").appendChild(p);
    window.scrollTo(0, document.body.scrollHeight);
});
