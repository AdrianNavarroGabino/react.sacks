import React from 'react'
import { SackContainer } from './table/SackContainer'

export const General = ({ t, categories, moviments, percentatges }) => {
    console.log({ categories, moviments, percentatges });
    return (
        <SackContainer t={t} />
    )
}
