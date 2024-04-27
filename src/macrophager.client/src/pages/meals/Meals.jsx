
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
                                    <div className='mealCardTitle'>Sushi Dinner</div>
                                    <div id={1} className='editButton' onClick={(e) => { alert(e.target.id); console.log(e.target) }}>Details</div>
                                </div>
                                <PiChart title={"Macro Distribution"}></PiChart>
                                <div className='addButton' onClick={(e) => { alert(e.target.className + ' clicked'); console.log(e.target); }}>Add to Meal to Daily Log</div>
                            </div>
                            <div className='mealCard'>
                                <div className='mealCardTop'>
                                    <div className='mealCardTitle'>Tofu Dinner</div>
                                    <div id={1} className='editButton' onClick={(e) => { alert(e.target.id); console.log(e.target) }}>Details</div>
                                </div>
                                <PiChart title={"Macro Distribution"}></PiChart>
                                <div className='addButton' onClick={(e) => { alert(e.target.className + ' clicked'); console.log(e.target); }}>Add to Meal to Daily Log</div>
                            </div>
                            <div className='mealCard'>
                                <div className='mealCardTop'>
                                    <div className='mealCardTitle'>Masala Dinner</div>
                                    <div id={1} className='editButton' onClick={(e) => { alert(e.target.id); console.log(e.target) }}>Details</div>
                                </div>
                                <PiChart title={"Macro Distribution"}></PiChart>
                                <div className='addButton' onClick={(e) => { alert(e.target.className + ' clicked'); console.log(e.target); }}>Add to Meal to Daily Log</div>
                            </div>
                            <div className='mealCard'>
                                <div className='mealCardTop'>
                                    <div className='mealCardTitle'>Falafel Dinner</div>
                                    <div id={1} className='editButton' onClick={(e) => { alert(e.target.id); console.log(e.target) }}>Details</div>
                                </div>
                                <PiChart title={"Macro Distribution"}></PiChart>
                                <div className='addButton' onClick={(e) => { alert(e.target.className + ' clicked'); console.log(e.target); }}>Add to Meal to Daily Log</div>
                            </div>
                            <div className='mealCard'>
                                <div className='mealCardTop'>
                                    <div className='mealCardTitle'>Cheese Toast Dinner</div>
                                    <div id={1} className='editButton' onClick={(e) => { alert(e.target.id); console.log(e.target) }}>Details</div>
                                </div>
                                <PiChart title={"Macro Distribution"}></PiChart>
                                <div className='addButton' onClick={(e) => { alert(e.target.className + ' clicked'); console.log(e.target); }}>Add to Meal to Daily Log</div>
                            </div>
                            <div className='mealCard'>
                                <div className='mealCardTop'>
                                    <div className='mealCardTitle'>Vegetarian Dinner</div>
                                    <div id={1} className='editButton' onClick={(e) => { alert(e.target.id); console.log(e.target) }}>Details</div>
                                </div>
                                <PiChart title={"Macro Distribution"}></PiChart>
                                <div className='addButton' onClick={(e) => { alert(e.target.className + ' clicked'); console.log(e.target); }}>Add to Meal to Daily Log</div>
                            </div>
                            <div className='mealCard'>
                                <div className='mealCardTop'>
                                    <div className='mealCardTitle'>Vegan Dinner</div>
                                    <div id={1} className='editButton' onClick={(e) => { alert(e.target.id); console.log(e.target) }}>Details</div>
                                </div>
                                <PiChart title={"Macro Distribution"}></PiChart>
                                <div className='addButton' onClick={(e) => { alert(e.target.className + ' clicked'); console.log(e.target); }}>Add to Meal to Daily Log</div>
                            </div>
                            <div className='mealCard'>
                                <div className='mealCardTop'>
                                    <div className='mealCardTitle'>Sichuan Dinner</div>
                                    <div id={1} className='editButton' onClick={(e) => { alert(e.target.id); console.log(e.target) }}>Details</div>
                                </div>
                                <PiChart title={"Macro Distribution"}></PiChart>
                                <div className='addButton' onClick={(e) => { alert(e.target.className + ' clicked'); console.log(e.target); }}>Add to Meal to Daily Log</div>
                            </div>
                            <div className='mealCard'>
                                <div className='mealCardTop'>
                                    <div className='mealCardTitle'>Ramen Dinner</div>
                                    <div id={1} className='editButton' onClick={(e) => { alert(e.target.id); console.log(e.target) }}>Details</div>
                                </div>
                                <PiChart title={"Macro Distribution"}></PiChart>
                                <div className='addButton' onClick={(e) => { alert(e.target.className + ' clicked'); console.log(e.target); }}>Add to Meal to Daily Log</div>
                            </div>
                            <div className='mealCard'>
                                <div className='mealCardTop'>
                                    <div className='mealCardTitle'>Pho Dinner</div>
                                    <div id={1} className='editButton' onClick={(e) => { alert(e.target.id); console.log(e.target) }}>Details</div>
                                </div>
                                <PiChart title={"Macro Distribution"}></PiChart>
                                <div className='addButton' onClick={(e) => { alert(e.target.className + ' clicked'); console.log(e.target); }}>Add to Meal to Daily Log</div>
                            </div>
                            <div className='mealCard'>
                                <div className='mealCardTop'>
                                    <div className='mealCardTitle'>Breakfast for Dinner</div>
                                    <div id={1} className='editButton' onClick={(e) => { alert(e.target.id); console.log(e.target) }}>Details</div>
                                </div>
                                <PiChart title={"Macro Distribution"}></PiChart>
                                <div className='addButton' onClick={(e) => { alert(e.target.className + ' clicked'); console.log(e.target); }}>Add to Meal to Daily Log</div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='mealDetailTop'>
                            <div className='mealTitle'>Sushi Dinner</div>
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
                                <li id={2} onClick={(e) => { alert(e.target.id + ' clicked'); console.log(e.target); }}>
                                    <span id={2}>Apple, Fuji, raw</span>
                                    <DeleteOutlinedIcon id='trashcan2' className='icon'></DeleteOutlinedIcon>
                                </li>
                                <li id={2} onClick={(e) => { alert(e.target.id + ' clicked'); console.log(e.target); }}>
                                    <span id={2}>Pineapple, raw</span>
                                    <DeleteOutlinedIcon id='trashcan2' className='icon'></DeleteOutlinedIcon>
                                </li>
                                <li id={2} onClick={(e) => { alert(e.target.id + ' clicked'); console.log(e.target); }}>
                                    <span id={2}>Peaches, yellow, raw</span>
                                    <DeleteOutlinedIcon id='trashcan2' className='icon'></DeleteOutlinedIcon>
                                </li>
                                <li id={2} onClick={(e) => { alert(e.target.id + ' clicked'); console.log(e.target); }}>
                                    <span id={2}>Grapes, red, table, raw</span>
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
