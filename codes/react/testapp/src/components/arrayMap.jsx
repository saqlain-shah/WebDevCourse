import imageOne from "./../images/ansari.png"
import imageTwo from "./../images/bgImage.jpg"
import imageThree from "./../images/bimage.jpg"

 const people = [{
    id: 0,
    name: 'Shehbaz Ali',
    Course: 'MERN Stack',
    Intrest: 'Programming',
    
    imageId: `${imageOne}`
  }, 
  {
    id: 1,
    name: 'Zakir Ansari',
    Course: 'MERN Stack',
    Intrest: 'Teaching',
    imageId: `${imageTwo}`
  },
   {
    id: 2,
    name: 'Tehzeb Hassan',
    Course: 'MERN Stack',
    Intrest: 'Designing',
    imageId: `${imageThree}`
  }];

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={person.imageId}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.Course + ' '}
        known for {person.Intrest}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Mern Stack Developer</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
