var db = require('./dbConnection');


module.exports = {
    addOneVoter:(votes)=>{
        let schoolCaptain = votes.schoolCapt;
        let asstSchoolCaptain = votes.asstSchoolCapt;
        let sportsCaptain = votes.sportsCapt;
        const sqlQuery = `INSERT INTO VOTES(schoolCaptain,asstSchoolCaptain,sportsCaptain) VALUES('${schoolCaptain}',"${asstSchoolCaptain}",'${sportsCaptain}')`;
        return new Promise((resolve,reject)=>{
            db.query(sqlQuery,(err,results)=>{
                if(!err){
                    resolve(results)
                }else{
                    reject(err)
                }
            })
        })
    },
    adminLogin:(inputData)=>{
        let username = 'admin';
        let password = '';
        let inputUsername = inputData.username;
        let inputPassword = inputData.password;
        if(username === inputUsername && password === inputPassword){
            return true
        }else{
            return false
        }
    }
}