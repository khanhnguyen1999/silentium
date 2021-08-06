import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// components 
import ButtonComponent from './components/button/ButtonComponent'
import ModalComponent from './components/modal/ModalComponent'

type IAction = {
  action: boolean;
}

function App() {
  const [next,setNext]=useState("BLUE")
  const [current,setCurrent]=useState("BLUE")
  const [error,setError]=useState(false)

  const handleClick = (value:string)=>{
    if((next==="GREEN" && value==="YELLOW")||(next==="YELLOW" && value==="GREEN")||(current===value&& value!=="BLUE")){
      setError(true)
    }
    setCurrent(next)
    setNext(value)
  }

  const handleReset = ()=>{
    setError(false)
    setCurrent("BLUE")
    setNext("BLUE")
  }

  const handleModal = (value:boolean)=>{
    if(!value){
      setError(false)
      setCurrent("BLUE")
      setNext("BLUE")
    }
  }
  return (
    <>
      <Container className="mt-5">
          <Row>
              <Col></Col>
              <Col style={{textAlign:"center"}}><ButtonComponent actionColor={next==="GREEN"?true:false} onClick={()=>handleClick("GREEN")} text="Green" variant="success"/></Col>
              <Col></Col>
          </Row>
          <Row>
              <Col style={{textAlign:"center"}}><ButtonComponent actionColor={next==="BLUE"?true:false} onClick={()=>handleClick("BLUE")} text="Blue"/></Col>
              <Col></Col>
              <Col style={{textAlign:"center"}}><ButtonComponent onClick={()=>handleReset()} text="Reset" variant="light"/></Col>
          </Row>
          <Row>
              <Col></Col>
              <Col style={{textAlign:"center"}}><ButtonComponent actionColor={next==="YELLOW"?true:false} onClick={()=>handleClick("YELLOW")} text="Yellow" variant="warning"/></Col>
              <Col></Col>
          </Row>
          <ModalComponent handleModal={handleModal} error={error}/>
      </Container>
    </>
  );
}

export default App;
