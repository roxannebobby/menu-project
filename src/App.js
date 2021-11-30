import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
	const [menuItems, setMenuItems] = useState(items);
	//console.log(menuItems);
	const [categories, setCatagories] = useState([]);
	const filterItems = (category) => {
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>My Menu App</h2>
					<div className='underline'></div>
				</div>
				<Categories filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
