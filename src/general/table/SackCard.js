import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export const SackCard = () => {
    return (
        <Card sx={{ width: '90%', margin: '0 auto' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    )
}