import {Link} from "react-router-dom";
import React from "react";

export default function Home(){
    return (
        <>
            <h1>Home</h1>
            <ul className="NavList">
                <li>
                    <Link to='/searchprovider'>거래소 조회하기</Link>
                </li>
                <li>
                    <Link to='/report'>신고하기</Link>
                </li>
                <li>
                    <Link to='/notification'>공지사항</Link>
                </li>
            </ul>
        </>
    )
}