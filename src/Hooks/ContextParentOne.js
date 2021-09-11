import React from 'react';
import ContextApiTwo from '../Hooks/ContextApiTwo';

export default function ContextParentOne() {
    return (
        <div>
            <h3>ContextApiOne</h3>
            <ContextApiTwo />
        </div>
    )
}
