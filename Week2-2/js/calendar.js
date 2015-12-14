// display the calendar here
var hotelTable = document.getElementById("hotelCalendarTable");
var defaultData = hotelTable.innerHTML;
var days = 2;
var stringHTML = "";
stringHTML += "<tr><td>1</td>";
// using while loop to input calendar days  from 1 - 31 days//
while(days <= 31){
	if(days % 7 == 1){
		stringHTML += "</tr><br><tr><td>"+ days +"</td>"; // breaks days
	} else { 
		stringHTML += "<td>"+days+"</td>";
	}
	days++; // increamenting //
}
stringHTML += "</tr>"; // End of table//
hotelTable.innerHTML += stringHTML;