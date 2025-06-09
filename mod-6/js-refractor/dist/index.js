"use strict";
//declare a vriable
let username = "Bre";
//number
let age = 11;
//boolean
let isLoggedIn = true;
//array
let fruits = ["apple", "banana", "cherry"];
//tuple
let userInfo = ["Alice", 30];
//emun
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = Role.Admin;
