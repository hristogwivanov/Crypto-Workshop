let proday = 0.20443;
let pronight = 0.11452;

let evnday = 0.24013;
let evnnight = 0.13668;

let cezdistribution = 0.00605+0.03636+0.00049+0.01148;
let cezday = 0.14666+cezdistribution;
let ceznight = 0.06245+cezdistribution;




let proprice = (proday*(2/3)+pronight*(1/3))*1.2; //DDS
proprice = Math.ceil(10000*proprice.toFixed(4))/10000;

let evnprice = evnday*(2/3)+evnnight*(1/3);
evnprice = Math.ceil(10000*evnprice.toFixed(4))/10000;

let cezprice = (cezday*(2/3)+ceznight*(1/3))*1.2; //DDS
cezprice = Math.ceil(10000*cezprice.toFixed(4))/10000;

let finalelectricityprice=proprice;

document.getElementById('ele-price').value = finalelectricityprice;
document.getElementById("provider").onchange = providerListener;
function providerListener(){
    var value = this.value      
      if (value == "pro"){
        finalelectricityprice = proprice;
      }else if (value == "evn"){
        finalelectricityprice = evnprice;
      }
      else if (value == "cez"){
        finalelectricityprice = cezprice;

      }
      document.getElementById('ele-price').value = finalelectricityprice; //+" лв"
    }