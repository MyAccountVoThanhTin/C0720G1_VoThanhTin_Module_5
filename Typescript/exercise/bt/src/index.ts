// happy coding 👻
interface IPost {
    id :number;
    name : String;
    address : String;
    age : number
}
let iPost:IPost = {
    id : 1,
    name : "Tin",
    address : "Quang Ngai",
    age : 18
};
console.log(iPost);
const arr:number[] = [1,2,3,4,5,6];
arr.forEach((num) => console.log(num.toFixed(2)));
const  str:Array<String> = ["Vo","Thanh","Tin","To"];
str.forEach((str1) => console.log(str1.includes('o')));
console.log(arr.map(num => num *2));
console.log(str.filter(st => st.length >2));




