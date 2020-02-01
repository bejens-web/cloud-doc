import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FileSearch from "./components/FileSearch";

const App: React.FC = () => {
    return (
        <div className="App container-fluid">
            <div className="row">
                <div className="col-3 bg-danger left-panel">
                    <FileSearch/>
                </div>
                <div className="col-9 bg-primary right-panel">
                    test2
                </div>
            </div>
        </div>
    );
};

export default App;
