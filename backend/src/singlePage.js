

const setLinksToHeaders = () => {

    document.getElementById("linkToHeader1").addEventListener("click", function() {
        document.getElementById("header2").scrollIntoView({behavior: "smooth"});
    });

    
    document.getElementById("linkToHeader2").addEventListener("click", function() {
        document.getElementById("header1").scrollIntoView({behavior: "smooth"});
    });
}


window.onload = () => {
    const button = document.getElementById("fontButton");



    button.onclick = () => {

        const helloWorldText = document.getElementById("helloWorld");

        if (helloWorldText.style.fontSize != "25px"){
            helloWorldText.style.fontSize = "25px";
        }
        else{
            helloWorldText.style.fontSize = "10px";
        }

    }


    setLinksToHeaders();
}




