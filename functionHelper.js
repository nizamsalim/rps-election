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
    }
}