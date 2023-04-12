<h6 class="is-uppercase is-dimmed has-text-weight-medium is-size-6 is-size-7-mobile">Foundation</h6>
<h1 class="title"><span class="is-size-2-mobile">Modifiers</span></h1>
<hr class="is-visible is-size-3">
<p class="is-size-4 has-text-dark">
    Use <strong>Modifier</strong> classes on almost any element in order to alter its style.
</p>
<hr class="is-visible is-size-3"><br>

<table class="table is-bordered">
    <tbody>
        <tr>
            <th rowspan="8">Color</th>
            <td><code>has-text-[color]</code></td>
            <td>Changes the color of the <strong>text</strong>, <i>uses BDS color names</i></td>
        </tr>
        <tr>
            <td style="width: 230px;"><code>has-background-[color]</code></td>
            <td>Changes the<strong class="has-background-purple-radial has-text-white"> background </strong>color</td>
        </tr>
        <tr>
            <td><code>has-text-background</code></td>
            <td><span>Applies the <strong class="has-background-purple-radial has-text-background">background</strong> to the text.</span></td>
        </tr>
        <tr>
            <td><code>has-fill-[color]</code></td>
            <td>Changes the fill color of an <strong>SVG</strong></td>
        </tr>
        <tr>
            <td><code>has-color-onhover</code></td>
            <td>Applies text color modifiers <strong class="has-text-primary has-color-onhover">only on hover</strong></td>
        </tr>
        <tr>
            <td><code>has-background-onhover</code></td>
            <td>Applies background modifiers <strong class="has-background-primary-gradient-light has-background-onhover">only on hover</strong></td>
        </tr>
        <tr>
            <td><code>has-fill-onhover</code></td>
            <td>Applies fill color modifiers <strong>only on hover</strong></td>
        </tr>
        <tr>
            <td><code>is-dimmed</code></td>
            <td>Makes a background or text color <strong>semi-transparent</strong></td>
        </tr>
        <tr>
            <th rowspan="12">Text</th>
            <td><code>is-size-[1 to 7]</code></td>
            <td>Changes the <strong>text size</strong> – default is <code>5</code></td>
        </tr>
        <tr>
            <td><code>is-size-bigger</code></td>
            <td>Increases text size (relatively)</td>
        </tr>
        <tr>
            <td><code>is-size-smaller</code></td>
            <td>Reduces text size (relatively)</td>
        </tr>
        <tr>
            <td><code>has-text-left</code></td>
            <td>Makes the text <strong>align to the left</strong></td>
        </tr>
        <tr>
            <td><code>has-text-right</code></td>
            <td>Makes the text <strong>align to the right</strong></td>
        </tr>
        <tr>
            <td><code>has-text-centered</code></td>
            <td>Makes the text <strong>centered</strong></td>
        </tr>
        <tr>
            <td><code>has-text-weight-[..]</code></td>
            <td>Changes text <strong>weight</strong> to:<br><code>light</code>, <code>normal</code>, <code>medium</code>, <code>semibold</code>, <code>bold</code>, <code>bolder</code></td>
        </tr>
        <tr>
            <td><code>is-capitalized</code></td>
            <td>Transforms the first character of each word to <strong>uppercase</strong></td>
        </tr>
        <tr>
            <td><code>is-lowercase</code></td>
            <td>Transforms all characters to <strong>lowercase</strong></td>
        </tr>
        <tr>
            <td><code>is-uppercase</code></td>
            <td>Transforms all characters to <strong>uppercase</strong></td>
        </tr>
        <tr>
            <td><code>is-italic</code></td>
            <td>Transforms all characters to <strong>italic</strong></td>
        </tr>
        <tr>
            <td><code>is-unselectable</code></td>
            <td>Prevents the text from being <strong>selectable</strong></td>
        </tr>
        <!-- <tr>
            <td><code>is-tight</code></td>
            <td>Shrinks the text's <strong>letter spacing</strong></td>
        </tr> -->
        <tr>
            <th rowspan="4">Spacing</th>
            <td><code>m[t,b,l,r,x,y]-[0–6]</code></td>
            <td>Adds <strong>margin</strong>, size 0 to 6, on a specific side (ex: <code>mt-3</code>)</td>
        </tr>
        <tr>
            <td><code>p[t,b,l,r,x,y]-[0–6]</code></td>
            <td>Adds <strong>padding</strong>, size 0 to 6, on a specific side (ex: <code>px-5</code> = <code>pl-5 pr-5</code>)</td>
        </tr>
        <tr>
            <td><code>is-marginless</code></td>
            <td>Removes any <strong>margin</strong></td>
        </tr>
        <tr>
            <td><code>is-paddingless</code></td>
            <td>Removes any <strong>padding</strong></td>
        </tr>
        <tr>
            <th rowspan="8">Radius</th>
            <td><code>has-radius-[tr,bl]</code></td>
            <td>Applies a regular <strong>radius</strong> on top-right or bottom-left corner</td>
        </tr>
        <tr>
            <td><code>has-radius-bold</code></td>
            <td>Applies a strong <strong>radius</strong> on all corners</td>
        </tr>
        <tr>
            <td><code>is-radiusless</code></td>
            <td>Removes any <strong>radius</strong></td>
        </tr>
        <tr>
            <td><code>is-radiusless-[l,r,t,b]</code></td>
            <td>Removes <strong>both radius</strong> on the left, right, top or bottom side</td>
        </tr>
        <tr>
            <td><code>is-radiusless-tl</code></td>
            <td>Removes <strong>top left radius</strong></td>
        </tr>
        <tr>
            <td><code>is-radiusless-tr</code></td>
            <td>Removes <strong>top right radius</strong></td>
        </tr>
        <tr>
            <td><code>is-radiusless-bl</code></td>
            <td>Removes <strong>bottom left radius</strong></td>
        </tr>
        <tr>
            <td><code>is-radiusless-br</code></td>
            <td>Removes <strong>bottom right radius</strong></td>
        </tr>
        <tr>
            <th rowspan="10">Visibility</th>
            <td><code>is-shadowless</code></td>
            <td>Removes any <strong>shadow</strong></td>
        </tr>
        <tr>
            <td><code>is-motionless</code></td>
            <td>Removes any <strong>transition</strong> or <strong>animation</strong></td>
        </tr>
        <tr>
            <td><code>is-decorationless</code></td>
            <td>Removes any <strong>text decoration</strong> (like underline)</td>
        </tr>
        <tr>
            <td><code>is-borderless</code></td>
            <td>Removes any <strong>border</strong> (sets border to <code>none</code> )</td>
        </tr>
        <tr>
            <td><code>is-backgroundless</code></td>
            <td>Removes any <strong>background</strong> and/or <strong>background-color</strong></td>
        </tr>
        <tr>
            <td><code>is-clipped</code></td>
            <td>Adds overflow <strong>hidden</strong></td>
        </tr>
        <tr>
            <td><code>is-invisible</code></td>
            <td>Adds visibility <strong>hidden</strong></td>
        </tr>
        <tr>
            <td><code>is-hidden</code></td>
            <td>Hides element</td>
        </tr>
        <tr>
            <td><code>is-sr-only</code></td>
            <td>Hide elements <strong>visually</strong> but keep the element available to be announced by a <strong>screen reader</strong></td>
        </tr>
        <tr>
            <td><code>is-clickable</code></td>
            <td>Forces the cursor to be a Pointer</td>
        </tr>
        <tr>
            <th rowspan="6" style="width: 5rem;">Position</th>
            <td style="width: 14rem;"><code>is-relative</code></td>
            <td>Applies <code>position: relative</code> to the element</td>
        </tr>
        <tr>
            <td><code>is-sticky</code></td>
            <td>Applies a <strong>fixed position when scrolled</strong> outside of the viewport</td>
        </tr>
        <tr>
            <td><code>is-overlay</code></td>
            <td>Completely covers the first positioned parent</td>
        </tr>
        <tr>
            <td><code>is-clearfix</code></td>
            <td>Fixes an element's floating children</td>
        </tr>
        <tr>
            <td><code>is-pulled-left</code></td>
            <td>Moves an element to the left</td>
        </tr>
        <tr>
            <td><code>is-pulled-right</code></td>
            <td>Moves an element to the right</td>
        </tr>
        <tr>
            <th rowspan="7" style="width: 5rem;">FX</th>
            <td><code>is-ephemeral</code> </td>
            <td>Fades out an element after 3 seconds</td>
        </tr>
        <tr>
            <td><code>is-shaked</code></td>
            <td>Shakes an element for 1.5 seconds</td>
        </tr>
        <tr>
            <td><code>bounce-in</code></td>
            <td>Bounce in an element (a fun way to make something appear on screen)</td>
        </tr>
        <tr>
            <td><code>is-twisted[-bis,-ter,-quater]</code></td>
            <td>Slightly twist/rotate an element<br>(like if it was thrown on the page)</td>
        </tr>
        <tr>
            <td><code>is-twisted-odd[-bis]</code></td>
            <td>Boldly twist/rotate an element</td>
        </tr>
        <tr>
            <td><code>has-background-blur</code></td>
            <td>Adds a blury transparent background. Works in pair with <code>has-background-[white,white-bis,dark,black]</code>.</td>
        </tr>
        <tr>
            <td><code>has-background-grainy</code></td>
            <td>Adds a grainy background effect.</td>
        </tr>
    </tbody>
</table>

<hr class="is-size-3"><br>

<a href="https://bulma.io/documentation/modifiers/" target="blank" class="message is-info is-block">
    More classes and <span class="has-text-weight-medium">responsive helpers</span> on &nbsp;→&nbsp; <strong class="is-link is-underlined">Bulma / Modifiers</strong>
</a>