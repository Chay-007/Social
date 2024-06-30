
$(document).ready(function () {
$('.onclickcart').on('click',function(){
    if($('#first-div').css('display')!='none'){
    $('#second-div').show().siblings('div').hide();
    // $('#exampleModal').show();
    
    }else if($('#second-div').css('display')!='none'){
        $('#first-div').show().siblings('div').hide();
    }
});
});















