var messageArray = ["console.log('Ready to Start?');"];
var textPosition = 0;
var speed = 50;

typewriter = () => {
    document.querySelector("#message").
    innerHTML = messageArray[0].substring(0, textPosition)
     + "<span class= 'bb'>\u25ae</span>";
     if(textPosition++ != messageArray[0].length);
     setTimeout(typewriter, speed);
     
}
window.addEventListener("load", typewriter);