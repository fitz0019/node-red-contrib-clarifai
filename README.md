# NodeRED nodes to wrap clarifai API

[![RedConnect Approved](https://img.shields.io/badge/RedConnect-Approved-brightgreen.svg?style=flat)](https://www.redconnect.io/addons) [![Gitter](https://img.shields.io/gitter/room/badges/shields.svg)](https://gitter.im/redconnect-io/redconnect)

A set of nodes that wrap the [clarifai](http://www.clarifai.com/) API.

## About Clarifai

Clarifai’s powerful image and video recognition technology is built on the most advanced machine learning systems and made easily accessible by a clean API, empowering developers all over the world to build a new generation of intelligent applications.

## Installation

`npm install node-red-contrib-clarifai`

## Implemented Nodes

* Tags from url - Analyses an image and returns tags that describe it

## Test

After installing import the nodes to test them out. You will need to [create a free account on Clarifai](https://developer.clarifai.com/signup/) so you can get your client ID and client secret.

```javascript
[{"id":"PjL-6GinO728RxMdbjgHiYD2vK9OXh6y4J7dG9Ou","type":"clarifai-client","z":"a9cbc296.3c572","name":"Clarifai","client_id":"PjL-6GinO728RxMdbjgHiYD2vK9OXh6y4J7dG9Ou","client_secret":"A9x4uThPduturr817NmXxDtSL05xcz0Tlplf7wOR"},{"id":"f955e259.52699","type":"tags-from-url","z":"a9cbc296.3c572","creds":"PjL-6GinO728RxMdbjgHiYD2vK9OXh6y4J7dG9Ou","name":"","url":"https://drscdn.500px.org/photo/114131025/q%3D80_m%3D1500/c63597cc84d61743e7eb825dcfd90a23","x":300,"y":60,"wires":[["27267f77.ea425"]]},{"id":"afc3846e.ce9a18","type":"inject","z":"a9cbc296.3c572","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":120,"y":60,"wires":[["f955e259.52699"]]},{"id":"27267f77.ea425","type":"debug","z":"a9cbc296.3c572","name":"","active":true,"console":"false","complete":"false","x":490,"y":60,"wires":[]}]
```
