console.log(5)
let temp=0; 
function getMinerStats(){const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'mineable-coins.p.rapidapi.com',
		'X-RapidAPI-Key': '3fe1d54cabmsh40b3b9c96fc8980p1df05fjsn5c7794988bcf'
	}
};

fetch('https://mineable-coins.p.rapidapi.com/coins', options)
	.then(response => response.json())
	.then(response => temp=response)
	.then(response => {console.log(5)
	  })
	.catch(err => console.error(err));
    
}






