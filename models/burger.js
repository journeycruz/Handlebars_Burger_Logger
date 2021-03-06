var orm = require("../config/orm");

//code that will call the ORM functions using burger specific input for the ORM
var burgers = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(burger, cb) {
        orm.insertOne(burger, function(res) {
            cb(res);
        })
    },
    updateOne: function(id, cb) {
        orm.updateOne([id], function(res) {
            cb(res);
        });
    }
};


module.exports = burgers;