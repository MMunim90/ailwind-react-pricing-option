import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksCharts = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    //data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            Science: studentData.marks.Science,
            Math: studentData.marks.Math,
            English: studentData.marks.English,
        }

        const avg = (student.Science + student.Math + student.English) / 3;
        student.avg = avg;
        return student;
    })

    console.log(marksChartData)
    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey='avg' fill='yellow'></Bar>
                <Bar dataKey='Science' fill='red'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksCharts;