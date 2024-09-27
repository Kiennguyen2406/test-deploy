import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({username: '', password: ''});


    // Xử lí sự kiện trong components Login

    const userlogined = useSelector(state => state.userlogined);
    const loginFailed = useSelector(state => state.loginFailed); //Lay gia tri cua state

    const setValueForUser = (key, value) => { //handle gias tri tu input
        const newVal = {...user, [key]: value};
        setUser(newVal);
    };

    const login = () => {
        dispatch({type: 'LOGIN', payload: user});
    };

    //tao ham login co nhiem vu goi dispatch voi action login,payload la thong tin user
    useEffect(() => {
        console.log(loginFailed);
        if (userlogined.username) {
            navigate('/users');
        }
    }, [userlogined.username]);//de navigate toi route"/user"neu thong tin dang nhap dung

    return (
        <form>
            <label>User name</label>
            <input id="username" onChange={(e) => setValueForUser("username", e.target.value)} type="text"/>
            <label>Password</label>
            <input type="password" id="password" onChange={(e) => setValueForUser("password", e.target.value)}/>
            <button type="button" onClick={() => {
                login();
            }}
            >
                login
            </button>
            {loginFailed ? <p>Login failed</p> : <p>{loginFailed}</p>}
        </form>
    );
}

export default Login;