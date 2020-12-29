
import { Form, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

function RegistrationForm() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRetype, setPasswordRetype] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [terms, setTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleUserNameChange = (event) => setUserName(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handlePasswordRetypeChange = (event) => setPasswordRetype(event.target.value);
    const handleFirstNameChange = (event) => setFirstName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);
    const handleCountryChange = (event) => setCountry(event.target.value);
    const handleTermsChange = (event) => setTerms(event.target.value);

    const addNewUser = async () => {
        setLoading(true);
        setErrors([]);
        let errorsForForm = [];
        if (userName === '') {
            errorsForForm.push('Think of a cool nickname!');
        }
        if (password === '' || password.length < 8) {
            errorsForForm.push('Use your imagination and give me at least 8 symbols');
        }
        if (passwordRetype === '' || passwordRetype !== password) {
            errorsForForm.push('Try again and type the very same password');
        }
        if (firstName === '') {
            errorsForForm.push('Your name?');
        }
        if (country === '') {
            errorsForForm.push('Where do you come from?');
        }
        if (terms === false) {
            errorsForForm.push('Why you not agreed?');
        }

        if (errorsForForm.length > 0) {
            setErrors(errorsForForm);
            setLoading(false);
            return;
        }


        setLoading(false);
        setUserName('');
        setPassword('');
        setPasswordRetype('');
        setFirstName('');
        setLastName('');
        setCountry('Country*');
        setTerms(false);


    };

    const saveButtonText = loading ? 'Loading' : 'Register';

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
            <Form noValidate >
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control
                            value={userName}
                            onChange={handleUserNameChange}
                            disabled={loading}
                            type="text"
                            placeholder="Username*"
                            required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control
                            value={password}
                            onChange={handlePasswordChange}
                            disabled={loading}
                            type="password"
                            placeholder="Password*"
                            required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control
                            value={passwordRetype}
                            onChange={handlePasswordRetypeChange}
                            disabled={loading}
                            type="password"
                            placeholder="Retype password*"
                            required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control
                            value={firstName}
                            onChange={handleFirstNameChange}
                            disabled={loading}
                            type="text"
                            placeholder="Name*"
                            required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control
                            value={lastName}
                            onChange={handleLastNameChange}
                            disabled={loading}
                            type="text"
                            placeholder="Surname" />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control
                            value={country}
                            onChange={handleCountryChange}
                            disabled={loading}
                            as="select"
                            required>
                            <option>Country*</option>
                            <option>Estonia</option>
                            <option>Latvia</option>
                            <option>Chile</option>
                            <option>Russia</option>
                            <option>Narnia</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Check
                            value={terms}
                            onChange={handleTermsChange}
                            disabled={loading}
                            type="checkbox"
                            label="I didn't read anything, but agreeee*"
                            required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Button variant="secondary" onClick={addNewUser} disabled={loading}>
                            {saveButtonText}
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}

export default RegistrationForm;

