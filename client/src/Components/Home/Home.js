import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() { 
        return (
            <div>
                <h1>Home page</h1>
                <Link to="/tictactoelocal"><button>TicTacToe Local</button></Link>
                <Link to="/tictactoeonline"><button>TicTacToe Online</button></Link>
            </div>
        );
    }
}
 
export default Home;