export function getAuthor(project_id,cb){
    $.ajax({
        type:"GET",
        url:'/projects/'+project_id+'/author',
        beforeSend: $.rails.CSRFProtection,
        success: function(res,a,b,c){
            cb('success',res)
        },
        error: function(res,a,b,c){
            cb('error',res)
        }
    })
    return;
}
export function createProject(project,cb){
    $.ajax({
        type:"POST",
        url:'/projects/',
        beforeSend: $.rails.CSRFProtection,
        data: {payload: JSON.stringify(project)},
        success: function(res,a,b,c){
            ReactOnRails.render('AlertComponent', {open:true,message:'Success',autoHideDuration: 4000, good: true}, 'alert_box');            cb('success')
        },
        error: function(res,a,b,c){
            ReactOnRails.render('AlertComponent', {open:true,message:res.responseText,autoHideDuration: 4000, good: false}, 'alert_box');
                cb('error')           
        }
    })
    return;
}

export function createComment(comment,project_id,cb){
    $.ajax({
        type:"POST",
        url:'/projects/'+project_id+'/comments',
        beforeSend: $.rails.CSRFProtection,
        data: {payload: JSON.stringify(comment)},
        success: function(res,a,b,c){
            ReactOnRails.render('AlertComponent', {open:true,message:'Commented successfully',autoHideDuration: 4000, good: true}, 'alert_box');            
            cb('success')
        },
        error: function(res,a,b,c){
            ReactOnRails.render('AlertComponent', {open:true,message:res.responseText,autoHideDuration: 4000, good: false}, 'alert_box');
            cb('error')           
        }
    })
    return;
}


export function getComments(project_id,cb){
    $.ajax({
        type:"GET",
        url:'/projects/'+project_id+'/comments',
        beforeSend: $.rails.CSRFProtection,
        success: function(res,a,b,c){ 
            cb('success',res)
        },
        error: function(res,a,b,c){
            cb('error')           
        }
    })
    return;
}
