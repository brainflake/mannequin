
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.handlebars', { title: 'Mannequin' });
};


exports.splash = function(req, res){
  res.render('splash.handlebars', { title: 'Mannequin' });
};
