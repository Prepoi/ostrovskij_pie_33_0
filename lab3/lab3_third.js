const a = 1.8, b = 3.3;

let x = prompt("Введите значение х:");

if (x != Number(x)){
	alert('x не является числом!')
}else{ 
	if (x <= 3){
		alert((a*x + 1)**4);
	}else if(x > 3 && x <= 5){
		alert(1/(2*x**2 + b*Math.log(x)));
	}else if(x > 5){
		alert(a*Math.cos(b) + x**2);
	}
}

