import React, { Component } from 'react';
import AssistantV1 from 'watson-developer-cloud/assistant/v1';
import Conversation from './Conversation';
import './css/ChatBot.css';

class ChatBot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      context: {},
      watsonAssistant: null,
      // A Message Object consists of a message[, intent, date, isUser]
      messageObjectList: [],
      discoveryNumber: 0
    };

    this.state.watsonAssistant = new AssistantV1({
      version: process.env.REACT_APP_ASSISTANT_VERSION,
      username: process.env.REACT_APP_ASSISTANT_USERNAME,
      password: process.env.REACT_APP_ASSISTANT_PASSWORD,
      url: process.env.REACT_APP_ASSISTANT_URL
    })

    this.callWatson = this.callWatson.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.callWatson('');
  }

  callWatson(message) {

    this.state.watsonAssistant.message({
      workspace_id: process.env.REACT_APP_WORKSPACE_ID,
      input: {'text': message},
      context: this.state.context
    }, this.handleResponse )

  }

  handleResponse(err, responseJson) {

    if (err) {
      throw responseJson;
    }
    responseJson.date = new Date()

    if (responseJson.hasOwnProperty('output') && responseJson.output.hasOwnProperty('action') && responseJson.output.action.hasOwnProperty('call_discovery')) {
      this.addMessage( { label: 'Discovery Result:', message: 'Great question. Here\'s what I found:', date: (new Date()).toLocaleTimeString()});
      this.formatDiscovery(responseJson.output.discoveryResults);

    } else {
      const outputMessage = responseJson.output.text.filter(text => text).join('\n');
      const outputIntent = responseJson.intents[0] ? responseJson.intents[0]['intent'] : '';
      const outputDate = responseJson.date.toLocaleTimeString();
      const outputContext = responseJson.context;
      this.setState({
        context: outputContext
      });
      const msgObj = {
        position: 'left',
        label: outputIntent,
        message: outputMessage,
        date: outputDate,
        hasTail: true
      };
      this.addMessage(msgObj);
      let spinner = document.getElementById('loadingConv')
      spinner.style.display = 'none'
    }

  }

  addMessage(msgObj) {
    this.setState({
      messageObjectList: [ ...this.state.messageObjectList , msgObj]
    });
  }

  handleSubmit(e) {
    const inputMessage = e.target.value;
    const inputDate = new Date();
    const formattedDate = inputDate.toLocaleTimeString();
    const msgObj = {
      position: 'right',
      message: inputMessage,
      date: formattedDate,
      hasTail: true
    };
    this.addMessage(msgObj);
    e.target.value = '';
    let spinner = document.getElementById('loadingConv')
    spinner.style.display = 'inline'
    this.callWatson(inputMessage);
  }

  render() {

    return (
      <div className="app-wrapper">

        <Conversation
          onSubmit={this.handleSubmit}
          messageObjectList={this.state.messageObjectList}
        />
      </div>

    )
  }
}

export default ChatBot;
