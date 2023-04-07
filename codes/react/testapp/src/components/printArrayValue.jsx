
 const people = [{
    id: 0,
    name: 'Imad wasim',
    profession: 'cricketer',
    accomplishment: 'left arm spinner',
    imageId: '1.jpg'
  }, {
    id: 1,
    name: 'Shadaab Khan',
    profession: 'cricketer',
    accomplishment: 'right off spin',
    imageId: '2.jpg'
  }, {
    id: 2,
    name: 'Baber Azam',
    profession: 'cricketer',
    accomplishment: 'Pakistan Top ranked batsman',
    imageId: '3.jpg'
  }];
  
export default function List() {
  const listItems = people.map(person =>
    <li  key={person.id}>
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
      <h1>Pakistan Top Cricketers</h1>
      <ul>{listItems}</ul>
    </article>
  );
  
}