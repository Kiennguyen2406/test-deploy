import { FETCH_USER_SUCCESS, LOGIN_SUCCESS , LOGIN_FAILED} from "./action";

// khởi tạo giá trị mặc định cho state gốc.

const initialState = {
    users: [],
    userlogined: {},
    loginFailed: false
};

// Khởi tạo reducer
const rootReducer = (state = initialState, action) => {
    // Handle các actions gửi lên
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, userlogined: action.payload, loginFailed: false };
        case FETCH_USER_SUCCESS:
            return { ...state, users: action.payload };
        case LOGIN_FAILED:
            return {...state, loginFailed: true};
        default:
            return state;
    }
};
export default rootReducer;