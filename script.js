//your JS code here. If required.
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click',function buttonClick(){
	
	let bookTitle = document.getElementById("title").value.trim();
	let bookAuthor = document.getElementById("author").value.trim();
	let bookIsbn = document.getElementById("isbn").value.trim();	
	
	const tableBody = document.getElementById("book-list");
	const bookRow = document.createElement("tr");
	
	const newbookTitle = document.createElement("td");
	newbookTitle.textContent = bookTitle;
	bookRow.appendChild(newbookTitle)
	
	const newBookAuthor = document.createElement("td");
	newBookAuthor.textContent = bookAuthor;
	bookRow.appendChild(newBookAuthor)
	
	const newBookIsbn = document.createElement("td");
	newBookIsbn.textContent = bookIsbn;
	bookRow.appendChild(newBookIsbn)
	
	const deleteTd = document.createElement("td")
	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("delete")
	deleteBtn.textContent = "X";
	deleteBtn.style.color = "red";
	
	//delete functionality
	deleteBtn.addEventListener('click', ()=>{
		bookRow.remove();
	})
	deleteTd.appendChild(deleteBtn);
	bookRow.appendChild(deleteTd)
	
	tableBody.appendChild(bookRow);
});
