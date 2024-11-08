import React from 'react'
import { Container } from 'react-bootstrap'
import refresh from "@/assets/images/refresh.svg"
import search from "@/assets/images/search.svg"
import SwitchAccountDt from './components/datatables/SwitchAccountDt'


function SwitchAccount() {
  return (
    <main>
        <section>
            <Container fluid className="">
                <div className="row">
                    <div className="col-12">
                        <div className="switch">
                            <div className="switch-heading d-flex justify-content-between flex-wrap mb-4">
                                <h1 className="mb-0">Settings</h1>
                                <a href="#" onClick={(e) => e.preventDefault()} className="me-2"><img src={refresh} alt="refresh"
                                        className="img-fluid"/></a>
                            </div>
                            <div className="nav-lists bg-grey mb-4 p-3 p-md-4">
                                <ul className="bg-white d-flex align-items-center p-0 mb-0">
                                    <li>
                                        <a href="#" onClick={(e) => e.preventDefault()}>Account</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => e.preventDefault()}>Control Panel</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => e.preventDefault()} className="active">Switch Account</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => e.preventDefault()}>Performance Report</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => e.preventDefault()}>Change Password</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="switch-acc position-relative mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-4">
                                        <div className="switch-acc-head">
                                            <h4 className="font-600">Switch Account</h4>
                                            <p className="mb-0">Tracking our path to prosperity, one dollar at a time.</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <a href="#" onClick={(e) => e.preventDefault()}><img src={search} alt="search"
                                                    className="img-fluid pe-3"/></a>
                                            <div className="dropdown">
                                                <button className="bg-transparent" type="button" id="campaignDropdown"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="campaignDropdown">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#">Something else
                                                            here</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <SwitchAccountDt/>
                                    {/* <div className="table-responsive">
                                        <table className="table stripe table-hover text-nowrap" width="100%" id="switchacc">
                                            <thead>
                                                <tr>
                                                    <th>User ID</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Type</th>
                                                    <th>Fb A/c Count</th>
                                                    <th>Last Logged In</th>
                                                    <th>Switch to</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="border-0">
                                                <tr>
                                                    <td>5</td>
                                                    <td>Kunal Kothari</td>
                                                    <td>k@mobavenue.com</td>
                                                    <td>Super Admin</td>
                                                    <td>0</td>
                                                    <td>2024-09-20 05:37:18</td>
                                                    <td>
                                                        <div
                                                            className="form-check d-flex align-items-center justify-content-center">
                                                            <input className="form-check-input" type="radio"
                                                                name="tableRadio" id="radio11" checked/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul
                                                            className="mb-0 p-0 d-flex align-items-center justify-content-between">
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-pen"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-share-nodes"></i></a>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown">
                                                                    <button className="bg-transparent" type="button"
                                                                        id="actionsDropdown" data-bs-toggle="dropdown"
                                                                        aria-expanded="false">
                                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                                    </button>
                                                                    <ul className="dropdown-menu"
                                                                        aria-labelledby="actionsDropdown">
                                                                        <li><a className="dropdown-item" href="#">Action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Another
                                                                                action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something
                                                                                else
                                                                                here</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Text</td>
                                                    <td>Mayank Chauhan</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>
                                                        <div
                                                            className="form-check d-flex align-items-center justify-content-center">
                                                            <input className="form-check-input" type="radio"
                                                                name="tableRadio" id="radio2"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul
                                                            className="mb-0 p-0 d-flex align-items-center justify-content-between">
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-pen"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-share-nodes"></i></a>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown">
                                                                    <button className="bg-transparent" type="button"
                                                                        id="actionsDropdown" data-bs-toggle="dropdown"
                                                                        aria-expanded="false">
                                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                                    </button>
                                                                    <ul className="dropdown-menu"
                                                                        aria-labelledby="actionsDropdown">
                                                                        <li><a className="dropdown-item" href="#">Action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Another
                                                                                action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something
                                                                                else
                                                                                here</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>
                                                        <div
                                                            className="form-check d-flex align-items-center justify-content-center">
                                                            <input className="form-check-input" type="radio"
                                                                name="tableRadio" id="radio3"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul
                                                            className="mb-0 p-0 d-flex align-items-center justify-content-between">
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-pen"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-share-nodes"></i></a>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown">
                                                                    <button className="bg-transparent" type="button"
                                                                        id="actionsDropdown" data-bs-toggle="dropdown"
                                                                        aria-expanded="false">
                                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                                    </button>
                                                                    <ul className="dropdown-menu"
                                                                        aria-labelledby="actionsDropdown">
                                                                        <li><a className="dropdown-item" href="#">Action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Another
                                                                                action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something
                                                                                else
                                                                                here</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>
                                                        <div
                                                            className="form-check d-flex align-items-center justify-content-center">
                                                            <input className="form-check-input" type="radio"
                                                                name="tableRadio" id="radio4"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul
                                                            className="mb-0 p-0 d-flex align-items-center justify-content-between">
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-pen"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-share-nodes"></i></a>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown">
                                                                    <button className="bg-transparent" type="button"
                                                                        id="actionsDropdown" data-bs-toggle="dropdown"
                                                                        aria-expanded="false">
                                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                                    </button>
                                                                    <ul className="dropdown-menu"
                                                                        aria-labelledby="actionsDropdown">
                                                                        <li><a className="dropdown-item" href="#">Action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Another
                                                                                action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something
                                                                                else
                                                                                here</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>
                                                        <div
                                                            className="form-check d-flex align-items-center justify-content-center">
                                                            <input className="form-check-input" type="radio"
                                                                name="tableRadio" id="radio5"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul
                                                            className="mb-0 p-0 d-flex align-items-center justify-content-between">
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-pen"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-share-nodes"></i></a>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown">
                                                                    <button className="bg-transparent" type="button"
                                                                        id="actionsDropdown" data-bs-toggle="dropdown"
                                                                        aria-expanded="false">
                                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                                    </button>
                                                                    <ul className="dropdown-menu"
                                                                        aria-labelledby="actionsDropdown">
                                                                        <li><a className="dropdown-item" href="#">Action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Another
                                                                                action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something
                                                                                else
                                                                                here</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <div className="toast cst-toast align-items-center text-white border-0 font-12" role="alert" aria-live="assertive"
            aria-atomic="true" id="radioToast">
            <div className="d-flex">
                <div className="toast-body">
                    Switch to Mayank Chauhan
                </div>
                <button type="button" className="btn-close btn-close-white m-auto pb-2" data-bs-dismiss="toast"
                    aria-label="Close">Undo</button>
            </div>
        </div>
    </main>
  )
}

export default SwitchAccount