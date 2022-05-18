
import './App.css';
import Heading from './components/Heading';
import HeadingB from './components/HeadingB';

 let style1 = {
  listStyleType: 'circle',
 }

function App() {
  return (
    
    <>
    
    <Heading></Heading>
    <HeadingB></HeadingB>
    <ul><li style={{listStyleType: 'square'}}>Samsung</li>
    <li style={{listStyleType: 'square'}}>HTC</li>
    <li>Micromax</li>
    <li style={style1}>Apple</li>
    </ul>

    
    </>

    );
}

export default App;
