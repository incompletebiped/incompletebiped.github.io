import { Link, useParams } from 'react-router-dom'
import { writing } from '../data/writing'
import { formatStampDate } from '../lib/formatDate'
import '../App.css'

function NotePage() {
  const { slug } = useParams()
  const entry = writing.find((item) => item.slug === slug)

  if (!entry) {
    return (
      <div className="sheet">
        <div className="section note-page">
          <p>That note isn't on the shelf.</p>
          <Link to="/" className="note-back">
            ← back to the stacks
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="sheet">
      <article className="section note-page">
        <Link to="/" className="note-back">
          ← back to the stacks
        </Link>
        <div className="note-meta">STAMPED {formatStampDate(entry.date)}</div>
        <h1 className="note-title">{entry.title}</h1>
        <div className="note-body" dangerouslySetInnerHTML={{ __html: entry.html }} />
      </article>
    </div>
  )
}

export default NotePage
