import React from "react";
import Link from 'next/link'

export default class Homepage extends React.Component {
    render(){
        return(
            <div className="container m-auto mt-5">
                <div className="flex space-x-6">
                    <div className="jumbo p-5 flex-1">
                        <h1 className="text-center text-5xl text-white stroke">Alejandro Mc Ewen Cock</h1>
                        <p className="text-lg text-white">
                            I am Alejnadro Mc Ewen  a CS student at EAFIT university. This is my personal page. I love to program fun and interesting proyects. This is a sort of resume. I hope you enjoy.
                        </p>
                        <p className="text-lg text-white">
                            Vestibulum eget augue vel nisi blandit ultrices eu ac elit. Ut malesuada nec diam sit amet vehicula. Pellentesque consectetur pretium libero. Vivamus tempor ullamcorper cursus. Maecenas in consequat sem. Maecenas scelerisque metus eget tortor fringilla faucibus. Donec et leo est. Nullam nulla augue, congue a lectus commodo, tempor egestas odio. Aliquam et luctus enim. Aenean lobortis tortor nisi. In blandit lectus ac euismod convallis.
                        </p>
                        <Link href="/projects">
                            <button className="bg-black rounded text-white p-2 text-xl">Go to projects</button>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <img src="/computerGuy.jpg" className="image"/>
                        <a href="http://www.freepik.com">Designed by slidesgo / Freepik</a>
                    </div>
                </div>
            </div>
        )
    }
}