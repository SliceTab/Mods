// ==UserScript==
// @name         Slice Tab mods
// @version      2.1
// @author       NightsFall
// @description  Slice Tab mods
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @match        https://tab.sli.ce.it/*
// @grant        none
// ==/UserScript==
// Settings //
    // Enabled/Disable features //
        var replace_image = true // true = on // false = off //
        var hideSearchbar = false // true = on // false = off //
        var darkmode = true
        var hideSlices = false
        var hideFavorites = false
    // Configuration //
        var new_image = "New image url here!" // Must be a link to a direct image! (Use .webp images to speed up loading times! You can find an online tool to convert them here: https://cloudconvert.com/png-to-webp) //
// End of settings (Make sure to save!) //





// Code (DONT TOUCH!)

/*globals $*/
$(document).ready(function(){
    if(hideSlices) {
        $(".text-white").css("display", "none")
        $("img[src='/static/media/sliceLogoLineBaseWhite.8119306a15b60d2319c77c3ccc6b4ba7.svg']").css("display", "none")
    };
    if(hideSearchbar) {
        $(".bg-white").css("display", "none")
        $("img[src='/static/media/searchLineGray500.3c25d17cf98eba1417d45aaa4d38eef8.svg']").css("display", "none")
    }
    if(hideFavorites) {
        $(".swiper").css("display","none")
    };
    if (replace_image == true){
        $("img[alt='Slice New Tab Wallpaper']").attr("src", new_image)
        // For the image by
        $(".text-primary-100").css("display", "none")
        $(".text-text-sm").css("display", "none")
        //
    };
    if (darkmode == true) {
        // Slices
        $(".text-white").css("color", "black")
        $("img[src='/static/media/sliceLogoLineBaseWhite.8119306a15b60d2319c77c3ccc6b4ba7.svg']").attr("src", "https://raw.githubusercontent.com/SliceTab/Mods/main/images/slice_logo_black.webp")
        // Search bar
        $(".bg-white").css("background-color", "black")
        $(".bg-white").css("color", "white")
        // Options
        $("img[src='/static/media/settingAdjustLineBaseWhite.09146b837dfc4a489bf95bbaec349eca.svg']").attr("src", "https://raw.githubusercontent.com/SliceTab/Mods/main/images/options_black.webp")
        addGlobalStyle('.widgets .favorites h1 { font-weight: 600; font-size: 18px; line-height: 28px; color: black; }')
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
