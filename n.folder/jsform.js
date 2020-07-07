function billingFunction(){
    var ifSame = document.getElementById("same");
    var shippingName = document.getElementById("shippingName");
    var shippingZip = document.getElementById("shippingZip");

    var billingName = document.getElementById("billingName");
    var billingZip = document.getElementById("billingZip");

    if (ifSame.checked) {
        billingName.value = shippingName.value;
        billingZip.value = shippingZip.value;
    }
  
  else{
        billingName.value = "";
        billingZip.value = "";
    }
}
//or

function billingFunction(){
    if(same.checked){
      var name = document.getElementById('shippingName');
      var zip = document.getElementById('shippingZip');
      billingName.value = name.value;
      billingZip.value = zip.value;
    }
    else{
      billingName.value = '';
      billingZip.value='';
    }
  }
  //or

  //function to copy the same shipping name and zip to the billing details.
function billingFunction(){

	if(document.querySelector("#same").checked)
	{
		var name=document.querySelector("#shippingName").value;   //this will copy the value entered by the user in shipping name block
		var zip=document.querySelector("#shippingZip").value;     //this will copy the value entered by the user in shipping zip block

		document.querySelector("#billingName").value=name;   //finally these lines will copy the above initialised variables to the billing address and billing zip
		document.querySelector("#billingZip").value=zip;
	}

	else
	{
		document.querySelector("#billingName").value="";
		document.querySelector("#billingZip").value="";
	}
}