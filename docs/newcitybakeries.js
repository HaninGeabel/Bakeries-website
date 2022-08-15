
/*https://www.youtube.com/watch?v=YrE62Dzg4oM */
function calculation(x){
	if (x==0){
		document.getElementById('sheetTable').style.display= "inline";
		document.getElementById('roundTable').style.display= "none";
	return x =1;

	}
	else{
		
	document.getElementById('roundTable').style.display= "inline";
	document.getElementById('sheetTable').style.display= "none";
return x = 0;
	}

}

function submitbutton(){
	var name = document.getElementById("name").value;
	
	var address= document.getElementById("streetaddress").value;
	var postCode= document.getElementById("postcode").value;
	var phone= document.getElementById("phone").value;
	var email= document.getElementById("email").value;
	 var layer = document.querySelector('input[name="layerCount"]:checked').value;
	 var width = parseFloat(document.getElementById("width").value);
	var hight = parseFloat(document.getElementById("length").value);
	var radius = parseFloat(document.getElementById("radius").value);
	var cream = parseFloat(document.getElementById("creamCheese").value);
	var fruit = parseFloat(document.getElementById("fruitAlmonds").value);
	var jam  = parseFloat(document.getElementById("fruitJam").value);
	var areaSheet= width*hight;
	var areaRound = 3.14* radius*radius;
	var cost;
	var areaCostR;
	var areaCost;
	var minArea = 900; 
	var minArea1 = 707; 
	var increasment= 0.02; 
	
	//var totalcost3;
	//var totalcost4;
	/*var finalResult="<table id=mid><tr colspan=2><td>"+ name+"</td></tr>"+"<tr colspan=2><td>"+ address+"</td></tr>"+
	"<tr colspan=2><td>"+ postCode+"</td></tr>"+ "<tr colspan=2><td>"+ phone+"</td></tr>"+ "<tr colspan=2><td>"+ email+"</td></tr>"+"<tr id=main colspan=2><td></td></tr><tr colspan=2 ><td id=title> Your order:</td></tr>";
	//.querySelectorAll('input[name="sheet_cake"]')*/
	var finalResult="<div id=mid>"+name+"<br>"+ address+"<br>"+ postCode+ "<br>"+ phone+ "<br>"+ email+"</div><br><br><table>";
if (document.querySelector('input[id="sheet_cake"]:checked')){
	
	if (width==30 & hight==30){
	 cost = 18;
	 
	 
	}else{
		areaCost =(areaSheet-minArea)*increasment;
		 cost = areaCost+18;
		 //finalResult +="<tr><td> One layer sheet cake with hight"+ hight+"cm and width "+ width+"</td>"+"<td id=secondcol>"+"$"+ Math.round(cost.toFixed(2))+"</td></tr>";
	}

	if(layer ==1){
		finalResult +="<tr><td> One layer sheet cake with hight"+ hight+"cm and width "+ width+"</td>"+"<td id=secondcol>"+"$"+ Math.round(cost.toFixed(2))+"</td></tr>";
		 
	}else if(layer ==2){
		cost = (cost * 1.5) ;
		finalResult +="<tr><td> 2 layers sheet cake with hight"+ hight+"cm and width "+ width+"</td>"+"<td id=secondcol>"+"$"+ Math.round(cost.toFixed(2))+"</td></tr>";
	}else{
		cost= (cost * 2);
		finalResult +="<tr><td> 2 layers sheet cake with hight"+ hight+"cm and width "+ width+"</td>"+"<td id=secondcol>"+"$"+ Math.round(cost.toFixed(2))+"</td></tr>";
	}
	

}//.querySelectorAll('input[id="round_cake"]')
if (document.querySelector('input[id="round_cake"]:checked')){
	if (radius== 15){
	 cost = 15;
	 
	 
	}else{
		//areaCost =(areaSheet-minArea)*increasment;
	  areaCostR =(areaRound-minArea1)*increasment;
		 cost = areaCostR+15;
	}
	if(layer ==1){
		finalResult +="<tr><td> Round cake with  one layer hight"+ radius+"cm </td>"+"<td id=secondcol>"+"$"+ cost.toFixed(2)+"</td></tr>";
		 
	}else if(layer ==2){
		cost = (cost * 1.5) ;
		finalResult +="<tr><td>  Round cake with 2 layers radius"+ radius+"cm </td>"+"<td id=secondcol>"+"$"+ cost.toFixed(2)+"</td></tr>";
	}else{
		cost= (cost * 2);
		finalResult +="<tr><td>Round cake with 3 layers radius"+ radius+"cm </td>"+"<td id=secondcol>"+"$"+ cost.toFixed(2)+"</td></tr>";
	}


	}
	if (document.getElementById('creamCheese').checked){
		cost +=cream;

		finalResult +="<tr><td>Cream Cheese icing </td>"+"<td id=secondcol>"+" $"+ cream+"</td></tr>";
	}
	if (document.getElementById('fruitAlmonds').checked){
		//totalcost1+= document.getElementById('Almonds').value;
		cost += fruit;
		finalResult +="<tr><td>Fruit and Almond topping </td>"+"<td id=secondcol>"+" $"+ fruit+"</td></tr>";

	}
	if (document.getElementById('fruitJam').checked){
		//totalcost1+= document.getElementById('Almonds').value;
		cost += jam;
		finalResult +="<tr><td>Fruit Jam filling  </td>"+"<td id=secondcol>"+" $"+jam+"</td></tr>";
	}

finalResult += "<tr><td>Total: </td>"+ "<td id=secondcol>"+"$"+(cost).toFixed(2)+"</td></tr></table>";
//email+"<br> Your order: <br>" ;
document.getElementById("result").innerHTML= finalResult;
 
}

///finalResult +="<table><tr><td> One layer sheet cake with hight"+ hight+"cm and width "+ width+"</td>"+"<td style=''>"+ " $"+ cost+"</td></tr></table>";
