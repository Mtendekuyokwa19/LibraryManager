

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

let deletebtn=document.createElement('button');
deletebtn.classList.add('deletebtn');
deletebtn.id="deletebtn";
deletebtn.textContent="Delete";

subject.appendChild(deletebtn);


    bookCollection.appendChild(subject)

    // 

}
Book.prototype.mother=function daugh(){

  (this.name);
}



create.addEventListener("click",function(e){


let Article=new Book(Name.value,writer.value,pages.value)


addBookToLibrary(Article);
bringBooks(myLibrary);



//because when one is removed the others remain

function remover(params) {
  

let deletebtn=document.querySelectorAll(".deletebtn");
let i=0;
let j=0;
deletebtn.forEach(deletebtn => {

  deletebtn.addEventListener("click", event => {

   
      let newlibray=myLibrary.splice(i,1);
      i++;
      bookRemove();
     console.log(myLibrary);
      for (let i = 0; i < myLibrary.length; i++) {
       createDiv(myLibrary[i]);
 
  
     
     
    
    }
  
  
      remover();
  
  
  
  })

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