import { connect } from "react-redux";
import { AppState } from './store'
import { AmplifyComponent } from "./amplifyComponent";
import { Dispatch } from "redux";
import { Actions } from "./action";
import Amplify, { Auth, API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export interface ServerlessAlbumHundler {
    hundleSetCurrentSession(): void
    hundleClickButtonIam(): void
    hundleClickButtonCognito(): void
}

const hundleSetCurrentSession = () => async (dispatch: Dispatch) => {
    Auth.currentSession()
        .then(data => {
            dispatch(Actions.updateUserName(data["accessToken"]["payload"]["username"]))
        })
        .catch(err => console.log(err));
}

const hundleClickButtonIam = () => async () => {
    const apiName = 'rest0707'
    const path = '/items'
    const myInit = {
        // headers: {
        //     Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
        // },
    };
    console.log(myInit)
    API.get(apiName, path, myInit).then(response => {
        console.log(response)
    })
        .catch(err => {
            console.log(err)
        })
}

const hundleClickButtonCognito = () => async () => {
    const apiName = 'cognitoauth'
    const path = '/cognitoauth'
    const myInit = {
        headers: {
            Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
        },
    };
    console.log(myInit)
    API.get(apiName, path, myInit).then(response => {
        console.log(response)
    })
        .catch(err => {
            console.log(err)
        })
}

const mapStateToProps = (appState: AppState) => {
    return Object.assign({}, appState.state, {
        username: appState.state.username
    })
}

export default connect(mapStateToProps, {
    hundleSetCurrentSession,
    hundleClickButtonIam,
    hundleClickButtonCognito
})(AmplifyComponent)
