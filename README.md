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
  <li>Wrap your app routes there.</li>
</ul>