let latestRate="https://api.currencyapi.com/v3/latest?apikey=fca_live_zOJbSazrSx0Qo86sDhp4obzm5EMJZ2NKIsGuRicm";
let myCurrency=document.querySelectorAll(".currency select");
let inputB=document.querySelector("input");
let getData=document.querySelector("button");
let out=document.querySelector("#appTitle2");

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
/*getData.addEventListener("click",async()=>{
	let response=await fetch(latestRate);
	let result=await response.json();
	let baseData=result.data;
	var amt=inputB.value;

	for(let drops2 of myCurrency)
	{
		for(currencyCodes2 in countryList)
		{
			for (let key in baseData)
			{
				if (baseData.hasOwnProperty(key)) 
				{
					//console.log(`Code: , Value: ${baseData[key].value}`);
					
					if(baseData[key].code && drops2==="from")
					{
						var fAmt=amt*baseData[key].value;
					}
					if(baseData[key].code && drops2==="to")
					{
						var lstAmt=fAmt*baseData[key].value;
					}
				}
			}	
		}
	}
	let answer=fAmt*lstAmt;
	out.innerText=answer.toString();
});*/

getData.addEventListener("click", async () => {
    let response = await fetch(latestRate);
    let result = await response.json();
    let baseData = result.data;
    let amt = parseFloat(inputB.value);

    if (isNaN(amt) || amt <= 0) {
        out.innerText = "Please enter a valid amount.";
        return;
    }

    let fromCurrency = document.querySelector(".currency select[name='from']").value;
    let toCurrency = document.querySelector(".currency select[name='to']").value;

    let fromRate = baseData[fromCurrency].value;
    let toRate = baseData[toCurrency].value;

    let convertedAmount = (amt / fromRate) * toRate;
    out.innerText = convertedAmount.toFixed(2);
});
