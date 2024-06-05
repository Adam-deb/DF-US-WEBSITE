function postPageVisit(ipAddress, getPageArr){
    var dataForm = '{"IP_Address":"' + ipAddress + '","pageArrData":"'+getPageArr+'"}';
    var sendURL = "https://sales.decimalfactor.com/api/SavePageVist";

    $.ajax({
        type: "POST",
        url: sendURL,
        data: dataForm,
        success: function(result) { 
            //console.log(result);
        } // ajax success
    }); // ajax POSTS
} // postPageVisit