'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const deliveryApps = [
  {
    title: 'App Client',
    icon: '📦',
    desc: 'Application mobile permettant aux clients de créer des commandes de livraison, suivre leurs colis en temps réel et gérer leur historique.',
    stack: ['React Native', 'Expo'],
    playStore: 'https://play.google.com/store/apps/details?id=com.loginClient.app&hl=fr',
    accent: '#1A73E8',
  },
  {
    title: 'App Point Relais',
    icon: '🏪',
    desc: 'Interface dédiée aux gestionnaires de points relais pour réceptionner, trier et remettre les colis aux clients.',
    stack: ['React Native', 'Expo'],
    playStore: 'https://play.google.com/store/apps/details?id=com.pointrelais&hl=fr',
    accent: '#34A853',
  },
  {
    title: 'App Coursier',
    icon: '🚚',
    desc: 'Application pour les livreurs : gestion des tournées, navigation optimisée, confirmation de livraison et signature électronique.',
    stack: ['React Native', 'Expo'],
    playStore: 'https://play.google.com/store/apps/details?id=com.coursier_app&hl=fr',
    accent: '#F9A825',
  },
]

const projects = [
  {
    title: 'Loula — Plateforme d\'autopartage',
    type: 'Web + Mobile',
    desc: 'Plateforme web et mobile de location de véhicules entre particuliers. Gestion des réservations, paiement Stripe, signature électronique, vérification d\'identité et messagerie temps réel.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript', 'React Native'],
    imgWeb: '/images/loula-web.png',
    imgMobile: '/images/loula-mobile.jpg',
    link: 'https://loula-autopartage.fr',
    github: null,
    featured: true,
  },
  {
    title: 'Matcha — Application de rencontres',
    type: 'Web App',
    desc: 'Application web de rencontres développée à l\'École 42. Profils utilisateurs, géolocalisation, système de matching, messagerie temps réel et authentification sécurisée.',
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    imgWeb: '/images/matcha.png',
    imgMobile: null,
    link: null,
    github: 'https://github.com/imenecole42/matcha',
    featured: false,
  },
  {
    title: 'Swifty Companion',
    type: 'Application Mobile',
    desc: 'Application mobile React Native permettant la consultation des profils étudiants de l\'École 42 via l\'API officielle. Affichage des compétences, niveaux et statistiques.',
    stack: ['React Native', 'API 42'],
    imgWeb: '/images/swifty-profile.jpg',
    imgMobile: '/images/swifty-search.jpg',
    link: null,
    github: 'https://github.com/imenecole42',
    featured: false,
  },
]

const skills = [
  { cat: 'Front-End', icon: '🎨', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Three.js'] },
  { cat: 'Back-End', icon: '⚙️', items: ['NestJS', 'Node.js', 'Express.js', 'PostgreSQL', 'TypeScript', 'Django'] },
  { cat: 'Mobile', icon: '📱', items: ['React Native', 'Expo', 'API REST'] },
  { cat: 'UI / UX', icon: '✏️', items: ['Figma', 'Composants réutilisables', 'Design System', 'Responsive'] },
  { cat: 'Outils', icon: '🛠️', items: ['Git', 'GitHub', 'Docker', 'Vercel'] },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    window.location.href = `mailto:imenchebi@gmail.com?subject=Contact depuis portfolio — ${form.name}&body=${encodeURIComponent(form.message)}%0A%0ADe: ${form.name} (${form.email})`
    setSent(true)
  }

  return (
    <div className={styles.page}>

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <span className={styles.navLogo}>IM<span className={styles.accent}>.</span></span>
        <div className={styles.navLinks}>
          {['À propos', 'Projets', 'Compétences', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace('à ', '').replace(' ', '-')}`} className={styles.navLink}>{l}</a>
          ))}
        </div>
        <a href="mailto:imenchebi@gmail.com" className={styles.navCta}>Me contacter</a>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero} id="propos">
        <div className={styles.heroContent}>
          <p className={styles.heroSub}>👋 Bonjour, je suis</p>
          <h1 className={styles.heroTitle}>
            Imen <span className={styles.accent}>Mraoui</span>
          </h1>
          <h2 className={styles.heroRole}>Développeuse Full-Stack</h2>
          <p className={styles.heroDesc}>
            Spécialisée <strong>React · Next.js · NestJS</strong> et <strong>React Native</strong>.
            En alternance chez <span className={styles.accent}>Loula Autopartage</span>, je construis
            des plateformes web et mobiles modernes, de la maquette Figma au déploiement en production.
          </p>
          <div className={styles.heroBadges}>
            {['Next.js', 'NestJS', 'TypeScript', 'React Native', 'Figma'].map(b => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
          <div className={styles.heroActions}>
            <a href="#projets" className={styles.btnPrimary}>Voir mes projets</a>
            <a href="#contact" className={styles.btnOutline}>Me contacter</a>
          </div>
          <div className={styles.heroSocials}>
            <a href="https://github.com/imenecole42" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/imen-mraoui-07576570/" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.heroImgWrapper}>
            <Image src="/images/imen.png" alt="Imen Mraoui" fill style={{objectFit:'cover'}} priority />
          </div>
          <div className={styles.heroImgGlow} />
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section className={styles.section} id="projets">
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>Ce que j'ai construit</p>
          <h2 className={styles.sectionTitle}>Mes <span className={styles.accent}>Projets</span></h2>

          {/* Featured project - Loula */}
          <div className={styles.featuredProject}>
            <div className={styles.featuredContent}>
              <span className={styles.projectType}>{projects[0].type}</span>
              <h3 className={styles.featuredTitle}>{projects[0].title}</h3>
              <p className={styles.projectDesc}>{projects[0].desc}</p>
              <div className={styles.stackList}>
                {projects[0].stack.map(s => <span key={s} className={styles.stackTag}>{s}</span>)}
              </div>
              <div className={styles.projectLinks}>
                {projects[0].link && <a href={projects[0].link} target="_blank" rel="noreferrer" className={styles.btnPrimary}>🌐 Voir le site</a>}
              </div>
            </div>
            <div className={styles.featuredImgs}>
              <div className={styles.featuredImgWeb}>
                <Image src={projects[0].imgWeb} alt="Loula web" fill style={{objectFit:'cover'}} />
              </div>
              <div className={styles.featuredImgMobile}>
                <Image src={projects[0].imgMobile} alt="Loula mobile" fill style={{objectFit:'cover'}} />
              </div>
            </div>
          </div>

          {/* Other projects */}
          <div className={styles.projectsGrid}>
            {projects.slice(1).map(p => (
              <div key={p.title} className={styles.projectCard}>
                <div className={styles.projectCardImg}>
                  <Image src={p.imgWeb} alt={p.title} fill style={{objectFit:'cover'}} />
                  {p.imgMobile && (
                    <div className={styles.projectCardMobile}>
                      <Image src={p.imgMobile} alt={p.title + ' mobile'} fill style={{objectFit:'cover'}} />
                    </div>
                  )}
                </div>
                <div className={styles.projectCardBody}>
                  <span className={styles.projectType}>{p.type}</span>
                  <h3 className={styles.projectCardTitle}>{p.title}</h3>
                  <p className={styles.projectDesc}>{p.desc}</p>
                  <div className={styles.stackList}>
                    {p.stack.map(s => <span key={s} className={styles.stackTag}>{s}</span>)}
                  </div>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className={styles.btnOutlineSmall}>
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Suite de livraison */}
          <div className={styles.deliverySuite}>
            <div className={styles.deliverySuiteHeader}>
              <span className={styles.projectType}>Application Mobile · Suite complète</span>
              <h3 className={styles.featuredTitle}>Écosystème de Livraison</h3>
              <p className={styles.projectDesc}>
                Suite de 3 applications mobiles React Native couvrant l'ensemble du processus de livraison :
                de la commande client jusqu'à la remise en point relais, en passant par la gestion des coursiers.
                Disponible sur Google Play — bientôt sur l'App Store.
              </p>
              <div className={styles.storeBadges}>
                <span className={styles.storeBadgeAvail}>🤖 Google Play — Disponible</span>
                <span className={styles.storeBadgeSoon}>🍎 App Store — Bientôt</span>
              </div>
            </div>
            <div className={styles.deliveryAppsGrid}>
              {deliveryApps.map(app => (
                <a key={app.title} href={app.playStore} target="_blank" rel="noreferrer" className={styles.deliveryAppCard}>
                  <div className={styles.appPlaceholder} style={{ background: `linear-gradient(135deg, ${app.accent}22, ${app.accent}44)`, borderColor: `${app.accent}55` }}>
                    <span className={styles.appIcon}>{app.icon}</span>
                  </div>
                  <div className={styles.appCardBody}>
                    <h4 className={styles.appCardTitle}>{app.title}</h4>
                    <p className={styles.appCardDesc}>{app.desc}</p>
                    <div className={styles.stackList}>
                      {app.stack.map(s => <span key={s} className={styles.stackTag}>{s}</span>)}
                    </div>
                    <span className={styles.playStoreLink}>Voir sur Google Play →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Autres projets 42 */}
          <div className={styles.other42}>
            <h3 className={styles.other42Title}>Autres projets <span className={styles.accent}>École 42</span></h3>
            <div className={styles.other42Grid}>
              {[
                { name: 'ft_Transcendence', desc: 'Jeu Pong 3D multijoueur avec Three.js, auth 2FA', stack: 'JS · Three.js · Django' },
                { name: 'ft_IRC', desc: 'Serveur IRC en C++ conforme au protocole RFC', stack: 'C++' },
                { name: 'Minishell', desc: 'Reproduction d\'un shell Unix complet en C', stack: 'C' },
                { name: 'Inception', desc: 'Infrastructure Docker multi-services (NGINX, WordPress, MariaDB)', stack: 'Docker' },
              ].map(p => (
                <div key={p.name} className={styles.miniCard}>
                  <span className={styles.miniCardIcon}>{'</>'}</span>
                  <div>
                    <strong>{p.name}</strong>
                    <p>{p.desc}</p>
                    <span className={styles.miniStack}>{p.stack}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPÉTENCES ── */}
      <section className={styles.sectionDark} id="compétences">
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>Mon arsenal technique</p>
          <h2 className={styles.sectionTitle}>Compé<span className={styles.accent}>tences</span></h2>
          <div className={styles.skillsGrid}>
            {skills.map(s => (
              <div key={s.cat} className={styles.skillCard}>
                <div className={styles.skillIcon}>{s.icon}</div>
                <h3 className={styles.skillCat}>{s.cat}</h3>
                <div className={styles.skillItems}>
                  {s.items.map(i => <span key={i} className={styles.skillItem}>{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={styles.section} id="contact">
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>Travaillons ensemble</p>
          <h2 className={styles.sectionTitle}>Me <span className={styles.accent}>contacter</span></h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <p className={styles.contactText}>
                Disponible pour des missions freelance en <strong>développement front-end</strong> (Next.js, React),
                <strong> back-end</strong> (NestJS, Node.js) ou <strong>mobile</strong> (React Native).
              </p>
              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <a href="mailto:imenchebi@gmail.com">imenchebi@gmail.com</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📱</span>
                  <a href="tel:0768947989">07 68 94 79 89</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>Noisiel, Île-de-France</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>⌥</span>
                  <a href="https://github.com/imenecole42" target="_blank" rel="noreferrer">github.com/imenecole42</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>in</span>
                  <a href="https://www.linkedin.com/in/imen-mraoui-07576570/" target="_blank" rel="noreferrer">linkedin.com/in/imen-mraoui</a>
                </div>
              </div>
            </div>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              {sent ? (
                <div className={styles.sentMsg}>✅ Merci ! Votre messagerie va s'ouvrir pour envoyer l'email.</div>
              ) : (
                <>
                  <input className={styles.input} type="text" placeholder="Votre nom" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  <input className={styles.input} type="email" placeholder="Votre email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  <textarea className={styles.textarea} placeholder="Votre message..." required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                  <button type="submit" className={styles.btnPrimary}>Envoyer le message →</button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <span>© 2025 Imen Mraoui</span>
        <span className={styles.footerDot}>·</span>
        <span>Développé avec <span className={styles.accent}>Next.js</span></span>
        <span className={styles.footerDot}>·</span>
        <a href="https://github.com/imenecole42" target="_blank" rel="noreferrer">GitHub</a>
      </footer>

    </div>
  )
}
