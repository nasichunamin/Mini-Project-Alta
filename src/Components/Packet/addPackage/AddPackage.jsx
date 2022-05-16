import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/client';
import { INPUT_PACKAGE } from '../../apolloClient/package/mutation';
import LoadingSvg from '../../loading/loadingSvg';
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import './style.css'


const AddPackage = () => {

    /** Inisialisasi state add package */
    const [type, setType] = useState('0');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('0');
    const [place, setPlace] = useState('');
    const [ imageBase64, setImageBase64 ] = useState('');

    const navigate = useNavigate();
    // const [addPackage, setAddPackage] = useState('')
    
    const [benefit, setBenefit] = useState(
        {
            mua: '',
            decoration: '',
            documentation: '',
            entertainment: '',
            catering: '',
            weddingTent: '',
        }
    )

    /** useMutation untuk add package dan disimpan ke dalam local storage */
    const [inputPackage, { loading: loadingAddPackage, error }] = useMutation(INPUT_PACKAGE, {
        onCompleted: (data) => {
            console.log(data)
            localStorage.setItem("type", JSON.stringify(type))
            localStorage.setItem("name", JSON.stringify(name))
            localStorage.setItem("place", JSON.stringify(place))
            localStorage.setItem("price", JSON.stringify(price))
            localStorage.setItem("benefit", JSON.stringify(benefit))
            localStorage.setItem("package_id", JSON.stringify(data.package.id))
            navigate("/form")
        }
    });

    /** Function untuk convert ke base64 */
    const onDrop = useCallback(acceptedFiles => {
        getBase64(acceptedFiles[0])
          .then((result) => {
            setImageBase64(result);
          })
          .catch(error => {
            console.log(error);
          })
      }, [])

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    }

    /** Handle untuk checkbox benefit */
    const handleChangeBenefit = (prop) => (e) => {
        if(e.target.checked){
            setBenefit({ ...benefit, [prop]: e.target.value });
        }else{
            setBenefit({...benefit, [prop]: ''})
        }
      };


    // console.log(type);
    // console.log(place);
    // console.log(price);
    // console.log(benefit);
    // console.log(imageBase64)

    /** Handle untuk kembali ke menu sebelumnya */
    const HandleClickBack = () => {
        navigate("/package")
    }

    /** Handle menyimpan inputan addPackage ke dalam local storage dan memasukkan inputan kedalam useMutation */
    const handleClickNext = () => {
        const newPackage = {
            category_id: parseInt(type),
            image: imageBase64,
            name_package: name,
            place_package: place,
            price_package: parseInt(price),
        };

        inputPackage({variables : newPackage})
    }

    if(loadingAddPackage){
        return(
            <LoadingSvg />
        )
    }
    if(error){
        console.log(error)
        return null
    }

    return(
        <div className='bg'>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <div className='d-flex justify-content-center'>
                            <h1 className='m-3'>Input Wedding Package</h1>
                        </div>
                    <form className='container'>
                        <div className="form_input">
                            <label>Type Wedding :</label>
                            <select 
                            value={type}
                            required
                            onChange={(e) => setType(e.target.value)}
                            >
                                <option value={0} disabled>Select Type Wedding</option>
                                <option value={1}>Building or Hotels</option>
                                <option value={2}>In Home</option>
                            </select>

                            <label>Name Package</label>
                            <input 
                            type="text" 
                            placeholder="Name Package" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            required/>

                            <label>Price Package</label>
                            <input 
                            type="text" 
                            placeholder="Price Package" 
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)}
                            required/>

                            <label>Place </label>
                            <input 
                            type="text" 
                            placeholder="Place Package" 
                            value={place} 
                            onChange={(e) => setPlace(e.target.value)}
                            required/>

                            <div className='d-flex justify-content-start' {...getRootProps}>
                                <input {...getInputProps()} id='uploadImage'/>
                                {/* <Form.Group controlId="formFileSm" className="mb-3">
                                    <Form.Control type="file" size="sm" onClick={() => document.getElementById('uploadImage').click()}/>
                                </Form.Group> */}
                                <Button variant="secondary" size="sm" className='button' onClick={() => document.getElementById('uploadImage').click()}>Upload Image</Button>{' '}
                            </div>
                        </div>


                        <div className="form_checkbox">
                        <label>Select Benefit :</label>
                        <ul>
                            <li><input type="checkbox" placeholder='mua' value={1} onChange={handleChangeBenefit('mua')}/>MUA</li>
                            <li><input type="checkbox" placeholder='decoration' value={2} onChange={handleChangeBenefit('decoration')}/>Decoration</li>
                            <li><input type="checkbox" placeholder='documentation' value={3} onChange={handleChangeBenefit('documentation')}/>Documentation</li>
                            <li><input type="checkbox" placeholder='entertainment' value={4} onChange={handleChangeBenefit('entertainment')}/>Entertainment</li>
                            <li><input type="checkbox" placeholder='catering' value={5} onChange={handleChangeBenefit('catering')}/>Catering</li>
                            <li><input type="checkbox" placeholder='weddingTent' value={6} onChange={handleChangeBenefit('weddingTent')}/>Wedding Tent</li>
                        </ul>
                        </div>
                    </form>
                    <Button variant="secondary" className="button_add mt-3" onClick={HandleClickBack}>Back</Button>{' '}
                    <Button variant="success" className="button_add mt-3" onClick={handleClickNext}>Save</Button>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default AddPackage;