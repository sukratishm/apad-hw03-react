import { useState } from 'react'
import { AppBar, Toolbar, Typography, Container, Box, Button, Grid } from '@mui/material'
import BoltIcon from '@mui/icons-material/Bolt'
import ProjectCard from './components/ProjectCard.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [showMore, setShowMore] = useState(false)

  const projects = [
    { title: 'Mini Site', desc: 'This portfolio—HTML & CSS, deployed with GitHub Pages.', link: 'https://github.com/sukratishm' },
    { title: 'AI Agents', desc: 'Exploring intelligent automation with custom agents and workflows.', link: 'https://github.com/sukratishm' },
    { title: 'My Apps', desc: 'A collection of personal and course-built applications.', link: 'https://github.com/sukratishm' },
  ]

  const extraProjects = [
    { title: 'Metrics Dashboard', desc: 'Tiny dashboard mock with charts TBD.', link: 'https://github.com/sukratishm' },
    { title: 'Notes App', desc: 'Simple notes with local storage.', link: 'https://github.com/sukratishm' },
  ]

  return (
    <>
      <AppBar position="sticky" color="primary" enableColorOnDark>
        <Toolbar sx={{ gap: 1 }}>
          <BoltIcon />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Sukrati • React Projects</Typography>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="https://github.com/sukratishm" target="_blank" rel="noopener">GitHub</Button>
        </Toolbar>
      </AppBar>

      <Hero />

      <Container id="projects" sx={{ py: 4 }}>
        <Typography variant="h5" fontWeight={800} gutterBottom>Projects</Typography>

        <Grid container spacing={2}>
          {projects.map((p) => (
            <Grid item xs={12} md={4} key={p.title}>
              <ProjectCard title={p.title} desc={p.desc} link={p.link} accent="primary" />
            </Grid>
          ))}

          {showMore && extraProjects.map((p) => (
            <Grid item xs={12} md={4} key={p.title}>
              <ProjectCard title={p.title} desc={p.desc} link={p.link} accent="secondary" />
            </Grid>
          ))}
        </Grid>

        <Box mt={3} display="flex" gap={2}>
          <Button variant="contained" onClick={() => setShowMore(v => !v)}>
            {showMore ? 'Show Fewer' : 'Show More'}
          </Button>
          <Button variant="outlined" href="https://sukratishm.github.io/" target="_blank" rel="noopener">
            View HTML/CSS site
          </Button>
        </Box>
      </Container>

      <Footer />
    </>
  )
}
