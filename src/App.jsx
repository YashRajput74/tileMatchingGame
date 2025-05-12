import Header from "./components/Header/Header"
import GameBoard from "./components/GameBoard/GameBoard"
import "./App.css"

export default function App(){
    return (
        <div className="app-container">
            <Header/>
            <GameBoard/>
        </div>
    )
}