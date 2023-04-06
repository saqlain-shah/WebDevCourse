import IMG from '../images/spider.png';
import MyButton from './counter';

export default function Profile(){
return(

    <div
      style={{
        backgroundImage: `url(${IMG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '800px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
        <MyButton/>



    
</div>


)
    

}