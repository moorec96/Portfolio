$('.horizNavBox').hide();
$('.jobsList').hide();
$('#jobsUpBtn').hide();
var navOpen = false;

 if(($(window).width() < 1270) || ($('#homeBackground').height() < 801)){
        $('#background').css('margin-left','0px'); 
        $('.content').css('margin-left','0px');
        $('.navButtonOpen').css('visibility','hidden');
        $('.navButtonClose').css('visibility','hidden');
        if(!navOpen){
            $('nav').css('visibility','visible');
        }
        $('.horizNavBox').show();
        $('.vertNavBox').hide();
    }

//var screenHeight = $('#homeBackground').height();
//var heightBox = document.getElementById("screenHeight")
//heightBox.textContent = screenHeight;

$('.navButtonOpen').on('click',function(){
    navOpen = true;
    $('.content').css('margin-left','350px');
    $('nav').css('visibility','visible');
    $('.navButtonOpen').css('visibility','hidden');
    $('.navButtonClose').css('visibility','visible');
    $('#skillsTitle').css('color','white');
});

$('.navButtonClose').on('click',function(){
    navOpen = false;
    $('#background').css('margin-left','0px'); 
    $('.content').css('margin-left','0px');
    $('nav').css('visibility','hidden');
    $('.navButtonOpen').css('visibility','visible');
    $('.navButtonClose').css('visibility','hidden');
    $('#skillsTitle').css('color','rgb(248,126,6)');
    
});

$('#jobsDownBtn').on('click', function(){
    var jobBoxHeight = $('#jobExperience').height();
    $('.jobsList').show();
    $('#jobExperience').css('height','auto');
    $('#jobsDownBtn').hide();
    $('#jobsUpBtn').show();
});

$('#jobsUpBtn').on('click', function(){
    $('.jobsList').hide();
    $('#jobExperience').css('height', 'jobBoxHeight');
    $('#jobsDownBtn').show();
    $('#jobsUpBtn').hide();
});

$(window).resize(function(){ 
    if(($(window).width() < 1270) || ($('#homeBackground').height() < 801)){
        $('#background').css('margin-left','0px'); 
        $('.content').css('margin-left','0px');
        $('.navButtonOpen').css('visibility','hidden');
        $('.navButtonClose').css('visibility','hidden');
        if(!navOpen){
            $('nav').css('visibility','visible');
        }
        $('.horizNavBox').show();
        $('.vertNavBox').hide();
    }
    else{
        $('.horizNavBox').hide();
        $('.vertNavBox').show();
        if(navOpen){
            $('.navButtonOpen').css('visibility','hidden');
            $('.navButtonClose').css('visibility','visible');
            $('.content').css('margin-left','350px');
            $('nav').css('visibility','visible');
        }
        else{
            $('#background').css('margin-left','0px'); 
            $('.content').css('margin-left','0px');
            $('nav').css('visibility','hidden');
            $('.navButtonOpen').css('visibility','visible');
            $('.navButtonClose').css('visibility','hidden'); 
        }
        
    }
    // heightBox.textContent = $('#homeBackground').height();
});
