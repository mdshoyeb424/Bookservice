import Cookies from 'js-cookie';

export const getAuth = () => {
    try {
        return JSON.parse(Cookies.get('auth') || '');
    } catch (error) {
        console.log(error)
        return;
    }
}

export const setAuth = (data) => {
    try {
        const expireInMinutes = 5;
        const date = new Date(new Date().getTime() + expireInMinutes * 60 * 1000);
        Cookies.set("auth", JSON.stringify(data), { expires: date })
        return
    } catch (error) {
        console.log(error)
    }
}

export const logout = () => {
    try {
        Cookies.remove("auth");
    } catch (error) {
        console.log(error)
    }
}