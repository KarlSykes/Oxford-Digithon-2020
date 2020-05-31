import {Component} from "react";

class websocketsmod extends Component {
    ws = new WebSocket('ws://localhost:8081');

    componentDidMount() {
        this.ws.onopen = () => {
            console.log('Websocket connected')
        };

        this.ws.onmessage = message => {
            console.log('Message Received' + message)

            //respond to messages here


        };


    }

    sendText(text) {
        this.ws.send(text);
    }

}