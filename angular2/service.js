app.factory('BookService', ['$http', '$q', function($http, $q){
  var cachedBooks;
  return {
    getBooks: function(){
      if (cachedBooks) {
        return $q.when(cachedBooks);
      }
      return $http.get('/books').then(function(response){
        cachedBooks = response.data.books;
        return cachedBooks;
      })
    }
  }
}]);
