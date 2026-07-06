import { useEffect, useRef, useState } from 'react'

const COMMANDS = ['ls ./collection --sort=recent', 'cat ./writing.log', 'whoami']

function useTypewriter(commands: string[]) {
  const [typed, setTyped] = useState('')
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    let commandIndex = 0
    let pos = 0
    let mode: 'type' | 'hold' | 'erase' = 'type'

    const tick = () => {
      const cmd = commands[commandIndex]
      if (mode === 'type') {
        pos++
        setTyped(cmd.slice(0, pos))
        if (pos >= cmd.length) {
          mode = 'hold'
          timer.current = setTimeout(tick, 2600)
          return
        }
        timer.current = setTimeout(tick, 55 + Math.random() * 45)
      } else if (mode === 'hold') {
        mode = 'erase'
        timer.current = setTimeout(tick, 30)
      } else {
        pos--
        setTyped(cmd.slice(0, pos))
        if (pos <= 0) {
          mode = 'type'
          commandIndex = (commandIndex + 1) % commands.length
          timer.current = setTimeout(tick, 500)
          return
        }
        timer.current = setTimeout(tick, 28)
      }
    }

    timer.current = setTimeout(tick, 500)
    return () => clearTimeout(timer.current)
  }, [commands])

  return typed
}

function TerminalBar() {
  const typed = useTypewriter(COMMANDS)

  return (
    <div className="terminal-bar">
      <div className="terminal-flicker" />
      <div className="terminal-dots">
        <span className="dot dot-red" />
        <span className="dot dot-amber" />
        <span className="dot dot-green" />
      </div>
      <div className="terminal-prompt">
        bailey@the-stacks:~$ <span className="terminal-typed">{typed}</span>
        <span className="cursor cursor-amber" />
      </div>
      <nav className="terminal-nav">
        <a href="#collection">Collection</a>
        <a href="#writing">Writing</a>
        <a href="#about">About</a>
        <a href="https://github.com/incompletebiped" target="_blank" rel="noopener noreferrer">
          GitHub↗
        </a>
      </nav>
    </div>
  )
}

export default TerminalBar
