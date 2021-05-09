import {authReducer, InitialStateType, setIsLoggedInAC} from "./authReducer";

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        isLoggedIn: false
    }
})

test("isLoggedIn should be set", () => {

    const endState = authReducer(startState, setIsLoggedInAC({value: true}))

    expect(endState.isLoggedIn).toBeTruthy()

})