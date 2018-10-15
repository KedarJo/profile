//Shared by https://github.com/watson-developer-cloud/assistant-with-discovery-openwhisk

import React from 'react';
import './css/Message.css';

function Message(props) {
  return (
    <div className={props.position === 'right' ? 'message message-from-right' : 'message message-from-left'}>

      <div>{props.message}</div>

      {props.date ? <div className="message-date">{props.date}</div> : false}
    </div>
  );
}

/*
{props.label ? <div className="message__label">{props.label}</div> : false}
{props.hasTail ? (
  <div className="message-tail">
    <div className="message-tail-background"></div>
    <div className="message-tail-foreground"></div>
  </div>
) : false}
*/

export default Message;
