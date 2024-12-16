import { createMedia } from "@artsy/fresnel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./components/Register";
import { VerifyKYC } from "./components/VerifyKYC";
import { useEffect } from "react";
import setAuthorization from "./API/sila_api";
import { Login } from "./components/Login";
import { CheckVerification } from "./components/CheckVerification";
import { ResumeVerification } from "./components/ResumeVerification";
import { EntityInfo } from "./components/EntityInfo";
import { UpdateInfo } from "./components/UpdateInfo";
import { Documents } from "./components/Documents";
import CreateLinkToken from "./components/CreateLinkToken";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
})

const App = () => {

  return(
    <MediaContextProvider>
      <Media at="mobile">
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="kyc" element={<VerifyKYC />} />
            <Route path="/check_kyc" element={<CheckVerification />} />
            <Route path="/resume_kyc" element={<ResumeVerification />} />
            <Route path="/entity_info" element={<EntityInfo />} />
            <Route path="/update_info" element={<UpdateInfo />} />
            <Route path="/upload_document" element={<Documents />} />
            <Route path="/link_token" element={<CreateLinkToken />} />


          </Routes>
        </BrowserRouter>
      </Media>

      <Media greaterThan="mobile">
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/kyc" element={<VerifyKYC />} />
            <Route path="/check_kyc" element={<CheckVerification />} />
            <Route path="/resume_kyc" element={<ResumeVerification />} />
            <Route path="/entity_info" element={<EntityInfo />} />
            <Route path="/update_info" element={<UpdateInfo />} />
            <Route path="/upload_document" element={<Documents />} />
            <Route path="/link_token" element={<CreateLinkToken />} />


          </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
  )


}
export default App;

