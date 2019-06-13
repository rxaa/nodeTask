"use strict";

const sh = require('shelljs');

const dfv = require("dfv");


//每日凌晨3点定时任务
const task = dfv.dfvTime.dailyEvent(3, 0, e => {
    let date = new Date();
    if (date.getDate() == 1) {
        sh.cd("/usr/local/blog/");
    }


});


task.start();