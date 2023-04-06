 function Cup({ Hotel }) {
    return <h2>skardu hotels: #{Hotel}</h2>;
  }
  
  export default function TeaSet(){
    return (
      <>
        <Cup Hotel={'seven star hotel'} />
        <Cup Hotel={'three star hotel'} />
        <Cup Hotel={'new one hotel'} />
      </>
    );
  }