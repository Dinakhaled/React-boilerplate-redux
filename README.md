<h1>React boilerplate with redux</h1>
<h2>Description</h2>
<p>To make our projects we almost all the times it’s the create-react-app that we use to create an app with no build configuration. Or we just make our own simple boilerplate from scratch.</p>
<h2>Installation</h2>
<ol>
  <li>First, let's clone React-boilerplate-redux repository then you need to install the dependencies:</li>
  <code>npm install</code>
  <li>Now you can run the project:</li>
  <code>npm start</code>
  <li>Open localhost:3000 to see it in action.</li>
</ol>
<h2>Structure</h2>
<h4>🗃Assets</h4>
<ul>
  <li>Here you can put your assets like (images, fonts, icons, ...etc).</li>
</ul>
<hr>
<h4>🗃Components</h4>
<ul>
  <li>Here you will be able to develop you reusable components like (button, input, card, ...etc).</li>
  <li>Components will be functional and to deal with state here try to use React hooks (useState, useEffect, ...etc).</li>
  <li>Each component folder will contain javascript file & style file (css || sass || ...etc).</li>
</ul>
<hr>
<h4>🗃Containers</h4>
<ul>
  <li>These folders will represent your pages or containers which should contain your components.</li>
  <li>Containers will be class components.</li>
</ul>
<hr>
<h4>🗃Network</h4>
<ul>
  <li>That contain two folders 
    <ol>
      <li><strong>API:</strong> put your apis methodes there.</li>
      <li><strong>Interceptors:</strong> to handle each request || response || errors from apis</li>
    </ol>
  </li>
</ul>
<hr>
<h4>🗃Routes</h4>
<ul>
  <li>Wrap your app routes in Routes.js file.</li>
  <li>You will find History.js file that observes your journey of paths inside the app.</li>
</ul>
<hr>
<h4>🗃SCSS</h4>
<ul>
  <li>Here you could put your general styles (general || variables || mixins ...etc).</li>
</ul>
<hr>
<h4>🗃Store</h4>
<ul>
  <li><strong>Actions: </strong>Here you will put your actions to set any data to Redux store.</li>
  <li><strong>Reducers: </strong>Here you will put your Reducers to define how your data will be display in Redux store.</li>
  <li><strong>Sagas: </strong>Here you will create your saga's functions (generator functions) to call your APIS.</li>
  <li><strong>Types: </strong>Here you will define your types to use it inside the actions and reducers.</li>
  <li><strong>index: </strong>This file will wrap your Redux store main configurations (applyMiddleware || compose ...etc).</li>
</ul>
<hr>
<h4>🗃Utils</h4>
<ul>
  <li>Here you could put your constants like (base image URL) and your lazy-loaded components imports or any other helpers files.</li>
</ul>
<hr>
<h4>🗃index.js</h4>
<ul>
  <li>This file is bootstrap your application.</li>
</ul>
<hr>