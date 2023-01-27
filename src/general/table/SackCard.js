import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export const SackCard = ({ total }) => {
    return (
        <Card sx={{ width: '90%', margin: '10px auto' }}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
                    Category: {total.category_name}
                </Typography>
                <Typography variant="h5" component="div">
                    {total.value / 100}€
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    Account: {total.category_account}
                </Typography>
            </CardContent>
        </Card>
    )
}
