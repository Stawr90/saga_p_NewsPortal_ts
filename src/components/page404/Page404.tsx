import React from "react";
import { Link } from "react-router-dom";

function Page404() {

    return (
        <div data-testid="not-found-page" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "30px", height: "100vh"}}>
            <h1 style={{textAlign: 'center', fontSize: '36px'}}>Ошибка!</h1>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Страница не найдена</p>
            <Link style={{'position': 'relative', 'marginTop': '100px'}} to='/' data-testid="main-link"><button className="info__btn">На главную</button></Link>
        </div>
    );
}

export default Page404;