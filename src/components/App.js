import React from 'react';
import Body from './Body';
import getFooter from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';


const App = () => {
    return(
        <div>
            <Header
            
            />
            <Sidebar/>
            <Body/>
            <h2>{getFooter()}</h2>
        </div>
    )
}

export default App;