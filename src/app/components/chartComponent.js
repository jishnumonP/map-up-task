import { Line } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
    const chartData = {
        labels: data.map((item) => item.date),
        datasets: [
            {
                label: 'Dataset',
                data: data.map((item) => item.value),
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
        ],
    };

    return <Line data={chartData} />;
};

export default ChartComponent;
