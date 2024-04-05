const User = {
    _email: "soam@soam.in", // _(underscore) represent private property
    _password: "abc123",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    },
};


const tea = Object.create(User) //factory function

console.log(tea.email);

// getter and setter 