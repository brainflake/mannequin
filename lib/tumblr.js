var Tumblr = require('tumblr').Tumblr
  , _ = require('underscore')

var consumerKey = 'TPnrmrRVjFQIPy7q9hqsVxVAAc1WeZynaJhSg45ZpRRzyElRP9'
  , site = 'testbrand.tumblr.com'

module.exports = function() {
  var exports = {}

  exports.getTops = function getTops(callback) {
    var blog = new Tumblr(site, consumerKey)

    blog.photo({tag: 'top'}, function(err, resp) {
      if (err) {
        console.log(err)
        return callback(err)
      }

      var tops = []
      _.each(resp.posts, function(post) {
        tops.push(post.photos[0].original_size.url)
      })


      callback(null, tops)
    })
  }

  exports.getBottoms = function getTops(callback) {
    var blog = new Tumblr(site, consumerKey)

    blog.photo({tag: 'bottom'}, function(err, resp) {
      if (err) {
        console.log(err)
        return callback(err)
      }

      var bottoms = []
      _.each(resp.posts, function(post) {
        bottoms.push(post.photos[0].original_size.url)
      })
 
      console.log(require('util').inspect(resp))

      callback(null, bottoms)
    })
  }

  exports.getShoes = function getTops(callback) {
    var blog = new Tumblr(site, consumerKey)

    blog.photo({tag: 'shoes'}, function(err, resp) {
      if (err) {
        console.log(err)
        return callback(err)
      }

      var shoes = []
      _.each(resp.posts, function(post) {
        shoes.push(post.photos[0].original_size.url)
      })

      console.log(require('util').inspect(resp))

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
