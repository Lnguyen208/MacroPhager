import { useEffect, useState } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

function App() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <ChakraProvider>
            <Grid
                templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
                gridTemplateRows={'50px 2fr 30px'}
                gridTemplateColumns={'300px 1fr'}
                h='100vh'
                w='100vw'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='2' bg='orange.300' area={'header'}>
                    Header
                </GridItem>
                <GridItem pl='2' bg='pink.300' area={'nav'}>
                    Nav
                </GridItem>
                <GridItem pl='2' bg='green.300' area={'main'}>
                    Main
                </GridItem>
                <GridItem pl='2' bg='blue.300' area={'footer'}>
                    Footer
                </GridItem>
            </Grid>
        </ChakraProvider>
    );
    
    async function populateWeatherData() {
        //const response = await fetch('weatherforecast');
        //const data = await response.json();
        const data = [
            { date: '04/18/2024', temperatureC: '28C', temperatureF: '90F', summary: 'Sunny' },
            { date: '04/19/2024', temperatureC: '28C', temperatureF: '90F', summary: 'Rainy' },
            { date: '04/20/2024', temperatureC: '28C', temperatureF: '90F', summary: 'Dry' },
            { date: '04/21/2024', temperatureC: '28C', temperatureF: '90F', summary: 'Wet' },
            { date: '04/22/2024', temperatureC: '28C', temperatureF: '90F', summary: 'Foggy' },
        ];
        setForecasts(data);
    }
}

export default App;