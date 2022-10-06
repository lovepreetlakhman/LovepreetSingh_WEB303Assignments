// WEB303 Assignment 2
// Lovepreet Singh
// 0796083
// Assignment 2
// 2022/10/05

$(function(){
    const prospect = $('#prospect');
    const convert = $('#convert');
    const retain = $('#retain');

    const content = $('#content');

    function catchContent(e) {
        content.slideUp(500, ()=>{

            const folderName = `${e.target.id}.html`;
    
            const xhr = new XMLHttpRequest();
            xhr.open('GET', folderName, true);
    
            xhr.onload = function(){
                content.html(this.responseText);
                content.slideDown();
            }
    
            xhr.send();
        });

    }
    prospect.click(catchContent);
    convert.click(catchContent);
    retain.click(catchContent);
});

