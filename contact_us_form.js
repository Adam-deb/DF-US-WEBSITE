function isValidEmail(str) {
      return (str.indexOf(".") > 0) && (str.indexOf("@") > 0);
}

function getVal(inpt){
      var gv = document.getElementById(inpt).value;
      return gv;
}

function getErCol(inpt){
      var gec = document.getElementById(inpt).style.border='solid 2px #ff0000';
      return gec;
}

function getCol(inpt){
      var gec = document.getElementById(inpt).style.borderColor='#ffffff';
      return gec;
}


function process(){
      var error = false;
      var errormsg = "Please fill out required information in Contact Us Form:\n\n";
      msg = '';

      if(getVal('companyName')== ''){
            getErCol('companyName');
		errormsg = errormsg + ' - Company Name\n';
            error = true;
      } else {
            getCol('companyName');
      }
		
      if(getVal('fullName')== ''){
            getErCol('fullName');
		errormsg = errormsg + ' - Full Name\n';
            error = true;
      } else {
            getCol('fullName');
      }

      if(getVal('contactNumber')== ''){
            getErCol('contactNumber');
            errormsg = errormsg + ' - Contact Number\n';
            error = true;
      } else {
            getCol('contactNumber');
      }

      if(!isValidEmail(getVal('emailID'))){
            getErCol('emailID');
            errormsg = errormsg + ' - Email\n';
            error = true;
      } else {
            getCol('emailID');
      }
      
      var recaptcha = $("#g-recaptcha-response").val();
      if (recaptcha === "") {
            errormsg = errormsg + ' - Please check the recaptcha\n';
            error = true;
      } else {
            // console.log(recaptcha);
      }

      if (error == true){
	      alert (errormsg);
          return false;
      } else {
            document.getElementById('frmProcessMode').value='do_process_form';
            document.contact_us_form.submit(); 
      }
}
