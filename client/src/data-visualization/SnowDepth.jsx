import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components'

const Main = styled.div`
    width:25%;
    overflow: hidden;
    white-space: nowrap;
`

const SWEData = [
    { month: 'Nov', value: 30 },
    { month: 'Dec', value: 50 },
    { month: 'Jan', value: 70 },
    { month: 'Feb', value: 90 },
    { month: 'Mar', value: 80 },
    { month: 'Apr', value: 60 },
    { month: 'May', value: 40 },
];

function SnowDepth() {



    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', '100%')
            .attr('height', 300);

        const margin = { top: 20, right: 30, bottom: 40, left: 40 };
        const width = 500 - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;

        const x = d3.scaleBand()
            .domain(SWEData.map(d => d.month))
            .range([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(SWEData, d => d.value)])
            .nice()
            .range([height, 0]);

        const line = d3.line()
            .x(d => x(d.month) + x.bandwidth() / 2) // Calculate the x-position
            .y(d => y(d.value)); // Calculate the y-position

        // Create a group element for the chart with margin adjustments
        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Add the line chart path
        g.append('path')
            .data([SWEData])
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 2)
            .attr('d', line);

        // Add x-axis
        g.append('g')
            .selectAll('.tick')
            .data(SWEData)
            .enter()
            .append('text')
            .attr('x', d => x(d.month) + x.bandwidth() / 2)
            .attr('y', height)
            .attr('dy', '1em')
            .style('text-anchor', 'middle')
            .text(d => d.month);

        // Add y-axis
        g.append('g')
            .call(d3.axisLeft(y));

    }, []);

    return(
        <Main>
            <p style={{'font-size': '1.5em'}}>Snow Depth // New Snow</p>
            <svg ref={svgRef}></svg>
        </Main>
    )
}

export default SnowDepth
