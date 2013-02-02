var Tumblr = require('tumblr').Tumblr

var consumerKey = 'TPnrmrRVjFQIPy7q9hqsVxVAAc1WeZynaJhSg45ZpRRzyElRP9'
  , site = '.tumblr.com'

module.exports = function() {
  var exports = {}

  exports.getTops = function getTops(callback) {
    var blog = new Tumblr(url, consumerKey)

    blog.photo({tag: 'top'}, function(err, resp) {
      if (err) {
        console.log(err)
        return callback(err)
      }

      callback(resp.posts)
    })
  }

  exports.getBottoms = function getTops(callback) {
    var blog = new Tumblr(url, consumerKey)

    blog.photo({tag: 'bottom'}, function(err, resp) {
      if (err) {
        console.log(err)
        return callback(err)
      }

      callback(resp.posts)
    })
  }

  exports.getShoes = function getTops(callback) {
    var blog = new Tumblr(url, consumerKey)

    blog.photo({tag: 'shoes'}, function(err, resp) {
      if (err) {
        console.log(err)
        return callback(err)
      }

      callback(resp.posts)
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
