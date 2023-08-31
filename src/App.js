import "./App.css";
import { useRef, useState } from "react";
import { data } from "./Component/data";
import { ranDomValue, randomChange } from "./Component/random";
import FormLogin from "./Component/FormLogin";
function App() {
  const [renderData, setRenderData] = useState(data);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const getUser = localStorage.getItem("user");
  const volume = useRef(12000);

  if (getUser != null) {
    setTimeout(() => {
      let oldData = renderData.map((item) => ({ ...item }));
      let randomVolume = Math.floor(Math.random() * (30 - 10) + 10);
      let current = data.map((item) => {
        const percent = Math.random() * (0.05 + 0.05) - 0.05;
        item.price = randomChange(item.price, percent).toFixed(2);
        item.value = ranDomValue(volume.current, item.price, randomVolume);
        return item;
      });
      let newData = current.map((item, index) => {
        let newprice = Number(item.price);
        let oldprice = Number(oldData[index].price);
        item.Change = Number(newprice - oldprice).toFixed(2);
        item.percentChange = Number(
          ((newprice - oldprice) / oldprice) * 100
        ).toFixed(2);
        return item;
      });
      setRenderData(newData);
    }, 1500);
  }
  return (
    <div className="w-full h-[963px] flex flex-col justify-center items-center">
      {getUser == null ? (
        <FormLogin setFormData={setFormData} formData={formData} />
      ) : (
        <>
          <div className="w-full h-[70px] bg-[#91C8E4] flex justify-between ">
            <div className="w-[15%] h-full flex justify-center items-center">
              <p className="font-bold text-white">S&P/ASX</p>
            </div>
            <div className="w-[30%] h-full  flex ">
              <div className="w-[50%] h-full flex justify-center items-center border-b-4 border-[#FF3881]">
                <p className="text-white">TOP GAINERS</p>
              </div>
              <div className="w-[50%] h-full flex justify-center items-center ">
                <p className="text-gray-500">TOP LOSERS</p>
              </div>
            </div>
          </div>
          <table className="table-auto w-full h-4/5 border border-[#9DB2BF] rounded-lg text-center ">
            <thead className="h-[80px]">
              <tr>
                <th>Code</th>
                <th>Company</th>
                <th>Price</th>
                <th>Value</th>
                <th>Change</th>
                <th>%Change</th>
              </tr>
            </thead>
            <tbody>
              {renderData.length > 0
                ? renderData.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.code}</td>
                        <td>{item.company}</td>
                        <td>{item.price}</td>
                        <td>{item.value}</td>
                        <td
                          className={
                            item.Change > 0
                              ? "text-green-500 font-medium"
                              : "text-red-500 font-medium"
                          }
                        >
                          {item.Change}
                        </td>
                        <td
                          className={
                            item.percentChange > 0
                              ? "text-green-500 font-medium"
                              : "text-red-500 font-medium"
                          }
                        >
                          {item.percentChange}%
                        </td>
                      </tr>
                    );
                  })
                : data.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.code}</td>
                        <td>{item.company}</td>
                        <td>{item.price}</td>
                        <td>{item.value}</td>
                        <td>{item.Change}</td>
                        <td>{item.percentChange}</td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;
