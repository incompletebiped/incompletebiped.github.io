import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { projects } from '../data/projects'
import { writing } from '../data/writing'
import { formatStampDate } from '../lib/formatDate'
import '../App.css'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView()
    }
  }, [location.hash])

  return (
    <div className="sheet">
      <header className="masthead">
        <div className="masthead-main">
          <div className="masthead-label">The Stacks · A Personal Library · Est. Texas</div>
          <h1>IncompleteBiped</h1>
          <p className="masthead-tagline">"Just a nerd that likes to play with code."</p>
          <div className="masthead-actions">
            <a href="#collection" className="btn btn-primary">
              Browse the catalog
            </a>
            <a
              href="https://killian.consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              killian.consulting↗
            </a>
          </div>
        </div>
        <div className="masthead-card">
          <div className="monogram">IB</div>
          <div>@incompletebiped</div>
          <div>Texas, USA</div>
          <div>6 volumes · 4 stars</div>
        </div>
        <div className="stamp">CIRCULATING</div>
      </header>

      <section id="collection" className="section">
        <div className="section-label">
          <span>// Card Catalog — Projects</span>
          <span className="section-label-sub">{projects.length} entries · ~/collection</span>
        </div>
        <div className="catalog-grid">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <div className="card-top">
                <span className="card-call">{project.call}</span>
                <span className="card-lang">{project.meta.split(' · ')[0].toUpperCase()}</span>
              </div>
              <div className="card-name">{project.name}</div>
              <p className="card-desc">{project.description}</p>
              <div className="card-bottom">
                <span>{project.meta}</span>
                <span className="card-status">{project.status}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="writing" className="section">
        <div className="section-label">
          <span>// Recent Acquisitions — Writing</span>
          <span className="section-label-sub">from the notebook</span>
        </div>
        {writing.length === 0 ? (
          <div className="writing-placeholder">Nothing shelved yet — check back soon.</div>
        ) : (
          <div className="writing-list">
            {writing.map((entry) => (
              <Link key={entry.slug} to={`/writing/${entry.slug}`} className="writing-row">
                <span className="writing-row-title">{entry.title}</span>
                <span className="writing-row-date">STAMPED {formatStampDate(entry.date)}</span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section id="about" className="section about-grid">
        <div>
          <div className="section-label section-label-solo">// About the Librarian</div>
          <p>
            I build small, sharp tools — mostly the kind that clean up after messy workflows:
            juggling accounts, switching identities, load-balancing myself across machines. I run{' '}
            <a href="https://killian.consulting" target="_blank" rel="noopener noreferrer">
              Killian&nbsp;Consulting
            </a>{' '}
            out of Texas.
          </p>
          <p>
            This site is my card catalog — a place to shelve what I make and jot what I'm
            thinking. Everything here circulates freely. Pull a card, check it out, keep it as
            long as you like.
          </p>
        </div>
        <div className="checkout-card">
          <div className="checkout-header">
            <span>Date Due</span>
            <span>Borrower</span>
          </div>
          <div className="checkout-body">
            <div className="checkout-row">
              <span>____·__·__</span>
              <span className="cursor cursor-red" />
            </div>
          </div>
          <div className="checkout-footer">Please return by shelving a comment.</div>
        </div>
      </section>

      <footer className="colophon">
        <span>
          © 2026 IncompleteBiped ·{' '}
          <a href="https://github.com/incompletebiped" target="_blank" rel="noopener noreferrer">
            @incompletebiped
          </a>
        </span>
        <span>The Stacks · set in Spectral &amp; JetBrains Mono</span>
        <span>
          incompletebiped@the-stacks:~$ <span className="cursor cursor-red" />
        </span>
      </footer>
    </div>
  )
}

export default Home
