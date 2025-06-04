// //  const bookList = document.getElementsByClassName('title');
// //
// //  const isArray = Array.isArray(Array.from(bookList));
// //
// //  let arr = Array.from(bookList);
// //
// //  arr.forEach((element)=>{
// //
// //      console.log(element);
// //  })
// //
// // console.log(isArray);
//
// //
// // const bookList = document.getElementsByTagName('ul');
// // console.log(bookList);
//
// // const liTag = document.getElementsByTagName('li');
// // console.log(liTag);
//
//  const liTag = document.querySelectorAll("title");
//  console.log(Array.isArray(liTag))
//
// const isArray = Array.isArray(Array.from(liTag));
//  console.log(isArray)
//
// liTag.forEach((element)=>{
//     console.log(element);
// })

const booklist = document.querySelector('#book-list ul');
console.log(booklist);

booklist.addEventListener("click", (event) => {
    const deleteBtn = event.target.textContent;
    if (deleteBtn === "delete") {
        const li = event.target.parentElement;
        booklist.removeChild(li);
    }
})




const addBookForm = document.querySelector("#add-book");
addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let value = document.querySelector("#add-book input").value.trim();
    if(value != ""){
        const liTag = document.createElement("li");
        const valueSpan = document.createElement("span");
        const deleteSpan = document.createElement("span");
        valueSpan.textContent = value;
        deleteSpan.textContent = "delete";

        liTag.appendChild(valueSpan);
        liTag.appendChild(deleteSpan);
        booklist.appendChild(liTag);


        valueSpan.classList.add("name");
        deleteSpan.classList.add("delete");
    }
})

const searchBar = document.querySelector("#search-books input");
searchBar.addEventListener("keyup", (event) => {
    const searchValue = event.target.value.toLowerCase();
    const books = booklist.getElementsByTagName("li");

    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().includes(searchValue)){
            book.style.display = "block";
        } else{
            book.style.display = "none";
        }
    });

});