const weather = require("weather-js");

exports.weather = async (req, res) => {
    if(req.query){
        await weather.find({ search: `${req.query.city}, ${req.query.country}`, degreeType: 'F' }, function (err, result) {
            if (err) console.log(err);
            res.send( JSON.stringify(result, null, 2))
        });
    }
}