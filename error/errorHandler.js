const documentation = 'https://www.npmjs.com/package/json-server';
module.exports = function handleError(req, res, custom=false, message='', data = []){
    if(!custom){
      return res.status(500).jsonp({
        error: "Opps Something went wrong",
        documentation,
        data
      }
      )
    }else{
      return res.status(500).jsonp({
      error: message,
      documentation,
      data
    })
    }
  }
  
