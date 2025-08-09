import { Box, Container, Typography } from '@mui/material'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <Box component="footer" sx={{ py: 4, color: 'text.secondary' }}>
      <Container>
        <Typography variant="body2" align="center">
          © {year} Sukrati. Built with React + Material UI.
        </Typography>
      </Container>
    </Box>
  )
}
