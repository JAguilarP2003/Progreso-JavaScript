const getName = info => ({
    showName() {
        console.log(`Name: ${info.name}`);
    }
});

const saveEmail = info => ({
    addEmail(email) {
        console.log(`Saving ${info.name}'s Email`);
        info.email = email;
    }
});

const getEmail = info => ({
    showEmail() {
        console.log(`Email: ${info.email}`);
    }
});

const getCompany = info => ({
    showCompany() {
        console.log(`Company: ${info.company}`);
    }
});

const getPosition = info => ({
    showPosition() {
        console.log(`Position: ${info.position}`);
    }
})





function Customer(name, email, company) {
    let info = {
        name,
        email,
        company
    }

    return Object.assign(
        info,
        getName(info),
        saveEmail(info),
        getEmail(info),
        getCompany(info)
    )
}

function Employee(name, email, position) {
    let info = {
        name,
        email,
        position
    }
    
    return Object.assign(
        info,
        getName(info),
        saveEmail(info),
        getEmail(info),
        getPosition(info)
    )
}





const customer = Customer('Juan', null, 'SENA');
customer.showName();
customer.addEmail('j@gmail.com');
customer.showEmail();
customer.showCompany();

console.log('===================');

const employee = Employee('David', null, 'Junior Dev');
employee.showName();
employee.addEmail('d@gmail.com');
employee.showEmail();
employee.showPosition();