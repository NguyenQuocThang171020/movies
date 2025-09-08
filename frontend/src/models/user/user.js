class User {
    constructor() {
        this.name = null;
        this.password = null;
    }

    setUser(data) {
        this.name = data.name;
        this.password = data.password;
    }

    setUserLoginSuccess(data) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.isLoggedIn = true;
    }

    clearUser() {
        this.id = null;
        this.name = null;
        this.email = null;
        this.isLoggedIn = false;
    }
}
export default User;