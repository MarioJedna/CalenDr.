import LandingPage from "./Home/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Home/LoginPage/LoginPage";
import RegisterUser from "./Home/RegisterUser/RegisterUser";
import PatientHome from "./Patient/Home/PatientHome";
import PatientInfo from "./Patient/EditInfo/EditInfo";
import PatientFind from "./Patient/FindDoctor/FindDoctor";
import ManagerEditInfo from "./Manager/EditInfo/EditInfo";
import ManagerFind from "./Manager/FindDoctor/FindDoctor";
import AdditionalRegistration from "./Manager/AdditionalRegistration/AdditionalRegistration";
import DoctorFind from "./Doctor/FindClinic/FindClinic";
import DoctorInfo from './Doctor/EditInfo/EditInfo';
import DoctorHome from './Doctor/Home/DoctorHome';
import DoctorPatientRecords from './Doctor/PatientRecords/PatientRecords';
import ManagerHome from './Manager/Home/ManagerHome';

export default function Content() {
    return (
        <main className="">
            <div>
                <Routes>
                    <Route path="/patient" element={<PatientHome />} />
                    <Route path="/patient/edit" element={<PatientInfo />} />
                    <Route path="/patient/find" element={<PatientFind />} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterUser />} />
                    <Route
                        path="/managers/edit"
                        element={<ManagerEditInfo />}
                    />
                    <Route path="/managers" element={<ManagerHome />} />

                    <Route path="/managers/find" element={<ManagerFind />} />
                    <Route path="/managers/additional-registration" element={<AdditionalRegistration />} />

                    <Route path='/doctor/find' element={< DoctorFind />} />
                    <Route path='/doctor/update' element={< DoctorInfo />} />
                    <Route path='/doctor' element={<DoctorHome />} />
                    <Route path='/doctor/patientRecords' element={<DoctorPatientRecords />} />
                </Routes>
            </div>
        </main>
    );
}
