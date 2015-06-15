//DataColls['books'].coll.initEasySearch(['title', 'author'], {
    //'limit' : 20,
    //'use' : 'mongo-db'
//});

_.each(DataColls, function(value, key, allData) {
  EasySearch.createSearchIndex(key, {
    'field' : DataColls[key].displayFields,
    'collection' : DataColls[key].coll,
    'limit' : 20,
    'use': "mongo-db",
    'props' : {
      'onlyShowDiscounts' : true // demo purpose configuration, can be used in query  
    },
    'queryk' : function (searchString, opts) {
      console.log(searchString);
      console.log(this.use);
      // Default query that is used for searching
      var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

      // this contains all the configuration specified above
      if (this.props.onlyShowDiscounts) {
        query.discount = true;
      }

      console.log(query);
      console.log(query['$or'][0]);
      console.log(query['$or'][0].title);

      return query;
    }
  });
});

