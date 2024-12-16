import axios from "axios"
import { Segment, Menu, Header, Form, Button } from "semantic-ui-react"
import {useNavigate} from 'react-router-dom'

const CreateLinkToken = () => {
    const navigate = useNavigate() 

    const checkToken = () => {

      axios({
        method: 'POST',
        url: 'https://sandbox.plaid.com/link/token/create',
        withCredentials: false,
        
        headers: {
          "Content-Type" : 'application/json',
        },
        data: {"client_id": "6737b4f62cc78c001ac1b3fe", "secret": "dcd28724144c882901e572140e2c86","user": {"client_user_id": "user-id","phone_number": "+1 415 555 0123"},"client_name": "My Amazing App","products": ["auth"],"additional_consented_products": ["identity"], "country_codes": ["US"], "language": "en", "webhook": "https://sample-web-hook.com", "redirect_uri": "https://domainname.com/oauth-page.html"}      
      })
      /*axios({
        method: 'POST',
        url: 'https://sandbox.plaid.com/sandbox/public_token/create',
        headers: {
          "Content-Type": 'application/json'
        },
        data: {"client_id": "6737b4f62cc78c001ac1b3fe", "secret": "dcd28724144c882901e572140e2c86", "institution_id": "ins_109508", "initial_products": ["identity"], "options": { "webhook": String, "override_username": "user_good", "override_password": "pass_good" }},
        
      })*/
      
    }

    return(
        <Segment>
        <Menu>
              <Menu.Item onClick={() => navigate("/")}>
                Login
              </Menu.Item>
              <Menu.Item onClick={() => navigate("/register")}>
                Register
              </Menu.Item>
              <Menu.Item onClick={() => navigate("/entity_info")}>
                Entity Info
              </Menu.Item>
              <Menu.Item onClick={() => navigate("/kyc")}>
                Request KYC
              </Menu.Item>
              <Menu.Item onClick={() => navigate("/check_kyc")}>
                Check KYC
              </Menu.Item>
              <Menu.Item onClick={() => navigate("/update_info")}>
                Update Info
              </Menu.Item>
              <Menu.Item onClick={() => navigate("/upload_document")}>
                Upload Document
              </Menu.Item>
              <Menu.Item onClick={() => navigate("/resume_kyc")}>
                Resume KYC
              </Menu.Item>
              <Menu.Item active onClick={() => navigate("/link_token")}>
                Create Link Token
              </Menu.Item>
            </Menu>
            <Header content="Create Link Token" />
            <Form>   
                <Button onClick={() => checkToken()}>
                    Link Token
                </Button>
            </Form>
        </Segment>
    )
}
export default CreateLinkToken