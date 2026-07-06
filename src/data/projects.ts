export type Project = {
  call: string
  name: string
  description: string
  url: string
  meta: string
  status: string
}

export const projects: Project[] = [
  {
    call: '005.454 · KIL',
    name: 'c2switcher-windows',
    description: 'Manage multiple Claude Code accounts with usage tracking & load balancing.',
    url: 'https://github.com/incompletebiped/c2switcher-windows',
    meta: 'python · ★3',
    status: 'CIRCULATING',
  },
  {
    call: '005.454 · KIL f',
    name: 'c2switcher-mint',
    description: 'The Linux Mint port — same account switching, tuned for Cinnamon.',
    url: 'https://github.com/incompletebiped/c2switcher-mint',
    meta: 'python · ★1 · fork',
    status: 'CIRCULATING',
  },
  {
    call: '793.93 · KIL',
    name: 'heroes-wizards-online',
    description: 'A fan-made, online version of the Heroes & Wizards card game.',
    url: 'https://github.com/incompletebiped/heroes-wizards-online',
    meta: 'typescript',
    status: 'IN PROGRESS',
  },
  {
    call: '005.13 · KIL',
    name: 'gitshift-redux',
    description: 'Seamlessly switch between multiple GitHub accounts for commits and pushes.',
    url: 'https://github.com/incompletebiped/gitshift-redux',
    meta: 'typescript',
    status: 'CIRCULATING',
  },
  {
    call: '004.16 · KIL',
    name: 'open-deck-applet-cinnamon',
    description: 'A Steam Deck-style control applet for the Cinnamon desktop.',
    url: 'https://github.com/incompletebiped/open-deck-applet-cinnamon',
    meta: 'javascript',
    status: 'SHELVED',
  },
  {
    call: '025.04 · KIL',
    name: 'incompletebiped.github.io',
    description: 'This very catalog — the source for The Stacks.',
    url: 'https://github.com/incompletebiped/incompletebiped.github.io',
    meta: 'typescript · this site',
    status: 'ON DISPLAY',
  },
]
