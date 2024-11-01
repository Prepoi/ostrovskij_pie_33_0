alert('В данной программе х принимает одно из значений: 3, 4 или 6');

const a = 1.8, b = 3.3;

let x = Number(prompt("Введите х:"));

switch(x){
	case 3:
		alert((a*x + 1)**4);
		break;
	case 4:
		alert(1/(2*x**2 + b*Math.log(x)));
		break;
	case 6:
		alert(a*Math.cos((b + x)**2));
		break;
	default:
		alert("Не попадает в значение!");
}

