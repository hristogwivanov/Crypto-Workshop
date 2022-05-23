function unhover(input){
    switch(input){
        case "A2000": if (isA2000active==0){
           document.getElementById('A2000-btn').style.backgroundColor = '#83B925'; 
        }
        else 
        {
           document.getElementById('A2000-btn').style.backgroundColor = '#A16BB9'; 
        }
        break; 

        case "3070": if (is3070active==0){
            document.getElementById('3070-btn').style.backgroundColor = '#83B925'; 
         }
         else 
         {
            document.getElementById('3070-btn').style.backgroundColor = '#A16BB9'; 
         }
         break; 

         case "3080TI": if (is3080TIactive==0){
            document.getElementById('3080TI-btn').style.backgroundColor = '#83B925'; 
         }
         else 
         {
            document.getElementById('3080TI-btn').style.backgroundColor = '#A16BB9'; 
         }
         break; 

         case "3060": if (is3060active==0){
            document.getElementById('3060-btn').style.backgroundColor = '#83B925'; 
         }
         else 
         {
            document.getElementById('3060-btn').style.backgroundColor = '#A16BB9'; 
         }
         break; 

         case "3070TI": if (is3070TIactive==0){
            document.getElementById('3070TI-btn').style.backgroundColor = '#83B925'; 
         }
         else 
         {
            document.getElementById('3070TI-btn').style.backgroundColor = '#A16BB9'; 
         }
         break; 

         case "3090": if (is3090active==0){
            document.getElementById('3090-btn').style.backgroundColor = '#83B925'; 
         }
         else 
         {
            document.getElementById('3090-btn').style.backgroundColor = '#A16BB9'; 
         }
         break; 

         case "3060TI": if (is3060TIactive==0){
            document.getElementById('3060TI-btn').style.backgroundColor = '#83B925'; 
         }
         else 
         {
            document.getElementById('3060TI-btn').style.backgroundColor = '#A16BB9'; 
         }
         break; 

         case "3080": if (is3080active==0){
            document.getElementById('3080-btn').style.backgroundColor = '#83B925'; 
         }
         else 
         {
            document.getElementById('3080-btn').style.backgroundColor = '#A16BB9'; 
         }
         break; 

         

    }

    

}