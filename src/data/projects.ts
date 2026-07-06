export type Project = {
  name: string
  description: string
  url?: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    name: 'example-project',
    description: 'Replace this with a real project. Short description of what it does and why it exists.',
    url: 'https://github.com/incompletebiped',
    tags: ['typescript', 'cli'],
  },
  {
    name: 'another-project',
    description: 'Another placeholder card. Delete or edit these in src/data/projects.ts.',
    url: 'https://github.com/incompletebiped',
    tags: ['python'],
  },
]
