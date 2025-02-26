"use client";
import {useState,useEffect} from "react"
import { useRouter } from "next/navigation";
import { Modal, Button, Card, Row, Col } from "react-bootstrap";
import { useAppContext } from "../../components/home/myContext";
import Swal from 'sweetalert2'

import "animate.css";



const Header = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const options = [
    { title: "Add Nurse", image: "/images/nurse.webp", route: "/add-nurse" },
    { title: "Add Doctor", image: "/images/welcomec.jpg", route: "/add-doctor" },
    { title: "Add Patient", image: "/images/patient.jpeg", route: "/add-patient" },
  ];
  const { api,profile,setData ,user,setUser} = useAppContext();
  // const [user,setUser] = useState({})
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login"); // Redirect to login after logout
  };
  // useEffect(()=>{

  // },[])
  const Thankyou = async()=>{
    Swal.fire({
      title:`Thank you for testing  ! `,
      text: "Project Development phase 1 completed , kindly discuss with Samuel Onwodi for completion of phase II  !!",
      icon: "success"
    })
  }
  const Create =()=>{
    console.log("clicked")
  }

  return (
    <header className="bg-white p-2 p-lg-4 shadow-md flex justify-between items-center">
      <h1 className="text-lg font-semibold"> <span className="d-none d-lg-inline">Welcome</span> <span className="d-lg-none d-inline">Hi </span> {user &&user.name  ?user.name :"Admin"}</h1>
      {user &&user.name ? <button onClick={handleShow} className="animate__animated animate__pulse animate__infinite bg-blue-500 text-white px-lg-4 px-2 py-2 rounded hover:bg-green-500">
        Add User
      </button>:""}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Select User Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="g-3">
            {options.map((option, index) => (
              <Col key={index} xs={12} sm={6} md={4}>
                <Card
                  className="text-center shadow-lg p-3 rounded animate__animated animate__fadeInUp option-card"
                  onClick={Thankyou}
                  // onClick={() => navigate(option.route)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img variant="top" src={option.image} className="p-3" style={{ height: "150px", objectFit: "contain" }} />
                  <Card.Body>
                    <Card.Title>{option.title}</Card.Title>
                  </Card.Body>
                </Card>

                  
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;
