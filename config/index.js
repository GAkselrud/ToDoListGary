var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + 'mongodb+srv://GaryA:Dynex127@cluster0-21sbs.mongodb.net/test?retryWrites=true&w=majority';
    }
    
}