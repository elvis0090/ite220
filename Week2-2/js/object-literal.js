var hotel = {

name: 'Eazy Life Hotel',
rooms: 40,
booked: 25,
checkAvailability : function() {
return this.rooms - this.booked;
}
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();



var hotel = new Object();

hotel.name = 'Eazy Life Hotel'
hotel.rooms = 40;
hotel.booked = 25;

hotel.checkAvailability = function(){
   return this.rooms - this.booked;
};


function Hotel(name, rooms, booked){

this.name = name;
this.rooms = rooms;
this.booked = booked;

this.checkAvailability = function(){
  return this.rooms - this.booked;
};

}


var EasyLifeHotel = new Hotel ('Eazy Life Hotel', 40, 25);
var parkHotel = new Hotel ('Park', 120, 77);