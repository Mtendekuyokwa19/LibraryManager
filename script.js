

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
  myLibrary[(myLibrary.length+1)]=book;
  

}

function Book(name,Author,pages) {
  this.name=name,
  this.Author=Author,
  this.pages=pages

}

create.addEventListener("click",function(e){


let Article=new Book(Name.value,writer.value,pages.value)

addBookToLibrary(Article);
console.log(myLibrary);


})
let remove=document.getElementById("remove")

remove.addEventListener("click",()=>{

  dialog.close()

})



