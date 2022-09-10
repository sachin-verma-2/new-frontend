import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNav from "./AdminNav";
import Table from 'react-bootstrap/Table'
import * as ReactBootstrap from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import './Employee.css'
import { Link, useNavigate } from 'react-router-dom'

const ViewJobPosted = () => {
  const [classdesc, setclassdesc] = useState("btn-warning")
  const Applicant = [{
    id: "631878a1a651",
    title: "Software Development Intern",
    skillsets: "c, c++",
    maxposition: 1,
    maxapplicants: 5,
    jobtype: "internship",
    salary: 4000,
    duration: 7,
    deadline: "2021-02-22T18:17:24.5192"
  },
  {
    id: "631878a1a652",
    title: "Software Development Intern",
    skillsets: "c, c++",
    maxposition: 1,
    maxapplicants: 5,
    jobtype: "internship",
    salary: 4000,
    duration: 7,
    deadline: "2021-02-22T18:17:24.5192"
  },
  {
    id: "631878a1a653",
    title: "Software Development Intern",
    skillsets: "c, c++",
    maxposition: 1,
    maxapplicants: 5,
    jobtype: "internship",
    salary: 4000,
    duration: 7,
    deadline: "2021-02-22T18:17:24.5192"
  },
  {
    id: "631878a1a654",
    title: "Software Development Intern",
    skillsets: "c, c++",
    maxposition: 1,
    maxapplicants: 5,
    jobtype: "internship",
    salary: 4000,
    duration: 7,
    deadline: "2021-02-22T18:17:24.5192"
  },
  {
    id: "631878a1a655",
    title: "Software Development Intern",
    skillsets: "c, c++",
    maxposition: 1,
    maxapplicants: 5,
    jobtype: "internship",
    salary: 4000,
    duration: 7,
    deadline: "2021-02-22T18:17:24.5192"
  },
  {
    id: "631878a1a656",
    title: "Software Development Intern",
    skillsets: "c, c++",
    maxposition: 1,
    maxapplicants: 5,
    jobtype: "internship",
    salary: 4000,
    duration: 7,
    deadline: "2021-02-22T18:17:24.5192"
  },
  {
    id: "631878a1a657",
    title: "Software Development Intern",
    skillsets: "c, c++",
    maxposition: 1,
    maxapplicants: 5,
    jobtype: "internship",
    salary: 4000,
    duration: 7,
    deadline: "2021-02-22T18:17:24.5192"
  },
  {
    id: "631878a1a658",
    title: "Software Development Intern",
    skillsets: "c, c++",
    maxposition: 1,
    maxapplicants: 5,
    jobtype: "internship",
    salary: 4000,
    duration: 7,
    deadline: "2021-02-22T18:17:24.5192"
  },
  {
    id: "631878a1a659",
    title: "Software Development Intern",
    skillsets: "c, c++",
    maxposition: 1,
    maxapplicants: 5,
    jobtype: "internship",
    salary: 4000,
    duration: 7,
    deadline: "2021-02-22T18:17:24.5192"
  }]
  // const dispatch = useDispatch();
  // const { data: jobsData, status } = useSelector((state) => state.jobs)
  // useEffect(()=>{
  //   dispatch(fetchJobs());
  // },[])

  const Navigate = useNavigate();
  const handleJobUpdate = (id) => {
    console.log("Inside Update" + " " + id)
    Navigate('/updatejobs', { id })
  }
  const handleJobDelete = (id) => {
    alert("Inside Delete" + " " + id)
  }
  const renderItem = (item, index) => {
    return (
      <Card className="cardstyle" key={index}>
        <Card.Header>
            <Card.Title><h4><b>Job Title</b></h4></Card.Title>
            <Card.Subtitle><h5>{item.title}</h5></Card.Subtitle>
          </Card.Header>
        <Card.Body>
            <Table style={{margin:"0px"}}>
              <tbody>
              <tr>
                <td><b>Skillsets: </b></td>
                <td>{item.skillsets}</td>
              </tr>
              <tr>
                <td><b>Maxposition: </b></td>
                <td>{item.maxposition}</td>
              </tr>
              <tr>
                <td><b>Maxapplicants: </b></td>
                <td>{item.maxapplicants}</td>
              </tr>
              <tr>
                <td><b>Salary: </b></td>
                <td>{item.salary}</td>
              </tr>
              <tr>
                <td><b>Jobtype: </b></td>
                <td>{item.jobtype}</td>
              </tr>
              <tr>
                <td><b>Duration: </b></td>
                <td>{item.duration}</td>
              </tr>
              <tr>
                <td><b>Deadline: </b></td>
                <td>{item.deadline}</td>
              </tr>
              </tbody>
            </Table>
        </Card.Body>
        <Card.Footer>
          <Link to={"/updatejobs/" + item.id}>
            <ReactBootstrap.Button className="btn-warning btnstyle1">Update</ReactBootstrap.Button>
          </Link>
          <ReactBootstrap.Button className="btn-danger btnstyle2" onClick={() => { handleJobDelete(index) }} style={{ marginLeft: '0.3rem' }}>Delete</ReactBootstrap.Button>
        </Card.Footer>
      </Card>
    )
  }
  // if (status === STATUSES.LOADING){
  //   return <h2>LOADING....</h2>
  // }
  return (
    <div>
      <AdminNav />
      <h1 className='navbrand'>My Jobs</h1>
      <Link to='/addjobs'><ReactBootstrap.Button className="btn btn-primary mb-2" size="lg">Add New</ReactBootstrap.Button></Link>
      <div className="cardblockstyle">
        {
          Applicant.map(renderItem)
        }
      </div>
    </div>
  )
}

export default ViewJobPosted;
