import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { GET_DATA_PACKAGE } from '../../apolloClient/package/query'
import { INPUT_BENEFITS_TYPE } from '../../apolloClient/package/mutation'
import LoadingSvg from '../../loading/loadingSvg'
import styles from './style.module.css'
 
const Forms = () => {

    
    const [data, setData] = useState({
        mua: [],
        decoration: [],
        documentation: [],
        entertainment: [],
        catering: [],
        weddingTent: []
    })

    const benefits = localStorage.getItem('benefit'); 
    const dataBenefits = JSON.parse(benefits); 

    // console.log(dataBenefits);
    // const handleChange  = (props) => (e) => {
    //     if(e.key !== 'Enter') return
    //     const value = e.target.value

    //     if(!value.trim()) return
    //     setData({...data, [props]: value})
    //     e.target.value = "";
    // }

    const [inputBenefitType, { loading: loadingForm, error }] = useMutation(INPUT_BENEFITS_TYPE, {
        onCompleted: () => {
            navigate('/package');
        }
    });



    function handleChange(e, type){
        const newData = {...data}

        if(e.key !== 'Enter') return
        const value = e.target.value

        if(!value.trim()) return
        if (type === 'mua'){
            newData.mua.push(value)
        } else if (type === 'decoration'){
            newData.decoration.push(value)
        } else if (type === 'documentation'){
            newData.documentation.push(value)
        } else if (type === 'entertainment'){
            newData.entertainment.push(value)
        } else if (type === 'catering'){
            newData.catering.push(value)
        } else if (type === 'weddingTent'){
            newData.weddingTent.push(value)
        }
        console.log(newData)
        setData(newData)
        e.target.value=""
    }
    // console.log(data)


    const deleteData = (key, type) => {
        // console.log(data.mua.filter((el, i) => i !== key))
        // console.log(data.mua)
        const newData = {...data}
        if(type === 'mua'){
            const deleteMua =  data.mua.filter((el, i) => i !== key)
            data.mua.splice(0, data.mua.length, ...deleteMua);
            console.log(data.mua);
        }else if(type === 'decoration'){
            const deleteDecoration =  data.decoration.filter((el, i) => i !== key)
            data.decoration.splice(0, data.decoration.length, ...deleteDecoration);
            console.log(data.decoration);
        }else if(type === 'documentation'){
            const deleteDocumentation =  data.documentation.filter((el, i) => i !== key)
            data.documentation.splice(0, data.documentation.length, ...deleteDocumentation);
            console.log(data.documentation);
        }else if(type === 'entertainment'){
            const deleteEntertainment =  data.entertainment.filter((el, i) => i !== key)
            data.entertainment.splice(0, data.entertainment.length, ...deleteEntertainment);
            console.log(data.entertainment);
        }else if(type === 'catering'){
            const deleteCatering =  data.catering.filter((el, i) => i !== key)
            data.catering.splice(0, data.catering.length, ...deleteCatering);
            console.log(data.catering);
        }else if(type === 'weddingTent'){
            const deleteWeddingTent =  data.weddingTent.filter((el, i) => i !== key)
            data.weddingTent.splice(0, data.weddingTent.length, ...deleteWeddingTent);
            console.log(data.weddingTent);
        }
        setData(newData);
        console.log(newData);
    }

    const MuaForm = () => {
        if(dataBenefits.mua !== ''){
            return(
                <>
                    <label>Details MUA : </label>
                    <div className={styles.tagContainer}>
                        {data.mua.map((data, index)=> (
                            <div className={styles.tagItem} key={index}>
                                <span className={styles.text}>{data}</span>
                                <span className={styles.close} onClick={() => deleteData(index, 'mua')}>&times;</span>
                            </div>
                        ))}
                        <input onKeyDown={(e) => handleChange(e, 'mua')} type="text" className={styles.tagInput} placeholder=" Input MUA" />
                    </div>
                </>
            )
        }
    }

    const DecorationForm = () => {
        if(dataBenefits.decoration !== ''){
            return(
                <>
                    {/* Inputan Detail Decoration */}
                    <label>Details Decoration : </label>
                    <div className={styles.tagContainer}>
                        {data.decoration.map((data, index)=> (
                            <div className={styles.tagItem} key={index}>
                                <span className={styles.text}>{data}</span>
                                <span className={styles.close} onClick={() => deleteData(index, 'decoration')}>&times;</span>
                            </div>
                        ))}
                        <input onKeyDown={(e) => handleChange(e, 'decoration')} type="text" className={styles.tagInput} placeholder=" Input Decoration" />
                    </div>
                </>
            )
        }
    }

    const DocumentationForm = () => {
        if(dataBenefits.documentation !== ''){
            return(
                <>
                    {/* Inputan Detail Documentation */}
                    <label>Details Documentation : </label>
                    <div className={styles.tagContainer}>
                        {data.documentation.map((data, index)=> (
                            <div className={styles.tagItem} key={index}>
                                <span className={styles.text}>{data}</span>
                                <span className={styles.close} onClick={() => deleteData(index, 'documentation')}>&times;</span>
                            </div>
                        ))}
                        <input onKeyDown={(e) => handleChange(e, 'documentation')} type="text" className={styles.tagInput} placeholder=" Input Documentation" />
                    </div>
                </>
            )
        }
    }

    const EntertainmentForm = () => {
        if(dataBenefits.entertainment !== ''){
            return(
                <>
                    {/* Inputan Detail Entertainment */}
                    <label>Details Entertainment : </label>
                    <div className={styles.tagContainer}>
                        {data.entertainment.map((data, index)=> (
                            <div className={styles.tagItem} key={index}>
                                <span className={styles.text}>{data}</span>
                                <span className={styles.close} onClick={() => deleteData(index, 'entertainment')}>&times;</span>
                            </div>
                        ))}
                        <input onKeyDown={(e) => handleChange(e, 'entertainment')} type="text" className={styles.tagInput} placeholder=" Input Entertainment" />
                    </div>
                </>
            )
        }
    }

    const CateringForm = () => {
        if(dataBenefits.catering !== ''){
            return(
                <>
                    {/* Inputan Detail Catering */}
                    <label>Details Catering : </label>
                    <div className={styles.tagContainer}>
                        {data.catering.map((data, index)=> (
                            <div className={styles.tagItem} key={index}>
                                <span className={styles.text}>{data}</span>
                                <span className={styles.close} onClick={() => deleteData(index, 'catering')}>&times;</span>
                            </div>
                        ))}
                        <input onKeyDown={(e) => handleChange(e, 'catering')} type="text" className={styles.tagInput} placeholder=" Input Catering" />
                    </div>
                </>
            )
        }
    }

    const WeddingTentForm = () => {
        if(dataBenefits.weddingTent !== ''){
            return(
                <>
                    {/* Inputan Detail Wedding Tent */}
                    <label>Details Wedding Tent : </label>
                    <div className={styles.tagContainer}>
                        {data.weddingTent.map((data, index)=> (
                            <div className={styles.tagItem} key={index}>
                                <span className={styles.text}>{data}</span>
                                <span className={styles.close} onClick={() => deleteData(index, 'weddingTent')}>&times;</span>
                            </div>
                        ))}
                        <input onKeyDown={(e) => handleChange(e, 'weddingTent')} type="text" className={styles.tagInput} placeholder=" Input Wedding Tent" />
                    </div>
                </>
            )
        }
    }

    const navigate = useNavigate();
    const HandleClickBack = () =>{
        navigate('/addpackage');
    }

    const HandleClickAdd = () => {
        // console.log('test')
        const benefit = JSON.parse(localStorage.getItem('benefit'))
        console.log(benefit)

        const newBenefitType = [];
        Object.keys(benefit).forEach((key) => {
            if(benefit[key] === ''){
                return;
            }
            newBenefitType.push({
                packages_id: parseInt(localStorage.getItem('package_id')),
                benefit_id: parseInt(benefit[key]),
                description: JSON.stringify(data[key]),
            })
        })
        console.log('benefit Type : ', newBenefitType);
        inputBenefitType({
            variables: {
                objects: newBenefitType
            }
        })

    if(loadingForm){
        return( <LoadingSvg /> )
    }

    }

    return(
        <div className={styles.bg}>
            <Container className={styles.formDetails}>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <div className='d-flex justify-content-start'>
                            <h1>Details Package</h1>
                        </div>
                        
                        <MuaForm />
                        <DecorationForm />
                        <DocumentationForm />
                        <EntertainmentForm />
                        <CateringForm /> 
                        <WeddingTentForm />

                        <div className=" mt-3 mb-3 button">
                            <Button variant="secondary" onClick={HandleClickBack}>Back</Button>{' '}
                            <Button variant="success" onClick={HandleClickAdd}>Add Packages</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Forms;