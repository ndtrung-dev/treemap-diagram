# treemap-diagram

This is a project to fulfiled <code>Data Visualization</code> Course provided by freeCodeCamp.

Goals: Build an app that is functionally similar to this https://treemap-diagram.freecodecamp.rocks using the following database [Kickstarter Pledges](https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json), [Movie Sales](https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json) and [Video Game Sales](https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json).

In this project, the tech stack was used ReactJS, d3.js and CSS. Vite was used to built instead of the conventional ones, CRA.<br>
Check out the live demo [here](https://ndtrung-dev.github.io/treemap-diagram).

## Requirements:

### User story:
>
> 1. My tree map should have a title with a corresponding <code>id="title"</code>.
>
> 1. My tree map should have a description with a corresponding <code>id="description"</code>.
>
> 1. My tree map should have <code>rect</code> elements with a corresponding <code>class="tile"</code></code> that represent the data.
>
> 1. There should be at least 2 different fill colors used for the tiles.
>
> 1. Each tile should have the properties <code>data-name</code>, <code>data-category</code>, and <code>data-value</code> containing their corresponding name, category, and value.
>
> 1. The area of each tile should correspond to the <code>data-value</code> amount: tiles with a larger <code>data-value</code> should have a bigger area.
>
> 1. My tree map should have a legend with corresponding <code>id="legend"</code>.
>
> 1. My legend should have <code>rect</code> elements with a corresponding class="legend-item"</code>.
>
> 1. The <code>rect</code> elements in the legend should use at least 2 different fill colors.
>
> 1. I can mouse over an area and see a tooltip with a corresponding <code>id="tooltip"</code> which displays more information about the area.
>
> 1. My tooltip should have a <code>data-value</code> property that corresponds to the <code>data-value</code> of the active area.

### Testing tools

<em>FCC Testing CDN</em> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js) is provided by freeCodeCamp

## Result

All checkpoint passed!

Source code uploaded to [github](https://github.com/ndtrung-dev/treemap-diagram).

[Live demo](https://ndtrung-dev.github.io/treemap-diagram) is uploaded to github using <code>gh-pages</code>. <em>FCC Testing CDN</em> was embedded. Select <code>D3: TreeMap</code> option from dropdown menu to verify the result.
