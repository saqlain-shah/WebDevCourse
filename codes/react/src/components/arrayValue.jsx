import imgaee from "./../images/bgImage.jpg"
import imgaee1 from "./../images/mypic.jpg"
import imgaee2 from "./../images/bgImage.jpg"

export const people = [{
    id: 0,
    name: 'Zakir',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: `${imgaee}`
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: `${imgaee1}`
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: `${imgaee2}`
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
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
