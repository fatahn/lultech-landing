import React from 'react'

const TitleCardSection = () => {
	return (
		<section className="bg-white border-b py-8">
			<div className="container mx-auto flex flex-wrap pt-4 pb-12">
				<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Our Arsenal</h1>
			<div className="w-full mb-4">	
				<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
			</div>
				<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
				<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
					<a href="#" className="flex flex-wrap no-underline hover:no-underline">
						<p className="w-full text-gray-600 text-xs md:text-sm px-6">Typescript</p>
						<div className="w-full font-bold text-xl text-gray-800 px-6">The latest and greatest of JS</div>
						<p className="text-gray-800 text-base px-6 mb-5">
							We use the bleeding edge of JS libraries and deploy best practices to architech robust solutions.
						</p>
					</a>
				</div>
			</div>

				<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
				<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
					<a href="#" className="flex flex-wrap no-underline hover:no-underline">
						<p className="w-full text-gray-600 text-xs md:text-sm px-6">Artificial Intelligence</p>
						<div className="w-full font-bold text-xl text-gray-800 px-6">Become the smart business</div>
						<p className="text-gray-800 text-base px-6 mb-5">
							Use the data you already have to provide a personalized support to your customers through intelligent chatbots.
						</p>
					</a>
				</div>
			</div>

				<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
				<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
					<a href="#" className="flex flex-wrap no-underline hover:no-underline">
						<p className="w-full text-gray-600 text-xs md:text-sm px-6">Be Headless</p>
						<div className="w-full font-bold text-xl text-gray-800 px-6">We go headless and serverless</div>
						<p className="text-gray-800 text-base px-6 mb-5">
							We believe in beautifully customized frontend for great UX, and battle tested backends for minimal downtimes.
						</p>
					</a>
				</div>
			</div>

			</div>
		</section>
	)
}

export default TitleCardSection
