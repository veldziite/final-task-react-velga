import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import AxiosPost from '../Requests/AxiosPost';

function AddNewPostForm() {

    const [user_name, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleUserNameChange = (event) => setUserName(event.target.value);
    const handleMessageChange = (event) => setMessage(event.target.value);

    const addNewPost = async () => {
        setLoading(true);
        setErrors([]);
        let errorsForForm = [];
        if (user_name === '') {
            errorsForForm.push('Purrrr something');
        }

        if (errorsForForm.length > 0) {
            setErrors(errorsForForm);
            setLoading(false);
            return;
        }

        await AxiosPost('chat', {
            user_name,
            message
        });
        setLoading(false);
        setUserName('');
        setMessage('');

    };

    const saveButtonText = loading ? 'Loading...' : 'Load';

    let errorsElement = '';
    if (errors.length > 0) {
        errorsElement = (
            <div className="alert alert-danger">
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            </div>
        );
    }

    return (
        <div>
            {errorsElement}
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control value={user_name} onChange={handleUserNameChange} disabled={loading} type="text" id="user-name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Post</Form.Label>
                <Form.Control value={message} onChange={handleMessageChange} disabled={loading} as="textarea" rows={5} id="message" />
            </Form.Group>
            <Form.Group>
                <Button variant="primary" onClick={addNewPost} disabled={loading}>
                    {saveButtonText}
                </Button>
            </Form.Group>
        </div>
    )
}

export default AddNewPostForm;