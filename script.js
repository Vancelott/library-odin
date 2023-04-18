let myLibrary = [];
const addBook = document.querySelector("button")
const submitBook = document.getElementById("submit")
const form = document.createElement("form")
var title = document.createElement("input") 
var author = document.createElement("input")
var total = document.createElement("input")
var read = document.createElement("input")

addBook.addEventListener("click", function() {
    if(form.length < 4) {
    form.setAttribute('class', 'form')
        title.setAttribute("placeholder", "Book title")
            author.setAttribute("placeholder", "Author")
                total.setAttribute("placeholder", "Total pages")
                    read.setAttribute("placeholder", "Pages read")
                        form.appendChild(title)
                        form.appendChild(author)
                        form.appendChild(total)
                        form.appendChild(read);
    document.querySelector("body").appendChild(form);
    form.appendChild(submitBook)
    }
});

addBook.addEventListener("click", function() {
    form.style.display = "flex"
});

addBook.addEventListener("click", function() {
    submitBtn.display = "block"
});

var submitBtn = document.getElementById("submit").style;

submitBook.addEventListener("click", function(){
    form.style.display = "none"
});

submitBook.addEventListener("click", function() {
    const book = document.createElement("div");
    book.setAttribute("class", 'addedBook')
    var li = document.createElement("li");
    document.querySelector("body").appendChild(book)

    const inputValues = [title.value, author.value, total.value, read.value];
    for (let i = 0; i < inputValues.length; i++) {
      const textNode = document.createTextNode(inputValues[i]);
      li.appendChild(textNode);
  
      if (i < inputValues.length - 1) {
        const br = document.createElement("br");
        li.appendChild(br);
      }
    }  
    book.appendChild(li)
});

// function Book(title, author, total, read) {
//         this.title = title;
//         this.author = author;
//         this.total = total;
//         this.read = read;
// }

// myLibrary.forEach(Book()) {

// }

// function showSubmit() {
//     var x = document.querySelector("submit");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

// addBook.addEventListener("click", showSubmit())

// document.querySelectorAll('input')[0].value;

function addBookToLibrary() {
  // do stuff here
}
