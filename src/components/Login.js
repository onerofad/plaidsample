import { useEffect } from "react"
import setAuthorization from "../API/sila_api"
import { Button, Form, Grid, Segment } from "semantic-ui-react"
import { Link } from "react-router-dom"


export const Login = () => {

    useEffect(() => {
        setAuthorization()
    }, [])

    return(
        <Segment>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Form>
                            <Form.Field>
                                <Form.Input
                                    placeholder="User Name"
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    placeholder="Password"
                                />
                            </Form.Field>
                            <Button>
                                Login
                            </Button>
                        </Form>
                        <Link to="/register">Register</Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )

}
