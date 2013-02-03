var Tumblr = require('tumblr').Tumblr
  , _ = require('underscore')

var consumerKey = 'TPnrmrRVjFQIPy7q9hqsVxVAAc1WeZynaJhSg45ZpRRzyElRP9'
  , site = 'testbrand.tumblr.com'

module.exports = function() {
  var exports = {}

  exports.getTops = function getTops(callback) {
    var blog = new Tumblr(site, consumerKey)

    blog.photo({tag: 'top', limit: 10}, function(err, resp) {
      if (err) {
        console.log(err)
        return callback(err)
      }

      var tops = []
      _.each(resp.posts, function(post) {
        var buy_url = ""
        var match = post.caption.match(/href="(.*)"/)
        if (match) {
          buy_url = match[1]
        }

        console.log('adding caption ' + buy_url)
        console.log(post);
        tops.push({
          url: post.photos[0].original_size.url,
          buyLink: buy_url
        })
      })

      callback(null, tops)
    })
  }

  exports.getBottoms = function getTops(callback) {
    var blog = new Tumblr(site, consumerKey)

    blog.photo({tag: 'bottom', limit: 10}, function(err, resp) {
      if (err) {
        console.log(err)
        return callback(err)
      }

      var bottoms = []
      _.each(resp.posts, function(post) {
        var buy_url = ""
        var match = post.caption.match(/href="(.*)"/)
        if (match) {
          buy_url = match[1]
        }
        console.log('adding caption ' + buy_url)
        bottoms.push({
          url: post.photos[0].original_size.url,
          buyLink: buy_url
        })
      })
 
      callback(null, bottoms)
    })
  }

  exports.getShoes = function getTops(callback) {
    var blog = new Tumblr(site, consumerKey)

    blog.photo({tag: 'shoes', limit: 10}, function(err, resp) {
      if (err) {
        console.log(err)
        return callback(err)
      }

      console.log(resp.posts.length + ' shoes');

      var shoes = []
      _.each(resp.posts, function(post) {
        var buy_url = ""
        var match = post.caption.match(/href="(.*)"/)
        if (match) {
          buy_url = match[1]
        }
        console.log('adding caption ' + buy_url);
        shoes.push({
          url: post.photos[0].original_size.url,
          buyLink: buy_url
        })
      })

      callback(null, shoes)
    })
  }

  exports.test = function() {
    var blog = new Tumblr('fullmetalstarterjacket.tumblr.com', consumerKey)

    blog.photo({limit: 2}, function(err, resp) {
      if (err) {
        console.log(err)
        return
      }

      console.log(require('util').inspect(resp.posts))
    })
  }

  return exports
}
