
import './Meals.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import PiChart from '../../components/pichart/PiChart';
import CircularProgress from '@mui/material/CircularProgress';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Meals = () => {
    // Max Characters in Meal Title = 20
    // Max Characters in Post Title = 50

    return (
        <div className='Meals' >
            <Sidebar></Sidebar>
            <div className='mealsContainer'>
                <Navbar></Navbar>
                <div className='top'>
                    <div className='left'>
                        <div className='mealCards'>
                            <div className='mealCard'>
                                <div className='mealCardTop'>
                                    <div className='mealCardTitle'>12345678901234567890</div>
                                    <div id={1} className='editButton' onClick={(e) => { alert(e.target.id); console.log(e.target) }}>Details</div>
                                </div>
                                <PiChart title={"Macro Distribution"}></PiChart>
                                <div className='addButton' onClick={(e) => { alert(e.target.className + ' clicked'); console.log(e.target); }}>Add to Meal to Daily Log</div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='mealDetailTop'>
                            <div className='mealTitle'>12345678901234567890</div>
                            <div className='detailTitle'>Saved Food List</div>
                        </div>
                        
                        <div className='center'>
                            <ul>
                                <li id={1} onClick={(e) => { alert(e.target.id + ' clicked'); console.log(e.target); }}>
                                    <span id={1}>Fruit of the Jack, raw</span>
                                        <DeleteOutlinedIcon id='trashcan1' className='icon'></DeleteOutlinedIcon>
                                </li>
                                <li id={2} onClick={(e) => { alert(e.target.id + ' clicked'); console.log(e.target); }}>
                                    <span id={2}>Jackfruit, raw</span>
                                    <DeleteOutlinedIcon id='trashcan2' className='icon'></DeleteOutlinedIcon>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Meals
