//let array=[12,13,14];
// console.log(isNaN("12a"));
// console.log(+"12");
// if(array.length) //truthy
//     console.log("okay");
//array.push(6); //arrayin sonuna elave edir
// array.pop(); //sonuncunu silir
//let a = array.pop(); //sonuncu elementi verir
//array.unshift(2); //0 ci indekse element elave edir
// array.shift() //silir 0 ci
// console.log(array);
// let arr=[];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if(element>50)
//         arr.push(element);
// }
// console.log(arr);
//------------------------
// let user={
//     namee:"Lorem",
//     age:12,
//     hobbies:["aa","bb"],
//     getAge:function(){
//         return this.age;
//     },
//     getAdress:()=>{
//         console.log(this.adress);//burda this tanimir useri window obyektinin icerisinden axtarir
//     },
//     "user phone":"+994"
// }
// user.adress="Baki";
// console.log(user.adress);
// console.log(user["adress"]);
// console.log(user.getAge());
// console.log(user["user phone"]);
//==============================================================
//let word="ipsum lorem ipsum";
// console.log(word.toLowerCase());
// console.log(word.endsWith("a"));
// console.log(word.padStart(14,"aaa"));
// console.log(word.concat("  doler"));
// console.log(word.split(""));
// console.log(word.split(" ").join("+"));
// console.log(word.substring(5));
// console.log(word.slice(3)); //-12
// console.log(word.replace("lorem","doler"));
// console.log(word.replace(/ipsum/g,"A")); //gi keyse
// console.log(word.indexOf("l"));
//======================================

const users = [
    { id: 1, name: "Alice", point: 85, phone: "+994501234567", adress: "Baku" },
    { id: 2, name: "Bob", point: 92, phone: "+994502345678", adress: "Ganja" },
    { id: 3, name: "Charlie", point: 77, phone: "+994503456789", adress: "Sumgait" },
    { id: 4, name: "Diana", point: 64, phone: "+994504567890", adress: "Shaki" },
    { id: 5, name: "Eve", point: 99, phone: "+994505678901", adress: "Lankaran" }
];
//object literal
// const user= {
//      id: 5,
//      name: "Eve", 
//      point: 99, 
//      phone: "+994505678901", 
//      adress: "Lankaran" 
// }
//Object.freeze(user); //user obyektini dondurur, deyişiklik etmir
//console.log(Object.keys(user)); //user obyektinin keylerini verir
//console.log(Object.values(user)); //user obyektinin value-larini verir
//console.log(Object.entries(user)); //user obyektinin key-value cütlerini verir bir array olaraq[["id", 5], ["name", "Eve"], ...]
//user=1; //deye bilmeyik, cunku user const olaraq taninib
//user.id=6; //bunu deye bilirik, cunku user obyekti olaraq taninib
//delete user.adress; //user obyektinin adress keyini silir
//Object.defineProperty(user, "adress", {value:"Baku"}); //sonradan adress keyini elave edir.  amma 
//user.adress="Baku"; //bunu deye bilmirik, cunku default olaraq writable:false-dir
//Object.defineProperty(user, "adress", {value:"Baku",writable:true}); //bu zaman deyişiklik edirik
//let {id, name, point, phone, adress} = user; //destructuring 
//console.log(id);
//let {...rest} = user; //rest operatoru ile qalan key-value cütlerini alır.spread operatoru kimi
//console.log(rest); //{id: 5, name: "Eve", point: 99, phone: "+994505678901", adress: "Lankaran"}
// const user2=user;
// user2.id=6; // reference type olduğu üçün user2 id-ni dəyişdikdə user obyektinin id-si də dəyişir
// console.log(user);
//1
// const user2=Object.assign({}, user); //user obyektinin kopyasını alır, yeni bir obyekt yaradır
// user2.id=6; //user2 id-ni dəyişdikdə user obyektinin id-si dəyişmir
// console.log(user);
//2
// const user2={...user}; //spread operatoru ilə user obyektinin kopyasını alır
// user2.id=6; //user2 id-ni dəyişdikdə user obyektinin id-si dəyişmir
// console.log(user);
//3
// let str=JSON.stringify(user); //user obyektini stringə çevirir
// const user2=JSON.parse(str); //stringi obyektə çevirir yeni bir obyekt yaradır
//const user2=JSON.parse(JSON.stringify(user)); //user obyektini stringə çevirir və sonra obyektə çevirir
//4
//functional constructor ile obyekt yaratmaq
// function User(id, name, point, phone, adress) {
//     this.id = id;
//     this.name = name;
//     this.point = point;
//     this.phone = phone;
//     this.adress = adress;
// }
// const user2 = new User(6, "Frank", 88, "+994506789012", "Baku"); //new operatoru ilə User funksiyasını çağırırıq
// for (const key in user) { //for in döngüsü ilə user obyektinin key-lərini dövr edir
//    console.log(`${key}: ${user[key]}`); //user obyektinin key-value cütlərini dövr edir
// }
// Array.prototype.sum()=function() { 
//   let sum = 0; 
//     for (let i = 0; i < this.length; i++) {
//         const element = this[i];
//         sum += element; 
//     }
//     return sum; //metodun nəticəsini qaytarır

// }
// console.log(users.sum()); //Array prototipinə əlavə etdiyimiz metodu çağırırıq
// array iterations===================================
//let array = [1, 2, 3, 4, 5];
// array.forEach((value,index,arr) => { //forEach metodu ilə arrayin hər bir elementini dövr edir. 3 parametr goturur value index array
     //console.log(arr); // 5 elementli arrayi verir
//       console.log(index);
    //console.log(value);
// })
//------------map() metodu ilə yeni bir array yaradır-----------
//let newArray =array.map((value, index,arr) => value**2);
//console.log(newArray); // [1, 4, 9, 16, 25]
//----------filter() metodu ilə yeni bir array yaradır, şərtə uyğun olan elementləri alır-----
//let newArray = array.filter((value, index, arr) => value > 2);
//console.log(newArray); // [3, 4, 5]
// hemcinin array.filter() ile arrayin elementlerini silmek olur 
//let newArray = array.filter((value, index, arr) => value !== 3); //3 olan elementleri silir
//conso le.log(newArray); // [1, 2, 4, 5]
//--------reduce() metodu ilə arrayin elementlərini birləşdirir, toplama əməliyyatı edir----
//let sum = array.reduce((total //prev, value //next) => total + value, 0); //default 0-dir
// -------every() metodu ilə arrayin bütün elementlərinin şərtə uyğun olub olmadığını yoxlayır----
//let isAllEven = array.every((value) => value % 2 === 0); //bütün elementlər cütdürmü. ve mentiqi
//console.log(isAllEven); // false
//-------some() metodu ilə arrayin ən az bir elementinin şərtə uyğun olub olmadığını yoxlayır----
//let isAnyEven = array.some((value) => value % 2 === 0); //arrayin en az bir elementi cütdürmü
//console.log(isAnyEven); // true
//-------find() metodu ilə arrayin şərtə uyğun ilk elementini tapır----
//let firstEven = array.find((value) => value % 2 === 0); //arrayin ilk cüt elementini tapır
//console.log(firstEven); // 2
//-------findIndex() metodu ilə arrayin şərtə uyğun ilk elementinin indeksini tapır----
//let result = array.findIndex((value=>value==22)); //arrayin ilk 22 olan elementinin indeksini tapır
//console.log(result); // -1, çünki 22 elementi yoxdur, eks halda indeksi qaytarırdı

//let sumOfUsers=users.filter(value=> value.point > 80).reduce((prev,next)=>prev+next.point,0);
//console.log(sumOfUsers); // 276, 80-dən böyük olan istifadəçilərin ballarının cəmi






