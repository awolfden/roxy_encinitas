import React, { Component } from 'react';
import lunch from '../../images/LunchWinter2024.png';


class Lunch extends Component {
    constructor() {
        super();
        this.state = {
            smallPlates: [
                {
                    'name': 'Stems & Flappers',
                    'description': 'House made buffalo sauce or salt and pepper seasoning, choice of blue cheese or ranch'
                },
                {
                    'name': 'Avacado Toast',
                    'description': 'Burrata cheese, roasted tomato, sourdough, add egg 1'
                },
                {
                    'name': 'Garlic Fries',
                    'description': 'Parmesan, parsley, garlic aioli'
                },
                {
                    'name': 'Baked Brie',
                    'description': 'Lavender honey, walnuts, organic red grapes, baguette'
                },
                {
                    'name': 'Falafel Balls',
                    'description': 'House made tahini dressing'
                },
                {
                    'name': 'Cheese Curds',
                    'description': 'Breaded and fried Wisconsin cheese curds, served with ranch or marinera'
                }
            ],
            salads: [
                {
                    'name': 'Add to any salad:',
                    'description': 'chicken breast, shrimp, falafel, salmon'
                },
                {
                    'name': 'Tossed Cobb Salad',
                    'description': 'Blue cheese, organic romaine heart, tomato, avocado, onion, bacon, hard boiled egg, house made ranch'
                },
                {
                    'name': 'Roxy Chef Salad',
                    'description': 'White cheddar, romaine, tomato, artichoke hearts, carrots, sprouts, avocado, lemon-oregano dressing'
                },
                {
                    'name': 'Harvest Salad',
                    'description': 'Goat cheese, organic baby greens, candied pecans, local apple, dried apricots, red wine vinaigrette'
                },
                {
                    'name': 'Kale-fornia Salad',
                    'description': 'Parmesan cheese, organic kale, crispy chickpeas, roasted fennel, golden raisins, roasted garlic vinaigrette'
                },
                {
                    'name': 'Grilled Romaine Caesar',
                    'description': 'Pecorino cheese, organic baby romaine heart, garlic ciabatta croutons, house-made caesar dressing'
                }
            ],
            sandwiches: [
                {
                    'name': 'All Sandwiches',
                    'description': 'Served with your choice of fries or house salad, substitute garlic fries'
                },
                {
                    'name': 'Falafel Burger',
                    'description': 'Melted mozzarella and cheddar, onion , tomato, sprouts, tahini dressing, 7 grain bun'
                },
                {
                    'name': 'Bacon Lettuce Tomato',
                    'description': 'Arugula aioli, spiced brown sugar bacon, rustic sourdough'
                },
                {
                    'name': 'The Roxy Burger',
                    'description': 'white cheddar, dill pickle, onion bacon aioli, lettuce, onion, tomato, brioche bun'
                },
                {
                    'name': 'Grilled Cheese',
                    'description': 'Fontina, aged white cheddar, gruyere, tomato, avocado, rustic sourdough'
                },
                {
                    'name': 'Artichoker',
                    'description': 'Mozzarella, artichoke hearts, tomato, sprouts, sunflower seeds, black olive aioli, 7-grain bread'
                },
                {
                    'name': 'Reuben',
                    'description': 'Corned beef, gruyere, sauerkraut, russian sauce, dill pickles, marble rye'
                },
                {
                    'name': 'Turkey Club',
                    'description': 'House roasted turkey, avocado, bacon, sprouts, tomato, garlic aioli, rustic sourdough'
                },
                {
                    'name': 'Chicken Parmesan',
                    'description': 'Parmesan, mozzarella, house-made marinara, panko crusted breast, ciabatta'
                },
                {
                    'name': 'Bigeye & Yellowtail Tuna Salad',
                    'description': 'Local caught big eye & yellowtail, mayo, celery, shallots, gherkins, artisan white'
                },
            ],
            sunsetMenu: [
                {
                    'name': 'Stems & Flappers',
                    'description': 'House made buffalo sauce or salt and pepper seasoning'
                },
                {
                    'name': 'Crispy Brussels',
                    'description': 'Bacon lardon, pecorino cheese, baker & olive 18 year aged balsamic'
                },
                {
                    'name': 'Baked Brie',
                    'description': 'Lavender honey, walnuts, organic red grapes, baguette'
                },
                {
                    'name': 'Falafel Balls',
                    'description': 'House made tahini dressing'
                },
                {
                    'name': 'Cheese Curds',
                    'description': 'Breaded and fried Wisconsin cheese curds, served with ranch or marinera'
                },
                {
                    'name': 'Garlic Fries',
                    'description': 'Parmesan, parsley, garlic aioli'
                },
                {
                    'name': 'The Roxy Burger',
                    'description': 'white cheddar, dill pickle, onion bacon aioli, lettuce, onion, tomato, brioche bun'
                },
                {
                    'name': 'Falafel Burger',
                    'description': 'Melted mozzarella & cheddar, tahini dressing, onion, tomato, sprouts, 7 grain bun, add avocado 1.5'
                },
                {
                    'name': 'Kale-fornia Salad',
                    'description': 'Parmesan cheese, organic kale, crispy chickpeas, roasted fennel, golden raisins, roasted garlic vinaigrette'
                },
                {
                    'name': 'Cobb Salad',
                    'description': 'Blue cheese crumbles, organic romaine, bacon, tomato, hard boiled egg, red onion, avocado, house-made ranch dressing'
                },
            ]
        }
    }

    render() {

        const showSmallPlateItems =
            this.state.smallPlates.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            })
        const showSaladItems =
            this.state.salads.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            })
        const showSandwichItems =
            this.state.sandwiches.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            })
        const showSunsetMenu =
            this.state.sunsetMenu.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            })


        return (
            <div id="smallPlates">
                {/* <h3>Small Plates</h3>
                <div className="plateList">
                    {showSmallPlateItems}
                </div>
                <h3>Salads</h3>
                <div className="plateList">
                    {showSaladItems}
                </div>
                <h3>Sandwiches</h3>
                <div className="plateList">
                    {showSandwichItems}
                </div>
                <h3>Sunset Menu, 3p-6p daily</h3>
                <div className="plateList">
                    {showSunsetMenu}
                </div> */}
                <img src={lunch} alt="lunch menu" style={{ width: '90%' }}></img>
            </div>
        )
    }

}


export default Lunch;

