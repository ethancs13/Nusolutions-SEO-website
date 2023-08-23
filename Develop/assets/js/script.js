const hamMenu = document.querySelector('button');
const dropDown = document.querySelector('#drop-Down');

var check = 0;

function drop(){
    // dropDown.style.visibility = "visible";
    // dropDown.style.display = "flex";
    // dropDown.style.flexDirection = "column";
    if (check === 0) {
        var style = document.createElement('style');

        hamMenu.innerHTML = "back";
        style.innerHTML = `
            .hamburger-Menu {
                visiblity: visible;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 40px;
                color: white;
                font-weight: bolder;
            }
            .drop-Down {
                visibility: visible;
                display: flex;
                flex-direction: column;
                position: absolute;
                margin-left: 82%;
                top: 60px;
                right: 20px;
            }
            .drop-Down li a{
                display: flex;
                background-color: #2589bd;
                border: 1px solid white;
                padding: 5px;
                margin: 2px;
                width: 300px;
                justify-content: center;
                align-items: center;
                font-size: 18px;
            }
        `;

         document.head.appendChild(style);
         check = check + 1;
    } else if (check === 1) {
        var style = document.createElement('style');

        hamMenu.innerHTML = "";
        style.innerHTML = `
            .hamburger-Menu {
                width: 50px;
                height: 50px;
                border: 2px solid white;
                border-radius: 20px;
            }
            .drop-Down {
                display: none;
            }
        `;

        document.head.appendChild(style);
        check = check - 1;
    }
}

hamMenu.addEventListener("click", drop)