document.addEventListener("turbolinks:load", function() {
    
    var notice = $('.notice').text();
    var alert = $('.alert').text();  

    if(notice){
        ReactOnRails.render('AlertComponent', {open:true,message:notice,autoHideDuration: 4000, good: false}, 'alert_box');
    }
    if(alert){
        ReactOnRails.render('AlertComponent', {open:true,message:alert,autoHideDuration: 4000, good: false}, 'alert_box');
    }

})