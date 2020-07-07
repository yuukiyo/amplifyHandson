import React, { useEffect } from 'react'
import { Button, makeStyles, Typography, Theme, createStyles, AppBar, Toolbar } from '@material-ui/core'
import { State } from './reducer'
import { ServerlessAlbumHundler } from './amplifyContainer'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        InputAddButton: {
            '& input': {
                opacity: 0,
                appearance: 'none',
                position: 'absolute',
            },
            '& svg': {
                color: '#fff'
            }
        },
        AppBarTitle: {
            flexGrow: 1,
        },
        SignOut: {
            '& .button': {
                backgroundColor: 'red',
            }
        },
        fab: {
            position: 'fixed',
            bottom: theme.spacing(5),
            right: theme.spacing(5),
        },
        buttonLine: {
            margin: 50,
            textAlign: 'center'
        },
        buttonLineButton: {
            padding: '10px 30px',
            color: '#fff',
            fontSize: 24
        }
    })
);

type Props = State & ServerlessAlbumHundler

export const AmplifyComponent: React.FC<Props> = (props: Props) => {
    useEffect(
        () => {
            props.hundleSetCurrentSession()
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )
    const classes = useStyles();
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.AppBarTitle}>API Gateway Auth Test</Typography>
                    <AmplifySignOut className={classes.SignOut} button-text="Custom Text"></AmplifySignOut>
                </Toolbar>
            </AppBar>
            <div className={classes.buttonLine}>
                <Button
                    onClick={() => props.hundleClickButtonIam()}
                    variant="contained"
                    color="secondary"
                    className={classes.buttonLineButton}
                >IAM認証</Button>
            </div>
            <div className={classes.buttonLine}>
                <Button
                    onClick={() => props.hundleClickButtonCognito()}
                    variant="contained"
                    color="secondary"
                    className={classes.buttonLineButton}
                >Cognito認証</Button>
            </div>
        </>
    )
}
