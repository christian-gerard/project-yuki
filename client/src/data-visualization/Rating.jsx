import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import styled from 'styled-components'

const data = [
            { label: "A", status: 1 },
            { label: "B", status: 3 },
            { label: "C", status: 5 },
            { label: "D", status: 4 },
            { label: "E", status: 2 },
];

function Rating() {

  const Main = styled.div`
      width:98%;
      height:40%;
      border: 1px solid black;
      overflow: hidden;
      white-space: nowrap;
      display:flex;
      flex-direction: row;
  `
  const RatingChart = styled.div`
      width:30%;
      font-size:1.5em;
      height:100%;
      overflow: hidden;
      white-space: nowrap;
  `
  const RatingReasons = styled.div`
      width:70%;
      overflow: hidden;
      white-space: nowrap;
      font-size: 1.5em;
  `
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { label: "A", status: 1 },
      { label: "B", status: 3 },
      { label: "C", status: 5 },
      { label: "D", status: 4 },
      { label: "E", status: 2 },
    ];

    // Chart dimensions
    const width = 200;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };

    // Remove any existing SVG for re-rendering
    d3.select(chartRef.current).select("svg").remove();

    // Create SVG container
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Scales
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, 5]) // 1 to 5 scale
      .nice()
      .range([height, 0]);

    const color = d3
      .scaleLinear()
      .domain([1, 5])
      .range(["red", "green"]);

    // Axes
    svg
      .append("g")
      .attr("class", "axis axis--x")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(5));

    // Bars
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.label))
      .attr("y", (d) => y(d.status))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.status))
      .attr("fill", (d) => color(d.status));

    // Add labels
    svg
      .selectAll(".label")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d) => x(d.label) + x.bandwidth() / 2)
      .attr("y", (d) => y(d.status) - 5)
      .attr("text-anchor", "middle")
      .text((d) => d.status)
      .style("fill", "#555");
  }, [])

  return (
    <Main>

      <RatingChart>
        <p>Charts</p>
        <div ref={chartRef}></div>
      </RatingChart>

      <RatingReasons>
        <p>Rating Reasons</p>
        <ul>
          <li> Increased Snow </li>
          <li> Low SWE </li>
          <li> Good Avy Danger </li>
        </ul>
         <ul>
          <li> Large Crowds  </li>
          <li> Low Snowpack  </li>
          <li> Traction Law In Place </li>
        </ul>
      </RatingReasons>
    </Main>
  )
}
export default Rating
