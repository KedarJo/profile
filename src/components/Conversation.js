//Shared by https://github.com/watson-developer-cloud/assistant-with-discovery-openwhisk
import React from 'react';
import './css/Conversation.css';
import { InputWithButton } from 'watson-react-components';
import Message from './Message';

function Conversation(props) {

  function makeMessage(msgObj, index) {

    if (typeof msgObj.message === 'string') {
      return (
        <Message key={index} position={msgObj.position || false} label={msgObj.label || false} date={msgObj.date || false} message={msgObj.message} hasTail={msgObj.hasTail || false}/>
      );
    } else if ( React.isValidElement(msgObj.message)) {
      return ( msgObj.message );
    } else {
      return false;
    }
  }

  return (
    <div className="conversation">
      <div className="conversation-messages">
        <div>
          {props.messageObjectList.map(makeMessage)}
        </div>
        <div id='loadingConv'><i className="fas fa-spinner fa-spin"></i></div>
      </div>
      <div className="conversation-input-container">
        <InputWithButton className="conversation-input" onSubmit={props.onSubmit} placeholder="Say something here"/>
      </div>
      <div className="conversation-disclaimer-message">
        <div className='base-h6'>
          * This system is for demonstration purposes only and is not intended to process
          Personal Data. No Personal Data is to be entered into this system as it may not
          have the necessary controls in place to meet the requirements of the General Data
          Protection Regulation (EU) 2016/679.
        </div>
      </div>
    </div>
  );
}

export default Conversation;
