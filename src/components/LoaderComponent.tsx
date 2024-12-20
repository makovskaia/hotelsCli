import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export const LoaderComponent: React.FC = () => (
	<Spinner animation="border" role="status" style={{position: 'fixed', top: '48%', left:  '48%'}}>
	  <span className="visually-hidden">Loading...</span>
	</Spinner>
)