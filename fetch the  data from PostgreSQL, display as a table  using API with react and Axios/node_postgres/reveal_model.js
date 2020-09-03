const Pool = require('pg').Pool

const pool = new Pool({
    
    user: "opensrp_admin",
    password: "admin",
    host: "45.79.125.174",
    port: 5432,
    database: "opensrp",
});

const getReveals = () => {
    return new Promise(function(resolve, reject) {
      pool.query('select plan_id,plan_name, plan_status from public.smc_plans', (error, results) => {
        if (error) {
          reject(error)
        }
      var obj=   resolve(results.rows);

         //console.log('http://localhost:3001/');
         console.log(results.rows);
         console.table(results.rows);
         console.log('http://localhost:3001/')
         
         

      })
    }) 
  }
  module.exports = {
    getReveals,
  }
  
  