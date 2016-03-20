module.exports = function(RED) {
    function RemoteServerNode(n) {
        RED.nodes.createNode(this,n);
        this.client_id = n.client_id;
        this.client_secret = n.client_secret;
    }
    RED.nodes.registerType("clarifai-client", RemoteServerNode);
};
