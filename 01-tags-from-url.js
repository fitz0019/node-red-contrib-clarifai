var Clarifai = require('clarifai');

var _internals = {};

_internals.getTags = function (payload, creds, cb) {

    console.log(creds);

    var client = new Clarifai({
        id: creds.client_id,
        secret: creds.client_secret
    });

    console.log(client);

    client.tagFromUrls('image', payload.url, function(error, results) {
        cb(error, results);
    });
};

module.exports = function(RED) {
    "use strict";

    function Node(config) {

        RED.nodes.createNode(this, config);

        var node = this;

        this.on('input', function (msg) {

            var creds = RED.nodes.getNode(config.creds);

            var payload = typeof msg.payload === 'object' ? msg.payload : {};

            var attrs = ['url'];
            for (var attr of attrs) {
               if (config[attr]) {
                   payload[attr] = config[attr];
               }
            }

            node.status({fill:"green",shape:"dot",text:"Analysing image..."});

            _internals.getTags(payload, creds, function(error, result){

               msg.payload = result;

               if (error) {
                   node.error(error);
               }

               node.status({});
               node.send(msg);

           });

        });

    }

    RED.nodes.registerType("tags-from-url", Node);

};
