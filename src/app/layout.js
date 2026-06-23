import './globals.css'

export const metadata = {
  title: 'Imen Mraoui — Développeuse Full-Stack',
  description: 'Portfolio de Imen Mraoui, développeuse Full-Stack React, Next.js, NestJS, React Native.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
