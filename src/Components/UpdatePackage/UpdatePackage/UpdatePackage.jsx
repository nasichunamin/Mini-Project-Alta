import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDropzone } from 'react-dropzone';
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import { UPDATE_PACKAGES } from '../../apolloClient/package/mutation';
import LoadingSvg from '../../loading/loadingSvg';
import { Row, Col, Container, Button } from "react-bootstrap";
import './style.css'
import { GET_DATA_DETAILS_PACKAGE } from '../../apolloClient/package/query';


const UpdatePackage = ({isEdit}) => {

    /** Inisialisasi state Awal */
    const [type, setType] = useState('0');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('0');
    const [place, setPlace] = useState('');
    const [ imageBase64, setImageBase64 ] = useState('');
    const [getId, setGetId] = useState('')
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

    /** navigate untuk pinah page */
    const navigate = useNavigate();

    /** untuk mendapatkan id yang akan diupdate */
    const idUpdate = localStorage.getItem("idUpdate")

    /** use Query untuk ngambil data inputan sebelumnya */
    const [getDataValue, {data, loading}] = useLazyQuery(GET_DATA_DETAILS_PACKAGE)

    /** mengambil data dari id Update yg didapatkan */
    const getValue = async () => {
    if(isEdit){
        const response =    await  getDataValue({
            variables: {
                _eq: idUpdate
            }
        })

    /**  */
    const benefits = response.data.Benefit_type.map((benefit)=>({
        [benefit.RelationBenefit.name.toLowerCase()]:benefit.RelationBenefit.id
    }))

    const getBenefits = benefits.reduce((acc, cur)=>({...acc, ...cur}))
    // console.log(getBenefits)
    setType(response.data.Packages[0].category_id)
    setName(response.data.Packages[0].name_package)
    setPlace(response.data.Packages[0].place_package)
    setPrice(response.data.Packages[0].price_package)
    setImageBase64(response.data.Packages[0].image)
    setBenefit(getBenefits)
    setGetId(response.data.Packages[0].id)

    }
    }

    useEffect(() => {
    getValue()
    },[])


    const [updatePackage, { loading: loadingAddPackage, error }] = useMutation(UPDATE_PACKAGES, {
    onCompleted: (data) => {
        console.log(data)
        localStorage.setItem("type", JSON.stringify(type))
        localStorage.setItem("name", JSON.stringify(name))
        localStorage.setItem("place", JSON.stringify(place))
        localStorage.setItem("price", JSON.stringify(price))
        localStorage.setItem("benefit", JSON.stringify(benefit))
        localStorage.setItem("package_id", JSON.stringify(data.updatePackage.returning[0].id))
        navigate("/updateform")
    }
    });

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

    const handleChangeBenefit = (prop) => (e) => {
    if(e.target.checked){
        setBenefit({ ...benefit, [prop]: e.target.value });
    }else{
        setBenefit({...benefit, [prop]: ''})
    }
    };

    // console.log(name);
    // console.log(type);
    // console.log(place);
    // console.log(price);
    // console.log(benefit);

    // console.log(localStorage.getItem("packages_id"))
    // console.log(imageBase64)


    const HandleClickBack = () => {
    navigate("/package")
    }

    const handleClickSave = () => {
    // console.log(data.Packages[0].id)
    const upatePackages = {
        _eq: getId,
        category_id: parseInt(type),
        image: imageBase64,
        name_package: name,
        place_package: place,
        price_package: parseInt(price),
        packages_id: data.Packages[0].id
    };

    updatePackage({variables : upatePackages})
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

    // console.log(benefit)

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
                            <Button variant="secondary" size="sm" className='button' onClick={() => document.getElementById('uploadImage').click()}>Upload Image</Button>{' '}
                        </div>
                    </div>

                    <div className="form_checkbox">
                    <label>Select Benefit :</label>
                    <ul>
                        <li><input type="checkbox" placeholder='mua' value={1} onChange={handleChangeBenefit('mua')} checked={benefit.mua ? true : false}/>MUA</li>
                        <li><input type="checkbox" placeholder='decoration' value={2} onChange={handleChangeBenefit('decoration')} checked={benefit.decoration ? true : false}/>Decoration</li>
                        <li><input type="checkbox" placeholder='documentation' value={3} onChange={handleChangeBenefit('documentation')} checked={benefit.documentation ? true : false}/>Documentation</li>
                        <li><input type="checkbox" placeholder='entertainment' value={4} onChange={handleChangeBenefit('entertainment')} checked={benefit.entertainment ? true : false}/>Entertainment</li>
                        <li><input type="checkbox" placeholder='catering' value={5} onChange={handleChangeBenefit('catering')} checked={benefit.catering ? true : false}/>Catering</li>
                        <li><input type="checkbox" placeholder='weddingTent' value={6} onChange={handleChangeBenefit('weddingTent')} checked={benefit.weddingtent ? true : false}/>Wedding Tent</li>
                    </ul>
                    </div>
                </form>
                <Button variant="secondary" className="button_add mt-3" onClick={HandleClickBack}>Back</Button>{' '}
                <Button variant="success" className="button_add mt-3" onClick={handleClickSave}>Save</Button>
                </Col>
            </Row>
        </Container>
        
    </div>
    )
}

export default UpdatePackage;