import { people } from './array';


export default function List() {
    const listItems = people.map(person =>
        <li key={person.id}>
          
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
