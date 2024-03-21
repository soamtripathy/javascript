class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }
    static createId() {
        return `123`;
    }
}

const soam = new User("Soumya");

// console.log(soam.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iPhone = new Teacher("Iphone", "i@phone.com");

console.log(iPhone.createId());
