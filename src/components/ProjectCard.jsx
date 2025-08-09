import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'

export default function ProjectCard({ title, desc, link, accent = 'primary' }) {
  return (
    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={700} gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{desc}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color={accent} href={link} target="_blank" rel="noopener">
          View code
        </Button>
      </CardActions>
    </Card>
  )
}
