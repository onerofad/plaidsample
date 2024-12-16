import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { Button, Form, Segment, Menu, Header } from "semantic-ui-react";

export const VerifyKYC = () => {

    const navigate = useNavigate()
    let TOKEN_ID = sessionStorage.getItem("token")    
    const bearerAuthString = 'Bearer ' + TOKEN_ID.toString('base64');
    const current_epoch = Math.floor(new Date().getTime()/1000.0)
 
    const [status, setstatus] = useState("")
    //const [user_handle, setuser_handle] =useState(sessionStorage.getItem("user_handle"))
    const [user_handle, setuser_handle] = useState("")

    const handleuser_handle = (e) => setuser_handle(e.target.value)
   
    /*function updateInfo(){
        axios({
            method: "POST",
            url: "https://sandbox.silamoney.com/0.2/update/identity",
            headers: {
                "Content-Type": "application/json",
                Authorization: bearerAuthString
            },
            data: {
                "header": {
                "created": current_epoch,
                "auth_handle": "fastlogic_handle",
                "user_handle": user_handle,
                "reference": "fastlogic1"
            },
            "uuid": "5a531f54-acb6-4e5b-b83a-a76e9f80c159",
            "identity_alias": "SSN",
            "identity_value": "123452233"
            
        }
        })
        
            
    }*/
    function request_kyc(){
        axios({
            method: "POST",
            url: "https://sandbox.silamoney.com/0.2/kyc",
            headers: {
                "Content-Type": "application/json",
                Authorization: bearerAuthString
            },
            data:{
                "header": {
                    "created":current_epoch,
                    "app_handle": "fastlogic_handle",
                    "user_handle": user_handle,
                    "version": "0.2",
                    "reference": "fastlogic1"
                },
                "flow": "5c8303be-099a-4145-a28a-9be83f4bdbd8",
                
            }
        }).then(response => {
            setstatus(response.status)
            console.log(response.data)
        }
        ).catch(error => console.log(error))
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
              <Menu.Item active onClick={() => navigate("/kyc")}>
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
              <Menu.Item onClick={() => navigate("/link_token")}>
                Create Link Token
              </Menu.Item>
            </Menu>
            <Header content="Request KYC" />
            <Form>
                <Form.Field>
                    <Form.Input
                        value={user_handle}
                        onChange={handleuser_handle}
                    />
                </Form.Field>
                <Button onClick={request_kyc}>
                    Request KYC
                </Button>
                {status}
            </Form>
        </Segment>
    )
}