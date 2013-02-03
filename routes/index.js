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

  var buy = false
  var buy_link = ""

  if (url == 'http://24.media.tumblr.com/78c49cba82cdcba571c54f82ef5eb69b/tumblr_mhmiujnkqM1s53qw2o1_1280.jpg') {
    buy = true
    buy_link = "http://www.hotsquash.com/products/womenstop?mc=1&sc=1"
  }

  res.render('buy.handlebars', { title: 'Mannequin', url: url, buy: buy, buy_link: buy_link });
};
