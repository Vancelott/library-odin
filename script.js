const addBtn = document.querySelector("button")
const submitBook = document.getElementById("submit")
const form = document.createElement("form")
const title = document.createElement("input");
const author = document.createElement("input");
const total = document.createElement("input");
const read = document.createElement("input");

addBtn.addEventListener("click", function() {
    if(form.length < 4) {
    form.setAttribute('class', 'form')
        title.setAttribute("placeholder", "Book title")
        title.setAttribute("type", "text");
            author.setAttribute("placeholder", "Author")
            author.setAttribute("type", "text");
                total.setAttribute("placeholder", "Total pages")
                total.setAttribute("type", "number");
                    read.setAttribute("placeholder", "Pages read")
                    read.setAttribute("type", "number");
                        form.appendChild(title)
                        form.appendChild(author)
                        form.appendChild(total)
                        form.appendChild(read);
    document.querySelector("body").appendChild(form);
    form.appendChild(submitBook)
    }
});

addBtn.addEventListener("click", function() {
    form.style.display = "flex"
});

addBtn.addEventListener("click", function() {
    submitBtn.display = "block"
});

const submitBtn = document.getElementById("submit").style;

submitBook.addEventListener("click", function(){
    form.style.display = "none"
});

// Adding a new book using the submit btn, a delete btn and a read/not read btn

let j = 0;
const library = document.createElement("div");
    library.setAttribute("id", "library");

function addBook() {
    const book = document.createElement("div");
        book.setAttribute("id", "bookStyle");
        book.setAttribute("class", "addedBook" + j);
        const readBtn = document.createElement("button");
            readBtn.classList = "read"
            readBtn.textContent = "Read";
            readBtn.addEventListener("click", () => {
            if(readBtn.innerHTML=="Read"){
                readBtn.innerHTML="Not read";}
            else{
                readBtn.innerHTML="Read";}
        });
        const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "X";
            deleteBtn.classList = "delete"
            deleteBtn.addEventListener("click", () => {
            book.remove();
        });
            book.appendChild(deleteBtn);
            const li = document.createElement("li");
            li.style.listStyle = "none";
            book.appendChild(li);
            const properties = ["Title: ", "Author: ", "Total pages: ", "Pages read: "];
            const inputValues = [title.value, author.value, total.value, read.value];
                if (inputValues.some(val => val.length > 0)) {
                    for (let i = 0; i < inputValues.length; i++) {
                        const textNode = document.createTextNode(inputValues[i]);
                        const propertiesText = document.createTextNode(properties[i]);
                        li.appendChild(propertiesText)
                        li.appendChild(textNode);
                            if (i < inputValues.length - 1) {
                            const br = document.createElement("br");
                            li.appendChild(br);
                    }
                }
                j++;
                document.querySelector("body").appendChild(library);
                document.querySelector("body").appendChild(book);
                book.appendChild(readBtn);
    }
    library.appendChild(book);
};

submitBook.addEventListener("click", addBook);

// Clear input fields

submitBook.addEventListener("click", function() {
    title.value = "";
    author.value = "";
    total.value= "";
    read.value = "";
});

// addBook.prototype = function(){
//     Object.create(addBook.prototype)
// }

// addBook.prototype.cloneBook = function() {
//     if("title.value, author.value, total.value, read.value".length > 0){    
//         const inputValues = [title.value, author.value, total.value, read.value];
//             for (let i = 0; i < inputValues.length; i++) {
//                 const textNode = document.createTextNode(inputValues[i]);
//                 li.appendChild(textNode);
//                     if (i < inputValues.length - 1) {
//                         const br = document.createElement("br");
//                         li.appendChild(br);
//                     }
//             }
//         }
// };

// submitBook.addEventListener("click", cloneBook);

// function deleteDiv () {
//     const book1 = document.getElementById('li');
//     li.parentElement.remove()
// }

// deleteBtn.addEventListener("click", function() {
//     const book1 = document.getElementById('li');
//     li.parentElement.remove()
// });

// function createListElement() {
// 	deleteBtn.onclick = removeParent;
// }

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

// function addBookToLibrary() {
//   do stuff here
// }
