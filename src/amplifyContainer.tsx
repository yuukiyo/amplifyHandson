import { connect } from "react-redux";
import { AppState } from './store'
import { AmplifyComponent } from "./amplifyComponent";
import { Dispatch } from "redux";
import { Actions } from "./action";
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export interface ServerlessAlbumHundler {
    hundleSetCurrentSession(): void
    hundleClickButton(): void
}

const hundleSetCurrentSession = () => async (dispatch: Dispatch) => {
    Auth.currentSession()
        .then(data => {
            dispatch(Actions.updateUserName(data["accessToken"]["payload"]["username"]))
        })
        .catch(err => console.log(err));
}

const hundleClickButton = () => async () => [
    console.log(1)
]

const mapStateToProps = (appState: AppState) => {
    return Object.assign({}, appState.state, {
        username: appState.state.username
    })
}

export default connect(mapStateToProps, {
    hundleSetCurrentSession,
    hundleClickButton
})(AmplifyComponent)
