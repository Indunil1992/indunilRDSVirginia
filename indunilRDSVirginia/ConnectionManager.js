module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["instance"] = {
        host: process.env.EndPoint_rdsInstance,
        port: process.env.Port_rdsInstance,
        user: process.env.User_rdsInstance,
        password: process.env.Password_rdsInstance,
        database: "indunil"
    };
    this.dbConnections["indunil"] = {
        host: process.env.EndPoint_rdsIndunil,
        port: process.env.Port_rdsIndunil,
        user: process.env.User_rdsIndunil,
        password: process.env.Password_rdsIndunil,
        database: "indunil"
    };
    this.dbConnections["RDSinstance"] = {
        host: process.env.EndPoint_rdsRDSinstance,
        port: process.env.Port_rdsRDSinstance,
        user: process.env.User_rdsRDSinstance,
        password: process.env.Password_rdsRDSinstance,
        database: "indunil"
    };
};