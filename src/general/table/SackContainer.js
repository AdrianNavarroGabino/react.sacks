import React from "react";
import { SackCard } from "./SackCard";

export const SackContainer = ({ t, totals }) => {
    return (
        <div>
            <h1 className="title">{t('SACKS')}</h1>
            {
                totals.map(total => <SackCard total={total} key={total.category_id} />)
            }
        </div>
    );
}