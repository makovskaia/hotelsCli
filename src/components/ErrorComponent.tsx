import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

type ErrorComponentProps = {
	error: string
}
//error takes error msg from props, displays it. 
export const ErrorComponent: React.FC<ErrorComponentProps> = (props: ErrorComponentProps) => {
  //when error is closed we navigate to default page /hotels
  const navigate = useNavigate()
  const goHome = () => navigate(`/hotels`, { replace: true })
  return (
  	<Alert variant="danger" onClose={goHome} dismissible>
  		<Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            {props.error}
          </p>
      </Alert>
  )
}

