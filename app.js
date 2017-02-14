var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var querystring = require('querystring');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, 'dist')));

app.all('/api/*', function(req, res, next) {
    var path = req.path.replace(new RegExp('api/','g'), '')
    var search = '';
    if(req.query){
        search = '?' + querystring.stringify(req.query);
    }
    var url = 'http://10.1.31.35:5200'+ path + search;
    console.log(url);
    req.pipe(request(url)).pipe(res);
});
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.send({
            error: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.send({
        error: 'error'
    });
});


app.listen(5000,function () {
        console.log('app up on 5000');
}); 

module.exports = app;
