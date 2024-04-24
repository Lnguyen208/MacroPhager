
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'username', headerName: 'Username', width: 230, renderCell: (params)=>{
            return (
                <div className='cellwithimage'>
                    <img className='cellimage' src={params.row.img} alt=''></img>
                    {params.row.username}
                </div>)
        }
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', width: 100 },
    {
        field: 'status', headerName: 'Status', width: 160, renderCell: (params) => {
            return (
                <div className={`cellwithstatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    }
];

export const userRows = [
    {
        id: 1,
        username: 'user1',
        img: 'https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg',
        status: 'Active',
        email: 'u1@gmail.com',
        age: 20,
    },
    {
        id: 2,
        username: 'user2',
        img: 'https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg',
        status: 'Pending',
        email: 'u2@gmail.com',
        age: 23,
    },
    {
        id: 3,
        username: 'user3',
        img: 'https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg',
        status: 'Inactive',
        email: 'u3@gmail.com',
        age: 26,
    },
    {
        id: 4,
        username: 'user4',
        img: 'https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg',
        status: 'Active',
        email: 'u4@gmail.com',
        age: 19,
    },
    {
        id: 5,
        username: 'user5',
        img: 'https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg',
        status: 'Active',
        email: 'u5@gmail.com',
        age: 210,
    },
    {
        id: 6,
        username: 'user6',
        img: 'https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg',
        status: 'Active',
        email: 'u6@gmail.com',
        age: 16,
    },
    {
        id: 7,
        username: 'user7',
        img: 'https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg',
        status: 'Inactive',
        email: 'u1@gmail.com',
        age: 20,
    },
    {
        id: 8,
        username: 'user8',
        img: 'https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg',
        status: 'Pending',
        email: 'u2@gmail.com',
        age: 23,
    },
    {
        id: 9,
        username: 'user9',
        img: 'https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg',
        status: 'Inactive',
        email: 'u3@gmail.com',
        age: 26,
    },
    {
        id: 10,
        username: 'user10',
        img: 'https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg',
        status: 'Active',
        email: 'u4@gmail.com',
        age: 19,
    },
    {
        id: 11,
        username: 'user11',
        img: 'https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg',
        status: 'Active',
        email: 'u5@gmail.com',
        age: 210,
    },
    {
        id: 12,
        username: 'user12',
        img: 'https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg',
        status: 'Active',
        email: 'u6@gmail.com',
        age: 16,
    },

];

export const foodColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'foodname', headerName: 'Food Name', width: 230 },
    { field: 'serving', headerName: 'Serving (g)', width: 230 },
    { field: 'calories', headerName: 'Calories', width: 100 },
    { field: 'fats', headerName: 'Fats (g)', width: 160 },
    { field: 'carbs', headerName: 'Carbs (g)', width: 160 },
    { field: 'proteins', headerName: 'Proteins (g)', width: 160 },
];

export const foodRows = [
    {
        id: 1,
        foodname: 'Chicken Sandwich',
        serving: 80,
        calories: 334,
        fats: 15,
        carbs: 50,
        proteins: 30,
    },
    {
        id: 2,
        foodname: 'Waffle Fries',
        serving: 120,
        calories: 500,
        fats: 20,
        carbs: 160,
        proteins: 2,
    },
    {
        id: 3,
        foodname: 'Jackfruit, raw',
        serving: 200,
        calories: 300,
        fats: 0,
        carbs: 100,
        proteins: 5,
    },
    {
        id: 4,
        foodname: 'Simply Protein, Peanut Butter',
        serving: 40,
        calories: 150,
        fats: 5,
        carbs: 14,
        proteins: 15,
    },
    {
        id: 5,
        foodname: 'Simply Protein, Lemon',
        serving: 40,
        calories: 150,
        fats: 5,
        carbs: 14,
        proteins: 15,
    },
];