import cron from "node-cron";

cron.schedule("*/10 * * * * * " , () => {
    console.log("Running a TAsk every five second", new Date().toLocaleTimeString()); 
})