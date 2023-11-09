
let newEntry=document.getElementById("compose");

let dialog=document.getElementById("entryBox");

newEntry.addEventListener("click", () => {
    dialog.show();

  })
let pages=document.getElementById("pages");
let create=document.getElementById("Create");
let Name=document.getElementById("Book");
let writer=document.getElementById("Author");

const myLibrary = [];


function addBookToLibrary(book) {
  
  myLibrary[(myLibrary.length)]=book;
  

}

function Book(name,Author,pages) {
  this.name=name,
  this.Author=Author,
  this.pages=pages

}

let carrier;
let bookCollection=document.querySelector('.bookCollection');


function bringBooks(myLibrary){
bookRemove();
for (let i = 0; i <myLibrary.length; i++) {
 

    createDiv(myLibrary[i]);
  
    
  }
}




  
  



function createDiv(extra){

  let subject=document.createElement('div');
  
  subject.classList.add('subject');
  subject.className="details";

 
let i=0;
for (let key in extra) {

  if(i<3){
  let screen=document.createElement('p');
  screen.classList.add('screen');
 
  screen.textContent=extra[key];
  subject.appendChild(screen);
  }
 i++;
}
let checkbox=document.createElement('input');
checkbox.setAttribute("type", "checkbox");


let deletebtn=document.createElement('button');
deletebtn.classList.add('deletebtn');
deletebtn.id="deletebtn";
deletebtn.textContent="Delete";

subject.appendChild(deletebtn);


    bookCollection.appendChild(subject)

    // 

}



create.addEventListener("click",function(e){

  let Article=new Book(Name.value,writer.value,pages.value);
if (!(Article.name===undefined||Article.name===''&&Article.Author===undefined||Article.Author===''&&Article.pages==''&&Article.pages===undefined)) {
 
addBookToLibrary(Article);


  bringBooks(myLibrary);


  
}



console.log((!(Name.value ===''&&writer.value ==='')),myLibrary);







//because when one is removed the others remain

function remover() {
  

let deletebtn=document.querySelectorAll(".deletebtn");
let i=0;
let j=0;

function libraryCheckout(obj,pos,button){
this.obj=obj;
this.pos=pos;
this.button=button.addEventListener('click',()=>{
  
  console.log(AllBooks);
    
  myLibrary.splice(pos,1);
 
  bookRemove();
 console.log(myLibrary);
  for (let i = 0; i < myLibrary.length; i++) {
   createDiv(myLibrary[i]);


 
 

}


  remover();






});

};
let AllBooks=[];
let count =0;
myLibrary.forEach(myLibrary => {


  let NewBook=new libraryCheckout(myLibrary,count,deletebtn[count]);

  AllBooks[count]=NewBook;

count++;
  
});




}

remover();




  
}






)


let remove=document.getElementById("remove");
let text=document.getElementById("personal");
remove.addEventListener("click",()=>{

  dialog.close()

})

//to delete entry

function bookRemove(){

  let books=document.querySelectorAll(".details");
 books.forEach(books=>{

    books.remove();
 })

}