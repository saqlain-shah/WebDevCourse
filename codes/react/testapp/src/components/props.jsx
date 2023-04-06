function Name({ props }) {
  return <h2>Mern Stack Developer:{props}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Name props={"zakir"} />
      <Name props={"Tehzeeb"} />
      <Name props={"Shehbaz"} />
    </>
  );
}
