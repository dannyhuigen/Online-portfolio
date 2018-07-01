var scene = document.getElementById('parallax');
var parallaxInstance = new Parallax(scene);




$( document ).ready(function() {
    initPage();
});

function initPage(){

    $(".js-page_switch[data-page]").each(function () {

        if ($(this).data("page") === "main"){
            $(this).removeClass("js-page_switch--hidden");
        }

    });

}

function gotoNewPage(pageName) {

    makePagePassive();
    setTimeout(function(){
        showNewPage(pageName);
        makeNewPageActive(pageName);
    }, 1500);
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
    }, 1500);

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

