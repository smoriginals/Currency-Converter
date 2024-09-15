var dropD = document.querySelectorAll(".selection");

for(let currency of countryList)
{
	if(countryList.hasOwnProperty(currency))
	{
		var opt=document.createElement("option");
		opt.value=currency;
		opt.text=`${currency} - ${countryList[currency]}`;
		dropD.append(opt);
	}
}