var myWindow = {
	screenX: window.screenX,
	screenY: window.screenY,
	location: window.location.pathname,
	screenW: window.screen.width,
	screenH: window.screen.height,

	render: function() {
		var ele = document.getElementById("location");
		ele.value = this.location;

		ele = document.getElementById("sx");
		ele.value = this.screenX;

		ele = document.getElementById("sy");
		ele.value = this.screenY;

		ele = document.getElementById("swidth");
		ele.value = this.screenW;

		ele = document.getElementById("sheight");
		ele.value = this.screenH;


	}
};


myWindow.render();