import { projects } from './data/projects'
import './App.css'

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="prompt">
          <span className="prompt-user">guest@incompletebiped</span>
          <span className="prompt-sep">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-sep">$</span> whoami
        </p>
        <h1>incompletebiped</h1>
        <p className="tagline">
          Building things, mostly in public. This page is a work in progress — projects below.
        </p>
        <nav className="links">
          <a href="https://github.com/incompletebiped" target="_blank" rel="noopener noreferrer">
            github
          </a>
        </nav>
      </header>

      <main>
        <h2 className="section-title">projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <article className="card" key={project.name}>
              <h3>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p>{project.description}</p>
              {project.tags && project.tags.length > 0 && (
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} incompletebiped</p>
      </footer>
    </div>
  )
}

export default App
