

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
  let value;
 
  let docs= document.querySelectorAll('.bookCollection');

   


for (let i = 1; i < docs.length-1; i++) {
  value=docs[i];
  value.remove()
  
}




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




let deletebtn=document.getElementsByClassName("deletebtn");
for (let i = 0; i < deletebtn.length; i++) {
  deletebtn[i].addEventListener('click',()=>{

   
 let newlibray=myLibrary.splice(i,1);

 bringBooks(nw);})}

//  let docs= document.querySelectorAll('.bookCollection');

   
//  docs.forEach(docs=> {
//   docs.remove();
// });

// let collection=document.createElement('div');
// collection.classList.add('collection');
// collection.className="bookCollection";

// document.body.appendChild(collection)

//  console.log(myLibrary);

//   myLibrary.forEach((elements)=>{

//       createDiv(elements);

//   })
    
    
//     })
  
}






)
let remove=document.getElementById("remove");
let text=document.getElementById("personal");
remove.addEventListener("click",()=>{

  dialog.close()

})

//to delete entry

