let terminators = [
  {name: 'T1000'},
  {name: 'buzz lightyear'},
  {name: 'magic mike'}
];

exports.index = function(req, res, next) {
  res.render('terminators/index', {
    data: terminators,
    partial: function(){
      return 'terminators/dynamic'
    }
  });
};
