const student= require('./StudentInfo')
const person = require('./Person')
os=require("os")
const util=require('util')
function EmployeeInfo(name,Salary)
{
console.log("Wellcome " + name+ "Your monthly Salary is "+ Salary)
}
console.log ("This is my first progame")
var EmpName="John"
var EmpSalary= 50000
// calling of the function EmployeeInfo
EmployeeInfo(EmpName,EmpSalary)
//Code for Second Exercise starts from here:
const EmpSkills = (skills) => {
    console.log("Expert in " + skills);
};
EmpSkills("Java");


// because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
// creating new Person
person1= new person("Jim","USA",
"myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
// exercise 4 starts from here:
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("Programe ended")
