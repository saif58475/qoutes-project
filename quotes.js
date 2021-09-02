
//    the array that carrys the qoutes
var quotesarray =[
{
    quote : "“Be yourself; everyone else is already taken.”" ,
    name : "Oscar Wilde"

},
{
    quote : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”" ,
    name : "Marilyn Monroe"    

},
{
    quote : "“So many books, so little time.”" ,
    name : "Frank Zappa"

},
{
    quote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" ,
    name : "Bernard M. Baruch"

},
{
    quote : "“You only live once, but if you do it right, once is enough.”" ,
    name : "Mae West"

},
{
    quote : "“You've gotta dance like there's nobody watching Love like you'll never be hurt Sing like there's nobody listening And live like it's heaven on earth.”",
    name : "William W. Purkey"

},
{
    quote : "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    name : "J.K. Rowling"

},
{
    quote : "“If you tell the truth, you don't have to remember anything.”",
    name : "Mark Twain"

},
{
    quote : "“A friend is someone who knows all about you and still loves you.”",
    name : "Elbert Hubbard"

},
]
if(localStorage.getItem("item") == null ){
     alert(" THIS IS YOUR FIRST TIME OR YOU DIDN'T ADDED ANY QOUTE YET ");
} else{
    quotesarray.push(JSON.parse(localStorage.getItem("item")));
}

// the function that selects a random record
function presson(){
    
    var i = Math.floor(Math.random()*quotesarray.length);
    document.getElementById("demo").innerHTML = `<p>${quotesarray[i].quote}</p> 
    <h2>${quotesarray[i].name}</h2> `;
}
// the variables that holds the content 
var qt = document.getElementById("qoute");
var nm = document.getElementById("name");

function selfqoutes(){
    var entry = {
        quote : qt.value,
        name : nm.value
    }
    localStorage.setItem("item",JSON.stringify(entry));
    quotesarray.push(JSON.parse(localStorage.getItem("item")));
    // quotesarray.push(entry);
       clear();
    
}
//   this function will clear the input box after intering your qoute 
function clear(){
    qt.value = '' ;
    nm.value = '' ;
}

