import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { Routes, Route, Link, Redirect, BrowserRouter} from "react-router-dom";

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                This is homepage
<BrowserRouter>
                <Routes>
                        This is homepage
                    <Route path = '/join' element = {<RoomJoinPage/>} />
                    <Route path = '/create' element = {<CreateRoomPage/>} />

                </Routes>
</BrowserRouter>
            </div>

        );
    }
}