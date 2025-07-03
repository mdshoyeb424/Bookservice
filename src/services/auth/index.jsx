import { getUsers, setUser } from "../../data/logindata";
import { logout, setAuth } from "../../utils/Authentication";
import generateToken from "../../utils/generateToken";
import { showToast } from "../../utils/toaster"

export const loginService = (data) => {
    try {
        const users = getUsers();
        const user = users?.find((u => u.email == data.email && u.password == data.password));
        console.log(data);
        if (!user) {
            showToast("error", "Credentials is not match")
            return;
        }
        const getToken = generateToken(32);
        setAuth({ token: getToken, user: user });
        return user;
    } catch (error) {
        showToast("error", "something went wrong");
    }
}

export const registerService = (data) => {
    try {
        const users = getUsers();
        if(data.password!=data?.cnfPassword){
            showToast("error", "Password is not match");
            return;
        }
        if(users&&users.find((u)=>u.email===data.email)){
            showToast("error", "Email already exist");
            return;
        }
        setUser(data);
        showToast("success", "Account has been created successfully !");
    } catch (error) {
        showToast("error", "something went wrong");
    }
}

export const logoutService = () => {
try {
    logout();
    return true;
} catch (error) {
     showToast("error", "something went wrong");
     return false;

}
}