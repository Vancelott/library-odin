let myLibrary = [];
const addBook = document.querySelector("button")
const submitBook = document.getElementById("submit")
const form = document.createElement("form")

function Book(title, author, total, read) {
        this.title = title;
        this.author = author;
        this.total = total;
        this.read = read;
}

// myLibrary.forEach(Book()) {

// }

addBook.addEventListener("click", function() {
    form.setAttribute('class', 'form')
        var title = document.createElement("input") 
        title.setAttribute("placeholder", "Book title")
            var author = document.createElement("input")
            author.setAttribute("placeholder", "Author")
                var total = document.createElement("input")
                total.setAttribute("placeholder", "Total pages")
                    var read = document.createElement("input")
                    read.setAttribute("placeholder", "Pages read")
                        form.appendChild(title)
                        form.appendChild(author)
                        form.appendChild(total)
                        form.appendChild(read);
    document.querySelector("body").appendChild(form);
    form.appendChild(submitBook)
});

var submitBtn = document.getElementById("submit").style;

addBook.addEventListener("click", function() {
    submitBtn.display = "block"
});


submitBook.addEventListener("click", function() {

});

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
