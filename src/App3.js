import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
            .then((response => response.json()))
            .then((json) => setCoins(json));
        setLoading(false);
    }, []);
    return (
        <div>
            <h1>The Coins! {loading ? " " : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> : null}
            <ul>
                {coins.map((coin) => <li>{coin.symbol} | {coin.name} : {Math.round(coin.quotes.USD.price * 1000) / 1000}USD</li>)}
            </ul>
        </div>
    );
};

export default App;