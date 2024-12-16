import { useNavigate } from 'react-router-dom'
import { Menu, Header, Segment, Form, Button } from "semantic-ui-react"
import { useState } from "react"
import axios from "axios"

export const Documents = () => {

    const navigate = useNavigate()
    let TOKEN_ID = sessionStorage.getItem("token")    
    const bearerAuthString = 'Bearer ' + TOKEN_ID.toString('base64');
    const current_epoch = Math.floor(new Date().getTime()/1000.0)
 
    const [status, setstatus] = useState("")
    const [user_handle, setuser_handle] = useState(null)
    const [frontpage, setfrontpage] = useState(null)


    let front = ""
    const handleuser_handle = (e) => setuser_handle(e.target.value)
    const handlefrontpage = (e) => {
        const file_front = e.target.files[0]
        setfrontpage(file_front)
    }

    function uploadBtn(){
        let reader = new FileReader()
       
        axios({
            method: "POST",
            url: "https://sandbox.silamoney.com/0.2/documents",
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: bearerAuthString
            },
          
            data: {
              "files": {
                "file": frontpage
              },
              "data": {
              "header": {
                "created": current_epoch, 
                "auth_handle": "fastlogic_handle", 
                "user_handle":user_handle, 
                "version": "0.2", 
                "reference": "fastlogic1"
              }, 
              "message": "header_msg",
                "name": "front page", 
                "filename": "file",
                "mime_type": "image/jpeg",
                "document_type": "id_drivers_license",
                "description": "front of drivers license",  
              "verification_uuid": "e40cb354-f021-413b-bf23-1fe243cfdeda", 
              "provider": "ALLOY", 
              "is_front": true 
              }
            }
                   
        }).then(response => alert(response.data.message))
        .catch(error => console.log(error))

      
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
              <Menu.Item active onClick={() => navigate("/upload_document")}>
                Upload Document
              </Menu.Item>
              <Menu.Item onClick={() => navigate("/resume_kyc")}>
                Resume KYC
              </Menu.Item>
              <Menu.Item onClick={() => navigate("/link_token")}>
                Create Link Token
              </Menu.Item>
            </Menu>
            <Header content="Upload Document" />
            <Form>
                <Form.Field>
                    <Form.Input
                        placeholder="User Name"
                        value={user_handle}
                        onChange={handleuser_handle}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Front Page</label>
                    <Form.Input
                        type="file"
                        name="imagefile"
                        onChange={handlefrontpage}
                    />
                </Form.Field>
                {/*<Form.Field>
                    <label>Back Page</label>
                    <Form.Input
                       type="file"  
                       onChange={handlebackpage}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Full Image</label>
                    <Form.Input
                       type="file"  
                       onChange={handlefullpage}
                    />
                </Form.Field>*/}
                <Button onClick={uploadBtn}>
                    Upload Document
                </Button>
                {status}
            </Form>
        </Segment>
    )

}