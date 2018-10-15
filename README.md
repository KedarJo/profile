Professional Profile
===

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Project uses [Bootstrap 4 Resume Template](https://github.com/BlackrockDigital/startbootstrap-resume) made available under MIT License

The startbootstrap-resume template is implemented with JQuery. Only the HTML code was reused and converted to JSX for use under React.

React Router DOM was installed separately.
```
$ npm install react-router-dom
```
The BrowserRouter, Route and NavLink were used to control navigation.

The content of the site is static and Stateless React Functional Components were defined to render the content. Further there is no pre-processing or post processing, hence there is no constructor defined, nor componentWillMount, componentDidMount etc. are used.

----

Important Considerations
----

1. NavLink does not support relative paths. This creates a problem in dev and prod, where the directory structure can be different. This issue can be resolved by modifying the absolute path as

```
  <NavLink to={process.env.PUBLIC_URL + '/'}>
```
This resolves to root in dev and deployed folder specified in package.json in prod

2. Collapsing the hamburger toggler of Bootstrap upon clicking the navigation option is not automatic. The toggler is designed to remain open. 'onClick' event should be tracked and toggler has to be hidden as follows    

```
  onClick = {() => {document.getElementByClassName('navbar-collapse').collapse('hide')}
```

---

Publishing to [Github Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)
---

1. Change the Github Project settings for GitHub Pages. Select 'gh-pages branch' for Source and save.
2. Install Github Pages locally
```
$ npm install gh-pages --save
```
3. Modify package.json to add the following lines
```
  "homepage": "https://KedarJo.github.io/profile/",
```
and under scripts:
```
    "predeploy": "npm run build",
    "deploy" : "gh-pages -d build",
```
This will make sure the upon deploy, the build script will get the build ready under 'build' directory and Github Pages will publish from that directory.

---

D3 Force Graph
---

Incorporating D3 into React is tricky because both D3 and React seek to take control of the DOM.
Below approach was used for React class component <Graph />

1. Canvas was used to render the D3 animation. This came with unique challenges as it does not work well with Bootstrap responsive design. Responsiveness is introduced with width and height settings that adjust to the viewport (window.inner* specifically)

2. D3 was installed as below in the project directory
```
$ npm install d3
```

3. Import the whole D3 library in react component
```
import * as d3 from "d3";
```

4. Define stateful component Graph and all required D3-force props.
5. Use render() to render the canvas itself and componentDidMount() to define and create D3 simulation
---     

react-vis
---

Using D3 directly can be challenging. Good people at Uber have built this library that works fairly well with React
[react-vis](http://uber.github.io/react-vis/)

---

Chatbot Integration
---

IBM Watson Assistant is simple to learn and train.    
[Tutorial](https://www.youracclaim.com/org/ibm/badge/build-your-own-chatbot-level-1)   
[API Reference](https://www.ibm.com/watson/developercloud/assistant/api/v1/curl.html?curl)       

React integration: Use API calls to Watson service. Stores required credential to use API in .env file. See .env-example.

Following project gives starter code:   
[Assistant with Discovery and Openwhisk](https://github.com/watson-developer-cloud/assistant-with-discovery-openwhisk)   

Here, the use case is different and use of Discovery or Openwhisk was not necessary here. So only the conversation code is used as a scaffolding.

---  
