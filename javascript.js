

function salvarUsuario(){
	
	
	
	$.ajax({
		  type: "GET",
		  url: "http://192.168.0.29:8080/diversos/listararquivos",
		  data: JSON.stringify(),
		  contentType: "application/json; charset=utf-8",
		  success: function (response){
			  alert("Gravou com sucesso88!")
			 
			  
				
			
document.getElementById("qtdatacado").value = response
document.getElementById("qtdatacado").style.backgroundColor = "blue"
			  }
			  
		}).fail(function(hr, status, errorThrown){
			alert("Erro ao salvar usuário"+ hr.responseText);
		});
		alert("Gravou sasa sucesso88!")
}

function multiplicar(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;

	var multiplicar = num1 * num2; 
	document.getElementById("num3").value = multiplicar
		
}
function subtrair(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;

	var subtrair = num1 - num2; 
	document.getElementById("num3").value = subtrair;
	
}

