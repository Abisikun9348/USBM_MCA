//nested function
/*let person = {
    name: "sikun",
    age:21,
    roll:3,
    address:{city:"bhadrak",
        po:'manjuriroad',
        pin:756121,

    }
}
console.log(person);*/
let user ={
    username:"sikun",
    email:"sikun02@gmail.com",
    gender:"male",
    age:21,
    comments:["abc","xyz"],
    address:{
        city:"bhadrak",
        pin:756121,
        state:"odisha"
    }
}
console.log(user.username)//user name?
console.log(user.email)//email?
console.log()//city and state?
console.log(user.address.city, user.address.state)//city and state
console.log(user.comments)//comments
let cmtf = user.comments[0];
console.log(cmtf, user.comments[user.comments.length-1])//comments first and last
//add to cart
let product = {
    id: 1,
    productname="Iphone",
    stock =30,

}


