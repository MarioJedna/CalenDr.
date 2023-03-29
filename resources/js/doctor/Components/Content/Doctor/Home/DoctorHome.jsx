import { useContext } from "react";
import UserContext from "../../../UserContext/UserContext";
import DoctorCalendarComponent from "../../Calendar/DoctorCalendar";
import AppointmentsList from "./AppointmentsList/AppointmentsList";
import { useState } from "react";

export default function DoctorHome() {
    const [appList, setAppList] = useState([]);
    const { user } = useContext(UserContext);
    return (
        <>
            {user ? (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>
                                    Welcome back, {user.first_name}{" "}
                                    {user.surname}
                                </h1>
                            </div>
                        </div>
                    </div>
                    {appList.length !== 0 ?
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="calendar">
                                        <AppointmentsList
                                            appList={appList}
                                            setAppList={setAppList}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        ''
                    }
                    {/* <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>The monthly schedule:</h2>
                            </div>
                        </div>
                    </div> */}
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="calendar">
                                    <DoctorCalendarComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            )}
        </>
    );
}
