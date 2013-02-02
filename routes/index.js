
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.handlebars', { title: 'Mannequin' });
};
