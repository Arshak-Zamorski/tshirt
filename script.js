
	
	function addButton(){
		prompt('Введите ваш адрес что бы отправить товар');
	}
	
	function addIButton(){
		prompt('Вы выйграли! Введите ваш адрес что бы мы отправили вам приз. ');
	}
	
	function pomosh() {
		let skype = "Skype:helper\n";
		let telegram="Telegram:@helper\n";
		let tel="tel:8 962-876-12-15\n";
		alert(skype+telegram+tel)
		
	}
	var operation;
	
	function kalkeliter(){
		let nemodin =Number( document.getElementById("nemodin").value);
		let nemdva =Number( document.getElementById("nemdva").value);
		let rezult;
			if(operation=="+"){
				rezult=nemodin+nemdva;
			}
			else if(operation=="-"){
				rezult=nemodin-nemdva;
			}
			else if(operation=="*"){
				rezult=nemodin*nemdva;
			}
			else if(operation=="/"){
				rezult=nemodin / nemdva;
			}
			else if(operation==">"){
				rezult=nemodin > nemdva;
			}
			else if(operation=="<"){
				rezult=nemodin < nemdva;
			}
			else {
				rezult=nemodin % nemdva;
			}
			
		document.getElementById("rezult").innerHTML = nemodin + " " + operation + " " + nemdva + "=" + rezult;
		
		
	}
	
	function change(){
		let text=document.getElementById("text");
		
		if(text.style.color == 'black'){
			text.style.color='red';
		}
		
	}
	function change2(){
		let text=document.getElementById("text2").innerHTML;
		text=text.replace("ВАШ ЗАКАЗ","ЗАКАЗ НАСТИ");
		document.getElementById("text2").innerHTML=text;
	}
	function godai(){
	console.log("Угадай моё число(от 1 до 10");
	var randomcheslo = Math.floor(Math.random() * 10);
	

	console.log(randomcheslo);
		
		let i = 0;
		while(i == 0){
			let user= prompt("Введи чесло");
			if (user < randomcheslo){
			alert("Больше");}
			else if(user > randomcheslo){
			alert("Меньше");}
			else{
			alert("Ура ты молодец");
			i=1;}
			
		}
	}
	let masiv = [4, 8, 4, 2, 10, 5, 3, 7,9,6];
	for (let i = 0; i < masiv.length; i++){
		masiv[i] = masiv[i] * 2;
	}
	console.log(masiv);
	
	
	let arr = [];
	let l = 0;
	while ( l < 20 ){
		 let n = Math.floor(Math.random() * 10);
	console.log(arr);
		 arr.push(n);
		 l++;
		 arr[l] = arr[l] * 100;
	}
	console.log(arr);