function Person({ name, age, hobbies }) {
  const MAX_NAME_LENGTH_TO_SHOW = 6;
  const voteText = age >= 18 ? "Go vote!" : "Must be 18!";
  
  const hobbiesLIs = hobbies.map((hobby, index) => (
    <li key={index}>{hobby}</li>
  ));

  return (
    <div>
      <p>Learn some information about {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</p>
      <ul>
        <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
        <li>Age: {age}</li>
        <li>
          Hobbies:
          <ul>{hobbiesLIs}</ul>
        </li>
      </ul>
      <h3>{voteText}</h3>
    </div>
  );
}
