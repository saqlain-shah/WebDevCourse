import img from './images/bimage.jpg';
import MyButton from './components/counter';
import BasicTextFields from "./components/inputField"
import BoxSx from './components/calculator';

function App() {
  return (
<>
<div
style={{
    display: 'flex',
    alignItems: 'center',
     justifyContent: 'center',
     height: '100vh',
    }}>
<BoxSx/>
</div>

</>

  
/* <BasicTextFields/> */



    // <div   style={{
    //   backgroundImage: `url(${img})`,
    //   // backgroundImage: `url(${externalImage})`,
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    //   height: "800px"
    // }}>


    // <div  
    // style={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: '100vh',
    //   }}>
    // <MyButton/>
    // <input/>
    // </div>


    // </div>
  );
}

export default App;
