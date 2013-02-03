var tumblr = require('../lib/tumblr')()

/*
 * GET home page.
 */

exports.index = function(req, res){
  tumblr.getTops(function(err, tops) {
    if (err) {
      console.log(err)
    }
  
    tumblr.getBottoms(function(err, bottoms) {
      if (err) {
        console.log(err)
      }

      tumblr.getShoes(function(err, shoes) {
        if (err) {
          console.log(err)
        }

        res.render('index.handlebars', {
          title: 'Mannequin',
          tops: tops,
          bottoms: bottoms,
          shoes: shoes
        });
      })
    })
  })
};


exports.splash = function(req, res){
  res.render('splash.handlebars', { title: 'Mannequin' });
};



exports.buy = function(req, res){
  var url = req.param('url');

  res.render('buy.handlebars', { title: 'Mannequin', url: url });
};
