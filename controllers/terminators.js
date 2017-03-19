var fs = require('fs');

let terminators = [
  {name: 'T1000'},
  {name: 'buzz lightyear'},
  {name: 'magic mike'}
];

exports.index = function(req, res, next) {
  res.render('terminators/index', {
    data: terminators,
    partial: function(name){
      let path = 'views/partials/' + name + '.hbs';
      if (!fs.existsSync(path)) { return 'terminators/404'}
      return name;
    }
  });
};
