let latestRate="https://api.currencyapi.com/v3/latest?apikey=fca_live_zOJbSazrSx0Qo86sDhp4obzm5EMJZ2NKIsGuRicm";
let myCurrency=document.querySelectorAll(".currency select");


for(let drops of myCurrency)
{
	for(currencyCodes in countryList)
	{
		let opt=document.createElement("option");
		opt.innerText=currencyCodes;
		opt.value=currencyCodes;
		
		
		if(drops.name==="from"&&currencyCodes==="USD")
		{
			opt.selected="selected";
		}
		else if(drops.name==="to"&&currencyCodes==="INR")
		{
			opt.selected="selected";
		}
		drops.append(opt);
		
		drops.addEventListener("change",(e)=>{
			
			UpdateFlags(e);
		});
		
	}
}

const UpdateFlags=(e)=>{
	let countryName=e.target.value;
	let country=countryList[countryName];
	let flagurl=`https://flagsapi.com/${country}/shiny/64.png`;
			
	if (e.target.name === "from") {
		let choosenF = document.querySelector(".flagsF img");
		choosenF.src = flagurl;
    } 
	else if (e.target.name === "to") {
		let choosenT = document.querySelector(".flagsT img");
		choosenT.src = flagurl;
    }
}



let mycc=async()=>{
	let data = await fetch(latestRate);
	let acdata=await data.json();

}
mycc();