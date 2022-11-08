import React, { useState } from 'react'
import "../resources/styles/main.css"
import Card from '../components/Card'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

const Main = ({ data, setPageValue, pageValue, page, setPage }) => {
        const lastPage = data.info.pages;

        const prev = () => {
                setPage(value => Number(value) - 1);
                setPageValue(value => Number(value) - 1);
        }

        const next = () => {
                setPage(value => Number(value) + 1);
                setPageValue(value => Number(value) + 1);
        }

        const pageNumber = (e) => {
                e.preventDefault();
                if (page > 42) {
                        setPageValue(42);
                        setPage(42);
                        return
                }
                setPageValue(Number(page));
        }

        return (
                <main>
                        <div className="main-text">
                                <h1>Rick & Monty Characters</h1>
                        </div>
                        <div className="main-content">
                                <div className="card-container">
                                        {
                                                data.results.map((value, index) => (
                                                        <Card key={index} value={value} />
                                                ))
                                        }
                                </div>
                                <div className="btn-container">
                                        <button onClick={prev} disabled={pageValue <= 1} id={pageValue <= 1 ? "disabled" : ""}>
                                                <BsArrowLeft />
                                        </button>
                                        <form onSubmit={pageNumber}>
                                                <input type="number" value={page} onChange={(e) => setPage(e.target.value)} style={{fontSize : "1rem"}} />
                                        </form>
                                        <button onClick={next}  disabled={pageValue >= lastPage} id={pageValue >= lastPage ? "disabled" : ""}>
                                                <BsArrowRight />
                                        </button>
                                </div>
                        </div>
                </main>
        )
}

export default Main