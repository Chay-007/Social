function validateForm(classname)
{

  var msg = '';
  var mandatory  = '.'+classname+' .input-mandatory'
  $(mandatory).each(function()
  {
    if($(this).val()=='')
    {
      if($(this).parent().text())
      {
        $(this).attr('style', "border-radius: 5px; border:#FF0000 1px solid !important;");
         console.log(this);
        $(this).attr('required', true);
        $(this).next().children().children().attr('style',"border: 1px solid red;");
        // var mesagearary =  mesage.split('*');
        msg = 'Please fill the mandatory fields before saving.';
      }
    } 
  });

  if(msg)
  {
    swal(msg);
    return false;
  }

   return true;
    
  }
 function validateEmail(sEmail) 
{
  var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  if(!sEmail.match(reEmail))
  {
    return false;
  }
  return true;
}
function chechEmail(name)
{
  var check = $(name).val();
  if (check.trim().length!=0)
  {
    var __class = $(name).attr('name');
    if(!validateEmail(check))
    {
      $(name).val('');
      $(name).attr('style', "border-radius: 5px; border:#FF0000 1px solid !important;");
      // $(name).attr('required', true);
      $(`.${__class}`).html('Invalid Email ID !');

      // warningPopupMsg('Invalid Email ID !');
    }else
    {
      $(name).attr('style', "border-radius: 5px; border:green 1px solid !important;");
      $(`.${__class}`).html('');
    }
  }
}
    
 function adhardCard(name,event)
  {
      var $input = $(name);
      var val = $input.val();
      var length = val.length;
  
      if((isNaN(event.key)&&(event.key!='Backspace'))||(!isNaN(event.key)&&(length>=16)))
          event.preventDefault();
  }
    function phoneFormat(name, event)
  {
    
    var $input = $(name);
    var val = $input.val();
    let mobile = val;
    var length = val.length;
    var name = $input.attr('name');
    var code = event.keyCode || event.which;
    if (code == '9')
    {
      return false;
    }

    (length==9) ? pf=1 : pf=0;
    (length>=10 && event.key != 'Backspace') ? ($input.val(val.substring(0,10))) : "";
    
    if(length>=9 && pf==1 && event.key != 'Backspace') 
    {
      $(`.${name}`).html('');
    }else
    {
      $(`.${name}`).html('Please Enter valid Mobile number');
    }
    
    if((isNaN(event.key)&&(event.key!='Backspace'))||(!isNaN(event.key)&&(length>=10)))
    {
      event.preventDefault();
    }
  }

    function phoneFormat1(name)
  {
        var check = $(name).val();
        var __class = $(name).attr('name');
        if (check.trim().length!=10)
        {
             $(name).val('');
              $(name).attr('style', "border-radius: 5px; border:#FF0000 1px solid !important;");
              // $(name).attr('required', true);
              $(`.${__class}`).html('Invalid Mobile number!');
        }else{
            $(name).attr('style', "border-radius: 5px; border:green 1px solid !important;");
            $(`.${__class}`).html('');
        }

    }

    function phoneFormat(name, event)
  {
    var __class = $(name).attr('name');
    var $input = $(name);
    var val = $input.val();
    let mobile = val;

    var length = val.length;
    var name = $input.attr('name');
    var code = event.keyCode || event.which;
    if (code == '9')
    {

      return false;
    }

    (length==9) ? pf=1 : pf=0;
    (length>=10 && event.key != 'Backspace') ? ($input.val(val.substring(0,10))) : "";
    
    if(length>=9 && pf==1 && event.key != 'Backspace') 
    {
          $(name).attr('style', "border-radius: 5px; border:#FF0000 1px solid !important;");
         $(`.${__class}`).html('');
      $(`.${name}`).html('');
    }else
    {
        $(name).val('');
      $(name).attr('style', "border-radius: 5px; border:#FF0000 1px solid !important;");
      $(`.${__class}`).html('Invalid Mobile number !');
     
    }
    
    if((isNaN(event.key)&&(event.key!='Backspace'))||(!isNaN(event.key)&&(length>=10)))
    {
      event.preventDefault();
    }
  }
  function onlyNumericDecimal(name,event)
{
   if (event.shiftKey == true) {
            event.preventDefault();
        }

        if ((event.keyCode >= 48 && event.keyCode <= 57) || 
            (event.keyCode >= 96 && event.keyCode <= 105) || 
            event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 ||
            event.keyCode == 39 || event.keyCode == 46 || event.keyCode == 190) {

        } else {
            event.preventDefault();
        }

        if($(this).val().indexOf('.') !== -1 && event.keyCode == 190)
            event.preventDefault(); 

}

  function lettersValidate(name, evt) {
    evt = (evt) ? evt : event;
       var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
          ((evt.which) ? evt.which : 0));
       if (charCode > 31 && (charCode < 65 || charCode > 90) &&
          (charCode < 97 || charCode > 122)) {
        evt.preventDefault();
          return false;
       }
       return true;
}


   function adharFormat1(name)
  {
        var check = $(name).val();
        var __class = $(name).attr('name');
        if (check.trim().length!=14)
        {
             $(name).val('');
              $(name).attr('style', "border-radius: 5px; border:#FF0000 1px solid !important;");
              // $(name).attr('required', true);
              $(`.${__class}`).html('Invalid Adhar Number!');
        }else{
            $(name).attr('style', "border-radius: 5px; border:green 1px solid !important;");
            $(`.${__class}`).html('');
        }

    }
    function adharFormat(name,event)
    {
      var $input = $(name);
      var val = $input.val();
      var length = val.length;
      var name = $input.attr('name');
      var code = event.keyCode || event.which;

    
        if((length== 4 || length== 9) && event.key!='Backspace')
        {
          $input.val(val+'-');   
        }
        (length==13)
            ?pf=1
            :"";
        (length>=13&&event.key!='Backspace')
            ?($input.val(val.substring(0,14)))
            :"";

            if(length >= 13 && pf==1 && event.key!='Backspace') 
            {
              $(`.${name}`).html('');
            }else
            {
              $(`.${name}`).html('Invalid Adhar Number !');
            }

          if((isNaN(event.key)&&(event.key!='Backspace'))||(!isNaN(event.key)&&(length>=14)))
              event.preventDefault();
        }



        function validateInput(inputtxt){
          var check = $(inputtxt).val();
          var __class = $(inputtxt).attr('name');
          if (!check) {
            $(inputtxt).attr('style', "border:#FF0000 1px solid !important;");
            return false;
          }
          else {
            $(inputtxt).attr('style', "border:green 1px solid !important;");
            $(`.${__class}`).html('');
            return true;    
          }
        }

        
         function pinCodeFormat(name, event)
  {
    
    var $input = $(name);
    var val = $input.val();
    let mobile = val;
    var length = val.length;
    var name = $input.attr('name');
    var code = event.keyCode || event.which;
    if (code == '9')
    {
      return false;
    }

    (length==6) ? pf=1 : pf=0;
    (length>=6 && event.key != 'Backspace') ? ($input.val(val.substring(0,6))) : "";
    
    if(length>=6 && pf==1 && event.key != 'Backspace') 
    {
      $(`.${name}`).html('');
    }else
    {
      $(`.${name}`).html('Invalid Pincode');
    }
    
    if((isNaN(event.key)&&(event.key!='Backspace'))||(!isNaN(event.key)&&(length>=6)))
    {
      event.preventDefault();
    }
  }
     function pinCodeFormat1(name)
  {
        var check = $(name).val();
        var __class = $(name).attr('name');
        if (check.trim().length!=6)
        {
             $(name).val('');
              $(name).attr('style', "border-radius: 5px; border:#FF0000 1px solid !important;");
              // $(name).attr('required', true);
              $(`.${__class}`).html('Invalid Pin code !');
        }else{
            $(name).attr('style', "border-radius: 5px; border:green 1px solid !important;");
            $(`.${__class}`).html('');
        }

    }

      function lettersValidate(name, evt) {
    evt = (evt) ? evt : event;
       var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
          ((evt.which) ? evt.which : 0));
       if (charCode > 31 && (charCode < 65 || charCode > 90) &&
          (charCode < 97 || charCode > 122)) {
        evt.preventDefault();
          return false;
       }
       return true;

       
}