/**
 * Created by Administrator on 2016/07/26.
 */
var gcloud = require('gcloud');
var logging = gcloud.logging({
    projectId: 'nodejstest-1366'
});

function writeLogs() {
    var log = logging.log('syslog');

    var resource = {
        type: 'gae_app',
        // This example targets a "App Engine" resource in the default module with
        // a version_id of "express"
        labels: {
            module_id: 'gcloudtest',
            version_id: 'express-zoe'
        }
    };

    // Create a log entry attached to the specified resource
    var entry = log.entry(resource, {
        foo: 'bar'
    });


    log.error(entry, function (err, apiResponse) {
        if (!err) {
            console.log("log success");
        } else {
            console.log(err);
        }
    });
}

module.exports = writeLogs;
