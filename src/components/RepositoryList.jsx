import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useEffect } from "react";

// https://api.github.com/users/josiassantos15/repos

const repository = {
  name: "unform",
  description: 'Forms in React',
  link: 'https://github.com/josiassantos15'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/josiassantos15/repos')
      .then(response => response.json)
      .then(data => console.log(data) )
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul className="ul">
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}