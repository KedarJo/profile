Professional Profile
---------------------

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
