import "./App.css";
import * as d3 from "d3";
import { useEffect, useState } from "react";

const DATABASE = {
  "kickstarter-pledges": {
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json",
    description: "Top 100 Most Pledged Kickstarter Campaigns Grouped by ",
    unit: "Category",
  },
  "movie-sales": {
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json",
    description: "Top 100 Highest Grossing Movies Grouped by ",
    unit: "Genre",
  },
  "game-sales": {
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json",
    description: "Top 100 Most Sold Video Games Grouped by ",
    unit: "Platform",
  },
};

const SVG_WIDTH = 700;
const SVG_HEIGHT = 500;
const SVG_PADDING = 30;

// source: https://sashamaps.net/docs/resources/20-colors/
const COLOR_RANGE = [
  "#e6194B",
  "#3cb44b",
  "#ffe119",
  "#4363d8",
  "#f58231",
  "#911eb4",
  "#42d4f4",
  "#f032e6",
  "#bfef45",
  "#fabed4",
  "#469990",
  "#dcbeff",
  "#9A6324",
  "#fffac8",
  "#800000",
  "#aaffc3",
  "#808000",
  "#ffd8b1",
  "#000075",
  "#a9a9a9",
];

const Button = (props) => {
  return (
    <button className="button" {...props}>
      {props.id.split("-")[0]} treemap
    </button>
  );
};

function App() {
  const [database, setDatabase] = useState("movie-sales");

  useEffect(() => {
    d3.json(DATABASE[database].url)
      .then((data) => {
        document.querySelector("#chart")?.remove();
        document.querySelector("#tooltip")?.remove();
        document.querySelector("#legend")?.remove();

        let label = data.children.map((i) => i.name);

        const svg = d3
          .select("#chart-wrapper")
          .append("svg")
          .attr("id", "chart")
          .attr("width", SVG_WIDTH + 2 * SVG_PADDING)
          .attr("height", SVG_HEIGHT + SVG_PADDING);

        const root = d3.hierarchy(data).sum((d) => d.value);
        d3.treemap().size([SVG_WIDTH, SVG_HEIGHT]).padding(1)(root);

        const legend = d3
          .select("#chart-wrapper")
          .append("svg")
          .attr("id", "legend")
          .attr("width", SVG_WIDTH * 0.8)
          .attr(
            "height",
            database == "movie-sales" ? SVG_HEIGHT / 4 : SVG_HEIGHT / 2
          );
        legend
          .selectAll("rect")
          .data(label)
          .enter()
          .append("rect")
          .attr("width", 7)
          .attr("height", 16)
          .attr("class", "legend-item")
          .attr("fill", (_, i) => COLOR_RANGE[i])
          .attr("x", (_, i) => (SVG_WIDTH / 5) * (i % 4) + "px")
          .attr("y", (_, i) => SVG_PADDING * 1.5 * Math.floor(i / 4 + 1));
        legend
          .selectAll("text")
          .data(label)
          .enter()
          .append("text")
          .style("width", "fit-content")
          .style("height", "fit-content")
          .style("font-size", "14px")
          .attr("x", (_, i) => 10 + (SVG_WIDTH / 5) * (i % 4) + "px")
          .attr("y", (_, i) => 16 + SVG_PADDING * 1.5 * Math.floor(i / 4 + 1))
          .html((d) => d);

        const tile = svg
          .selectAll("rect")
          .data(root.leaves())
          .enter()
          .append("rect")
          .attr("class", "tile")
          .attr("data-category", (d) => d.data.category)
          .attr("data-value", (d) => d.data.value)
          .attr("data-name", (d) => d.data.name)
          .attr("x", (d) => d.x0 + SVG_PADDING + "px")
          .attr("y", (d) => d.y0 + SVG_PADDING + "px")
          .attr("width", (d) => d.x1 - d.x0)
          .attr("height", (d) => d.y1 - d.y0)
          .style(
            "fill",
            (d) => COLOR_RANGE[label.findIndex((c) => c == d.data.category)]
          );

        const tooltip = d3
          .select("#chart-wrapper")
          .append("div")
          .attr("id", "tooltip");
        const tooltipContent = (category, name, value) => `
          <h1 style="font-size:0.8rem;text-align: center">${name}</h1>
          <p  style="font-size:0.6rem">${DATABASE[database].unit}: <span style="font-size:0.7rem">${category}</span></p>
          <p  style="font-size:0.6rem">Value: <span style="font-size:0.7rem">${value}</span> </p>
        `;
        tile
          .on("mouseover", (e) => {
            e.preventDefault();
            const el = e.target;
            el.classList.add("active");
            tooltip
              .html(
                tooltipContent(
                  el.dataset.category,
                  el.dataset.name,
                  el.dataset.value
                )
              )
              .attr("class", "active")
              .attr("data-value", el.dataset.value);
          })
          .on("mousemove", (e) => {
            tooltip.style("top", e.pageY + "px").style("left", e.pageX + "px");
          })
          .on("mouseleave", (e) => {
            e.target.classList.remove("active");
            document.querySelector("#tooltip").classList.remove("active");
          });
      })
      .catch((err) => console.error(err));
  }, [database]);

  function changeDatabase(e) {
    e.preventDefault();
    setDatabase(e.target.id);
  }

  return (
    <div className="screen">
      <div className="main">
        <div id="database-selector">
          {Object.keys(DATABASE).map((key) => (
            <Button
              id={key}
              key={key}
              onClick={changeDatabase}
              disabled={database == key}
            />
          ))}
        </div>
        <div id="heading">
          <h1 id="title">{database.split("-").join(" ")}</h1>
          <h4 id="description">
            {DATABASE[database].description + DATABASE[database].unit}
          </h4>
        </div>
        <div id="chart-wrapper"></div>
      </div>
    </div>
  );
}

export default App;
