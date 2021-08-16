import styles from './search_header.module.css';

import React, { useRef , memo } from 'react';

const Searchheader = memo(
({onSearch})=>
{
    const inputRef = useRef();
    const handleSearch = () =>
    {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);//props에 있는 onSearch호출 onSearch에 value값 전달 
    }
    const onClick = (Event) =>
    {
        handleSearch(); // 콜백함수
    }
    const onkeypress = (Event) =>
    {
        if(Event.key==='Enter')
        {
            handleSearch();
        }
    }
    console.log("Hdader!!");
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
    );
    }
);

export default Searchheader;

//onClick, onkeyPress는 event의 일종이다.
//Event에는 많은 속성이 있다.
//const handlesearch에는 input에 있는 값을 받아와야 하기 때문에 ref를 사용한다. useRef()를 이용한다. 
// 검색 하는 것을 prop으로 받아와야 한다. 
// 네 컴포넌트 안에서 click이나 enter키를 통해 검색이 되었는 지 관심없고 검색이라는 이벤트가 발생하면 전달해주는 콜백함수를 불러!
//memo란 prop이 바뀌면 렌더링이 되고 props가 바뀌지 않으면 re-rendering이 되지 않게 해주는 것을 의미한다. 
