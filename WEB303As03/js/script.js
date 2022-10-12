// Lovepreet Singh
// Assignment 3
// Javascript 2

$(function(){
    getDataOnAjax();
});

function getJsonData(){
    $.getJSON("team.json", (result)=>{
        $.each(result, (index, data)=>{
            $("div#team").append(`<h2>${data.name}</h2><h5>${data.position}
            </h5>
            <p>${data.bio}</p>`);
        });
    });
};

function getDataOnAjax(){
    $.ajax({
        url: "team.json",
        beforeSend: function(){
            $("div#team").html(`<h1>LOADING....</h1>`);
        },
        error: function(){
            $("div#team").html(`<h1>The content could not be recovered</h1>`);
        },
        success: function(result){
            setTimeout(() => {
                $("div#team").html("");
                $.each(result, (index, data)=>{
                    $("div#team").append(`<h2>${data.name}</h2><h5>${data.position}</h5>
                    <p>${data.bio}</p>`);
                });
            }, 3000);
        }
    });
};