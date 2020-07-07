import React, { useEffect } from 'react'
import { Button, makeStyles, Typography, Fab, Theme, createStyles, AppBar, Toolbar } from '@material-ui/core'
import { State } from './reducer'
import { ServerlessAlbumHundler } from './amplifyContainer'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import AddIcon from '@material-ui/icons/Add';

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
                    <Typography variant="h6" className={classes.AppBarTitle}>Amplify Handson</Typography>
                    <AmplifySignOut className={classes.SignOut} button-text="Custom Text"></AmplifySignOut>
                </Toolbar>
            </AppBar>
            <Fab color="secondary" className={classes.fab} aria-label="add">
                <Button
                    onClick={() => props.hundleClickButton()}
                    component="label"
                    variant="text"
                    className={classes.InputAddButton}
                >
                    <AddIcon />
                </Button>
            </Fab>
        </>
    )
}
