# treemap-diagram

This is a project to fulfiled <code>Data Visualization</code> Course provided by freeCodeCamp.

Goals: Build an app that is functionally similar to this https://treemap-diagram.freecodecamp.rocks using the following database [Kickstarter Pledges](https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json), [Movie Sales](https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json) and [Video Game Sales](https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json).

In this project, the tech stack was used ReactJS, d3.js and CSS. Vite was used to built instead of the conventional ones, CRA.<br>
Check out the live demo [here](https://ndtrung-dev.github.io/treemap-diagram).

## Requirements:

### User story:
>
> 1. My tree map should have a title with a corresponding id="title".
>
> 1. My tree map should have a description with a corresponding id="description".
>
> 1. My tree map should have rect elements with a corresponding class="tile" that represent the data.
>
> 1. There should be at least 2 different fill colors used for the tiles.
>
> 1. Each tile should have the properties data-name, data-category, and data-value containing their corresponding name, category, and value.
>
> 1. The area of each tile should correspond to the data-value amount: tiles with a larger data-value should have a bigger area.
>
> 1. My tree map should have a legend with corresponding id="legend".
>
> 1. My legend should have rect elements with a corresponding class="legend-item".
>
> 1. The rect elements in the legend should use at least 2 different fill colors.
>
> 1. I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.
>
> 1. My tooltip should have a data-value property that corresponds to the data-value of the active area.

### Testing tools

<em>FCC Testing CDN</em> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js) is provided by freeCodeCamp

## Result

All checkpoint passed!

Source code uploaded to [github](https://github.com/ndtrung-dev/treemap-diagram).

[Live demo](https://ndtrung-dev.github.io/treemap-diagram) is uploaded to github using <code>gh-pages</code>. <em>FCC Testing CDN</em> was embedded. Select <code>D3: Choropleth</code> option from dropdown menu to verify the result.
