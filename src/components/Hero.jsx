import { Container, Paper, Typography, Stack, Button } from '@mui/material'

export default function Hero() {
  return (
    <Container sx={{ py: 4 }}>
      <Paper
        elevation={4}
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 3,
          background: 'linear-gradient(180deg, rgba(99,91,255,0.10) 0%, rgba(0,212,255,0.10) 100%)',
          border: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Hi, I’m <span style={{ backgroundImage: 'linear-gradient(135deg,#635bff,#00d4ff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Sukrati</span> 👋
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Product Manager learning web dev—clear, fast, accessible.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mt: 1, flexWrap: 'wrap' }}>
          <Button variant="contained" color="primary" href="#projects">See Projects</Button>
          <Button variant="outlined" color="secondary" href="https://github.com/sukratishm" target="_blank" rel="noopener">
            GitHub
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}
