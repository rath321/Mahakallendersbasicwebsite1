document.write("hello");
function Cars(car_brand,car_name,car_no)
{
    this.car_brand=car_brand;
    this.car_name=car_name;
    this.car_no=car_no;
    this.teslaAutopilot=function()
    {
        document.write("yes there is a feature");
    }
}
var c1=new Cars("tata","SUV",65656);
console.log("this carb "+c1.car_brand+"<br>");
document.write("this carn "+c1.car_name+"<br>");document.write("this carno "+c1.car_no+"<br>");