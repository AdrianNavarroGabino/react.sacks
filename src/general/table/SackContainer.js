import React from "react";
import { SackCard } from "./SackCard";

export const SackContainer = ({ t }) => {
    return (
        <div>
            <h1 className="title">{t('SACKS')}</h1>
            <SackCard />
        </div>
    );
}