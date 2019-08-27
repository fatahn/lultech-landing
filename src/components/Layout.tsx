import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// import '../css/global.css'

import Navbar from './Navbar'
import WavesSVG from './WavesSVG'
import FeatureSection from './FeatureSection'
import PricingSection from './PricingSection'
import TitleCardSection from './TitleCardSection'

import heroImg from '../images/lultech-home.svg'
import waveTop from '../images/wave-top.svg'

type Props = {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	const { site: { siteMetadata } } = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title,
					description,
					features {
						title,
						description,
					},
				}
			}
		}`
	)

  return (
		<div className="leading-normal tracking-normal text-white gradient">
			{children}
			<Navbar />
			<div className="pt-24">
				<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
					<div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
						<p className="uppercase tracking-loose w-full">Optimize Your Business</p>
						<h1 className="my-4 text-5xl font-bold leading-tight">{siteMetadata.title}</h1>
						<p className="leading-normal text-2xl mb-8">{siteMetadata.description}</p>
						<a href="#features">
							<button
								type="submit"
								className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
								See more
							</button>
						</a>
					</div>
					<div className="w-full md:w-3/5 py-6 text-center">
						<img className="w-full md:w-4/5 z-50" src={heroImg} />
					</div>
					</div>
				</div>
			<WavesSVG />
			{/* Features Section*/}
			<FeatureSection data={siteMetadata} />
			{/* Title cards */}
			<TitleCardSection />
			{/* Pricing cards */}
			<PricingSection />
			{/* Waves SVG */}
			<div className="wave-top">
				<img src={waveTop} alt="Wavy svg for top of section"/>
			</div>
				
				{/* Call to Action block */}
				<section className="container mx-auto text-center py-6 mb-12">
						<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white" contentEditable>Restrategezi</h1>
					<div className="w-full mb-4">	
						<div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
					</div>
						<h3 className="my-4 text-3xl leading-tight">Come, let us help you restructure your online strategy.</h3>
						<small>Start with fixing the above spelling :)</small> <br />

						<button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Help me!</button>
					</section>
					{/* Footer */}
				<footer className="bg-white">
					<div className="container mx-auto  px-8">
						<div className="w-full flex flex-col md:flex-row py-6">
							<div className="flex-1">
								<p className="uppercase text-gray-500 md:mb-6">Links</p>
								<ul className="list-reset mb-6">
									<li className="mt-2 inline-block mr-2 md:block md:mr-0">
										<a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Support</a>
									</li>
								</ul>
							</div>
							<div className="flex-1">
								<p className="uppercase text-gray-500 md:mb-6">Legal</p>
								<ul className="list-reset mb-6">
										<li className="mt-2 inline-block mr-2 md:block md:mr-0">
											<a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Terms</a>
										</li>
										<li className="mt-2 inline-block mr-2 md:block md:mr-0">
											<a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Privacy</a>
										</li>
								</ul>
							</div>
							{/* <div className="flex-1">
									<p className="uppercase text-gray-500 md:mb-6">Social</p>
									<ul className="list-reset mb-6">
										<li className="mt-2 inline-block mr-2 md:block md:mr-0">
											<a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Facebook</a>
										</li>
										<li className="mt-2 inline-block mr-2 md:block md:mr-0">
											<a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Linkedin</a>
										</li>
										<li className="mt-2 inline-block mr-2 md:block md:mr-0">
											<a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Twitter</a>
										</li>
									</ul>
							</div> */}
						<div className="flex-1">
							<p className="uppercase text-gray-500 md:mb-6">Company</p>
							<ul className="list-reset mb-6">
								<li className="mt-2 inline-block mr-2 md:block md:mr-0">
									<a href="/about" className="no-underline hover:underline text-gray-800 hover:text-orange-500">About Us</a>
								</li>
								<li className="mt-2 inline-block mr-2 md:block md:mr-0">
									<a href="contact" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Layout