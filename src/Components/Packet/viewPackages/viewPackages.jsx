import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@apollo/client"
import LoadingSvg from "../../loading/loadingSvg"
import { GET_DATA_DETAILS_PACKAGE } from "../../apolloClient/package/query"
import img1 from "../../../assets/image/image1.jpg"
import "./style.css"

const ViewPackages = () => {

    /** Mengambil id view dari loal storage */
    const idView = localStorage.getItem('idView')
    // console.log(idView)

     /** Menggunakan useQuery untuk menampilkan data */
    const {data, loading, error, refetch }= useQuery(GET_DATA_DETAILS_PACKAGE, {variables: {_eq: idView}})
    // console.log(data);

    

    const navigate = useNavigate()

     /** HandleClick back */
    const handleClick = () => {
        navigate("/package");
    }

    useEffect(() => {
        refetch()
    },[])

    if(loading){
        return(
            <LoadingSvg />
        )
    }

    const ViewDetailsPackage = () => {

         /** Logic id view */
        if(idView !== ''){
            return(
                <Container>
                    <Row>
                        {data.Packages.map((details, index) => {
                            // console.log(details);
                            return(
                                <Col>
                                    <h1 className="view_package">"{details.name_package}"</h1>
                                    <h2 className="view_category">(Category : {details.Category.category})</h2>
                                    <div className="d-flex justify-content-center">
                                    <img src={details.image} alt="img-view" className="view_img"/>
                                    </div>
                                    <div className="harga">
                                        <h2><b>Rp. {details.price_package}</b></h2>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row className="d-flex justify-content-center details">
                        {data.Benefit_type.map((benefit) => {
                            // console.log(benefit.RelationBenefit.name)
                            const description = JSON.parse(benefit.description);
                            // console.log(description)
                            return(
                                <Col>
                                        <div>
                                            <p>
                                                <b>{benefit.RelationBenefit.name}</b>
                                            </p>
                                                {description.map((desc) => {
                                                    return(
                                                        <ul>
                                                            <li>{desc}</li>
                                                        </ul>
                                                    )
                                                })}
                                        </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            )
        }
    }

    return(
        <div className="body_view">
            <div className="view_content">
                <ViewDetailsPackage />
                <div className="d-flex justify-content-center pt-3 pb-3">
                    <Button variant="primary" onClick={handleClick} >Back</Button>
                </div>
            </div>
        </div>
    )
}

export default ViewPackages