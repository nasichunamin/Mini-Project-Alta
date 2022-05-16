import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import Cookies from "universal-cookie/cjs/Cookies";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { GET_DATA_PACKAGE } from "../../apolloClient/package/query";
import { DELETE_PACKAGE } from "../../apolloClient/package/mutation";
import LoadingSvg from '../../loading/loadingSvg'
import styles from "./style.module.css"



const DataPacket = () => {

    const cookies = new Cookies()
    const auth = cookies.get("auth")

     /** Menggunakan use Query untuk menampilkan data package */
    const {data, loading, error, refetch } = useQuery(GET_DATA_PACKAGE)

    /** Menggunakan useMutation untuk delete data package */
    const [deletePackage, {loading: loadingDelete, error: errorDelete}] = useMutation(DELETE_PACKAGE, {refetchQueries: [GET_DATA_PACKAGE]})
    
    const navigate = useNavigate();

    /** useEffect untuk refetch data */
    useEffect(() => {
        refetch()
    },[])
    
    /** HandleView untuk view more */
    const HandleView = (idx) => {
        // console.log("id nya", idx)
        localStorage.setItem("idView", JSON.parse(idx))
        navigate("/view");
    }

    /** Handle Update untuk update data */
    const HandleUpdate = (idx) => {
        localStorage.setItem("idUpdate", JSON.parse(idx))
        console.log(idx)
        navigate("/updatepackage");
    }

    /** Handle Update untuk delet data */
    const HandleDelete = (idx) => {
        // console.log("TEST")
        // console.log("idx", idx)
        deletePackage({
            variables: {
                _eq: idx
            }
        })
    }

    
    if(loading || loadingDelete){
        return(
            <LoadingSvg />

        )
    }

    if(error){
        console.log(error)
    }

    return (
        <Row xs={1} s={2} md={2} l={3} xl={3} xxl={3} className="g-4">
        {data.Packages.map((dataPackages, idx) => {
            // console.log(dataPackages);
            return(
                <Col key={idx}>
                    <Card className={styles.card}>
                    <Card.Img variant="top" key={dataPackages.id} src={dataPackages.image} alt="gambar"/>
                    <Card.Body>
                        <Card.Title><h2 className={styles.package}>{dataPackages.name_package}</h2></Card.Title>
                        <Card.Title><h2 className={styles.category}>{dataPackages.Category.category}</h2></Card.Title>
                        <Card.Text className={styles.place}>{dataPackages.place_package}</Card.Text>
                        <Card.Text className={styles.benefit}>
                            {dataPackages.Benefit_types.map((val, benefitIdx) => {
                                return (
                                    <span key={benefitIdx}>{val.RelationBenefit.name}, </span>
                                );
                            })}
                        </Card.Text>
                        <Card.Text className={styles.harga}><span>Rp. {dataPackages.price_package}</span></Card.Text>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <Button variant="primary" size="sm" onClick={() => HandleView(dataPackages.id)}>View More</Button>{' '}
                                    { auth === "true" ? <Button variant="secondary" size="sm" onClick={() => HandleUpdate(dataPackages.id)}>Update</Button> : null }{' '}
                                    { auth === "true" ? <Button variant="danger" size="sm" onClick={() => HandleDelete(dataPackages.id)}>Delete</Button> : null}                                 
                                </div>
                            </div>    
                    </Card.Body>
                    </Card>
                </Col>
                )
            })}
            </Row>
    )
}
export default DataPacket;