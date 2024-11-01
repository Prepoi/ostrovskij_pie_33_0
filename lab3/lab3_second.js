alert('Данная программа в А запишет меньшее, а в В большее из введенных значений');

let A, B;
A = prompt('Введите А:');
B = prompt('Введите В:');

let C;
if (A == Number(A) && B == Number(B)){
	if (A > B){
		C = A;
		A = B;
		B = C;
	};
	alert(A + ' - A, ' + B + ' - B');
}else{
	alert('Значения не вещественные!');
}

