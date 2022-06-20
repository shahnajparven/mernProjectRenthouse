import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import grid1 from '../../project-pic/guest2.jpg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import CountUp, { useCountUp } from 'react-countup';
import './Reward.css';

const Reward = () => {
    const [loading, setLoading] = React.useState(false);

    const onStart = () => {
        setLoading(true);
    };

    const onEnd = () => {
        setLoading(false);
    };

    const containerProps = {
        'aria-busy': loading,
    };


    return (

        <div className="reward">
            <Row>
                <Col lg="7" md="6" xs="12">
                    <Card className="reward-card1">
                        <Card.Body>
                            <Card.Title className="reward-title">
                                    <h2><span className="count"><CountUp
                                        end={70000}
                                        duration="3"
                                        onStart={onStart}
                                        onEnd={onEnd}
                                        containerProps={containerProps}
                                    /></span> <span>+</span></h2>
                                    <p>Happy Clients we have served</p>

                             
                                    {/* <img src={grid1} /> */}
                             

                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="5" md="6" xs="12">
                    <Card className="reward-card2">
                        <Card.Body>
                            <Card.Title className="reward-title">
                                <h2><span className="count"><CountUp
                                    end={31000}
                                    duration="3"
                                    onStart={onStart}
                                    onEnd={onEnd}
                                    containerProps={containerProps}
                                /></span> <span>+</span></h2>
                                <p>Online members and fans</p>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg="5" md="6" xs="12">
                    <Card className="reward-card3">
                        <Card.Body>
                            <Card.Title className="reward-title">
                                <h2><span className="count"><CountUp
                                    end={6000}
                                    duration="3"
                                    onStart={onStart}
                                    onEnd={onEnd}
                                    containerProps={containerProps}
                                /></span> <span>+</span></h2>
                                <p>Completed Services</p>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4" md="6" xs="12">

                    <Card className="reward-card4">
                        <Card.Body>
                            <Card.Title className="reward-title">
                                <h2><span className="count"><CountUp
                                    end={100}
                                    duration="3"
                                    onStart={onStart}
                                    onEnd={onEnd}
                                    containerProps={containerProps}
                                /></span> <span>+</span></h2>
                                <p>Search Request on last month</p>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="3" md="12" xs="12">
                    <Card className="reward-card5">
                        <Card.Body>
                            <Card.Title className="reward-title">
                                <h2 className="count"><CountUp
                                    end={21}
                                    duration="3"
                                    onStart={onStart}
                                    onEnd={onEnd}
                                    containerProps={containerProps}
                                /></h2>
                                <p>Area we serve</p>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>


    );

};
export default Reward;