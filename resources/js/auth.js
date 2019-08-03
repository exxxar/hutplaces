class Auth {
    constructor() {
        this.token = window.localStorage.getItem('token');

        let userData = window.localStorage.getItem('user');

        this.user = userData&&userData!='undefined' ? JSON.parse(userData) : null;

        if (this.token&&this.token!=undefined) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;

            this.getUser();


        }
    }

    login(token, user) {
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user', JSON.stringify(user));

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

        this.token = token;
        this.user = user;

        Event.$emit('userLoggedIn');
    }

    retriveUser(token) {
        this.token=token;
        window.localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        api.call('get', '/get-user')
            .then(({data}) => {
                this.user = data;
                window.localStorage.setItem('user', JSON.stringify(this.user));
                Event.$emit('userLoggedIn');
            });


    }
    getUser() {

        api.call('get', '/get-user')
            .then(({data}) => {
                this.user = data;

            });
    }

    check() {
        return !!this.token;
    }

    logout() {
        api.call('get', 'logout')
            .then(({data}) => {

                window.localStorage.removeItem('token');
                window.localStorage.removeItem('user');

                axios.defaults.headers.common['Authorization'] = null;

                this.token = null;
                this.user = null;

                Event.$emit('userLoggedOut');
            });
    }
}

export default Auth;



