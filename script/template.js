function getShowBooksHtml(getBook,i,commentsHTML){
    return`<div class="books">
        <div class="booksHeader">
          <h1>${getBook.name}</h1>
          <img src="./img/book.png" alt="book">
        </div>
        <div class="booksSection">
          <div class="price">${getBook.price}€</div>
          <div>
            ${getBook.likes}
            <img class="heart-icon ${getBook.liked ? 'liked' : ''}" src="${getBook.liked ? 'img/heart.red.png' : 'img/heart.png'}" alt="Like" onclick="toggleLike(${i})">
          </div>
        </div>
        <table class="bookDetailsTable">
          <tbody>
            <tr>
              <th>Author:</th>
              <td>${getBook.author}</td>
            </tr>
            <tr>
              <th>Published Year:</th>
              <td>${getBook.publishedYear}</td>
            </tr>
            <tr>
              <th>Genre:</th>
              <td>${getBook.genre}</td>
            </tr>
          </tbody>
        </table>
        <h2>Kommentare</h2>
        <div class="commentsHTML">${commentsHTML}</div>
        <div class="add-comment">
          <input id="input${i}" class="comment-input" placeholder="Kommentar hinzufügen...">
          <img src="./img/share.png" class="comment-button" alt="Post Comment" onclick="addComment(${i}, 'akram_Jassim')">
        </div>
      </div>`
}