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
import DropdownI from "./Dropdown";

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
let time;

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
  const handleClick1 = (itemName) => {
    setFormChanged(true);
    setmytitel1(itemName);
    time = itemName;
    console.log(time, "pooooo");
    if (time === "Last 6 Months") {
      setshow1(true);
      showdata="Data of last 6 Months"
      setshow(false);
      setdisabled(true);
      const tt = new Date(Date.now() - 180 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);
      setFromDate(tt);
    } else if (time === "Last Years") {
      setshow1(true);
      showdata="Data of last 1 Year"
      setdisabled(true);
      setshow(false);
      
      console.log("pllllllpppooooo");
      const tt = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);
      setFromDate(tt);
    } else if (time === "Custom") {
      setshow1(false);
      setdisabled(false);
      setshow(true);
    } else if (time === "Last 2 Years") {
      setshow1(true);
      showdata="Data of last 2 Years"
      setshow(false);
      setdisabled(true);
      console.log("pllllllpppooooo");
      const tt = new Date(Date.now() - 365 * 2 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);
      setFromDate(tt);
    } else if (time === "Last 3 Years") {
      setshow1(true);
      showdata="Data of last 3 Years"
      setshow(false);
      setdisabled(true);
      console.log("pllllllpppooooo");
      const tt = new Date(Date.now() - 365 * 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);
      setFromDate(tt);
    } else if (time === "Last 4 Years") {
      setshow1(true);
      showdata="Data of last 4 Years"
      setshow(false);
      setdisabled(true);
      console.log("pllllllpppooooo");
      const tt = new Date(Date.now() - 365 * 4 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);
      setFromDate(tt);
    } else if (time === "Last 5 Years") {
      setshow1(true);
      showdata="Data of last 5 Years"
      setshow(false);
      setdisabled(true);
      console.log("pllllllpppooooo");
      const tt = new Date(Date.now() - 365 * 5 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);
      setFromDate(tt);
    }
  };

  // const [time, settime] = useState("1 Month");
  const [displaydata, setdisplaydata] = useState(false);
  const[show,setshow]=useState(false);
  const[show1,setshow1]=useState(true);
  let showdata="Graphical Representation";
  const [modaldata, setmodaldata] = useState("");
  const [formChanged, setFormChanged] = useState(false);
  const [FormChanged1, setFormChanged1] = useState(false);
  const [mytitel, setmytitel] = useState("Client ID");
  const [mytitel1, setmytitel1] = useState("Timeline");
  const tt = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const [disabled, setdisabled] = useState(false);
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
    // event.preventDefault();
    setFromDate(event.target.value);
    setFormChanged(true);
    setmytitel1("Random");
  };
  const handleDateChange1 = (event) => {
    event.preventDefault();
    setToDate(event.target.value);
    setFormChanged(true);
    setmytitel1("Random");
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
    setmytitel1("Last Years");
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
            result: (
              <a
                // href={resQ}
                // target="_blank"
                onClick={() => handleModal(info.result)}
              >
                <u className="u1">Click here to view</u>
              </a>
            ),
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
            result: (
              <a onClick={() => handleModal(info.result)}>
                <u className="u1">Click here to view</u>
              </a>
            ),
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
        console.log(data1, "___________________________________---");
        mynewdata = data1;
      })
      .then(() => {
        console.log(mynewdata, "++++++++++++++++++++++++++++++++++++++++");
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
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then((url) => {
        console.log(url);
        const linker = document.createElement("a");
        console.log(url["link"]);
        linker.href = url["link"];
        linker.click();
      });
  };
  console.log(uniqurIds, "pppppppppppppppiiiiiiiiiiiiii");
  const dropdownItems = uniqurIds.map((value) => (
    <Dropdown.Item
      key={value.id}
      className="dropdown-item-success"
      onClick={() => handleClick(value)}
    >
      {value}
    </Dropdown.Item>
  ));
  const options = [
    
    "Last 6 Months",
    "Last Years",
    "Last 2 Years",
    "Last 3 Years",
    "Last 4 Years",
    "Last 5 Years",
    "Custom"
  ];
  const DropdownItem = options.map((values) => (
    <Dropdown.Item
      key={values.id}
      className="dropdown-item-primary"
      onClick={() => handleClick1(values)}
    >
      {values}
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
            <span className="result">RESULT</span>
            <span className="close" onClick={() => setdisplaydata(false)}>
              &times;
            </span>
            <pre className="resultModal">{modaldata}</pre>
          </div>
        </div>
      )}

      <form>
        <div
          className="container"
          style={{
            boxShadow: "2px 2px 5px 5px white",
            borderRadius: "5px",
            marginTop: "5%",
            width: "200%",
            height: "60px",
            backgroundColor: "#07148f1c",
            border: "1px solid #0f30311c",
            boxShadow: "3px 5px 3px 3px rgba(0, 0, 0, 0.411)",
          }}
        >
          <div className="row">
        
            <div className="col-sm-2">
              {show1&& <div className="showdata">{showdata}</div>}
           {show&&   <div className="start">
                <label
                  htmlFor="datePicker"
                  style={{
                    color: "black",
                    // borderRadius: "20px",
                    fontSize: "small",
                    // fontStyle: "oblique",
                  }}
                  // onClick={setdisabled(false)}
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
                    // borderRadius: "7px",
                    // fontStyle: "oblique",
                    // marginLeft: "6vh",
                    fontSize: "small",
                  }}
                  disabled={disabled}
                />
              </div>}
            </div>
            <div className="col-sm-2">
              {show &&<div className="end">
                <label
                  htmlFor="datePicker1"
                  style={{
                    color: "black",
                    // marginLeft: "15vh",
                    fontSize: "small",
                    // fontStyle: "oblique",
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
                    // borderRadius: "7px",
                    // fontStyle: "oblique",

                    fontSize: "small",
                  }}  
                  disabled={disabled}
                />
              </div>}
            </div>
            <div
              className="col-sm-1"
              style={{ position: "relative", marginTop: ".7%", left: "13%" }}
            >
              <DropdownButton
                style={{
                  // fontStyle: "oblique",
                }}
                title={mytitel1}
              >
                {DropdownItem}{" "}
              </DropdownButton>
            </div>
            <div className="col-sm-3">
              <DropdownButton
                style={{ marginTop: "3%"}}
                title={mytitel}
              >
                {dropdownItems}{" "}
              </DropdownButton>
              <button
                id="p1"
                type="submit"
                // className="btn btn-success"
                onClick={handleForm}
                // style={{ fontStyle: "oblique" }}
                disabled={!formChanged}
                style={{
                  position: "relative",
                  left: "80%",
                  marginTop: "2.5%",
                  // fontStyle: "oblique",
                  borderRadius: "7px",
                  borderColor: "green",
                }}
              >
                SUBMIT
              </button>
              {/* <button
                id="b"
                type="submit"
                className="btn btn-success  btn-sm"
                onClick={handleForm}
                style={{ fontStyle: "oblique" }}
                disabled={!formChanged}
              >
                SUBMIT
              </button> */}
            </div>

            <div className="col-sm-2">
              <button
                id="p12"
                type="reset"
                // className="btn btn-danger  btn-sm"
                onClick={cleardata}
                style={{
                  // backgroundColor: "orange",
                  // color: "white",
                  position: "relative",
                  left: "35%",
                  marginTop: "8%",
                  // fontStyle: "oblique",
                  borderRadius: "7px",
                }}
                disabled={!formChanged}
              >
                RESET
              </button>
              <button
                id="p123"
                type="reset"
                // className="btn btn-primary btn-sm"
                onClick={handleExport}
                style={{
                  // backgroundColor: "blue",
                  // color: "white",
                  position: "relative",
                  left: "65%",
                  marginTop: "3%",
                  // fontStyle: "oblique",
                  borderRadius: "7px",
                }}
                // disabled={!FormChanged1}
              >
                DOWNLOAD
              </button>
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
