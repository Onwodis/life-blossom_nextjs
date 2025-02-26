"use client"
import { useEffect, useState, useContext } from "react";

import Link from "next/link";
import Swal from "sweetalert2";
// import planImageb from "../sales/moneyb.gif";
import Table from 'react-bootstrap/Table';

import Ctt from "../../components/common/Ctt";
import Hold from "../../components/common/Loading";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Pagination } from "react-bootstrap";
import { useAppContext } from "../../components/home/myContext";

import axios from "axios";
import Spinner from "react-bootstrap/Spinner";


// import { GlobalContext } from "../../Globalcontext";

const Atrans = () => {
    const { data, setData } = useAppContext();


  const [show, setShow] = useState(false);
  const [first, setFirst] = useState(true);
  const [ll, setLl] = useState(true);
//   const navigate = useNavigate();
  const [sum, setSum] = useState(0);
//   const [userid, setUserid] = useState(sessionStorage.getItem("userid"));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [trans, setTrans] = useState();
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [totalPages, setTotalPages] = useState(1); // Total pages state
  const [pageSize] = useState(10); // Items per page

  let [checkCalled, setCheck] = useState(false);
  const getPaginationItems = () => {
    const maxVisiblePages = 3; // Maximum number of pagination buttons to display
    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };
  const Pago = async (page) => {
    setLl(true);
    const mapi = `${cont.api}admin/gettrans?page=${page}&limit=${pageSize}&userid=${userid}`;

    try {
      await axios
        .get(mapi, {
          headers: { userid, obi: cont.obi },
        })
        .then((res) => {
          if (!res.data.nolicense) {
            if (res.data.success) {
              setSum(res.data.sum);
              setTrans((prev) => [...res.data.trans]);

              setTotalPages(res.data.totalPages);
              setCurrentPage(res.data.currentPage);
            } else {
              navigate("/");
            }
          } else {
            Swal.fire({
              title: "You do not have the license to visit this route !",
              text: "Contact management ! !",
              icon: "success",
            });
            navigate("/");
          }
        });
    } catch (error) {
      // Handle error if needed
      console.error("Error:", error);
    }
    setLl(false);
  };
 
  useEffect(() => {
    setData((prev)=>({nurses:true}))

    
    const Check = async () => {
      try {
        // await fetch("/api/fetchpatients", {
        //     method: "GET",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({email:data.email,pwrd:data.pwrd}),
        //   })
        //   .then((res) => {
        //     if (res.data.success) {
        //       // setFirst(false);

        //       if (res.data.trans) {
        //         //   alert(res.data.data.latestloginplayertime);
        //         // setTrans(() => res.data.trans);
        //         setSum(res.data.sum);
        //         setUser(res.data.user);
        //         setTrans(res.data.trans);

        //         setTotalPages(res.data.totalPages);
        //         setCurrentPage(res.data.currentPage);
        //         setFirst(false);
        //       }
        //     }
        //     else {
        //       navigate("/");
        //     }
        //   });

        setSum(0);
        // setUser(res.data.user);
        setTrans([]);

        setTotalPages(1);
        setCurrentPage(1);
        setFirst(false);


      
      }catch (error) {
        // Handle error if needed
        console.error("Error:", error);
      }
      setLl(false);
    };
    Check()

   
  }, []);
  const handlePageChange = (page) => {
    Pago(page);
  };
  return (
    <div className="px-1 app-container">
      {first ? (
        <Hold />
      ) : (
        <div>
          
          <div>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Body>
                <div
                  style={{ marginTop: "" }}
                  className="form-sectionh fera"
                ></div>
              </Offcanvas.Body>
            </Offcanvas>

            <div className="container-xxl py-1">
              <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <h1 className="mb-4 mt-4 text-success tshad">
                    Nurses
                    <small className="text-muted sms d-lg-inline d-none">
                      ({sum})
                    </small>
                  </h1>
                  
                </div>
                {ll ? (
                  <div className="text-center mt-5">
                    <Spinner
                      className="text-center mt-5 fs-1"
                      animation="border"
                      variant="primary"
                    />
                  </div>
                ) : (
                  <div>
                    {trans && trans.length > 0 ? (
                      <div>
                        <div
                          className="table-container  container-lg table-responsive rela justify-content-center  mx-auto rounded mt-0  col-12 text-light"
                          style={{
                            maxHeight: "75vh",
                            minHeight: "50vh",
                            overflow: "scroll",
                          }}
                        >
                          <Table
                            sticky
                            striped
                            bordered
                            hover
                            className="table mt-2 boxx overflow-auto rounded"
                          >
                            <thead data-aos="fade-left" className="tstick ">
                              <tr className="text-center">
                                <th className="text-center">S/N</th>
                                <th>Time</th>

                                <th className="text-center">Name</th>
                                <th>Type</th>
                                <th>Sales Pay</th>

                                <th>Amount</th>
                                <th>Next Due</th>

                                <th className="text-center">More info</th>
                                <th className="text-center">Sales</th>

                                <th>Reference</th>
                                {/* <th>Transid</th> */}
                              </tr>
                            </thead>
                            <tbody data-aos="fade-right">
                              {trans.map(
                                (
                                  {
                                    name,
                                    transid,
                                    value,
                                    iforder,
                                    dsalespay,
                                    fromsales,
                                    salesname,
                                    reference,
                                    ifbar,
                                    dueh,
                                    damount,
                                    date,
                                    forr,
                                    plan,
                                  },
                                  index
                                ) => (
                                  <tr key={transid} className="text-center">
                                    <td>
                                      {(currentPage - 1) * pageSize + index + 1}
                                    </td>
                                    <td
                                      className=""
                                      style={{ fontSize: "13px" }}
                                    >
                                      {date}
                                    </td>

                                    <td className="reduce-sizeb">{name}</td>
                                    <td className="reduce-size">{forr}</td>

                                    <td className="reduce-size">{dsalespay}</td>

                                    <td className="reduce-size">{damount}</td>
                                    <td
                                      style={{ minWidth: "220px" }}
                                      className="reduce-size"
                                    >
                                      {dueh}
                                    </td>

                                    <td className="text-start reduce-size">
                                      {ifbar ? (
                                        plan
                                      ) : (
                                        <Ctt
                                          id="tooltip-cart"
                                          tooltip={`${value}`}
                                        >
                                          <small className={`text-left`}>
                                            {value.length > 19
                                              ? value.slice(0, 25) + " ..."
                                              : value}
                                            {/* {ifurl ? (value.slice(0, 20) +" ...")  : "Message"} */}
                                          </small>
                                        </Ctt>
                                      )}
                                    </td>
                                    <td>{fromsales ? salesname : "nil"}</td>

                                    <td className="reduce-size">{reference}</td>
                                    {/* <td>{transid}</td> */}
                                  </tr>
                                )
                              )}
                            </tbody>
                          </Table>
                        </div>
                        <div className="d-flex justify-content-center  mt-5">
                          {trans && trans.length > 0 ? (
                            <Pagination className="custom-pagination">
                              <Pagination.First
                                onClick={() => handlePageChange(1)}
                                disabled={currentPage === 1}
                              />
                              <Pagination.Prev
                                onClick={() =>
                                  handlePageChange(currentPage - 1)
                                }
                                disabled={currentPage === 1}
                              />

                              {/* Dynamically render the pagination items based on the current range */}
                              {getPaginationItems().map((page) => (
                                <Pagination.Item
                                  key={page}
                                  active={page === currentPage}
                                  onClick={() => handlePageChange(page)}
                                >
                                  {page}
                                </Pagination.Item>
                              ))}

                              <Pagination.Next
                                onClick={() =>
                                  handlePageChange(currentPage + 1)
                                }
                                disabled={currentPage === totalPages}
                              />
                              <Pagination.Last
                                onClick={() => handlePageChange(totalPages)}
                                disabled={currentPage === totalPages}
                              />
                            </Pagination>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ) : (
                      <div
                        style={{ minHeight: "50vh" }}
                        className="text-center align-items-center py-5 mt-5"
                      >
                        <h4 className="text-center text-muted mt-5">
                          ~ No Nurses yet ~
                        </h4>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Atrans;
