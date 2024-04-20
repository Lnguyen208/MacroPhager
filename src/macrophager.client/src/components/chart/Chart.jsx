
import './Chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({ aspect, title }) => {
    const data = [
        { Name: 'Sunday', Actual: 1500, Goal: 2000 },
        { Name: 'Monday', Actual: 2030, Goal: 2000 },
        { Name: 'Tuesday', Actual: 1800, Goal: 2000 },
        { Name: 'Wednesday', Actual: 1500, Goal: 2000 },
        { Name: 'Thursday', Actual: 2300, Goal: 2000 },
        { Name: 'Friday', Actual: 1700, Goal: 2000 },
        { Name: 'Saturday', Actual: 2100, Goal: 2000 },
    ];
    return (
        <div className='Chart'>
        <div className='title'>{title}</div>
                <ResponsiveContainer width="100%" aspect={aspect}>
                    <AreaChart
                        width={730}
                        height={250}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
                                <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                                <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id='goal' x1='0' y1='0' x2='0' y2='1'>
                            <stop offset='5%' stopColor='#98FB98' stopOpacity={0.8} />
                            <stop offset='95%' stopColor='#98FB98' stopOpacity={0} />
                        </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" className='chart-grid' />
                        <XAxis dataKey="Name" />
                    <YAxis type="number" domain={[1000, 2500]} />
                    <Tooltip />
                    <Area type="monotone" dataKey="Goal" fillOpacity={1} stroke="#98FB98" fill="url(#goal)" />
                    <Area type="monotone" dataKey="Actual" fillOpacity={1} stroke="#8884d8" fill="url(#total)" />

                    </AreaChart>
                </ResponsiveContainer>
            </div>
    )
}

export default Chart