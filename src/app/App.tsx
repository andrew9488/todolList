import React, {useEffect} from 'react';
import './App.css';
import {AppBar, Button, CircularProgress, Container, IconButton, LinearProgress, Toolbar} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {TodoLists} from "../features/Todolists";
import {useSelector} from "react-redux";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";
import {Login} from "../features/Login";
import {Redirect, Route, Switch} from 'react-router-dom';
import {authActions, authSelectors} from "../features/Login";
import {appActions, appSelectors} from "../features/Application";
import {useActions} from "../utils/utils-redux";
import {Error} from "../components/ErrorPage/ErrorPage";


type AppPropsType = {}

export const App: React.FC<AppPropsType> = () => {

    const isInitialized = useSelector(appSelectors.isInitializedSelector)
    const appStatus = useSelector(appSelectors.appStatusSelector)
    const isLoggedIn = useSelector(authSelectors.isLoggedInSelector)
    const {initializeApp} = useActions(appActions)
    const {logout} = useActions(authActions)

    useEffect(() => {
        if (!isInitialized) {
            initializeApp()
        }
    }, [])

    const logoutCallback = () => {
        logout()
    }

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress color="secondary" size={150}/>
        </div>
    }

    return (
        <div className="App">
            <AppBar position="static">
                <ErrorSnackbar/>
                <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
                    {isLoggedIn && <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>}
                    {isLoggedIn && <Button color="inherit" onClick={logoutCallback}>Logout</Button>}
                </Toolbar>
                {appStatus === "loading" && <LinearProgress color="secondary"/>}
            </AppBar>
            <Container fixed>
                <Switch>
                    <Route exact path="/" render={() => <TodoLists demo={false}/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                    <Route path="/404" render={() => <Error/>}/>
                    <Redirect from="*" to="/404"/>
                </Switch>
            </Container>
        </div>
    );
}

