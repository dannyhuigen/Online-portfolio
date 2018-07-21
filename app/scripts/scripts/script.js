
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && !!window.chrome.webstore;
var isBlink = (isChrome || isOpera) && !!window.CSS;

if (!isFirefox){
    var scene = document.getElementById('parallax');
    var parallaxInstance = new Parallax(scene);
}

if (isIE || isEdge){
    $(".fullscreen-message").addClass("fullscreen-message--active");
}


$( document ).ready(function() {
    initPage();
});

function initPage(){

    $(".js-page_switch[data-page]").each(function () {

        if ($(this).data("page") === "main"){
            $(this).removeClass("js-page_switch--hidden");
        }

    });

    $(".js-btn-round").click(function (event) {
        console.log("click!");
        event.preventDefault();
        $(".js-btn-round").toggleClass("btn-round--active");
        $(".fs-wrapper").toggleClass("fs-wrapper--active");
    });

    $(".js-contact-btn").click(function () {
        gotoNewPage("contact");
    });

    $(".js-main-btn").click(function () {
        gotoNewPage("main");
    });


}

function gotoNewPage(pageName) {

    makePagePassive();
    setTimeout(function(){
        showNewPage(pageName);
        makeNewPageActive(pageName);
    }, 700);
}

function makePagePassive() {

    var targetPageElement = $(".js-page_switch--active");

    targetPageElement.each(function () {
        $(this).addClass("js-page_switch--passive");
    });

    setTimeout(function(){
        targetPageElement.each(function () {
            $(this).addClass("js-page_switch--hidden");
        });
    }, 700);

    targetPageElement.each(function () {
        $(this).removeClass("js-page_switch--active");
    });

}

function showNewPage(pageName) {
    var targetPageElement = $(".js-page_switch[data-page='"+pageName+"']");
    targetPageElement.addClass("js-page_switch--passive");
    targetPageElement.removeClass("js-page_switch--hidden");
}

function makeNewPageActive(pageName) {

    setTimeout(function(){
        var targetPageElement = $(".js-page_switch[data-page='"+pageName+"']");
        targetPageElement.addClass("js-page_switch--active");
        targetPageElement.removeClass("js-page_switch--passive");
    }, 200);


}

