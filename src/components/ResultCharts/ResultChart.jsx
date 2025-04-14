import React from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Ayaan",
    math: 85,
    english: 78,
    science: 92,
    physics: 88,
    chemistry: 79,
  },
  {
    id: 2,
    name: "Zara",
    math: 90,
    english: 88,
    science: 81,
    physics: 91,
    chemistry: 85,
  },
  {
    id: 3,
    name: "Rafi",
    math: 76,
    english: 65,
    science: 70,
    physics: 68,
    chemistry: 72,
  },
  {
    id: 4,
    name: "Nadia",
    math: 92,
    english: 95,
    science: 89,
    physics: 90,
    chemistry: 94,
  },
  {
    id: 5,
    name: "Hasan",
    math: 68,
    english: 74,
    science: 64,
    physics: 66,
    chemistry: 70,
  },
  {
    id: 6,
    name: "Tania",
    math: 88,
    english: 90,
    science: 85,
    physics: 87,
    chemistry: 89,
  },
  {
    id: 7,
    name: "Farhan",
    math: 80,
    english: 72,
    science: 77,
    physics: 75,
    chemistry: 78,
  },
  {
    id: 8,
    name: "Lubna",
    math: 95,
    english: 91,
    science: 96,
    physics: 93,
    chemistry: 97,
  },
  {
    id: 9,
    name: "Omar",
    math: 60,
    english: 66,
    science: 58,
    physics: 62,
    chemistry: 64,
  },
  {
    id: 10,
    name: "Mehzab",
    math: 73,
    english: 80,
    science: 79,
    physics: 77,
    chemistry: 81,
  },
];

const ResultChart = () => {
  return (
    <div>
        {/* line chart */}
      <LineChart width={1000} height={300} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip />
        <Line type="monotone" dataKey="physics" stroke="#ffffff"></Line>
        <Line dataKey="chemistry"></Line>
        <Line dataKey="math" stroke="red"></Line>
      </LineChart>

{/* radar chart */}
      <RadarChart outerRadius={120} width={1000} height={450} data={resultData}>
        <PolarGrid/>
        <Tooltip />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <PolarAngleAxis dataKey="subject" />
        <Radar name="math" dataKey="math" fill="green" fillOpacity={0.5} ></Radar>
        <Radar name="physics" dataKey="physics" fill="red" fillOpacity={0.5} ></Radar>
        <Legend/>
      </RadarChart>

      {/* barchart */}
      <BarChart height={250} width={1000} data={resultData}>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Bar dataKey='math' fill="yellow"></Bar>
        <Bar dataKey='chemistry' fill="orange"></Bar>
        <Bar dataKey='science' fill="green"></Bar>
      </BarChart>

      {/* areachart */}
      <AreaChart height={250} width={1000} data={resultData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
      <XAxis dataKey="name" />
      <YAxis />
      <Area type='monotone' dataKey='math' fillOpacity={1} fill="url(#colorUv)"></Area>
      <Area type='monotone' dataKey='physics' fillOpacity={1} fill="url(#colorPv)"></Area>
      </AreaChart>
    </div>
  );
};

export default ResultChart;
