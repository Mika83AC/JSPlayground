var dbObjProto = {
   id: 0,
   parentId: 0,
   insertUser: '',
   updateUser: ''
}
var DBObjFactory = function DBObjFactory(options) {
   return Object.assign({}, dbObjProto, options);
}

var articleProto = {
   articleNo: '',
   description: ''
}
var ArticleFactory = function ArticleFactory(options) {
   return Object.assign({}, dbObjProto, articleProto, options);
}

var dbObjProto = DBObjFactory({id: 2});
var article = ArticleFactory({id: 8, description: 'Plane'});

JSON.stringify(dbObjProto);
JSON.stringify(article);
