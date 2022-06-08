const repositoryName = 'unform2';

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul className="ul">
        <li className="li">
          <strong>{repositoryName}</strong>
          <p>Form in React</p>

          <a href="">
            Acessar repositório
          </a>
        </li>

        <li className="li">
          <strong className="unform"></strong>
          <p>Form in React</p>

          <a href="">
            Acessar repositório
          </a>
        </li>

        <li className="li">
          <strong className="unform"></strong>
          <p>Form in React</p>

          <a href="">
            Acessar repositório
          </a>
        </li>
      </ul>
    </section>
  )
}