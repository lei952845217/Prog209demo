var TotalList = [];
sumClu = 0;
count = -1
function calc()
			{
				strFood = '';
				
				var food = document.getElementById('num1').value;
				var clu = document.getElementById('num2').value;			     
				var qut = document.getElementById('num3').value;
				
				var elem_li = document.createElement('li');
				var elem_p1 = document.createElement('p'); 
				
				if (food == ''||clu == ''|| qut==''){
					document.getElementById('result').innerHTML = "Sorry,invalid input data";
				}else{
					
					TotalList.push([food,clu,qut]);
					console.log(TotalList);
					count = count + 1;
					strFood = TotalList[count][0]+","+TotalList[count][1]+","+TotalList[count][2];
					sumClu = sumClu+Number(TotalList[count][2])*Number(TotalList[count][1]);
					 
					elem_p1.innerHTML = strFood; 
					elem_li.appendChild(elem_p1);
					document.getElementById('itemlist').appendChild(elem_li);
					document.getElementById("result").innerHTML = 'You hava consumed '+sumClu+' calories';
					
				}
			}

	
function cle(){
	document.getElementById("num1").value = ""
	document.getElementById("num2").value = ""
	document.getElementById("num3").value = ""
	
}