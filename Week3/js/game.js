var game = {
	answer: 123, // Need to random this value from 0-100
	init: function() {
		var self = this;
		// Number 1
		var ele = document.getElementById("one");
		ele.addEventListener("click", function(){
			self.click(1);
		}, false);

		// Number 2
		var ele = document.getElementById("two");
		ele.addEventListener("click", function(){
			self.click(2);
		}, false);


		// number 3

		var ele = document.getElementById("three");
		ele.addEventListener("click", function(){
			self.click(3);
		}, false);

		//number 4

		var ele = document.getElementById("four");
		ele.addEventListener("click", function(){
			self.click(4);
		}, false);

		var ele = document.getElementById("five");
		ele.addEventListener("click", function(){
			self.click(5);
		}, false);

		var ele = document.getElementById("six");
		ele.addEventListener("click", function(){
			self.click(6);
		}, false);

		// Guess!
		var ele = document.getElementById("guess");
		//ele.addEventListener("click", this.checkAnswer, false);
		ele.addEventListener("click" , function() {
			self.checkAnswer(self);
			}, false);
	},
	click: function(value) {
		console.log(value + " clicked.");
		var userValueEle = document.getElementById("userValue");
		userValueEle.value += value;
	},
	checkAnswer: function(self) {
		//alert("This is not correct! Try again. ");
		var userValueEle = document.getElementById("userValue");
		if ( userValueEle.value ==  self.answer){
			alert("Congratulation Elvis!");

		


		
		}	
	}
};

game.init();