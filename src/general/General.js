import React from 'react'
import { SackContainer } from './table/SackContainer'

export const General = ({ t, categories, movements, percentages, totals }) => {
    console.log({ categories, movements, percentages });
    return (
        <SackContainer t={t} totals={totals} />
    )
}
