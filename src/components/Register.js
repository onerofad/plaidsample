import { useState } from "react"
import 'semantic-ui-css/semantic.min.css'
import { Segment, Form, Button, Grid, Header, Message, Menu } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {

       const navigate = useNavigate()

       let TOKEN_ID = sessionStorage.getItem("token")    
       const bearerAuthString = 'Bearer ' + TOKEN_ID.toString('base64');
       const current_epoch = Math.floor(new Date().getTime()/1000.0)
    
       const [username, setusername] = useState("")
       const handleusername = (e) => setusername(e.target.value)
    
       const [first_name, setfirst_name] = useState("")
       const handlefirst_name = (e) => setfirst_name(e.target.value)
    
       const [last_name, setlast_name] = useState("")
       const handlelast_name = (e) => setlast_name(e.target.value)
    
       const [entity_name, setentity_name] = useState("")
       const handle_entity_name = (e) => setentity_name(e.target.value)
       
       const [birthdate, setbirthdate] = useState("")
       const handlebirthdate = (e) => setbirthdate(e.target.value)
    
       const [phone, setphone] = useState("")
       const handlephone = (e) => setphone(e.target.value)
    
       const [email, setemail] = useState("")
       const handle_email = (e) => setemail(e.target.value)
    
       const [identity_value, setidentity_value] = useState("")
       const handleidentity_value = (e) => setidentity_value(e.target.value)
    
       const [street_address_1, setstreet_address_1] = useState("")
       const handlestreet_address_1 = (e) => setstreet_address_1(e.target.value)
       
       const [city, setcity] = useState("")
       const handlecity = (e) => setcity(e.target.value)
    
       const [state, setstate] = useState("")
       const handlestate = (e) => setstate(e.target.value)
    
       const [country, setcountry] = useState("")
       const handlecountry = (e) => setcountry(e.target.value)
    
       const [postal_code, setpostal_code] = useState("")
       const handlepostal_code = (e) => setpostal_code(e.target.value)
    
       function registerBtn(){
          axios({
              method: "POST",
              url: "https://sandbox.silamoney.com/0.2/register",
              headers: {
                "Content-Type": "application/json",
                Authorization: bearerAuthString
              },
              data: {
                "header": {
                  "created": current_epoch,
                  "user_handle": username,
                  "app_handle": "fastlogic_handle",
                  "version": "0.2",
                  "reference": "fastlogic"
                },
                "message": "entity_msg",
                "address": {
                  "address_alias": "home",
                  "street_address_1": street_address_1,
                  "city": city,
                  "state": state,
                  "country": country,
                  "postal_code": postal_code
                },
                "identity": {
                  "identity_alias": "SSN",
                  "identity_value": identity_value,
                },
                "contact": {
                  "phone": phone,
                  "contact_alias": "",
                  "email": email
                },
                "entity": {
                  "birthdate": birthdate,
                  "entity_name": entity_name,
                  "first_name": first_name,
                  "last_name": last_name,
                  "relationship": "user"
                }
              }
          }).then((response) => {
            alert(response.status)
            sessionStorage.setItem("user_handle", username)
          })
                
          //setInfo(response.data["validation_details"]["address"]["country"])
          .catch(() => console.log('An error has occurred'))
       }
    
    
        return(
          <Segment>
            <Menu>
              <Menu.Item onClick={() => navigate("/")}>
                Login
              </Menu.Item>
              <Menu.Item active onClick={() => navigate("/register")}>
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
              <Menu.Item onClick={() => navigate("/link_token")}>
                Create Link Token
              </Menu.Item>
            </Menu>
            <Header content="Register Info" />
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Message>
                    <Message.Header>Error</Message.Header>
                    <Message.Content>
                       
                    </Message.Content>
                  </Message>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                <Form>
                  <Form.Field>
                    <Form.Input
                      placeholder="User Name"
                      value={username}
                      onChange={handleusername}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      placeholder="First Name"
                      value={first_name}
                      onChange={handlefirst_name}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      placeholder="Last Name"
                      value={last_name}
                      onChange={handlelast_name}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      placeholder="Full Name"
                      value={entity_name}
                      onChange={handle_entity_name}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      placeholder="Birth Date"
                      value={birthdate}
                      onChange={handlebirthdate}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      placeholder="Email"
                      value={email}
                      onChange={handle_email}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      placeholder="Phone"
                      value={phone}
                      onChange={handlephone}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      placeholder="SSN"
                      value={identity_value}
                      onChange={handleidentity_value}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      placeholder="Street"
                      value={street_address_1}
                      onChange={handlestreet_address_1}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      placeholder="City"
                      value={city}
                      onChange={handlecity}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      placeholder="State"
                      value={state}
                      onChange={handlestate}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      placeholder="Country"
                      value={country}
                      onChange={handlecountry}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      placeholder="Postal Code"
                      value={postal_code}
                      onChange={handlepostal_code}
                    />
                  </Form.Field>
                  <Button onClick={() => registerBtn()}>
                    Register
                  </Button>
              </Form>
    
                </Grid.Column>
              </Grid.Row>
              
           
            </Grid>
    
          </Segment>
        )

}


