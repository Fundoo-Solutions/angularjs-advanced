app.service('BookService', ['$http', '$q', BookService]);
function BookService($http, $q){
  var self = this;
  var cachedBooks;
  self.getBooks = function(){
    if (cachedBooks) {
      return $q.when(cachedBooks);
    }
    return $http.get('/books').then(function(response){
      cachedBooks = response.data.books;
      return cachedBooks;
    })
  }
}
