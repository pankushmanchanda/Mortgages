import React from 'react';
import { withRouter } from 'react-router-dom'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { Paper } from '@material-ui/core'
import { Icon } from 'semantic-ui-react';
import './style.css'

class Landing extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleClick = () => {
        this.props.history.push('/mortgage');
    }
    render() {
        return (
            <div style={{ backgroundColor: "#f5f6fa", paddingBottom: '80px' }}>
                <div className='row main-content' style={{ backgroundColor: "#f5f6fa", height: 'fit-content' }}>
                    <div className='col-12' >
                        <Row className="heading">
                            <Col>
                                <div>
                                    <Button style={{ float: 'right', marginRight: '35px', marginTop: '20px', backgroundColor: 'green', borderColor: 'green' }} onClick={() => this.handleClick()}>Continue </Button>
                                </div>
                                <div className=' head-margin' style={{ height: "11%", width: "100%" }} >
                                    <h1 className="heading-info" style={{ fontSize: '2.625rem', marginTop: '20px', color: "black", marginLeft: '10px' }} >
                                        Your Agreement in Principle
                </h1>
                                </div>
                            </Col>
                        </Row>
                        {/* <Grid columns={2} style={{}}> */}
                        <Row style={{ marginTop: '20px' }} >
                            <Col className="col-first" style={{ margin: "5px 34px" }} >

                                <Paper className='mortgage-banner-front paper-info' zDepth={2} style={{ marginRight: '0px', padding: '20px', width: '100%', height: "fit-content", marginBottom: '10px' }}>
                                    <div className='row credit-accounts'>
                                        <div style={{ marginLeft: '15px' }} >
                                            <h4 className="heading-info">
                                                What is an Agreement in Principle?
                                            </h4>
                                            <p className="para-content">
                                                <span>
                                                    An Agreement in Principle, or AIP, is the first step to getting a mortgage.
                                                    It lets you know how much you could borrow, so you can look at homes in your price range.
                                                </span>
                                            </p>

                                            <p className="para-content " >
                                                <span>
                                                    Once you've got your AIP, you can apply for a mortgage straight away.
                                                </span>

                                            </p>
                                        </div>
                                    </div>
                                </Paper>

                                <Paper className='mortgage-banner-front paper-info' zDepth={2} style={{ marginRight: '0px', padding: '20px', width: '100%', height: "fit-content", marginBottom: '10px' }}>
                                    <div >
                                        <h4 className="heading-info">
                                            What you need ready
                    </h4>
                                        <p className="para-content">
                                            <span >It'll help us give you the right decision, first time.</span>
                                        </p>
                                        <div>
                                            <ul className="ul-content" style={{ listStyleType: 'none' }}>
                                                <li >
                                                    <Icon name='check' className="checkIcon" />
                                                    <span >the exact details of your income and outgoings</span>
                                                </li>
                                                <li>
                                                    <Icon name='check' className="checkIcon" />
                                                    <span >The detailed document of asset which you want to use as collateral</span>
                                                </li>
                                                <li>
                                                    <Icon name='check' className="checkIcon" />
                                                    <span >your addresses for the last 3 years</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Paper>

                                <Paper className='mortgage-banner-front paper-info' zDepth={2} style={{ marginRight: '0px', padding: '20px', width: '100%', height: "fit-content", marginBottom: '10px' }}>
                                    <div style={{ marginLeft: '15px' }}>
                                        <div>
                                            <h4 className="heading-info">It won't touch your credit score</h4>
                                            <p className="para-content" >
                                                <span >That's right. With an AIP, we'll only do a soft credit check which won't change your credit score.</span>
                                            </p>
                                            <p class="para-content">
                                                <span >
                                                    <span >
                                                        <a style={{ textDecoration: 'underline', color: 'green' }} href="javascript:void(0)" rel="noopener noreferrer" target="_blank">
                                                            <span class="csl-link__children">Find out more about how we use your personal details.</span></a>
                                                    </span></span></p>
                                        </div>
                                    </div>
                                </Paper>
                            </Col>
                        </Row>




                    </div>

                </div>

            </div>
        )
    }
}
export default withRouter(Landing);