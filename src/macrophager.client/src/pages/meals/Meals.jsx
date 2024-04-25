
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
                                <div className='addButton'>Add to Meal Daily Log</div>
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
                                <li id={1} onClick={(e) => { alert(e.target.id + ' clicked'); console.log(e.target); } }>
                                    <span id={1}>Pineapple, raw</span>
                                        <DeleteOutlinedIcon id='trashcan' className='icon'></DeleteOutlinedIcon>
                                    </li>
                                <li onClick={(e) => { alert(e.target.id + ' clicked'); console.log(e.target); }}>
                                    <span id={2}>Jackfruit, raw</span>
                                        <DeleteOutlinedIcon className='icon'></DeleteOutlinedIcon>
                                    </li>
                                <li onClick={(e) => { alert(e.target.id + ' clicked'); console.log(e.target); }}>
                                    <span id={3}>Chicken, roasted</span>
                                        <DeleteOutlinedIcon className='icon'></DeleteOutlinedIcon>
                                    </li>
                                    <li>
                                    <span id={4}>Avocado, raw</span>
                                        <DeleteOutlinedIcon className='icon'></DeleteOutlinedIcon>
                                    </li>
                                    <li>
                                        <span>Coffee, black</span>
                                        <DeleteOutlinedIcon className='icon'></DeleteOutlinedIcon>
                                    </li>
                                    <li>
                                        <span>Rice, White, cooked</span>
                                        <DeleteOutlinedIcon className='icon'></DeleteOutlinedIcon>
                                    </li>
                                <li>
                                    <span>Bread, mountain, whole wheat</span>
                                    <DeleteOutlinedIcon className='icon'></DeleteOutlinedIcon>
                                </li>
                                <li>
                                    <span>Spinach, raw</span>
                                    <DeleteOutlinedIcon className='icon'></DeleteOutlinedIcon>
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
