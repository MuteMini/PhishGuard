import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

//Get prediction from somewhere else?
const prediction = 1;

const Scanner = () => {

    useEffect(() => {
        console.log("content view loaded");
    }, []);

    const [closed, setClosed] = useState(false);

    const handleClose = () => {
        setClosed(true);
    };

    let cardStyle = {
        alignItems: 'center',
        height: prediction === 1 ? '40%' : '25%',
        width: prediction === 1 ? '40%' : '25%'
    };

    if (closed) {
        return null;
    }

    return (
        <div className="overlay" style={{ alignItems: 'center' }}>
            <Card className="results" style={cardStyle}>
                <Card.Body className="body">
                    {prediction === 0 ?
                        (<Card.Text className="text">{'This is unlikely to be a\nphishing scam'}</Card.Text>)
                        : (<Card.Text className="text2">
                            {'Our model has detected to a degree of confidence that the text you provided is likely to be a scam. If this is regular text, we recommend closing the current website you are reading it on and avoiding the website in the future. If this is an email, it is advisable to delete the email, by pressing the “trash” icon found at the top of the email.'}
                        </Card.Text>)
                    }
                    <Button className="btn2" variant="primary" onClick={handleClose}>Close</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Scanner;