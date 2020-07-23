function changecolour() {
    let theme_icon = document.querySelector(".change-theme");
    let icon_tag = theme_icon.getElementsByTagName('i');
    for (let a = 0; a < icon_tag.length; a++) {
        if (icon_tag[a].getAttribute("class") == "fa fa-sun-o") {
            icon_tag[a].setAttribute("class", "fa fa-moon-o");
            document.querySelector("body").style.backgroundColor = 'white';
            document.querySelector("body").style.color = 'black';
            document.getElementById("second").style.color = '#0493d3';
            let divs = document.getElementsByClassName('sub-divs');
            for (let b = 0; b < divs.length; b++) {
                divs[b].style.color = '#0493d3';
                divs[b].style.backgroundColor = '#cccccc';
            }
        } else {
            icon_tag[a].setAttribute("class", "fa fa-sun-o");
            document.querySelector("body").style.backgroundColor = 'black';
            document.querySelector("body").style.color = 'white';
            document.getElementById("second").style.color = '#ffe77a';
            let divs = document.getElementsByClassName('sub-divs');
            for (let b = 0; b < divs.length; b++) {
                divs[b].style.color = '#ffe77a';
                divs[b].style.backgroundColor = '#363636';
            }
        }
    }

}