app.service('BookService', ['$http', '$q', BookService]);
class BookService {
  $http, $q, cachedBooks;
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q
  }
  getBooks() {
    if (this.cachedBooks) {
      return this.$q.when(this.cachedBooks);
    }
    return this.$http.get('/books').then(function(response){
      this.cachedBooks = response.data.books;
      return this.cachedBooks;
    })
  }
}
