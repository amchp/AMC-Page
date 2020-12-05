import React from "react";
import Link from 'next/link'

export default class Navigation extends React.Component {
    render(){
        return(
            <header className="navBar text-white pb-4 pt-4">
                <div className="container mx-auto navBar">
                    <Link href="/">
                        <a className="text-7xl mr-3">AMC</a>
                    </Link>
                    <Link href="/projects">
                        <a className="text-6xl">Projects</a>
                    </Link>
                </div>
            </header>
        )
    }
}