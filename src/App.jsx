import {useState} from 'react'
import Content from "./components/Content.jsx";
import './App.css'

function App() {
    const [display, setDisplay] = useState(false);
    const ShowContent = () => {
        setDisplay(true);
    }
    const CloseContent = () => {
        setDisplay(false);
    }
    let content;
    let buttonText;
    let buttonFunction;
    if (display) {
        content = <Content/>;
        buttonText = 'Đóng giới thiệu';
        buttonFunction = CloseContent;
    } else {
        buttonText = 'Xem giới thiệu';
        buttonFunction = ShowContent;
    }
    return (
        <div>
            <h1>Conditional rendering</h1>
            <button onClick={buttonFunction}>{buttonText}</button>
            {content}
        </div>
    )
}

export default App
