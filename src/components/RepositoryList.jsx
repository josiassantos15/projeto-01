import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  description: 'Forms in React',
  link: 'https://github.com/josiassantos15'
}

export function RepositoryList() {
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