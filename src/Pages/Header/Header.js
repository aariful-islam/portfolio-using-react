import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full sticky top-0 left-0 z-50 shadow-lg pl-20 pr-20 bg-slate-800'>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabindex="0"
                            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a href="/home">Home</a>
                            </li>

                            <li>
                                <Link as={Link} to="/portfolio">
                                    Portfolio
                                </Link>
                            </li>

                            <li>
                                <Link as={Link} to="/blogs">
                                    Blogs
                                </Link>
                            </li>

                            <li>
                                <Link as={Link} to="/contact">
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <Link as={Link} to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <Link as={Link} to="/home" class="btn btn-ghost normal-case text-xl">
                        Md. Ariful Islam
                    </Link>
                </div>

                <div class="navbar-end">
                    <ul class="menu menu-horizontal p-0">
                        <li>
                            <Link as={Link} to="/home">
                                Home
                            </Link>
                        </li>


                        <li>
                            <Link as={Link} to="/blogs">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link as={Link} to="/portfolio">
                                Portfolio
                            </Link>
                        </li>

                        <li>
                            <Link as={Link} to="/contact">
                                Contact us
                            </Link>
                        </li>
                        <li>

                            <Link as={Link} to="/dashboard">
                                Dashboard
                            </Link>
                        </li>

                    </ul>


                    <label tabindex="1" for="dashboard-sidebar" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Header;