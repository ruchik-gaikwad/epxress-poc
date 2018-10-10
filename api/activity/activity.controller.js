const activityDao =  require('../../dao/activity/activity.dao');

function hello(req, res) {
    res.status('200').send({
        data: activityDao
    })
}

module.exports = {
    hello
}