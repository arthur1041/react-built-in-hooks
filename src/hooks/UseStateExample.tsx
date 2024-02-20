import { useState } from 'react';

type PersonType = {
  firstName?: string;
  lastName?: string;
  age?: number;
};

export const UseStateExample: React.FC = () => {
  const [firstName, setFirstName] = useState('Arthur');
  const [lastName, setLastName] = useState('Cruz');
  const [count, setCount] = useState(0);

  const [person, setPerson] = useState<PersonType>({
    firstName: undefined,
    lastName: undefined,
    age: undefined
  });
  return (
    <div>
      <p>
        Name: {person.firstName} {person.lastName}
        <br />
        Age: {person.age}
        <br />
        Counter: {count}
      </p>
      <div>
        <input
          placeholder="First name"
          onChange={(event) => {
            // setFirstName(event.target.value);
            setPerson((prevValue: PersonType): PersonType => {
              return { ...prevValue, firstName: event.target.value };
            });
          }}
        />
      </div>
      <div>
        <input
          placeholder="Last name"
          onChange={(event) => {
            // setLastName(event.target.value);
            setPerson((prevValue: PersonType): PersonType => {
              return { ...prevValue, lastName: event.target.value };
            });
          }}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => {
            setPerson((prevValue: PersonType): PersonType => {
              return { ...prevValue, age: Number(event.target.value) };
            });
          }}
        />
      </div>
      <button
        onClick={() =>
          setCount((prev) => {
            return prev + 1;
          })
        }
      >
        Click to increase
      </button>
    </div>
  );
};
