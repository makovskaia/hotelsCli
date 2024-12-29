import React from 'react'
import { LoaderComponent } from './LoaderComponent'
import { ErrorComponent } from './ErrorComponent'

type ConditionalRenderProps = {
	children: any,
	error: string,
	status: LoadingStatus,
}

// conditional rendering of cchild component depending on loading state
export const ConditionalRender: React.FC<ConditionalRenderProps> = (props: ConditionalRenderProps) => props.status === 'loading' ? (
		<LoaderComponent />
	) : props.status === 'error' ? (
		<ErrorComponent error={props.error} />
	) : props.children 
