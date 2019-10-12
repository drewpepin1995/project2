const axios = require('axios');

var apiKeyMLB = "cypgbk8bxm3d4aftfbcwft62"
var apiKeyNFL = " 3xkfmxmw3er6npu9y977cw2e"
var apiKeyNBA = ""
var apiKeyNHL = "8f8h5rs39mx84ad6mm5ywe8y"

var queryURL = "https://api.sportradar.us/mlb/trial/v6.6/en/seasons/2019/REG/standings.json?api_key=cypgbk8bxm3d4aftfbcwft62"


axios.get(queryURL)

.then(response => {

    console.log(response.data.league.season.leagues[0].divisions[0])
    

});


