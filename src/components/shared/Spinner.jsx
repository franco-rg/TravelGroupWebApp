import React from 'react'

const Spinner = () => {
	return (
		<div className='absolute top-0 bottom-0 left-0 right-0 z-10 flex justify-center w-full h-full m-auto'>
			<div className='m-auto shadow-xl bg-gray-50 rounded-xl w-80 h-44'>
				<div className='flex flex-col items-center justify-center w-full h-full'>
					<div className="spinner">
						<div className="double-bounce1"></div>
						<div className="double-bounce2"></div>
					</div>
					<div className='flex flex-col items-center justify-center mb-5 poppins'>
						<h1 className='text-xl font-medium text-gray-600'>Cargando...</h1>
						<span className='text-sm'>Esto podría tomar un tiempo.</span>
					</div>
				</div>
			</div>

		</div>
	)
};

export default Spinner;