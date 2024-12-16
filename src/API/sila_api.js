import axios from "axios";

    const current_epoch = Math.floor(new Date().getTime()/1000.0)
    //const TOKEN_ID = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzAzNTY2NjIsImV4cCI6MTczMDM4NTQ2MiwiY2xpZW50X2lkIjoielZFeWlENHliWUxmTkZtODBzVHBvY1JrMFY3Vlo1alhJZTExNWNyVGJ1cyJ9.w2qko6Ayb0SKZYsWTojpN9k9YmqKW4hKLgY2KUEsSAI'
    const CLIENT_ID = 'zVEyiD4ybYLfNFm80sTpocRk0V7VZ5jXIe115crTbus'
    const CLIENT_SECRET = 'W8sma8zTxZaQnzprq4cgJ0mO8ADdacn_-cMxT4T5yPOO0anBtkst9LIfBiX78mufWoRx5wWy1-UxhE-EO9alMw'
    const basicAuthString = 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET);

    export default function setAuthorization(){
        axios({
                method: 'POST',
                url: "https://sandbox.silamoney.com/0.2/auth_token",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: basicAuthString
                },
                data: {
                    "header": {
                        "created": current_epoch, 
                        "app_handle": "fastlogic_handle",
                        "version": "0.2", 
                        "reference": "fastlogic1"    
                    }
                }
        }).then(response => {
            //console.log(response.data["access_token"])
            sessionStorage.setItem("token", response.data["access_token"]["token"])
        }
        )
        .catch(error => console.log(error))
        
    }

    