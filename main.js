document.write("3. Print first N even number loop");

document.write("<br>");
document.write("<br>");

var n=prompt("Enter a first even N number");
var i=0;
while (n>0) {
	i+=2;
	n-=1;
	document.write("<br>");
	
	document.write(i);
}