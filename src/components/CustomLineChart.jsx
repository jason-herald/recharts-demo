import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const CustomLineChart = ({ data, xAxisKey, keys, width, height }) => {
  const svgRef = useRef(null);
  const margin = { top: 20, right: 80, bottom: 50, left: 50 };
  const colors = d3.scaleOrdinal(["#8884d8", "#82ca9d"]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const xScale = d3
      .scalePoint()
      .domain(data.map((d) => d[xAxisKey]))
      .range([margin.left, width - margin.right]);

    const yMax = d3.max(data, (d) => d3.max(keys, (key) => d[key]));
    const yScale = d3
      .scaleLinear()
      .domain([0, yMax])
      .range([height - margin.bottom, margin.top]);

    keys.forEach((key, idx) => {
      const lineGenerator = d3
        .line()
        .x((d) => xScale(d[xAxisKey]))
        .y((d) => yScale(d[key]))
        .curve(d3.curveCardinal);
      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", colors(idx))
        .attr("stroke-width", 2)
        .attr("d", lineGenerator);
      svg
        .selectAll(`dot-${idx}`)
        .data(data)
        .enter()
        .append("circle")
        .attr("r", 3.5)
        .attr("cx", (d) => xScale(d[xAxisKey]))
        .attr("cy", (d) => yScale(d[key]))
        .style("fill", colors(idx))
        .style("fill", "white")
        .style("stroke", colors(idx))
        .style("stroke-width", 1.5);
    });

    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));

    const legendGroup = svg
      .append("g")
      .attr("transform", `translate(${width - margin.right}, ${margin.top})`);

    keys.forEach((key, idx) => {
      const legend = legendGroup
        .append("g")
        .attr("transform", `translate(0, ${idx * 25})`);

      legend
        .append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", colors(idx));

      legend
        .append("text")
        .attr("x", 25)
        .attr("y", 15)
        .text(key)
        .style("font-size", "12px")
        .style("fill", "grey");
    });

    return () => svg.selectAll("*").remove();
  }, [data, xAxisKey, keys, width, height, margin]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default CustomLineChart;
