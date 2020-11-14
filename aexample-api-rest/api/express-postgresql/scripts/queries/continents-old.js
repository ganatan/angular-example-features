const db = require('../connection');

const config = require('../../config.json')[process.env.NODE_ENV || 'dev'];
const url = config.url;
const formatting = config.formatting;

function getItems(req, res, next) {
  let sql =
    'SELECT' +
    ' id' +
    ',name' +
    ',wikipedia_link as "wikipediaLink"' +
    ',to_char(release_date, \'' + formatting + '\') as "releaseDate"' +
    ' FROM movie';
  db.any(sql)
    .then(data => {
      let link = "movies";
      var dataTmp = [];
      data.map((row, index, data) => {
        dataTmp.push(
          {
            "id": data[index].id,
            "name": data[index].name,
            "releaseDate": data[index].releaseDate,
            "wikipediaLink": data[index].wikipediaLink,
            "links":
              [{
                "rel": "self",
                "href": url + link + '/' + data[index].id
              }]
          });
      })
      res.status(200)
        .json(dataTmp);
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItem(req, res, next, tvshow) {
  var id = parseInt(req.params.id);
  let sql =
    'SELECT' +
    ' id' +
    ',name' +
    ',to_char(release_date, \'' + formatting + '\') as "releaseDate"' +
    ',wikipedia_link as "wikipediaLink"' +
    ' FROM movie t1 WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (data) {
      res.status(200)
        .json({
          "id": data.id,
          "name": data.name,
          "releaseDate": data.releaseDate,
          "wikipediaLink": data.wikipediaLink,
        });
    })
    .catch(function (err) {
      res.status(200)
        .json({
          "id": null,
          "name": null,
          "releaseDate": null,
        });
    });
}

function getItemActors(req, res, next, tvshow) {
  var id = parseInt(req.params.id);
  let sql =
    'SELECT' +
    ' t2.id as movie_id' +
    ',t2.name as movie_name' +
    ',t2.release_date as movie_release_date' +
    ',t3.name as person_name' +
    ',t2.wikipedia_link as movie_wikipedia_link' +
    ',t3.wikipedia_link as person_wikipedia_link' +
    ' FROM movie_have_person t1' +
    ' INNER JOIN movie t2 ON t2.id=t1.movie_id' +
    ' INNER JOIN person t3 ON t3.id=t1.person_id' +
    ' WHERE (t2.id = $1)';
  db.any(sql, id)
    .then(data => {
      let link = "movies";
      var dataTmp = [];
      data.map((row, index, data) => {
        dataTmp.push(
          {
            "id": data[index].movie_id,
            "personName": data[index].person_name,
          });
      })
      res.status(200)
        .json(dataTmp);
    })
    .catch(function (err) {
      return next(err);
    });

}

module.exports = {
  getItems: getItems,
  getItem: getItem,
  getItemActors: getItemActors,
};

/*var fs = require('fs');

const config = require('../../config.json')[process.env.NODE_ENV || 'dev'];
const url = config.url;

const db = require('../connection');*/


/*  db.any('SELECT * FROM movie ORDER BY name ASC')
    .then(function (movies) {
      res.status(200)
        .json(movies);
    })
    .catch(function (err) {
      return next(err);
    });*/


/*function getItemsCount(req, res, next, tvshow) {
  let q = req.query['q'];
  if (q != undefined) {
    q = q.toUpperCase();
  }
  let sql =
    'SELECT' +
    ' count(id) as "count"' +
    ' FROM movie' +
    ' WHERE (id >= 1000)';
  if (tvshow) {
    sql = sql + ' AND (show=true AND movie=false)';
  } else {
    sql = sql + ' AND (show=false AND movie=true)';
  }
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  db.one(sql)
    .then(function (data) {
      res.status(200)
        .json({
          "count": data.count
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItems(req, res, next, tvshow) {
  let formatting = 'MM/DD/YYYY';
  let offset_req = req.query['offset'];
  let limit_req = req.query['limit'];
  let limit = 10;
  let offset = 0;
  if ((limit_req == undefined) || (offset_req == undefined)) {
    limit = 10;
    offset = 0;
  }
  let q = req.query['q'];
  if (q != undefined) {
    q = q.toUpperCase();
  }
  let sql =
    'SELECT' +
    ' id' +
    ',name' +
    ',to_char(release_date, \'' + formatting + '\') as "releaseDate"' +
    ',wikipedia_link as "wikipediaLink"' +
    ',file_name as "fileName"' +
    ' FROM movie WHERE (id > 111)';
  if (tvshow) {
    sql = sql + ' AND (show=true AND movie=false)';
  } else {
    sql = sql + ' AND (show=false AND movie=true)';
  }
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  sql = sql +
    ' ORDER BY name ASC';
  if ((limit_req != undefined) && (offset_req != undefined)) {
    sql = sql + ' LIMIT ' + limit_req + ' OFFSET ' + offset_req;
  }
  db.any(sql)
    .then(data => {
      let link = "movies";
      var dataTmp = [];
      data.map((row, index, data) => {
        var imagepath = null;
        imagepath = url + link + '/img/' + data[index].fileName;
        dataTmp.push(
          {
            "id": data[index].id,
            "name": data[index].name,
            "releaseDate": data[index].releaseDate,
            "wikipediaLink": data[index].wikipediaLink,
            "img": imagepath,
            "links":
              [{
                "rel": "self",
                "href": url + link + '/' + data[index].id
              }]
          });
      })
      res.status(200)
        .json(dataTmp);
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItem(req, res, next, tvshow) {
  let formatting = 'MM/DD/YYYY';
  var id = parseInt(req.params.id);
  let sql =
    'SELECT' +
    ' id' +
    ',name' +
    ',show' +
    ',movie' +
    ',to_char(release_date, \'' + formatting + '\') as "releaseDate"' +
    ',wikipedia_link as "wikipediaLink"' +
    ',file_name as "fileName"' +
    ' FROM movie t1 WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (data) {
      let link = "movies";
      let imagepath = url + link + '/img/' + data.fileName;
      res.status(200)
        .json({
          "id": data.id,
          "name": data.name,
          "show": data.show,
          "movie": data.movie,
          "releaseDate": data.releaseDate,
          "wikipediaLink": data.wikipediaLink,
          "fileName": data.fileName,
          "img": imagepath,
        });
    })
    .catch(function (err) {
      res.status(200)
        .json({
          "id": null,
          "name": null,
          "releaseDate": null,
          "fileName": null,
          "img": null,
        });
    });
}

function createItem(req, res, next, tvshow) {
  let item = {
    name: req.body.name,
    wikipediaLink: req.body.wikipediaLink,
    fileName: req.body.fileName,
    show: tvshow,
    movie: !tvshow,
  }
  let sql =
    'INSERT INTO movie' +
    ' (' +
    ' name' +
    ',wikipedia_link' +
    ',file_name' +
    ',show' +
    ',movie' +
    ' ) VALUES' +
    ' (' +
    ' ${name}' +
    ',${wikipediaLink}' +
    ',${fileName}' +
    ',${show}' +
    ',${movie}' +
    ' ) RETURNING' +
    ' id' +
    ',name' +
    ',release_date as"releaseDate"' +
    ',wikipedia_link as"wikipediaLink"' +
    ',file_name as"fileName"' +
    ',show' +
    ',movie';
  db.one(sql, item)
    .then(function (data) {
      res.status(200)
        .json({
          "id": data.id,
          "name": data.name,
          "releaseDate": data.releaseDate,
          "fileName": data.fileName,
          "img": null,
          "show": data.show,
          "movie": data.movie,
          "wikipediaLink": data.wikipediaLink,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateItem(req, res, next, tvshow) {
  let item = {
    id: req.body.id,
    name: req.body.name,
    show: req.body.show,
    movie: req.body.movie,
    wikipediaLink: req.body.wikipediaLink,
    fileName: req.body.fileName,
  }
  let sql =
    'UPDATE movie SET' +
    ' name=${name}' +
    ',show=${show}' +
    ',movie=${movie}' +
    ',wikipedia_link=${wikipediaLink}' +
    ',file_name=${fileName}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',name' +
    ',release_date as"releaseDate"' +
    ',wikipedia_link as"wikipediaLink"' +
    ',file_name as"fileName"' +
    ',show' +
    ',movie';
  db.one(sql, item).then(function (data) {
    res.status(200)
      .json({
        "id": data.id,
        "name": data.name,
        "releaseDate": data.releaseDate,
        "fileName": data.fileName,
        "img": null,
        "show": data.show,
        "movie": data.movie,
        "wikipediaLink": data.wikipediaLink,
      });
  })
    .catch(function (err) {
      return next(err);
    });
}

function deleteItem(req, res, next, tvshow) {
  var id = parseInt(req.params.id);
  db.result('DELETE FROM movie WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} continent`
        });
    })
    .catch(function (err) {
      return next(err);
    });
} */

/* module.exports = {
    getItemsCount: getItemsCount,
  getItems: getItems,
    getItem: getItem,
    createItem: createItem,
    updateItem: updateItem,
    deleteItem: deleteItem,
}; */


/*router.get('/', function (req, res, next) {
    getItems(req, res, next);
  });

  router.get('/:id', function (req, res, next) {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie)
      res.status(404).send('The movie with the given ID ' + req.params.id + ' was not found');
    res.send(movie);
  });

  router.post('/', function (req, res) {
    console.log('post:req.body:' + JSON.stringify(req.body));
    if (!req.body.name || req.body.name.length < 2) {
      res.status(400)
        .send('Movie name is required and should be 2 minimum characters');
      return;
    }
    const movie = {
      id: movies.length + 1,
      name: req.body.name
    };
    res.status(201)
      .send(movie);
  });

  router.put('/:id', function (req, res) {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie)
      res.status(404).send('The movie with the given ID ' + req.params.id + ' was not found');
    if (!req.body.name || req.body.name.length < 2) {
      res.status(400)
        .send('Movie name is required and should be 2 minimum characters');
      return;
    }
    movie.name = req.body.name;
    res.send(movie);
  });

  router.delete('/:id', function (req, res) {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie)
      res.status(404).send('The movie with the given ID ' + req.params.id + ' was not found');
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    res.send(movie);
  });

  function getItems(req, res, next) {
    db.any('SELECT * FROM movie ORDER BY name ASC')
      .then(function (movies) {
        res.status(200)
          .json(movies);
      })
      .catch(function (err) {
        return next(err);
      });
  }*/
