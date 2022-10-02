// ==UserScript==
// @name         Slice Tab mods
// @version      1.2
// @description  Slice Tab mods
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @match        https://sli.ce.it/tab*
// @grant        none
// ==/UserScript==
// Settings //
    // Enabled/Disable features //
        var replace_image = true // true = on // false = off //
        var searchbar = true // true = on // false = off //
        var darkmode = true
        var hideSlices = true
        var hideFavorites = true
    // Configuration //
        var new_image = "Your image" // Must be a link to a direct image! //
// End of settings (Make sure to save!) //





// Code (DONT TOUCH!)

/*globals $*/
$(document).ready(function(){
    if(hideSlices) {
    $(".user-stats").css("display","none")
    };
    if(hideFavorites) {
    const interval = setInterval(() => {
    if($(".item").length > 0) {
        $(".widgets .favorites .grid").css("display","none")
        $(".widgets .favorites").css("display","none")
        clearInterval(interval)
    }
    }, 100)
    };
    if (replace_image == true){
        $("img[class='js-wallpaper']").attr("src", new_image)
    };
    if (searchbar == true){
        if(!darkmode) {
        $("body").append ( `
            <div style="position:fixed;bottom: 75%;display:flex;justify-content:center;background:#ffffff00;margin:0;z-index:4; width: 100%; height: 2.5rem;">
                <form action="https://www.google.com/search" method="get" id="search-form">
                <div style="display: flex; width: 100%;">
                    <input name="q" type="text" placeholder="Search on google..." autocomplete="off" autofocus style="color: black; width: 75vh; height: 2.5rem; border-radius: 100rem; padding-left: 0.75rem; padding-right: 0.75rem; padding-top: 0.25rem; padding-bottom: 0.25rem; border-color: black; background-color: white;">
                </div>
                </form>
            </div>
        ` );
    } else {
        $("body").append ( `
            <div style="position:fixed;bottom: 75%;display:flex;justify-content:center;background:#ffffff00;margin:0;z-index:4; width: 100%; height: 2.5rem;">
                <form action="https://www.google.com/search" method="get" id="search-form">
                <div style="display: flex; width: 100%;">
                    <input name="q" type="text" placeholder="Search..." autocomplete="off" autofocus style="color: white; width: 75vh; height: 2.5rem; border-radius: 100rem; padding-left: 0.75rem; padding-right: 0.75rem; padding-top: 0.25rem; padding-bottom: 0.25rem; border-color: white; background-color: black;">
                </div>
                </form>
            </div>
        ` );
        };
    };
    if (darkmode == true) {
        $(".time").css("color", "black")
        $(".js-slices").css("color", "black")
        $(".body p").css("color", "black")
        $(".head svg path").css("fill", "black")
        addGlobalStyle('.widgets .favorites h1 { font-weight: 600; font-size: 18px; line-height: 28px; color: black; }');
        const interval = setInterval(() => {
        if($(".item").length > 0) {
        $(".item p").css("color", "black")
        $(".item .image").css("background-color", "black")
        $(".item .image p").css("color", "white")
        clearInterval(interval)
        }
        }, 100)
    };
});

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
