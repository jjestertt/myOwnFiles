import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import style from './Hero.module.css';
import Menu from './Menu/Menu.jsx';
import Profile from './Profile/Profile.jsx';
import Messages from './Messages/Messages.jsx';
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Hero = (props) => {
    return (
        <BrowserRouter>
            <section className={style.hero}>
                <div className="container">
                    <div className={style.wrapper}>
                        <Menu friends={props.state.friends}/>
                        <div className={style.content}>
                            {/*ProfilePage*/}
                            <Route path="/profile" render={() => <Profile
                                dispatch={props.dispatch}
                                profilePage={props.state.profilePage}

                            />
                            }/>

                            {/*MessagePage*/}
                            <Route path="/messages" render={() => <Messages
                                dispatch={props.dispatch}
                                dialogs={props.state.messagesPage.dialogs}
                                messagePage={props.state.messagesPage}
                            />}
                            />

                            {/*NewsPage*/}
                            <Route path="/news" component={News}/>

                            {/*MusicPage*/}
                            <Route path="/music" component={Music}/>

                            {/*SettingsPage*/}
                            <Route path="/settings" component={Settings}/>
                        </div>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    );
}

export default Hero;