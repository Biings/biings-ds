<h6 class="is-uppercase has-text-info has-text-weight-medium is-size-6 is-size-7-mobile">Contribute</h6>
<h1 class="title is-family-secondary is-size-2-mobile">How to start?</h1>
<hr class="is-visible is-size-4">
<p class="subtitle is-family-secondary has-text-dark">
    We welcome all feedback and ideas in order to produce the best possible experience for our users!
</p>

<hr class="is-visible is-size-4"><br>

<p class="has-text-weight-semibold">1 )&nbsp; Checkout the repository &nbsp;→&nbsp; <a href="https://github.com/biings/biings-ds" class="is-underlined">https://github.com/biings/biings-ds</a></p>
<br>
<p class="has-text-weight-semibold">2 )&nbsp; Make your changes</p>
<ul class="list">
    <li>Styles – all BDS components in <code>src/styles/bds/..</code></li>
    <li>Bulma base variables <code>src/styles/bulma.sass</code></li>
    <li>Icon set – SVG icon files in <code>src/icons/..</code></li>
</ul>
<br>
<div class="has-text-weight-semibold">3 )&nbsp; Build it!</div>
<br>
<pre data-lang="bash"><code>npm run build</code></pre>
<br>
<p>You can also build a specific part by calling the command directly:</p><br>
<pre data-lang="bash"><code>npm run styles</code></pre>
<br>
<pre data-lang="bash"><code>npm run icons</code></pre>

<br>
<p class="has-text-weight-semibold">4 )&nbsp; Commit your code – Push! – and tag a new version</p>
<br>
<pre data-lang="bash"><code>npm version x.x.x</code></pre>

<br>
<p class="has-text-weight-semibold">5 )&nbsp; Make it available</p>
<br>
<pre data-lang="bash"><code>npm login // you need an NPM account first</code></pre>
<br>
<pre data-lang="bash"><code>npm publish</code></pre>
<br>
<p class="has-text-weight-semibold">5 )&nbsp; Done. You can now tell everyone to "`npm update biings-ds`" 😇</p>