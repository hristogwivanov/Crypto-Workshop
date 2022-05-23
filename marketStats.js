const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
		'X-RapidAPI-Key': '3fe1d54cabmsh40b3b9c96fc8980p1df05fjsn5c7794988bcf'
	}
	
};

fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/price?referenceCurrencyUuid=5k-_VTxqtCEI', options)
	.then(response => response.json())
	.then(response => document.getElementById("btcprice").innerHTML = ((response.data.price * 1).toFixed(0) + " €"))
	.catch(err => console.error(err));

fetch('https://coinranking1.p.rapidapi.com/coin/razxDUgYGNAdQ/price?referenceCurrencyUuid=5k-_VTxqtCEI', options)
	.then(response => response.json())
	.then(response => document.getElementById("ethprice").innerHTML = ((response.data.price * 1).toFixed(0) + " €"))
	.catch(err => console.error(err));

fetch('https://coinranking1.p.rapidapi.com/coin/3mVx2FX_iJFp5/price?referenceCurrencyUuid=5k-_VTxqtCEI', options)
	.then(response => response.json())
	.then(response => document.getElementById("xmrprice").innerHTML = ((response.data.price * 1).toFixed(0) + " €"))
	.catch(err => console.error(err));

fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));