module.exports =  reqFilter = (req, resp, next) => {
    if (!req.query.age) {
      resp.send("Please Provide Age");
    }
    next();
  };