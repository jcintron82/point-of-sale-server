const items = require("../DBschemas/items");
let searchValue = '';

module.exports = {
    Post: (req, res) => {
      value = req.body[0];
      res.send({ message: value });
      searchValue = value;
      console.log(value)
       // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.status(200).json({ success: 'GETTING SOMEWHERE'});
    // Pass to next layer of middleware
    },
    getIndex: (req, res) => {
    //   checkIfLoggedIn()
      const dbQuery = items.find({ Item: searchValue }, (err, cursor) => {
        // console.log(cursor);
        res.setHeader('Access-Control-Allow-Origin', '*');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        res.json({ message: cursor }); // Website you wish to allow to connect
        cursor.splice(0);
      });
      
    },
  };