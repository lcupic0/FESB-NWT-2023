import React from 'react';
import style from './header.module.css'

interface HeaderProps {}
interface HeaderState {}

class Header extends React.Component{
    // constructor(){}

    render() {
        return (
            <>
              <div className={style.wrapper}>
                <nav>
                    <ul>
                        <li className={style.dropdown}>
                            <div className={style["dropdown-button"]}>Početna</div>
                        </li>

                        <li className={style.dropdown}>
                            <div className={style["dropdown-button"]}>Nacionalni parkovi</div>
                        </li>

                        <li className={style.dropdown}>
                            <div className={style["dropdown-button"]}>Komentari</div>
                            <ul className={style["dropdown-content"]}>
                                <li>Test1</li>
                                <li>Test2</li>
                            </ul>
                        </li>
                        
                    </ul>
                </nav>
              </div>
            </>
        )
    }
}

export default Header
