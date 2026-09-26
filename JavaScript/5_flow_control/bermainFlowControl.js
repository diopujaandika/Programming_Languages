const users = [
    {
        id: 1,
        name: "Dio",
        age: 24,
        role: "admin",
        status: "active",
        hobbies: ["coding", "reading"]
    },
    {
        id: 2,
        name: "Dina",
        age: 23,
        role: "user",
        status: "active",
        hobbies: ["music", "reading"]
    },
    {
        id: 3,
        name: "Budi",
        age: 17,
        role: "user",
        status: "inactive",
        hobbies: ["gaming"]
    },
    {
        id: 4,
        name: "Andi",
        age: 30,
        role: "moderator",
        status: "active",
        hobbies: ["coding", "gaming"]
    }
];

function checkStatus(status) {
    if(user.status === 'active') {
        return "USER ACTIVE";
    } else {
        return "USER TIDAK ACTIVE"
    }
}

const getRoleDescription = (role) => {
    switch (role) {
        case 'admin':
            return 
    }
}