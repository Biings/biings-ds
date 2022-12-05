<h6 class="has-text-grey-light has-text-weight-semibold is-size-5 is-size-6-mobile">Biings-DS</h6>
<hr class="is-marginless">
<h1 class="title is-family-secondary is-size-2-mobile">Release Notes</h1>
<hr class="is-visible is-size-3">
<br>

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">November 17, 2022</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.55</h3>
<ul class="list">
    <li>New icons: `rocket-g`, `screen-bulb`, `integrate`, `send-bold-g`, `box-g`, `plus-minus-g`</li>
    <li>New secondary button style</li>
    <li>New dropdowns shifting options to better manage dropdown positions</li>
    <li>Added support for nested dropdowns</li>
    <li>New radial background colors</li>
    <li>New blury background effect (modifier)</li>
    <li>New `is-inverted` checkbox style</li>
    <li>Style adjustments to <i>Checkbox, Dropdowns, Input with icon, Tooltip, Modal, Menu, Tab</i></li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">May 25, 2022</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.54</h3>
<ul class="list">
    <li>New icons: `medical-round-g`, `adaptation`, `adaption-g`, `money-g`, `briefcase-new-g`</li>
    <li>New `is-info` loader style</li>
    <li>New menu background color `has-background-menu`</li>
    <li>Added left and right aligned tooltip positions</li>
    <li>Style adjustments and fixes to <i>Form input/select, Menu, Underlined link</i></li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">April 28, 2022</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.53</h3>
<ul class="list">
    <li>New icons: `overload-bold-g`, `timelines-bold-g`, `indicator-bold-g`, `notification-bold-g`, `bulb-bold-g`, `gear-bold-g`, `bell-off-g`, `bell-off-bold-g`</li>
    <li>Typography: new default grey underline style (primary and secondary are still available)</li>
    <li>Style adjustments and fixes to <i>Tabs, Messages (now defaults to top position), Avatar (thiner lettering)</i></li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">April 8, 2022</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.52</h3>
<ul class="list">
    <li>New icons: `balance`, `balance-g`, `balance-even`, `balance-even-g`, `scissors-g`</li>
    <li>New "tilted" Avatar variant</li>
    <li>Harmonised styles for `readonly` and `disabled` form inputs</li>
    <li>Layout containers now have a maximum width (equal to the default width of a modal) when displayed on mobile devices</li>
    <li>Font loading does not block the page from rendering anymore and tells the browser to display a fallback font instead</li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">October 8, 2021</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.51</h3>
<ul class="list">
    <li>Added "Caveat" as a local font</li>
    <li>New icons: `biings-notify`, `line-dense-g`, `card-g`, `star-g`, `star-bold-g`, `crown-g`, `crown-bold-g`, `notification`, `edit-bold-g`</li>
    <li>New Tooltip `is-delayed` variation</li>
    <li>New color classes for `--color-primary-lightest`</li>
    <li>Style adjustments and fixes to <i>Dropdown arrows, Colors, Message, Form field, Modal header+footer, Chair icon</i></li>
    <li>Iconography documentation: download link for each icon/svg (straight from our Github repo)</li>
    <li>Deprecated icon: <code style="text-decoration: line-through;">biings-claim</code>, use `biings-notify` instead</li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">August 12, 2021</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.50</h3>
<ul class="list">
    <li><strong>Breaking changes:</strong>
        <ul>
            <li>– Dropdown used as tooltip (use the new Tooltip component instead)</li>
            <li>– Removed <code>is-mask</code> modifier</li>
        </ul>
    </li>
    <li>New warmer Greyscale colors (potentially a breaking visual change)</li>
    <li>New Primary-lightest color and an updated Light color</li>
    <li>New <span class="tooltip has-tooltip-arrow has-tooltip-fade" data-tooltip="Yeah 🎉">Tooltip</span> component, replacing dropdown tooltip hack.</li>
    <li>New icons <i>balance-gauge, document-warn-g, apple-logo, android-logo, smile-g, couch-g, bulb-g, search-list-g, cards-g</i></li>
    <li>Style adjustments and fixes to <i>Colors & Gradients, Breakpoints, Buttons, Typography, Avatar</i></li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">March 16, 2021</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.49</h3>
<ul class="list">
    <li><strong>Breaking changes:</strong>
        <ul>
            <li>– removed Pilot, Care and Claim variables (along with related components)</li>
            <li>– <code>is-desktop/tablet/modal</code> container modifiers have been replaced with <code>is-max-desktop/tablet/modal</code></li>
        </ul>
    </li>
    <li>New <span class="is-italic">Secondary</span> variable (essentially replacing <span class="is-italic">Claim</span>, see <a href="#/color" class="is-underlined">Colors</a> for more details)</li>
    <li>New icons and refinements: <i>money-new-g, money-reception-g</i></li>
    <li>New <code>is-ghost</code> button style</li>
    <li>New modifiers: <code>is-size-smaller</code> and <code>is-size-bigger</code></li>
    <li>Bulma updated to <u>0.9.2</u></li>
    <li>Style adjustments and fixes to <i>Buttons, Wavy HRs, Typography highlights</i></li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">March 8, 2021</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.48</h3>
<ul class="list">
    <li>New Claim color</li>
    <li><strong>9 new icons</strong> and refinements:<br><i>hand-g, gears-g, door-g, export-g, share-g, heart-check-g, line-compact-g, line-relaxed-g, lightning-g, business-new-g</i></li>
    <li>New modifiers: <code>is-thight</code>, <code>is-radius-bold</code>, <code>is-radius-subtle</code></li>
    <li>New tag style <code>is-wired</code></li>
    <li>New warning color gradients</li>
    <li>Improved font weight distribution for secondary serif font</li>
    <li>Bulma updated to <u>0.9.1</u></li>
    <li>Style adjustments and fixes to <i>Buttons, Inputs, Typography, Modals, Menu, Tabs</i></li>
    <li>V.1.45, 46 and 47 are included for free ; )</li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">September 14, 2020</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.44</h3>
<ul class="list">
    <li><strong>30 new icons</strong> and refinements:<br><i>action-g, action-new-g, arrow-up-g, arrow-down-g, calendar-g, action-new-g, chair-new-g, business-hq-g, cloud-g, list-g, person-assign-g, exchange-g, money-reception, warning-bold-g, spark-g, spark-big-g, keyboard-g, adminland, adminland-g, columns-g, cross-bold-g, minus, sort-g, document-new-g, duplicate-g, plus-g, link-g, person-new-g, dots-vert-g, at-g</i></li>
    <li>New small-sized checkbox</li>
    <li>New <code>has-[]-onhover</code> and <code>is-sticky</code> modifiers</li>
    <li>Single-pixel border width for Buttons and HRs</li>
    <li>Style adjustments to <i>Avatars, Boxes, Modals, Tables, Menus, and Dropdowns</i></li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">July 15, 2020</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.43</h3>
<ul class="list">
    <li><strong>New icons</strong>: <i>cloud-off-g, cloud-off-bold-g, filter-g</i> and other icon refinements</li>
    <li>Updated to <u>Bulma 0.9.0</u></li>
    <li>Updated font sizes 1, 3 and 4</li>
    <li>Added support for inverted Menus</li>
    <li>Added Tag size <code>is-tiny</code></li>
    <li>New modifier <span class="tag is-paddingless is-shaked"><code>is-shaked</code></span></li>
    <li>Various adjustments and fixes to <i>Form labels, Modal, Modifiers, Avatar</i> and Serif font sizes</li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">July 6, 2020</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.42</h3>
<ul class="list">
    <li><strong>New icons</strong>: <i>screen-bell, screen-g, person-g, phone-bell</i> + various icon refinements</li>
    <li><strong>New modifiers</strong>: <code>is-ephemeral</code>, <code>is-dimmed</code>, <code>is-mask</code>, <code>is-twisted</code></li>
    <li>New <i>Loader</i> abilities and colors with support for adjacent in-line loaders</li>
    <li>Added support for <code>is-loading</code> input</li>
    <li>Added more color modifiers and new special background gradients</li>
    <li>Added support for inverted <i>Dropdown</i></li>
    <li>Font size adjustments</li>
    <li>Removed <code>is-thin</code> modifier for <i>HR</i> (→ use <code>is-marginless</code> instead)</li>
    <li>Bye bye <i>Cards</i> ☠️ (→ use <i>Boxes</i> instead)</li>
    <li>Many refinements accross <i>Form</i>, <i>Checkbox</i>, <i>Radio</i>, <i>Avatar</i>, <i>Dropdown</i> components</li>
    <li>Various Documentation reorganisation and renaming</li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">


<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">May 25, 2020</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.41</h3>
<ul class="list">
    <li>New <strong>Crimson Pro</strong> serif font (replacing Merriweather) 🎊</li>
    <li><strong>Harmonized default text sizes</strong>, weight, line height and letter spacing</li>
    <li><strong>New icons</strong>: <i>arrow, policy, policy-umbrella, umbrella-g</i></li>
    <li>Serif Title is now the default</li>
    <li>Support for compact form fields</li>
    <li>New indeterminate checkbox style</li>
    <li>New indeterminate progressbar style</li>
    <li>New <a href="#/modifiers" class="is-underlined">Modifier doc page</a></li>
    <li>Removed Title size <code>0</code> and <code>8</code> 😵</li>
    <li>Removed variable columns sizes</li>
    <li>Removed icons <i>arrow-left/right/up/down</i></li>
    <li>Various improvements to: Modal, Link, Expandable box, Checkbox toggle and Skeleton</li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">April 24, 2020</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.40</h3>
<ul class="list">
    <li><strong>Updated colors</strong> for Care and Claim product!</li>
    <li><strong>New Icons</strong>: <i>send-g, salary-g, 3-dots, check-bold-g, business-big-g, policy-g, overload-g, language, language-g</i></li>
    <li>New Toggle Tabs (with movable toggle)</li>
    <li>New transition animation to Modals, Dropdowns and Rounded Buttons</li>
    <li>New progress bar component</li>
    <li>New <code>is-backgroundless</code> class helper</li>
    <li>Updated design for many icons</li>
    <li>Removed globe icon</li>
    <li>
        Without forgetting important adjustments to :<br><i>Form fields, Checkbox toggles, Boxes, Tooltips, Rounded Button, Underlined Links</i>
    </li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">March 31, 2020</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.39</h3>
<ul class="list">
    <li><strong>New Icons/Glyphs</strong>: location, eye-hide-g, eye-g, bell-bold-g, reload-g, card-g, group-g, job_assignment-g, knowledge, manager-g, badge, shield-star-g, gift-g</li>
    <li>Added <code>is-glowing</code> tag style</li>
    <li>Simplified Messages usage</li>
    <li>New Avatar status style</li>
    <li>Support for is-text dropdowns</li>
    <li>Visual tweaks and fixes to <i>Form fields, Boxed Tabs, buttons, Modals, Toggles, Typography spacing</i></li>
</ul>

<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">March 31, 2020</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.38</h3>
<ul class="list">
    <li>New <strong>Dropdow Field</strong> support</li>
    <li><strong>New Icons</strong>: <i>person-g, key, plus, accident-pro, accident-pro-g</i></li>
    <li>New Square button with a better handling of icon buttons</li>
    <li>Added Background blur modifier</li>
    <li>New HR rulers with soft edges</li>
    <li>Improved Buttons, dropdowns and controls look</li>
    <li>Improved Modal animation</li>
</ul>


<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">February 19, 2020</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.37</h3>
<ul class="list">
    <li><strong>New Icons</strong>: <i>workflow, percent, calendar-warn, timelines, timeline-actor, overload, lines, bars, 12-back</i></li>
    <li><strong>New Glyphs</strong>: <i>earth-g, help-bold-g</i></li>
    <li>New shadow button state, use <code>is-shadowed</code></li>
    <li>Added Hand-drawn Font, use <code>is-family-hand</code></li>
    <li>Redesigned Segment icon</li>
    <li>Simpler Loader style</li>
    <li>Fixed: Autocompleted input labels are now visible</li>
</ul>


<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">January 9, 2020</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.36</h3>
<ul class="list">
    <li>New <strong>colorful Tooltips</strong> (primary, dark, info)</li>
    <li>Layout: New container naming</li>
    <li>Button: support for button icons</li>
    <li>Nouvel icon trash-bold</li>
    <li>Updated green color <code>var(--color-green)</code></li>
    <li>Some icon adjustments</li>
    <li>Fixes on modal, button, dropdown</li>
</ul>


<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">December 19, 2019</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.35</h3>
<ul class="list">
    <li>New <strong>Dropdown Tooltips</strong> instructions</li>
    <li><strong>New icons</strong>: <i>chart, info-bold-g</i></li>
    <li>Form Field: new option/class <code>is-required</code></li>
    <li>Input: support for inline icons</li>
    <li>Fixes to <i>checkbox, table, loader, form</i></li>
</ul>


<hr class="is-size-2 is-size-4-touch is-visible is-wavy">

<span class="subtitle is-6 has-text-weight-medium has-text-purple is-uppercase">July 24, 2018</span>
<h3 class="title is-size-3-touch is-family-primary">Version 1.0</h3>
Introducing <strong>Biings Design Sytem</strong> (aka BDS), an open-source design framework based on <u>Bulma CSS</u>.

<hr class="is-size-4">

<div class="message has-background-primary-lighter is-italic">Since this Changelog was started after many revisions of Biings-DS, release notes prior to version 1.22 (June 28, 2019) never existed.</div>
