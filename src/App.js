import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
	const [menuItems, setMenuItems] = useState(items);
	//console.log(menuItems);
	const [categories, setCatagories] = useState([]);

	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>Our Menu</h2>
					<div className='underline'></div>
				</div>

				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
