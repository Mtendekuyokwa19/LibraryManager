let newEntry=document.getElementById("compose");
let dialog=document.getElementById("entryBox");
let pages=document.getElementById("pages");
let create=document.getElementById("Create");
let Name=document.getElementById("Book");
let writer=document.getElementById("Author");
let bookCollection=document.querySelector('.bookCollection');
let remove=document.getElementById("remove");
let text=document.getElementById("personal");
const myLibrary = [];
let carrier;
let toogle=document.querySelector('#toogle');
let container=document.querySelector('body');
let errorBox=document.querySelector('#errorMessage')
let closeError=document.querySelector('#errorMessage button');
let AllBooks=[];
let count =0;

newEntry.addEventListener("click", () => {
    dialog.showModal()
    errorBox.close();
  

    clearHtmlform()
  })

class Book{

   constructor(name,Author,pages,Status="not read") {
    this.name=name,
    this.Author=Author,
    this.pages=pages
    this.Status=Status
  }
}

function addBookToLibrary(book) {
  
  myLibrary[(myLibrary.length)]=book;

 
  
}

function clearHtmlform() {
  document.querySelector('form').reset();
  
}

//loop to create books
function bringBooks(myLibrary){
bookRemove();

for (let i = 0; i <myLibrary.length; i++) {
    createDiv(myLibrary[i]);   
  }
}

//creating the elements in DOM
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

let statusManager=document.createElement('div');
statusManager.id="statusManager";
subject.appendChild(statusManager);

let readStatus=document.createElement('button');
readStatus.setAttribute("class", "checkbox");
readStatus.textContent=extra["Status"];

    if (readStatus.textContent==="Read") {
      readStatus.style.setProperty("background-color","green")
      
    } 
statusManager.appendChild(readStatus);

readStatus.addEventListener('click',(e)=>{
 if(readStatus.textContent==="not read"){
  
  readStatus.textContent="Read";
  readStatus.style.setProperty("background-color","green")
  console.log(myLibrary);
 }

 else{
   readStatus.textContent="not read";
   readStatus.style.setProperty("background-color","red")
 }
 extra["Status"]=readStatus.textContent;
})

let deletebtn=document.createElement('button');
deletebtn.classList.add('deletebtn');
deletebtn.id="deletebtn";
deletebtn.textContent="Delete";

statusManager.appendChild(deletebtn);
    bookCollection.appendChild(subject)
}
function freshBook(){
 

  //Making the title upper case
  let Article=new Book(Name.value,writer.value,pages.value);
  let duplicate=checkDuplicates(myLibrary,Article);
  
  if (duplicate===1) {
  
    console.log("not kobe")
    return;
  }
  Article.name=Article.name.toUpperCase();
  
  if (!((Name.value===""||Name===undefined))) {
  addBookToLibrary(Article);
    bringBooks(myLibrary);
    
  }
  
  //function to be removing the entries
  function remover() {
    let deletebtn=document.querySelectorAll(".deletebtn");
  let i=0;
  
  class libraryCheckout{
  constructor(obj,pos,button){
      this.obj=obj;
      this.pos=pos;
  
      this.button=button.addEventListener('click',()=>{
       this.manipulate();
          
      });
  
    }
  
    manipulate(){
      
      myLibrary.splice(this.pos,1);
        bookRemove();
     console.log(myLibrary);
      for (let i = 0; i < myLibrary.length; i++) {
       createDiv(myLibrary[i]);
    }
  
      remover();
    }
  
  
  }
  
  myLibrary.forEach(myLibrary => {
    let NewBook=new libraryCheckout(myLibrary,count,deletebtn[count]);
    AllBooks[count]=NewBook;
  
  count++;
    
  });
  
  }
  
  remover();
  }
create.addEventListener("click",function (e) {

  validation.Valid.status===true?freshBook():validation.Valid;
  console.log(validation.Valid.status)
  
  
}
)

//closing the dialog box

remove.addEventListener("click",()=>{

  dialog.close()

})

//Removes all books to allow refreshing when entering new book and also when deleting books
function bookRemove(){

  let books=document.querySelectorAll(".details");
 books.forEach(books=>{

    books.remove();
 })

}
//changing from light mode to dark mode

toogle.addEventListener('click',function(e){

if(container.className==="Dark"){

  toogle.textContent="Light Mode";
  container.className="Light";
  toogle.style.setProperty("background-color","#5DAAEE");
  toogle.style.setProperty("color","White");
}
else{
  toogle.textContent="Dark Mode"

  container.className="Dark";
  toogle.style.setProperty("background-color","#191D23");
  toogle.style.setProperty("color","White");
}})
  

closeError.addEventListener('click',function(e){
errorBox.close();
})

 function checkDuplicates(collection,{name}){

  for (let i = 0; i < collection.length; i++) {
  name=name.toUpperCase();

  if(collection[i].name===name){
    errorBox.show();
    
 return 1
  }}} 

  //Addition of custom validation

  let validation=(()=>{

    let bookTitle=document.querySelector('#Book');
    let Author=document.querySelector('#Author')
    let pages=document.querySelector('#pages');

    let Valid={status:false};
    function checkPages() {
      if (pages.validity.typeMismatch) {

        pages.setCustomValidity("Please Make sure you fill in a Number 😀")
        Valid.status=false
        return
      }

      else if (pages.validity.rangeUnderflow){

        pages.setCustomValidity("Please Make sure you fill in a Numbers Greater than 1 😀")
        Valid.status=false
        return
      }

      else{
        pages.setCustomValidity("")
        enablebtn()
        Valid.status=false
        return

      }
      
    }

    function NamesValidations(input) {
      if(input.checkValidity()){
       Valid.status=true
      }
      else if (input.validity.typeMismatch) {
        input.setCustomValidity(" Make sure you fill in  "+JSON.stringify(input))
      
      Valid.status=false
      }
      else if (input.validity.valueMissing) {
        input.setCustomValidity("add some  words 😀")
        
        Valid.status=false
      }
      else if (input.validity.tooLong){
        input.setCustomValidity("Must too many  words 😀")
        Valid.status=false
     
      }
      

     

      
    }

    function disablebtn() {
      document.getElementById("Create").disabled = true;
      
    }
    function enablebtn() {
      document.querySelector("#Create").disable=0;
    }
    Author.addEventListener('input',function () {
      NamesValidations(Author);
      
    })
    bookTitle.addEventListener('input',function () {
 NamesValidations(bookTitle)     
    })
pages.addEventListener('input',checkPages)

return{Valid}
  })()

 