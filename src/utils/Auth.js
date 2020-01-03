const Auth = {
    isAuthenticated: false,
    authenticate() {
        this.isAuthenticated = true;
        console.log('Authenticated');
    },
    signOut() {
        this.isAuthenticated = false;
        console.log('Logged out!');
    },
    getAuth() {
        return this.isAuthenticated;
    }
}

export default Auth;