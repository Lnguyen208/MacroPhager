import './TheTable.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    { name: 'Frozen Yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 10.0, status: 'High'},
    { name: 'Ice Cream', calories: 200, fat: 6.0, carbs: 40, protein: 4.0, status: 'Medium'},
    { name: 'Frozen Custard', calories: 300, fat: 8.0, carbs: 24, protein: 1.0, status: 'Medium' },
    { name: 'Soft Serve', calories: 100, fat: 3.0, carbs: 30, protein: 4.0, status: 'High' },
    { name: 'Mochi', calories: 250, fat: 11.0, carbs: 22, protein: 2.0, status: 'Low'},
];

const TheTable = () => {

    return (
        <TableContainer component={Paper} className='Table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Food Item</TableCell>
                        <TableCell className='tableCell'>Calories&nbsp;(kCal)</TableCell>
                        <TableCell className='tableCell'>Fat&nbsp;(%)</TableCell>
                        <TableCell className='tableCell'>Carbs&nbsp;(%)</TableCell>
                        <TableCell className='tableCell'>Protein&nbsp;(%)</TableCell>
{/*                        <TableCell className='tableCell'>Popularity</TableCell>*/}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                        >
                            {/*<TableCell className='tableCell'>*/}
                            {/*    <div className='cellWrapper'>*/}
                            {/*        <img src={row.img} alt='' className='image'/>*/}
                            {/*    </div>*/}
                            {/*</TableCell>*/}
                            <TableCell className='tableCell'>{row.name}</TableCell>
                            <TableCell className='tableCell'>{row.calories}</TableCell>
                            <TableCell className='tableCell'>{row.fat}</TableCell>
                            <TableCell className='tableCell'>{row.carbs}</TableCell>
                            <TableCell className='tableCell'>{row.protein}</TableCell>
{/*                            <TableCell className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></TableCell>*/}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TheTable