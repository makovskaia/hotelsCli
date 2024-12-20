import React from 'react'
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

type ErrorComponentProps = {
	error: string
}

export const ErrorComponent: React.FC<ErrorComponentProps> = (props: ErrorComponentProps) => {
  const navigate = useNavigate();

  return (
  	<Alert variant="danger" onClose={() => navigate(`/hotels`, { replace: true })} dismissible>
  		<Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            {props.error}
          </p>
      </Alert>
  )
}

