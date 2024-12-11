import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import styled from 'styled-components'

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

  const data = [{

  }]

  useEffect(() => {
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };

    // Remove any existing SVG
    d3.select(chartRef.current).select("svg").remove();

    // Create SVG container
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Create a stack
    const stack = d3.stack().keys(keys)(data);

    // Scales
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.group))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(stack[stack.length - 1], (d) => d[1])])
      .nice()
      .range([height, 0]);

    const colorScale = d3.scaleOrdinal().domain(keys).range(colors);

    // Axes
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y));

    // Add bars
    svg
      .selectAll(".layer")
      .data(stack)
      .enter()
      .append("g")
      .attr("class", "layer")
      .attr("fill", (d) => colorScale(d.key))
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.data.group))
      .attr("y", (d) => y(d[1]))
      .attr("height", (d) => y(d[0]) - y(d[1]))
      .attr("width", x.bandwidth());
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
