//declare a vriable

let username: string = "Bre";

//number
let age: number = 11;

//boolean
let isLoggedIn: boolean = true;

//array
let fruits: string[] = ["apple", "banana", "cherry"];

//tuple
let userInfo: [string, number] = ["Alice", 30];

//emun
enum Role {
     Admin,
  User,
  Guest,
}
 
let userRole: Role = Role.Admin;


//example
interface user {
  id: number;
  name: string;
  email: string;
  loyaltyMember: boolean;
}


let user = {
  id: 1,
  name: "Breanna",
  email: "breanna@email.com",
  loyaltyMember: true,
};

console.log(user);
