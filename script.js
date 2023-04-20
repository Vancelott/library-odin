const addBtn = document.querySelector("button")
const submitBook = document.getElementById("submit")
const form = document.createElement("form")
const title = document.createElement("input");
const author = document.createElement("input");
const total = document.createElement("input");
const read = document.createElement("input");

const formBox = document.createElement("div");
    formBox.setAttribute("class", "form-box");

addBtn.addEventListener("click", function() {
    if(form.length < 4) {
    form.setAttribute('class', 'form')
        title.setAttribute("placeholder", "Book title")
        title.setAttribute("type", "text");
            author.setAttribute("placeholder", "Author")
            author.setAttribute("type", "text");
                total.setAttribute("placeholder", "Total pages")
                total.setAttribute("type", "number");
                total.setAttribute("class", "number");
                    read.setAttribute("placeholder", "Pages read")
                    read.setAttribute("type", "number");
                    read.setAttribute("class", "number");
                        form.appendChild(title)
                        form.appendChild(author)
                        form.appendChild(total)
                        form.appendChild(read);
    document.querySelector("body").appendChild(form);
    document.querySelector("body").appendChild(formBox);
    form.appendChild(submitBook)
    formBox.appendChild(form)
    }
});

addBtn.addEventListener("click", function() {
    form.classList.toggle("hidden");
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

function createButton(text, className, clickListener){
    const button = document.createElement("button");
    button.textContent = text;
    button.classList = className;
    button.addEventListener("click", clickListener);
    return button;
}

function addBook() {
    const book = document.createElement("div");
        book.setAttribute("id", "bookStyle");
        book.setAttribute("class", "addedBook" + j);
        const readBtn = createButton("Read", "read", () => {
            if(readBtn.innerHTML=="Read"){
                readBtn.innerHTML="Not read";}
            else{
                readBtn.innerHTML="Read";}
        });
        const deleteBtn = createButton("X", "delete", () => {
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
                        const propertiesText = document.createTextNode(properties[i]);
                        const textNode = document.createTextNode(inputValues[i]);
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
                library.appendChild(book);
    }
    else {
        alert("Please fill in the book details")
    }
};

submitBook.addEventListener("click", addBook);

// Clear input fields

submitBook.addEventListener("click", function() {
    title.value = "";
    author.value = "";
    total.value= "";
    read.value = "";
});