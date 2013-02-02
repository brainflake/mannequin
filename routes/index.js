
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.handlebars', { title: 'Mannequin' });
};


exports.splash = function(req, res){
  res.render('splash.handlebars', { title: 'Mannequin' });
};



exports.buy = function(req, res){
  res.render('buy.handlebars', { title: 'Mannequin' });
};
