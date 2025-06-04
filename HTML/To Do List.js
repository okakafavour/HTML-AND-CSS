const booklist = document.querySelector('#book-list ul');

booklist.addEventListener("click", (event) => {
    if (event.target.textContent === "Delete") {
        const li = event.target.parentElement;
        booklist.removeChild(li);
    }
});

const addBookForm = document.querySelector("#search-books");
addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let value = document.querySelector("#search-books input").value.trim();
    if (value !== "") {
        const liTag = document.createElement("li");
        const valueSpan = document.createElement("span");
        const deleteSpan = document.createElement("span");
        valueSpan.textContent = value;
        deleteSpan.textContent = "Delete";

        liTag.appendChild(valueSpan);
        liTag.appendChild(deleteSpan);
        booklist.appendChild(liTag);

        valueSpan.classList.add("name");
        deleteSpan.classList.add("delete");

        document.querySelector("#search-books input").value = "";
    }
});


const searchBar = document.querySelector("#search-books input");
searchBar.addEventListener("keyup", (event) => {
    const searchValue = event.target.value.toLowerCase();
    const books = booklist.getElementsByTagName("li");

    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent.toLowerCase();
        book.style.display = title.includes(searchValue) ? "block" : "none";
    });
});


const displayTaskForm = document.querySelector("#display-task");
displayTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const books = booklist.getElementsByTagName("li");
    Array.from(books).forEach((book) => {
        book.style.display = "block";
    });
});