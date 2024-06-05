function isValidEmail(str) {
      return (str.indexOf(".") > 0) && (str.indexOf("@") > 0);
}

$("#ContactNumber").on("keypress keyup blur",function (event) {    
      $(this).val($(this).val().replace(/[^\d].+/, ""));
      if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
      }
});

function myAllFormFunction() {

      var CompanyName = $("#CompanyName").val();
      var FullName = $("#FullName").val();
      var ContactNumber = $("#ContactNumber").val();
      var EmailID = $("#EmailID").val();
      var Comments = $("#Comments").val();
      var reCaptcha = $("#g-recaptcha-response").val();
      var FormProcessMode = $("#frmProcessMode").val();

      if(CompanyName == '' || CompanyName == null){
            $("#snackbar").text('Enter the Company Name');
            $("#snackbar").css('background','red');
            $("#snackbar").css('color','white');
            var x = document.getElementById("snackbar")
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      } else if(FullName == '' || FullName == null){
            $("#snackbar").text('Enter the Name');
            $("#snackbar").css('background','red');
            $("#snackbar").css('color','white');
            var x = document.getElementById("snackbar")
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      } else if(ContactNumber == '' || ContactNumber == null){
            $("#snackbar").text('Enter the Contact Number');
            $("#snackbar").css('background','red');
            $("#snackbar").css('color','white');
            var x = document.getElementById("snackbar")
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      } else if(ContactNumber.length != 11){
            $("#snackbar").text('Enter the Proper 11 digit Contact Number');
            $("#snackbar").css('background','red');
            $("#snackbar").css('color','white');
            var x = document.getElementById("snackbar")
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      } else if(EmailID == '' || EmailID == null){
            $("#snackbar").text('Enter the EmailID');
            $("#snackbar").css('background','red');
            $("#snackbar").css('color','white');
            var x = document.getElementById("snackbar")
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      } else if(!isValidEmail(EmailID)){
            $("#snackbar").text('Enter the Valid EmailID');
            $("#snackbar").css('background','red');
            $("#snackbar").css('color','white');
            var x = document.getElementById("snackbar")
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      } else if(Comments == '' || Comments == null){
            $("#snackbar").text('Enter the Your Comments');
            $("#snackbar").css('background','red');
            $("#snackbar").css('color','white');
            var x = document.getElementById("snackbar")
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      } else if (reCaptcha == '' || reCaptcha == null){
            $("#snackbar").text('Please Check the reCaptcha');
            $("#snackbar").css('background','red');
            $("#snackbar").css('color','white');
            var x = document.getElementById("snackbar")
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      } else {
            var New_chk_cash_advance = 1;
            var New_chk_merchant_services = 1;
            var New_chk_cashonmobile = 1;
            var New_chk_other = 1;

            var dataString = 'New_Cmp_Name=' + CompanyName + '&New_Cus_Full_Name=' + FullName + '&New_Cus_Contact_No=' + ContactNumber + '&New_Cus_Email=' + EmailID + '&frmProcessMode=' + FormProcessMode + '&g-recaptcha-response=' + reCaptcha + '&New_Cus_Comments=' + Comments;

            $.ajax({
                  type: "POST",
                  url: "contactForm.php",
                  data: dataString,
                  cache: false,
                  success: function(response) {
                        if(response == "Success"){
                              // window.location.href = "thankYou.html";
                              $("#snackbar").text('Thanks For Submitting Your Query');
                              $("#snackbar").css('background','green');
                              $("#snackbar").css('color','white');
                              var x = document.getElementById("snackbar")
                              x.className = "show";
                              setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                              $("#CompanyName").val('');
                              $("#FullName").val('');
                              $("#ContactNumber").val('');
                              $("#EmailID").val('');
                              $("#Comments").val('');
                              grecaptcha.reset();
                        } else {
                              window.location.href = "index.html";
                        }
                  }
            });

      }
}