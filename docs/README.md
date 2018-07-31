<h1 class="title is-1">Getting Started</h1>
<p class="subtitle is-5">
    Onboarding for designers and developers on how to use BDS. We welcome all feedback and ideas in order to produce the best possible experience for our users.
</p>

<hr class="is-visible">

<h2 class="title is-4">Files to include</h2>
<p>To start using BDS inlude the following files in your web project.</p>

<br>
<a href="https://raw.githubusercontent.com/ForsysInteractive/biings-ds/master/build/bds.css" class="box is-bordered is-link" download><span class="is-monospace">**bds.css**</span><br>The only CSS file you'll need to use Biings DS.</a>
<a href="https://raw.githubusercontent.com/ForsysInteractive/biings-ds/master/build/bds-icons.min.svg" class="box is-bordered is-link" download><span class="is-monospace">**bds-icons.svg**</span><br>An SVG sprite - created with svgstore - that includes all Biings DS icons.</a>
<a href="https://github.com/ForsysInteractive/biings-ds/tree/master/docs/media/illustrations" class="box is-bordered is-link"><span class="is-monospace">**illustrations / ...**</span><br>Illustrations have their own svg file.</a>

<hr class="is-large is-visible">

<h2 class="title is-4">How to contribute</h2>

<div class="media is-large">
    <div class="media-left">
        <p class="title is-6">1.</p>
    </div>
    <div class="media-content">
        <p class="title is-6 has-text-weight-semibold">Checkout the repository &nbsp;→&nbsp; <a href="https://github.com/ForsysInteractive/biings-ds">https://github.com/ForsysInteractive/biings-ds</a></p>
    </div>
</div>
&nbsp;
<div class="media is-large">
    <div class="media-left">
        <p class="title is-6">2.</p>
    </div>
    <div class="media-content">
        <p class="title is-6 has-text-weight-semibold">Make your changes</p>
        <ul class="list">
            <li>**Styles** – all BDS components in `src/styles/..`</li>
            <li>**Bulma for BDS** – Bulma Sass files in `src/styles/bulma/..`</li>
            <li>**Icon set** – SVG icon files in `src/icons/..`</li>
        </ul>
    </div>
</div>
<div class="media is-large">
    <div class="media-left">
        <p class="title is-6">3.</p>
    </div>
    <div class="media-content">
        <p class="title is-6 has-text-weight-semibold">Build it!</p>
        <pre data-lang="bash">npm run build</pre>
        <br>
        <br>
        <p>You can build a specific part by calling the command directly:</p><br>
        <pre data-lang="bash">npm run icons</pre>
        <br>
        <pre data-lang="bash">npm run styles</pre>
        <br>
        <pre data-lang="bash">npm run stylesdoc // to update the styles of this doc</pre>
    </div>
</div>