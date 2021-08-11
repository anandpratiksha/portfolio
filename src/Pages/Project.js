import React, { useState } from 'react'
import Particles from 'react-particles-js';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title'
import portfolios from '../Components/allprojects'

const allcategories = ['All', ...new Set(portfolios.map(item => item.category))];
console.log(allcategories)

function Project() {
    const [categories, setCategories] = useState(allcategories);
    const [menuItem, setMenuItem] = useState(portfolios);

    const filter = (category) => {
        if (category === 'All') {
            setMenuItem(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item) => {
            return item.category === category;
        })
        setMenuItem(filteredData);
    }
    return (
        <div>
            <div className="PortfolioPage">
                <div className="title">
                    <Title title={"Project's"} span={"Project's"} />
                </div>
                <div className="portfolios-data">
                    {/* <Categories filter={filter} categories={categories} /> */}
                    <MenuItems menuItem={menuItem} />
                    <div class="btn1">
                        <button><span><a target="_blank" href="https://github.com/anandpratiksha?tab=repositories">More Project's</a></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
