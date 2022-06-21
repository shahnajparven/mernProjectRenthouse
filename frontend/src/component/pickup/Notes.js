import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// import './Pickup.css';

import pickup from '../../project-pic/pickup.png';
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { createPickup, clearErrors } from "../../actions/pickupAction";
import { NEW_PICKUP_RESET } from "../../constants/pickupConstants";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CallIcon from '@mui/icons-material/Call';

const Notes = ({ history }) => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, success } = useSelector((state) => state.newPickup);

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [number, setNumber] = useState("");
    const [labour, setLabour] = useState("");
    const [flour, setFlour] = useState("");
    const [radio, setRadio] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
 

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success("Pickup Created Successfully");
            history.push("/");
            dispatch({ type: NEW_PICKUP_RESET });
        }
    }, [dispatch, alert, error, history, success]);

    const createPickupSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("from", from);
        myForm.set("to", to);
        myForm.set("number", number);
        myForm.set("labour", labour);
        myForm.set("flour", flour);
        myForm.set("radio", radio);
        myForm.set("date", date);
        myForm.set("time", time);

        dispatch(createPickup(myForm));
    };


    return (
        <Fragment>

            <p>..</p>
            <p>..</p>


            <div className="pickup-boards">
                <div className="pickup-Container">
                    <form className="createPickupForm" encType="multipart/form-data"
                        onSubmit={createPickupSubmitHandler}
                    >
                        <h1>Create Your Pickup Request</h1>

                        <div>
                            <AddLocationAltIcon />

                            <input id='input' type="text" name='from'

                                value={pickup.from}
                                onChange={(e) => setFrom(e.target.value)}
                                placeholder="what's your current location?"

                            />
                        </div>
                        <div>

                            <AddLocationAltIcon />
                            <input id='input' type="text" name='to'
                                value={pickup.to}
                                onChange={(e) => setTo(e.target.value)}
                                placeholder="what's your destination?"

                            />
                        </div>

                        <div>
                        <CallIcon />
                      <input id='input' type='number' placeholder="Enter Phone number" name='number'
                                value={pickup.number}
                                required
                                size="11"
                                onChange={(e) =>  setNumber(e.target.value)} />
                        </div>


                        <div>
                            < AccessibilityNewIcon />
                            <select id='input' aria-label="Default select example" name='labour'

                                value={pickup.labour}
                                onChange={(e) => setLabour(e.target.value)}
                                placeholder="from">
                                <option>select labour</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>


                        </div>

                        <div>
                            <LocationCityIcon />
                            <select id='input' aria-label="Default select example"
                                name='flour'
                                value={pickup.password}
                                onChange={(e) => setFlour(e.target.value)}
                                placeholder="floor">
                                <option>number of floor</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>



                        </div>

                       


                        <div>
                            <input id='inputs' type='date' placeholder="Enter date" name='date'
                                value={pickup.date}
                                onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div>
                            <input id='inputs' type='time' placeholder="Enter time" name='time'
                                value={pickup.time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>

                        <div className="checkbox" value={pickup.radio}
                            onChange={(e) => setRadio(e.target.value)} >
                            <div className="checkbox"><input type="checkbox" name="radio" value="Pickup" /> Pickup</div>
                            <div className="checkbox">  <input type="checkbox" name="radio" value="Van Gari" /> Van Gari</div>
                            <div className="checkbox"> <input type="checkbox" name="radio" value="Truck" /> Truck</div>

                        </div>


                        <Button id="createPickupBtn" type="submit"
                            disabled={loading ? true : false}> Go </Button>


                    </form>
                </div>
            </div>
        </Fragment>






    );
};
export default Notes;