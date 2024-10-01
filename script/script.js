function render() {
  let book = document.getElementById("books");
  book.innerHTML = '';
  for (let i = 0; i < books.length; i++) {
    const getBook = books[i];
    let commentsHTML = `<table class="commentsTable">
        <tbody>`;
    for (let j = 0; j < getBook.comments.length; j++) {
      commentsHTML += `<tr>
          <th class="commentsName">${getBook.comments[j].name}:</th>
          <td class="commentsComment">${getBook.comments[j].comment}</td>
        </tr>`;
    }
    commentsHTML += `</tbody>
      </table>`;
    book.innerHTML += getShowBooksHtml(getBook,i,commentsHTML);
  }
}


function addComment(index, username) {
  const input = document.getElementById(`input${index}`);
  if (input.value.trim()) {
    books[index].comments.push({ name: username, comment: input.value });
    saveBooks();
    render();
    input.value = '';
  }
}


function toggleLike(index) {
  const book = books[index];
  book.likes += book.liked ? -1 : 1;
  book.liked = !book.liked;
  saveBooks();
  render();
}


function saveBooks() {
  localStorage.setItem('books', JSON.stringify(books));
}


function loadBooks() {
  const savedBooks = localStorage.getItem('books');
  if (savedBooks) {
    books = JSON.parse(savedBooks);
  }
}


function initialize() {
  loadBooks();
  render();
}
