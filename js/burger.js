
$( document ).ready(function() {
    
// let acc = document.querySelector(".accordion")
$("#burger-icon").click(function(){

    
    $(".accordion")
    .toggleClass("burger-slide");
   
    // $('.accordion').append('<style>.accordion:before{left:-100% !important;}</style>');
})

$("#burger-close").click(function(){
    $(".accordion").removeClass("burger-slide")
    
})

window.addEventListener('click', function(e){

        if (!document.getElementById('burger-icon').contains(e.target) && (!document.querySelector('.accordion').contains(e.target))){
            document.querySelector('.accordion').classList.remove("burger-slide")
        }
    })

});

