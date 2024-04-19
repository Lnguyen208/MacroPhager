import './TheTable.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    { name: 'Frozen Yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, status: 'Served'},
    { name: 'Ice Cream', calories: 200, fat: 6.0, carbs: 24, protein: 4.0, status: 'Ordered'},
    { name: 'Frozen Custard', calories: 300, fat: 6.0, carbs: 24, protein: 4.0, status: 'Served' },
    { name: 'Soft Serve', calories: 100, fat: 6.0, carbs: 24, protein: 4.0, status: 'Served' },
    { name: 'Ice Cream Cake', calories: 250, fat: 6.0, carbs: 24, protein: 4.0, status: 'Out-of-Stock'},
];

const TheTable = () => {

    return (
        <TableContainer component={Paper} className='Table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Dessert (100g serving)</TableCell>
                        <TableCell className='tableCell'>Calories</TableCell>
                        <TableCell className='tableCell'>Fat&nbsp;(g)</TableCell>
                        <TableCell className='tableCell'>Carbs&nbsp;(g)</TableCell>
                        <TableCell className='tableCell'>Protein&nbsp;(g)</TableCell>
                        <TableCell className='tableCell'>Status</TableCell>
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
                            <TableCell className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TheTable