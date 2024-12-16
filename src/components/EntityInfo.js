import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { Button, Form, Segment, Menu, Header } from "semantic-ui-react";

export const EntityInfo = () => {

    const navigate = useNavigate()
    let TOKEN_ID = sessionStorage.getItem("token")    
    const bearerAuthString = 'Bearer ' + TOKEN_ID.toString('base64');
    const current_epoch = Math.floor(new Date().getTime()/1000.0)
 
    const [status, setstatus] = useState("")
    //const [user_handle, setuser_handle] =useState(sessionStorage.getItem("user_handle"))
    const [user_handle, setuser_handle] = useState("")

    const handleuser_handle = (e) => setuser_handle(e.target.value)
   
    function entity_info(){
        axios({
            method: "POST",
            url: "https://sandbox.silamoney.com/0.2/get_entity",
            headers: {
                "Content-Type": "application/json",
                Authorization: bearerAuthString
            },
            data:{
                "header": {
                    "created":current_epoch,
                    "app_handle": "fastlogic_handle",
                    "user_handle": user_handle,
                    "reference": "fastlogic1"
                },
                
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
              <Menu.Item active onClick={() => navigate("/entity_info")}>
                Entity Info
              </Menu.Item>
              <Menu.Item  onClick={() => navigate("/kyc")}>
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
            <Header content="Entity Info" />
            <Form>
                <Form.Field>
                    <Form.Input
                        value={user_handle}
                        onChange={handleuser_handle}
                    />
                </Form.Field>
                <Button onClick={entity_info}>
                    Entity Info
                </Button>
                {status}
            </Form>
        </Segment>
    )
}