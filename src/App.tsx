import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// components 
import ButtonComponent from './components/button/ButtonComponent'
import ModalComponent from './components/modal/ModalComponent'
import TextureComponent from './components/texture/TextureComponent'

function App() {
  const [next,setNext]=useState("BLUE")
  const [current,setCurrent]=useState("BLUE")
  const [error,setError]=useState(false)
  const [path,setPath]=useState(["BLUE"])

  const handleClick = (value:string)=>{
    if((next==="GREEN" && value==="YELLOW")||(next==="YELLOW" && value==="GREEN")||(current===value&& value!=="BLUE")){
      setError(true)
    }
    setCurrent(next)
    setNext(value)
    setPath([...path,value])
  }
  const handleReset = ()=>{
    setError(false)
    setCurrent("BLUE")
    setPath(["BLUE"])
    setNext("BLUE")
  }

  const handleModal = (value:boolean)=>{
    if(!value){
      handleReset()
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
          <h4 className="text-center mt-5">Result</h4>
          <Row className="mt-2">
              <Col></Col>
              <Col><TextureComponent path={path}/></Col>
              <Col></Col>
          </Row>
          <ModalComponent handleModal={handleModal} error={error}/>
      </Container>
    </>
  );
}

export default App;
