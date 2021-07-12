import styles from './search_header.module.css';

import React, { useRef } from 'react';

const Searchheader = ({onSearch})=>
{
    const inputRef = useRef();
    const handleSearch = () =>
    {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
    }
    const onClick = (Event) =>
    {
        handleSearch();
    }
    const onkeypress = (Event) =>
    {
        if(Event.key ==='Enter')
        {
            handleSearch();
        }
    }
    return (
        <header className= {styles.header}>
            <div className= {styles.logo}>
                <img className= {styles.img} src="/images/logo.png" alt="logo" />
                <h1 className= {styles.title}>Youtube popular</h1>
            </div>
            <input ref ={inputRef} className= {styles.input} type="search" placeholder = "Search ..." onKeyPress={onkeypress}/>
            <button className= {styles.button} type = "submit" onClick ={onClick}>
                <img className= {styles.searchimg} src="/images/search.png" alt="search" />
            </button>
        </header>
    )
}

export default Searchheader;