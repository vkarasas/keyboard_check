// window.addEventListener("keyup", (event) => {
//     const keyName = event.key;
//     const code = event.code;
//     //button function with timeout 100 milleseconds
//     button(code, keyName, false);
//     setTimeout(() => {
//         button(code, keyName, true);
//     }, 100)
   
//     // const p = document.createElement("p");
//     // p.textContent = `KeyboardEvent: key=${keyName} | code:${code}`
//     // document.getElementById("textarea").appendChild(p);
//     // window.scrollTo(0, document.body.scrollHeight);
// });

class Keyboard {
    register() {
        window.addEventListener("keyup", (event) => {
            console.log(event);
            //button function with timeout 100 milleseconds
            this.button(event, false);
            setTimeout(() => {
                this.button(event, true);
            }, 100)
        });

        window.addEventListener("keypress", (event) => {
            console.log(event);
            //button function with timeout 100 milleseconds
            this.button(event, false);
            // setTimeout(() => {
            //     this.button(event, true);
            // }, 100)
        });
    }

    button(event, reset) {
        console.log("code: ", event.code);
        console.log("keyName: ", event.key);
        const border = (!reset) ? '2px solid red': '2px solid black'
        document.getElementById(event.code).style.border = border;
        const color = (!reset) ? 'red' : 'black'
        document.getElementById(event.code).style.color = color;
    }
}

const keyboard = new Keyboard();
keyboard.register();