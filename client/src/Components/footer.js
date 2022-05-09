import { ClassNames } from '@emotion/react'
import { Typography } from '@mui/system'
import React from 'react'
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import Link from '@material-ui/core/Link'

export default function Footer () {
    return <footer>
        <Box>
            <Container maxWidth = "sm" display = "flex">
                <Grid container spacing={5}>
                    <Grid item xs={10}sm={4}>
                      
                        <Box>
                            <Link href="/" color="inherit">
                                About
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                login
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Volunteer
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        
    </footer>
    
}