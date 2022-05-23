let isA2000active=0;
let is3060active=0;
let is3060TIactive=0;
let is3070active=0;
let is3070TIactive=0;
let is3080active=0;
let is3080TIactive=0;
let is3090active=0;

let hashrate=0;
let power=0;

let hashA2000=39;
let powerA2000=80;
let hash3060=41;
let power3060=110;
let hash3060TI=60;
let power3060TI=140;
let hash3070=60;
let power3070=130;
let hash3070TI=80;
let power3070TI=200;
let hash3080=98;
let power3080=240;
let hash3080TI=117;
let power3080TI=300;
let hash3090=119;
let power3090=320;


function recalculate(input){

    algo=document.getElementById('algo-selector').value;

    if (algo=='eth'){
        document.getElementById('hashrate-btn').innerHTML="Mh/s"
        hashA2000=39;
        powerA2000=80;
        hash3060=41;
        power3060=110;
        hash3060TI=60;
        power3060TI=140;
        hash3070=60;
        power3070=130;
        hash3070TI=80;
        power3070TI=200;
        hash3080=98;
        power3080=240;
        hash3080TI=117;
        power3080TI=300;
        hash3090=119;
        power3090=320;
    }

    else if(algo=='rvn'){
        document.getElementById('hashrate-btn').innerHTML="Mh/s"
        hashA2000=15;
        powerA2000=80;
        hash3060=22;
        power3060=140;
        hash3060TI=27;
        power3060TI=190;
        hash3070=27.6;
        power3070=180;
        hash3070TI=39.5;
        power3070TI=250;
        hash3080=39.5;
        power3080=250;
        hash3080TI=49;
        power3080TI=280;
        hash3090=46.5;
        power3090=330;
    }

    else if(algo=='sero'){
        document.getElementById('hashrate-btn').innerHTML="Mh/s"
        hashA2000=0;
        powerA2000=0;
        hash3060=21.5;
        power3060=140;
        hash3060TI=26;
        power3060TI=190;
        hash3070=27.4;
        power3070=180;
        hash3070TI=34.5;
        power3070TI=210;
        hash3080=38.9;
        power3080=250;
        hash3080TI=40;
        power3080TI=280;
        hash3090=46;
        power3090=330;
    }

    else if(algo=='swp'){
        document.getElementById('hashrate-btn').innerHTML="h/s"
        hashA2000=0;
        powerA2000=0;
        hash3060=0;
        power3060=0;
        hash3060TI=9.7;
        power3060TI=190;
        hash3070=10.3;
        power3070=180;
        hash3070TI=0;
        power3070TI=0;
        hash3080=14.3;
        power3080=250;
        hash3080TI=0;
        power3080TI=0;
        hash3090=13.9;
        power3090=290;
    }

    else if(algo=='yec'){
        document.getElementById('hashrate-btn').innerHTML="h/s"
        hashA2000=0;
        powerA2000=0;
        hash3060=0;
        power3060=0;
        hash3060TI=0;
        power3060TI=0;
        hash3070=55;
        power3070=180;
        hash3070TI=0;
        power3070TI=0;
        hash3080=63;
        power3080=250;
        hash3080TI=0;
        power3080TI=0;
        hash3090=93;
        power3090=290;
    }


    hashrate=0;
    power=0;
    switch(input){
        case "A2000": if (isA2000active==0){isA2000active=1; 
            document.getElementById('A2000-btn').style.backgroundColor = '#925CAC'; 
        }
        else 
        {isA2000active=0; 
            document.getElementById('A2000-btn').style.backgroundColor = '#71a714'; 
        }
        break;

        case "3070": if (is3070active==0){is3070active=1; 
            document.getElementById('3070-btn').style.backgroundColor = '#925CAC'; 
        }
        else 
        {is3070active=0; 
            document.getElementById('3070-btn').style.backgroundColor = '#71a714'; 
        }
        break;
        
        case "3080TI": if (is3080TIactive==0){is3080TIactive=1; 
            document.getElementById('3080TI-btn').style.backgroundColor = '#925CAC'; 
        }
        else 
        {is3080TIactive=0; 
            document.getElementById('3080TI-btn').style.backgroundColor = '#71a714'; 
        }
        break;
        
        case "3060": if (is3060active==0){is3060active=1; 
            document.getElementById('3060-btn').style.backgroundColor = '#925CAC'; 
        }
        else 
        {is3060active=0; 
            document.getElementById('3060-btn').style.backgroundColor = '#71a714'; 
        }
        break;
        
        case "3070TI": if (is3070TIactive==0){is3070TIactive=1; 
            document.getElementById('3070TI-btn').style.backgroundColor = '#925CAC'; 
        }
        else 
        {is3070TIactive=0; 
            document.getElementById('3070TI-btn').style.backgroundColor = '#71a714'; 
        }
        break;
        
        case "3090": if (is3090active==0){is3090active=1; 
            document.getElementById('3090-btn').style.backgroundColor = '#925CAC'; 
        }
        else 
        {is3090active=0; 
            document.getElementById('3090-btn').style.backgroundColor = '#71a714'; 
        }
        break;
        
        case "3060TI": if (is3060TIactive==0){is3060TIactive=1; 
            document.getElementById('3060TI-btn').style.backgroundColor = '#925CAC'; 
        }
        else 
        {is3060TIactive=0; 
            document.getElementById('3060TI-btn').style.backgroundColor = '#71a714'; 
        }
        break;
        
        case "3080": if (is3080active==0){is3080active=1; 
            document.getElementById('3080-btn').style.backgroundColor = '#925CAC'; 
        }
        else 
        {is3080active=0; 
            document.getElementById('3080-btn').style.backgroundColor = '#71a714'; 
        }
        break;
    }

    


    if (isA2000active){
        let count=document.getElementById('A2000-qty').value;
        hashrate+=count*hashA2000;
        power+=count*powerA2000;
    }

    if (is3060active){
        let count=document.getElementById('3060-qty').value;
        hashrate+=count*hash3060;
        power+=count*power3060;
    }

    if (is3060TIactive){
        let count=document.getElementById('3060TI-qty').value;
        hashrate+=count*hash3060TI;
        power+=count*power3060TI;
    }

    if (is3070active){
        let count=document.getElementById('3070-qty').value;
        hashrate+=count*hash3070;
        power+=count*power3070;
    }

    if (is3070TIactive){
        let count=document.getElementById('3070TI-qty').value;
        hashrate+=count*hash3070TI;
        power+=count*power3070TI;
    }

    if (is3080active){
        let count=document.getElementById('3080-qty').value;
        hashrate+=count*hash3080;
        power+=count*power3080;
    }

    if (is3080TIactive){
        let count=document.getElementById('3080TI-qty').value;
        hashrate+=count*hash3080TI;
        power+=count*power3080TI;
    }

    if (is3090active){
        let count=document.getElementById('3090-qty').value;
        hashrate+=count*hash3090;
        power+=count*power3090;
    }

    if (hashrate%1!=0) hashrate=hashrate.toFixed(1);


    document.getElementById('hashrate').value = hashrate; 
    document.getElementById('consumption').value = power; 

}