let Bio={
   
    Name: `Zakir`,
    Qualification : `BSCS`,
    Intrest :[`Gaming`,`Programming`,`Hiking`],
    Age : 25,
} 
console.log(`Your whole Bio :`,Bio);
console.log(`Your Intrest in `,Bio.Intrest);
let jasonformat=JSON.stringify(Bio);
console.log(jasonformat);

//Object this Method
function MyInfo(){
    this.name=`Zakir`,
    this.age=25,
    this.Intrest=[`programming`,`reading`]
    
}
const self=new MyInfo();
console.log(self)

// Jason to object converter
let data={
   
    Name: `Ansari`,
    Qualification : `BSCS`,
    Intrest :[`Games`,`Reading`,`travelling`],
    Age : 25,
} 
let obj=JSON.stringify(data); // converting to jason
console.log(obj);
let result=JSON.parse(obj) ; // converting jason to object
console.log(result);

// let Info2=new MyInfo(`Shehbaz`,24,[`Treking`,`Reading`]);
// console.log(Info2.Intrest);