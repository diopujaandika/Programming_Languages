//ARRAY IN OBJECT
    //Contoh 1.
    const user = {
        name: 'Dio',
        age: 24,
        hobbies: ['Coding', 'Reading', 'Drawing']
    };
    console.log(user);
    console.log(user.hobbies);

//OBJECT IN ARRAY
    //Contoh 1 
    const users = [
        {
            name: 'Dio',
            age: 24
        },
        {
            name: 'Puja',
            age: 23,
        },
        {
            name: 'Andika',
            age: 22
        }
    ];
    console.log(users);
    console.log(users[0]);
    console.log(users[0].name);

//OBJECT IN ARRAY IN OBJECT
    //Contoh 1
    const school = {
        name: 'Universitas Indoenesia',
        location: 'Jakarta',
        students: [
            {
                name: 'Dio Puja Andika',
                major: 'Computer'
            },
            {
                nama: 'Diva Puja Kiranzi',
                major: 'Medical'
            }
        ]
    }
    console.log(school.students[0].major);