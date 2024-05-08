import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { MDBDataTable } from "mdbreact";
import "../styles/datepickerpage.css";
import Footer from "./Footer";
import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

let PiChartData;
let BarChartData = {
  labels: [],
  datasets: [],
};
let pbarChartData = {
  labels: [],
  datasets: [],
};
const options1 = {
  title: {
    display: true,
    text: "Pie Chart Example",
  },
};

// const[pieData,setPieData]={
//   labels: ["impelsys","cecme","lll","kkk"],
//   datasets: [
//     {
//       label:"Data",
//       data: ['22', '11', '23', '32'],
//       backgroundColor: ['#F7931A', '#4AC18D', '#FFC107', '#FFC107'],
//       borderColor: ['#F7931A', '#4AC18D', '#FFC107', '#FFC107'],
//     },
//   ],

// }
// const config = {
//   type: 'doughnut',
//   data: pieData,
//   options: {
//     backgroundColor: 'linear-gradient(to right, #ff9966, #ff5e62)',
//     title: {
//       display: true,
//       text: 'My Doughnut Chart',
//       fontSize: 24,
//       fontColor: '#ffffff',
//       padding: 20,
//     },
//     animation: {
//       animateScale: true,
//       animateRotate: true,
//     },
//   },
// };

function MyDatePicker() {
  const handleClick = (itemName) => {
    setSelectedValue(itemName);
    setclientid(itemName); 
    setmytitel(itemName);
    setFormChanged(true);
  };
  const [displaydata,setdisplaydata]=useState(false);
  const[modaldata,setmodaldata]=useState("");
  const [formChanged, setFormChanged] = useState(false);
  const [FormChanged1, setFormChanged1] = useState(false);
  const [mytitel, setmytitel] = useState("ALL");
  const tt = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const [FromDate, setFromDate] = useState(tt);
  const datee = new Date().toISOString().slice(0, 10);
  const [ToDate, setToDate] = useState(datee);
  const [selectedValue, setSelectedValue] = useState("ALL");
  const [uniqurIds, setUniqueIds] = useState([]);
  const [clientid, setclientid] = useState("ALL");
  const [mydata, setmydata] = useState([]);
  const [tableData, setTableData] = useState({});
  let mynewdata;
  const [bar, setbar] = useState({
    title: {
      display: false,
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  });

  const handleDateChange = (event) => {
    event.preventDefault();
    setFromDate(event.target.value);
    setFormChanged(true);
  };
  const handleDateChange1 = (event) => {
    event.preventDefault();
    setToDate(event.target.value);
    setFormChanged(true);
  };
  function getRandomColor() {
    const hue = Math.floor(Math.random() * 2) === 0 ? 200 : 330;
    const saturation = 80;
    const lightness = 75;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  function getRandomColor1() {
    const hue = Math.floor(Math.random() * 360); // Generate random hue value between 0 and 360
    const saturation = Math.floor(Math.random() * 41) + 40; // Generate random saturation value between 40% and 80%
    const lightness = 75; // Keep lightness constant at 75% to generate only light colors
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  // async function displayg() {
  //   console.log('function called');
  //   // window.location.reload();
  //   let dates = {
  //     FromDate: FromDate,
  //     ToDate: ToDate,
  //     selectedValue: selectedValue,
  //   };
  //   fetch(
  //     `http://localhost:3009/mapdata?FromDate=${FromDate}&ToDate=${ToDate}&ClientId=${selectedValue}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data1) => {
  //       console.log(data1);
  //       console.log(mydata,'before');
  //       setmydata(data1);
  //       PiChartData=data1;
  //       console.log(PiChartData,'direct');
  //       console.log(mydata,'after');
  //     })
  //     .then(() => {
  //       console.log(mydata);
  //     })
  //     .catch((error) => console.error(error));
  //   try {
  //     if (clientid == "") {
  //     } else if (clientid == "ALL") {
  //       const lll = PiChartData.map((item) => item.id);// creats a new array containing all ids

  //       const qwert1 = PiChartData.map((item) => item.count);//  creats a new array containing all counts of ids
  //       console.log(lll,'000000000000000000000');
  //       console.log(qwert1,'1111111111111111111');
  //       const barChartData = {
  //         labels: lll,
  //         datasets: [
  //           {
  //             label: "ClientIds",
  //             barThickness:10,
  //             maxBarThickness:90,
  //             data: qwert1,
  //             backgroundColor: Array.from(
  //               { length: qwert1.length },
  //               getRandomColor
  //             ),
  //             borderColor: Array.from(
  //               { length: qwert1.length },
  //               getRandomColor
  //             ),
  //             borderWidth: 1,
  //           },
  //         ],
  //       };
  //       BarChartData=barChartData;

  //       console.log(bar);
  //       const pidata={
  //         label:lll,
  //         value:qwert1,
  //         color:Array.from(
  //           { length: qwert1.length },
  //           getRandomColor)

  //       }
  //       console.log(pidata,'0000000000000000000000000000000')
  //       setPiChartData(pidata);

  //       console.log(pidata,'ppppppppppppppppppp')

  //     }
  //     else {
  //       const Value = selectedValue; // clientID

  //       const lll = PiChartData.map((item) => item.id);
  //       const qwert1 = PiChartData.map((item) => item.count);
  //       console.log(lll,'000000000000000000000');
  //       console.log(qwert1,'1111111111111111111');
  //       const barChartData = {
  //         labels: lll,
  //         datasets: [
  //           {
  //             label: 'ClientId',
  //             barThickness:10,
  //             maxBarThickness:90,
  //             data: qwert1,
  //             backgroundColor: Array.from({ length: qwert1.length }, (_, i) =>
  //               lll[i]=== Value ? " #c10e21" : " #c10e2073"
  //             ),
  //             borderColor: Array.from({ length: qwert1.length }, (_, i) =>
  //               lll[i] === Value ? " #c10e21" : " #c10e2073"
  //             ),
  //             borderWidth: 0.5,
  //           },
  //         ],
  //       };

  //       setmybardata(barChartData);
  //       BarChartData=barChartData;
  //       const options = {
  //         scales: {
  //           y: {
  //             beginAtZero: true,
  //           },
  //         },
  //       };
  //       setbar(options);
  //       op=options;
  //       // console.log(clientid);
  //       // document.getElementById("dataaa").innerHTML=<PifeChart data={gdata} />/

  //       const data = mydata.map(item => {
  //         return {
  //           label: item.id,
  //           value: item.count,
  //           color: getRandomColor()
  //         }
  //       });
  //         setPData(data)
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }

  // }
  async function displayg() {
    console.log("function called");
    let dates = {
      FromDate: FromDate,
      ToDate: ToDate,
      selectedValue: selectedValue,
    };
    try {
      const response = await fetch(
        `http://localhost:3009/mapdata?FromDate=${FromDate}&ToDate=${ToDate}&ClientId=${selectedValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data1 = await response.json();
      console.log(data1);
      setmydata(data1);
      PiChartData = data1;
      console.log(PiChartData, "direct");
      console.log(mydata, "after");
      if (clientid === "") {
        // do something
        // setmybardata(barChartData);
      } else if (clientid === "ALL") {
        // do something
        const lll = PiChartData.map((item) => item.id);
        const qwert1 = PiChartData.map((item) => item.count);
        const barChartData = {
          labels: lll,
          datasets: [
            {
              label: "ClientIds",
              barThickness: 10,
              maxBarThickness: 90,
              data: qwert1,
              backgroundColor: Array.from(
                { length: qwert1.length },
                getRandomColor1
              ),
              borderColor: Array.from(
                { length: qwert1.length },
                getRandomColor
              ),
              borderWidth: 1,
            },
          ],
        };
        BarChartData = barChartData;
        // setmybardata(barChartData);
      } else {
        // do something
        const Value = selectedValue;
        const lll = PiChartData.map((item) => item.id);
        const qwert1 = PiChartData.map((item) => item.count);
        const barChartData = {
          labels: lll,
          datasets: [
            {
              label: "ClientId",
              barThickness: 10,
              maxBarThickness: 90,
              data: qwert1,
              backgroundColor: Array.from({ length: qwert1.length }, (_, i) =>
                lll[i] === Value ? "#c10e21" : "#c10e2073"
              ),
              borderColor: Array.from({ length: qwert1.length }, (_, i) =>
                lll[i] === Value ? "#c10e21" : "#c10e2073"
              ),
              borderWidth: 0.5,
            },
          ],
        };
        BarChartData = barChartData;
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function displaypg() {
    console.log("function called11111111111111");

    try {
      console.log(mynewdata, "after11111111111111111111");

      const lll = mynewdata.map((item) => item.id);
      const qwert1 = mynewdata.map((item) => item.count);
      const barChartData = {
        labels: lll,
        datasets: [
          {
            label: "ClientIds",
            data: qwert1,

            borderWidth: 1,
          },
        ],
      };
      pbarChartData = barChartData;
      // setmybardata(barChartData);
    } catch (error) {
      console.error(error);
    }
  }
  function cleardata(event) {
    // event.preventDefault();
    // setFormChanged(false);
    const tt = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);
    setFromDate(tt);
    const ee = new Date().toISOString().slice(0, 10);
    setToDate(ee);
    setSelectedValue("ALL");
    setmytitel("ALL");
    
  }
  function handleForm(event) {
    event.preventDefault();
    let dates = {
      FromDate: FromDate,
      ToDate: ToDate,
      selectedValue: selectedValue,
    };
    fetch(
      `http://localhost:3009/data?FromDate=${FromDate}&ToDate=${ToDate}&ClientId=${selectedValue}`
    )
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }

        return resp.json();
      })
      .then((data) => {
        setFormChanged1(true);
        displayg();
        displaypg();
        return data.map((info) => {
          return {
            logId: info.logID,
            createdAt: info.createdAt,
            clientId: info.clientId,
            query: info.query,
            result:(  <a
              // href={resQ}
              // target="_blank"
              onClick={() => handleModal(info.result)}
            >
              <u className="u1">Click here to view</u>
            </a>)

            
          };
        });
      })
      .then((DisplayData) => {
        if (clientid == "") {
          return {};
        } else {
          console.log(DisplayData);
          const data = {
            columns: [
              {
                label: "Log Id",
                field: "logId",
                sort: "asc",
                width: 150,
              },
              {
                label: "Created At",
                field: "createdAt",
                sort: "asc",
                width: 200,
              },
              {
                label: "Client ID",
                field: "clientId",
                sort: "asc",
                width: 200,
              },
              {
                label: "Query",
                field: "query",
                sort: "asc",
                width: 200,
              },
              {
                label: "Result",
                field: "result",
                sort: "asc",
                width: 200,
              }
            ],
            rows: DisplayData,
          };
          // setBarData(<Bar data={BarChartData} options={bar} />)

          return data;
        }
      })
      .then((data) => {
        setTableData(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
    console.log("clicked");
    console.log(dates);
  }
  function handleForm1() {
    let dates = {
      FromDate: FromDate,
      ToDate: ToDate,
      selectedValue: selectedValue,
    };
    fetch(
      `http://localhost:3009/data?FromDate=${FromDate}&ToDate=${ToDate}&ClientId=${selectedValue}`
    )
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }
        return resp.json();
      })
      .then((data) => {
        displayg();
        displaypg();
        return data.map((info) => {
          return {
            logId: info.logID,
            createdAt: info.createdAt,
            clientId: info.clientId,
            query: info.query,
            result:(<a
              onClick={() => handleModal(info.result)}
            >
              <u className="u1">Click here to view</u>
            </a>)
            
          };
        });
      })
      .then((DisplayData) => {
        if (clientid == "") {
          return {};
        } else {
          console.log(DisplayData);
          const data = {
            columns: [
              {
                label: "Log Id",
                field: "logId",
                sort: "asc",
                width: 150,
              },
              {
                label: "Created At",
                field: "createdAt",
                sort: "asc",
                width: 200,
              },
              {
                label: "Client ID",
                field: "clientId",
                sort: "asc",
                width: 200,
              },
              {
                label: "Query",
                field: "query",
                sort: "asc",
                width: 200,
              },
              {
                label: 'Result',
                field: 'result',
                sort: 'asc',
                width: 100,
              },
            ],
            rows: DisplayData,
          };
          // setBarData(<Bar data={BarChartData} options={bar} />)

          return data;
        }
      })
      .then((data) => {
        setTableData(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
    console.log("clicked");
    console.log(dates);
  }
  useEffect(() => {
    handleForm1();

    fetch("http://localhost:3009/getid", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data1) => setUniqueIds(data1))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3009/clientno", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1,"___________________________________---")
        mynewdata=data1;
      })
      .then(() => {
        console.log(mynewdata,'++++++++++++++++++++++++++++++++++++++++');
      })
      .catch((error) => console.error(error));
  }, []);
  
  // function getmapdata(){

  //   let dates = {
  //     FromDate: FromDate,
  //     ToDate: ToDate,
  //     selectedValue: selectedValue,
  //   };
  //   fetch(
  //     `http://localhost:3009/mapdata?FromDate=${FromDate}&ToDate=${ToDate}&ClientId=${selectedValue}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data1) => {
  //       setmydata(data1);
  //     })
  //     .then(() => {
  //       console.log(mydata);
  //     })
  //     .catch((error) => console.error(error));
  // };
  const handleExport = () => {
    fetch(
      `http://localhost:3009/export?fd=${FromDate}&td=${ToDate}&id=${selectedValue}`
    ).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error: ' + response.status);
      }
    }).then((url)=>{
      console.log(url);
      const linker = document.createElement('a');
      console.log(url['link'])
      linker.href = url['link'];
      linker.click();
    });}
  const dropdownItems = uniqurIds.map((value) => (
    <Dropdown.Item
      key={value.id}
      className="dropdown-item-danger"
      onClick={() => handleClick(value)}
    >
      {value}
    </Dropdown.Item>
  ));
  const handleModal = (jsonString) => {
    setmodaldata(jsonString);
 
    setdisplaydata(true);
  };

  return (
    <>

    {displaydata && (
        <div className="modalcontainer">
            <div className="modal-content">
              <span className="close" onClick={() => setdisplaydata(false)}>
                &times;
              </span>
              <br />
              <pre className="resultModal">{modaldata}</pre>
            </div>
        </div>
      )}

      <form>
        <div
          className="container"
          style={{
            boxShadow: "2px 2px 5px 5px white",
            borderRadius: "15px",
            marginTop: "50px",
            width: "200%",
            height: "60px",
            backgroundColor: "#07148f1c",
            border: "1px solid #0f30311c",
          }}
        >
          <div className="row">
            <div className="col-sm-3">
              <div className="start">
                <label
                  htmlFor="datePicker"
                  style={{
                    color: "black",
                    borderRadius: "20px",
                    fontSize: "small",
                    fontStyle: "oblique",
                  }}
                >
                  From date
                </label>
                <br></br>
                <input
                  type="date"
                  id="datePicker"
                  className="text-center"
                  defaultValue={new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
                    .toISOString()
                    .slice(0, 10)}
                  max={new Date().toISOString().slice(0, 10)}
                  onChange={handleDateChange}
                  style={{
                    borderRadius: "7px",
                    fontStyle: "oblique",
                    marginRight: "100px",
                    fontSize: "small",
                  }}
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="end">
                <label
                  htmlFor="datePicker1"
                  style={{
                    color: "black",
                    marginLeft: "5px",
                    fontSize: "small",
                    fontStyle: "oblique",
                  }}
                >
                  To date
                </label>
                <br></br>
                <input
                  type="date"
                  id="datePicker1"
                  className="text-center"
                  defaultValue={new Date().toISOString().slice(0, 10)}
                  max={new Date().toISOString().slice(0, 10)}
                  min={FromDate}
                  onChange={(event) => {
                    handleDateChange1(event);
                    if (
                      new Date(event.target.value) <
                      new Date(document.getElementById("datePicker").value)
                    ) {
                      document.getElementById("datePicker1").value = new Date()
                        .toISOString()
                        .slice(0, 10);
                      document.getElementById("datePicker").value = new Date(
                        document.getElementById("datePicker1").value
                      )
                        .toISOString()
                        .slice(0, 10);
                    }
                  }}
                  style={{
                    borderRadius: "7px",
                    fontStyle: "oblique",
                    marginLeft: "5px",
                    fontSize: "small",
                  }}
                />
              </div>
            </div>
            <br></br>

            <div className="col-sm-3">
              <label htmlFor="clientId"></label>
              <DropdownButton
                className="dropdown-toggle btn-sm"
                class="dropdown btn-danger btn-sm"
                title={mytitel}
                style={{
                  marginTop: "-6%",
                  marginBottom: "5%",
                  color: " #5a5f5e1c",
                }}
              >
                {dropdownItems}
              </DropdownButton>{" "}
            </div>

            <div className="col-sm-3">
              <div className="end">
                <button
                  id="b"
                  type="submit"
                  className="btn btn-success mt-3 mb-4 btn-sm"
                  onClick={handleForm}
                  style={{ fontStyle: "oblique" }}
                  disabled={!formChanged}
                >
                  SUBMIT
                </button>
               
        <button
                  type="reset"
                  className="btn btn-danger  btn-sm"
                  onClick={cleardata}
                  style={{ fontStyle: "oblique",position:"relative",bottom:"4px" }}
                  disabled={!formChanged}
                >
                  RESET
                </button>
                <button
                  type="reset"
                  className="btn btn-primary btn-sm"
                  onClick={handleExport}
                  style={{ fontStyle: "oblique",position:"relative",right:"3%",bottom:"55px" }}
                  // disabled={!FormChanged1}
                >
                  DOWNLOAD
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="container" style={{ width: "90%" }}>
        <div className="row">
          <div className="col-sm-8"></div>
          <div className="col-sm-12">
            <div
              id="dataa"
              className=" dataa text-center"
              style={{ display: "flex" }}
            >
              <div id="pp">Report</div>

              <div className="bar">
                <Bar data={BarChartData} options={bar} />
              </div>

              <div className="dnut">
                <Doughnut data={pbarChartData} options={options1} />
              </div>

              {/* <Doughnut {...config} />{" "} */}
            </div>
            <br></br> <br></br> <br></br>
            <div
              id="data"
              className="data text-center"
              style={{ position: "absolute", left: "90px", top: "510px" }}
            >
              {" "}
              <div id="pgdata">
                <MDBDataTable
                  bordered
                  sortable={false}
                  data={tableData}
                ></MDBDataTable>
              </div>
            </div>
           

          </div>
        </div>{" "}
      </div>
      
      <div className="container">
        
        {" "}
        
        <Footer />
      </div>
    </>
  );
}

export default MyDatePicker;
