function lessOrEqualThanten(number) {
		var numbersPositionOne=['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'];

	
	return numbersPositionOne[number - 1];
}
function lessThanTwenty(number) {
		var numberPositionTwo = ['Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
		return numberPositionTwo[number%10 - 1];
}

function lessThanHandred(number) {
		var numberPositionThree=['Ten','Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninety'];
		if (number % 10 !==0) 
			{
				return numberPositionThree[(Math.floor(number/10))-1] + ' '+ lessOrEqualThanten(number%10);
			}
			else
			{
				return numberPositionThree[(Math.floor(number/10))-1];

			}
	
}

function lessThanThaosand(number) {
			var handred =lessOrEqualThanten(Math.floor(number/100)) + ' Hundred ';

			if (number % 100 !==0) 
			{
				if (number%100 <= 10) 
				{
				handred+=lessOrEqualThanten(number%100)
		
				}

				else if (number%100 < 20) 
				{
					handred+=lessThanTwenty(number%100);
				}
					else{
						handred+=lessThanHandred(number%100);
		
			}

			}

			return handred;



		}
	
function lessThanTenThaosand(number) {


	
				let thaosand = lessOrEqualThanten(Math.floor(number/1000)) + ' Thousand ';
				

				if (number%1000!==0)
				{
					if (number%1000 <=10) 
					{
						thaosand+=lessOrEqualThanten(number%1000)+' ';
					}
				
					else if(number%1000 <20)
					{
						thaosand+=lessThanTwenty(number%1000)+' ';
					}
					else if(number%1000<100){
						thaosand+=lessThanHandred(number%1000)+' '
}

			
					
						else{
							thaosand+=lessThanThaosand(number%1000)+' '
						}

								}
					
		
				
				
					

				return thaosand;


}


function lessthanhanderdthaosand(number) {
	var firstTwoPosition ;
	if (number/1000 === 10) 
	{
		firstTwoPosition = lessOrEqualThanten(Math.floor(number/1000));
	}
		else if(number/1000 <20)
		{
		firstTwoPosition=lessThanTwenty(Math.floor(number/1000))
		}
			else
			{
				firstTwoPosition=lessThanHandred(Math.floor(number/1000))
			}

	var tenThaosand = firstTwoPosition +' Thousand ';

	let newNumber = number%1000;
	if (newNumber!==0)
	{
		if (newNumber<=10)
		 {
		 tenThaosand+=lessOrEqualThanten(newNumber)+' ';
		 }
			else if(newNumber<20)
			{
				tenThaosand+=lessThanTwenty(newNumber)+' ';
			}
				else if(newNumber<100)
				{
					tenThaosand+=lessThanHandred(newNumber)+' ';
				}
					else  
					{
						tenThaosand+=lessThanThaosand(newNumber)+' ';

					}
						
	}







			return tenThaosand;	
	
}
function convertNumberToString(number) {

	if (number<=10) 
	{
		return lessOrEqualThanten(number);
	}

	else if (number<20)
	{
		return lessThanTwenty(number);
	}
	else if(number<100)
	{
		return lessThanHandred(number);
	}
	else if (number<1000)
	{
		return lessThanThaosand(number);
	}
	else if(number<10000)
	{
		return lessThanTenThaosand(number);
	}
	else if(number<100000)
	{
		return lessthanhanderdthaosand(number);

	}
	}