"use strict";
var winW;
var winH;
var esStep = "Expo.ease";
var $window = $(window);
var winSc;
var $html = $("html");
var htmlH;

$window.load(function () {
    htmlH = $("body").outerHeight(true);
    winSc = $(this).scrollTop();
    $window.on("resize", function () {
        winW = $(this).width();
        winH = $(this).height();
    });
    $(this).trigger("resize");
    $(window).scroll(function () {
        winSc = $(this).scrollTop();
    });
    main();
});


function main(){

    var $tvFirstVideo = $("#tv_first_video");
    var $avFirstVideo = $("#av_first_video");

    $(".tab_tv").on("click",function(){
        $(".tab_tv_contents").css("display","block");
        $(".tab_av_contents").css("display","none");
        $(".tab").find("button").removeClass("active");
        $(".tab").find(".tab_tv").addClass("active");
        $(".video_iframe").attr("src",iframeArrTV[0]);
        $tvFirstVideo.addClass("active");
        var pptNum = $tvFirstVideo.find(".title_01").text();
        var pptTitle = $tvFirstVideo.find(".title_02").text();
        $selectVideo.find(".title_01").text(pptNum);
        $selectVideo.find(".title_02").text(pptTitle);
    })
    $(".tab_av").on("click",function(){
        $(".tab_av_contents").css("display","block");
        $(".tab_tv_contents").css("display","none");
        $(".tab").find("button").removeClass("active");
        $(".tab").find(".tab_av").addClass("active");
        $(".video_iframe").attr("src",iframeArrAV[0]);
        $avFirstVideo.addClass("active");
        var pptNum = $avFirstVideo.find(".title_01").text();
        var pptTitle = $avFirstVideo.find(".title_02").text();
        $selectVideo.find(".title_01").text(pptNum);
        $selectVideo.find(".title_02").text(pptTitle);
    })

    var $selectVideo = $(".select_video");
    var $tabContents = $(".tab_contents");
    var $tabContentsList = $(".tab_contents").find("li");
    var $tabTVContentsList = $(".tab_tv_contents").find("li");
    var $tabAVContentsList = $(".tab_av_contents").find("li");
    var iframeArrTV = [
        "https://player.vimeo.com/video/357706701?quality=1080p",
        "https://player.vimeo.com/video/470069126?quality=1080p",
        "https://player.vimeo.com/video/469655775?quality=1080p",
        "https://player.vimeo.com/video/495674227?quality=1080p",
        "https://player.vimeo.com/video/502002998?quality=1080p",
        "https://player.vimeo.com/video/502947980?quality=1080p",
        "https://player.vimeo.com/video/469650847?quality=1080p",
        "https://player.vimeo.com/video/469654323?quality=4K",
        "https://player.vimeo.com/video/469651492?quality=1080p",
        "https://player.vimeo.com/video/469654865?quality=4K",
        "https://player.vimeo.com/video/469652039?quality=1080p",
        "https://player.vimeo.com/video/469653342?quality=1080p",
        "https://player.vimeo.com/video/469653911?quality=4K",
        "https://player.vimeo.com/video/469652355?quality=1080p",
        "https://player.vimeo.com/video/469654270?quality=1080p",
        "https://player.vimeo.com/video/469653805?quality=1080p",
        "https://player.vimeo.com/video/469652864?quality=1080p",
        "https://player.vimeo.com/video/470863551?quality=1080p",
        "https://player.vimeo.com/video/497188847?quality=1080p",
        "https://player.vimeo.com/video/470069339?quality=1080p"

    ];
    var iframeArrAV = [
        "https://player.vimeo.com/video/77023344?quality=1080p",
        "https://player.vimeo.com/video/470056648?quality=1080p",
        "https://player.vimeo.com/video/470057367?quality=1080p",
        "https://player.vimeo.com/video/470058262?quality=1080p",
        "https://player.vimeo.com/video/470058747?quality=1080p",
        "https://player.vimeo.com/video/470059355?quality=1080p",
        "https://player.vimeo.com/video/470064434?quality=1080p",
        "https://player.vimeo.com/video/470108668?quality=1080p",
        "https://player.vimeo.com/video/470064536?quality=1080p",
        "https://player.vimeo.com/video/470064682?quality=1080p",
        "https://player.vimeo.com/video/477903252?quality=1080p",
        "https://player.vimeo.com/video/491494774?quality=1080p",
        "https://player.vimeo.com/video/491494890?quality=1080p",
        "https://player.vimeo.com/video/495685701?quality=1080p",
        "https://player.vimeo.com/video/491495082?quality=1080p",
        "https://player.vimeo.com/video/495955401?quality=1080p",
        "https://player.vimeo.com/video/495955473?quality=1080p",
        "https://player.vimeo.com/video/495955876?quality=1080p",
        "https://player.vimeo.com/video/495954905?quality=1080p"
    ];

    $tabContents.find("li").on("click",function(){
        var pptNum = $(this).find(".title_01").text();
        var pptTitle = $(this).find(".title_02").text();
        $selectVideo.find(".title_01").text(pptNum);
        $selectVideo.find(".title_02").text(pptTitle);
    })

    $tabAVContentsList.on("click",function(){
        var $tabAVContentsListIndex = $tabAVContentsList.index(this);
        $(".video_iframe").attr("src",iframeArrAV[$tabAVContentsListIndex]);
    })

    $tabTVContentsList.on("click",function(){
        var $tabTVContentsListIndex = $tabTVContentsList.index(this);
        $(".video_iframe").attr("src",iframeArrTV[$tabTVContentsListIndex]);
    })

    $tabContentsList.on("click",function(){
        $tabContentsList.removeClass("active");
        $(this).addClass("active");
    })

    $(document).ready(function(){
        $(document).bind('keydown',function(e){
            if ( e.keyCode == 123 /* F12 */) {
                e.preventDefault();
                e.returnValue = false;
            }
        });
    });
    document.onmousedown=disableclick;
    status="Right click is not available.";

    function disableclick(event){
        if (event.button==2) {
            alert(status);
            return false;
        }
    }
}