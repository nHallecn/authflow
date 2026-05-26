export  const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

const USER_DATABASE = [];

export async function f_login(email, login){
    await delay();

    const user = USER_DATABASE.find((u)=>u.email===email && u.password === password);

    if(!user) return 'Incorrect usename or password';

    const {password:_pw, Safeuser} = user;

    return Safeuser;
}

export async function f_signup(name, email, password){
    await delay();

    const user = USER_DATABASE.find((u)=>u.email===email);

    if(user) return 'User with email already exist';

    const newUser = {
        id: String(new Date.now()), name, email,
    }
    USER_DATABASE.push(...newUser, password);

    return newUser;
}

export async function forgotPassword(email){
    delay(800);

    return {email};
}
