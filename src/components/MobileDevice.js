import '../styles/MobileDevice.css'
import Logo from '../assets/todos-logo.svg'

function MobileDevice() {
	function handleGithub() {
		window.location = 'https://github.com/emanuelchristo/todos'
	}
	return (
		<div className="mobile-device">
			<img src={Logo} alt="Todos." />
			<div style={{ height: '3rem' }}></div>
			<p className="support">Support for mobile devices</p>
			<h2 className="coming-soon">Coming soon</h2>
			<div style={{ height: '3rem' }}></div>
			<button type="button" className="fill" onClick={handleGithub}>
				Contribute on
				<span className="iconify github-icon" data-icon="ant-design:github-filled"></span>
			</button>

			<div className="author">
				Made without 💤 by&nbsp;
				<a href="https://www.instagram.com/emanuel.christo/" target="_blank" rel="noreferrer">
					Cris
				</a>
			</div>
		</div>
	)
}

export default MobileDevice
