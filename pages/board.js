import React from 'react';
import Chessboard from '../components/chess/chessboard.js';
import Link from "next/link";

export default function Board () {
    return (
        <div>
            <div>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </div>
            <Chessboard />
        </div>
    );
};