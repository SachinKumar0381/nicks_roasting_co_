import React from 'react';
import bg_01 from "../assets/img/open_hour_bg.jpg";
import "../assets/css/openhour.css";

const Openhour = () => {
  return (
    <div style={{backgroundImage:`url(${bg_01})`}} className='pd-tp-50 open-bg'>
        <h1 className='open-header'>OPENING HOURS</h1>
        <div className='open-left'>
            <h3>Come Visit us!</h3>
            <h2>2558 Greenwood Lane, 120 Cameron Park,<br /> CA 95682</h2>
            <h3>1800 297 4001</h3>
            <h3>Monday - Friday: 7:00 am - 6:00 pm</h3>
            <h3>Saturday - Sunday: 7:00 am - 5:00 pm</h3>
            {/* <table className='open-table'>
                <tr>
                    <td><h3>Monday</h3></td>
                    <td><h3>:</h3></td>
                    <td><h3>7:00 AM</h3></td>
                    <td><h3>-</h3></td>
                    <td><h3>6:00 PM</h3></td>
                </tr>
                <tr>
                    <td><h3>Tuesday</h3></td>
                    <td><h3>:</h3></td>
                    <td><h3>7:00 AM</h3></td>
                    <td><h3>-</h3></td>
                    <td><h3>6:00 PM</h3></td>
                </tr>
                <tr>
                    <td><h3>Wednesday</h3></td>
                    <td><h3>:</h3></td>
                    <td><h3>7:00 AM</h3></td>
                    <td><h3>-</h3></td>
                    <td><h3>6:00 PM</h3></td>
                </tr>
                <tr>
                    <td><h3>Thursday</h3></td>
                    <td><h3>:</h3></td>
                    <td><h3>7:00 AM</h3></td>
                    <td><h3>-</h3></td>
                    <td><h3>6:00 PM</h3></td>
                </tr>
                <tr>
                    <td><h3>Friday</h3></td>
                    <td><h3>:</h3></td>
                    <td><h3>7:00 AM</h3></td>
                    <td><h3>-</h3></td>
                    <td><h3>6:00 PM</h3></td>
                </tr>
                <tr>
                    <td><h3>Saturday</h3></td>
                    <td><h3>:</h3></td>
                    <td><h3>7:00 AM</h3></td>
                    <td><h3>-</h3></td>
                    <td><h3>5:00 PM</h3></td>
                </tr>
                <tr>
                    <td><h3>Sunday</h3></td>
                    <td><h3>:</h3></td>
                    <td><h3>7:00 AM</h3></td>
                    <td><h3>-</h3></td>
                    <td><h3>5:00 PM</h3></td>
                </tr>
            </table> */}
        </div>
    </div>
  )
}

export default Openhour