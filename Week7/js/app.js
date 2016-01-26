// Name: Elvis Sunny Nwokocha
// ID : 213210023
// Weather Focus 2016


$(function (){
	$("a").on("click", function(e){
		e.preventDefault();
		//alert(this.text)
		var city = this.text.toLowerCase();
		$.ajax({
			type: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=27c8ac0140f2cd1e7e533a24e4fb4c4a',
			success: function(data){
				//console.log(data);
				$("#container").html(data.name + ": ");
				$("#container").html("");
				function convertC(temp){
					temp = Math.round(temp - 273.15);
					return (temp +"&deg;C");
				};

				function convertF(temp){
					temp = Math.round((temp * 9 / 5)-459.67);
					return (temp + "&deg;F");
				};

			$("#cel").click(function(){
					$("#container").html(convertC(data.main.temp));
					
				});
             $("#fah").click(function(){
					$("#container").html(convertF(data.main.temp));
				});
			}
		});
	});
});