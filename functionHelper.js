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
        let password = 'admin';
        let inputUsername = inputData.username;
        let inputPassword = inputData.password;
        if(username === inputUsername && password === inputPassword){
            return true
        }else{
            return false
        }
    },

    getResults:()=>{
        const sqlQuery0 = `SELECT schoolCaptain, COUNT(*) votes FROM votes GROUP BY schoolCaptain HAVING votes > 0 ORDER BY votes desc`;
        const sqlQuery1 = `SELECT asstSchoolCaptain, COUNT(*) votes FROM votes GROUP BY asstSchoolCaptain HAVING votes > 0 ORDER BY votes desc`;
        const sqlQuery2 = `SELECT sportsCaptain, COUNT(*) votes FROM votes GROUP BY sportsCaptain HAVING votes > 0 ORDER BY votes desc`;
        return new Promise(async(resolve,reject)=>{
            var ls=[];
            db.query(sqlQuery0,(err0,captains)=>{
                db.query(sqlQuery1,(err1,asstcaptains)=>{
                    db.query(sqlQuery2,(err2,sportscaptains)=>{
                        ls = [captains,asstcaptains,sportscaptains]
                        resolve(ls)
                    })
                })
            })


            
        })
    }
}