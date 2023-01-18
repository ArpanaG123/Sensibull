import { useEffect, useState } from "react"
import './tableData.css';


function TableData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const[searchItem,setsearchItem] = useState("");
  
  useEffect(() => {
    setLoading(true)
    fetch("https://sensibull-five.vercel.app/api/home")
      .then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => {
        setLoading(false)
      })
  },[])
  
  const handleClick = () => {
    setLoading(true);
  }
    
  return (
    <div className="StockPage">
      {loading ? (
        <div className="quotePage">
          <h1 className="QuoteHeading">Quotes Page</h1>
          <p className="textQuote">
            {
              `{
                "success":true,
                "payload": {
                  "RELINFRA" : [
                    {
                      "price":22630.224497600102,
                      "time":"2023-01-18 04:35:04",
                      "valid_till":"2023-01-18 04:36:36"
                    },
                    {
                      "price":21325.136551785843,
                      "time":"2023-01-18 04:35:37",
                      "valid_till":"2023-01-18 04:36:34"
                    },
                    {
                      "price":22735.447266343275,
                      "time":"2023-01-18 04:34:54",
                      "valid_till":"2023-01-18 04:36:36"
                    },
                    {
                      "price":21732.777340391855,
                      "time":"2023-01-18 04:34:54",
                      "valid_till":"2023-01-18 04:36:36"
                    },
                    {
                      "price":22332.83993589972,
                      "time":"2023-01-18 04:34:54",
                      "valid_till":"2023-01-18 04:36:36
                    }
                  ]
                }
              }`
            }
          </p>
        </div>
      ) : (
        <>
          <h1 className="stockHeading">Stocks Page</h1>
          <input type="text" placeholder="Search using Symbol & Name... " onChange={(e) => setsearchItem(e.target.value)} className="SearchBar" />
          <table cellSpacing="0" className="tableData">
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Sector</th>
              <th>ValidTill</th>
            </tr>
            {users.filter((value) => {
                if(searchItem === ""){
                    return value;
                }else if(
                    value.Symbol.toLowerCase().includes(searchItem.toLowerCase()) || 
                    value.Name.toLowerCase().includes(searchItem.toLowerCase())
                )
                {
                    return value;
                }
            }).map(user => (
              <tr key={user.id}>
                <td className="symbol" onClick={handleClick}>{user.Symbol}</td>
                <td>{user.Name}</td>
                <td>{user.Sector}</td>
                <td>{user.Validtill}</td>
              </tr>
            ))}
          </table>
        </>
      )}
    </div>
  )
}

export default TableData;


