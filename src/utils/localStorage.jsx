const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Prepare report",
                "description": "Prepare the monthly sales report",
                "date": "2024-10-20",
                "category": "Sales"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Team meeting",
                "description": "Attend the team meeting and provide updates",
                "date": "2024-10-18",
                "category": "Meetings"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Client follow-up",
                "description": "Follow up with clients on feedback",
                "date": "2024-10-21",
                "category": "Client Relations"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Review budget",
                "description": "Review the project budget and finalize it",
                "date": "2024-10-22",
                "category": "Finance"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Develop feature",
                "description": "Develop the new search feature for the website",
                "date": "2024-10-25",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Code review",
                "description": "Perform a code review for the latest release",
                "date": "2024-10-19",
                "category": "Development"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Fix bug",
                "description": "Fix the critical bug in the payment module",
                "date": "2024-10-18",
                "category": "Bug Fixing"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Update documentation",
                "description": "Update the project documentation",
                "date": "2024-10-24",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Test new feature",
                "description": "Test the newly developed feature on staging",
                "date": "2024-10-23",
                "category": "Testing"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Attend training",
                "description": "Complete the mandatory security training",
                "date": "2024-10-20",
                "category": "Training"
            }
        ]
    }
]

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}

