//f0r current time to show the greeting msg to the user
const greetUser = () => {
    let date=new date();//date class
    const currentHour=date.getHours();
    //const currentHour = new Date().getHours();

    if(currentHour < 12){
        console.log("Good Morning!");
    }
    else if (currentHour ===12){
        console.log("Good Noon!");
    }else {
        console.log("Good Afternoon!");
    }
};

greetUser();//call the function

const greetUser=(name,time)=>{
    if(time<12){
        return'Hey ${name} Good morning';
    }else if(time<18){
        return'Hey ${name} Good Afternoon';
    }
    else{
        return'Hey ${name} Good evening';
    }
}
let result=greetUser("Abinash",11);
console.log(result);

//a simple calculator using arrow funcion
const calculator =(a,b, operator) => {
    switch(operator){
        case '+':
            return a + b;
            case '-':
                return a-b;

                case '*':
                    return a * b;
                    case '/':
                        return a/b;
                        default:
                            return 'Invalid operator';
    }
};

console.log(calculator(10,5,'/')); // output:2

//const add=(a,b)=>console.log(add(5,6));
// add()

const add=(a,b)=>a+b;
console.log(add(5,7));

//BMI Calculator


const calculateBMI = (height,weight) => {
    
}
