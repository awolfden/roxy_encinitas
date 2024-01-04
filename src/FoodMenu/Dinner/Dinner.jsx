import React, { Component } from 'react';
import dinner from '../../images/DinnerFall2023.png';



class Dinner extends Component {
    constructor() {
        super();
        this.state = {
            smallPlates: [
                {
                    'name': 'Cheese & Charcuterie Board',
                    'description': 'Assortment of meats and cheese, honeycomb, seasonal jam, sourdough toast'
                },
                {
                    'name': 'Garlic Fries',
                    'description': 'Parmesan, parsley, garlic aioli'
                },
                {
                    'name': 'Grilled Korean Short Ribs',
                    'description': 'Kalbi marinade, kimchi, carmelized onion, white rice'
                },
                {
                    'name': 'Falafel Balls',
                    'description': 'House made tahini dressing'
                },
                {
                    'name': 'Roasted Butternut Squash Risotto',
                    'description': 'Mascarpone, parmesan, roasted mushroom, sage, squash puree'
                },
                {
                    'name': 'Green Beans Almonde',
                    'description': 'Shallots, garlic, toasted almonds, beurre fondue, add chicken breast 5 | falafel 6 | shrimp 7 | salmon 8'
                },
                {
                    'name': 'P.E.I. Mussels',
                    'description': 'Coconut green curry, bird\'s eye chili, Thai basil, cilantro, greenonion, crostini'
                },
                {
                    'name': 'Baked Brie',
                    'description': 'Lavender honey, toasted walnuts, organic red grapes, baguette'
                },
                {
                    'name': 'Duck Confit Mac & Cheese',
                    'description': 'White cheddar, carmelized onion, 2oz duck leg, skin cracklin'
                },
                {
                    'name': 'Esquites de Roxy',
                    'description': 'Charred white corn, cotija, lime crema, micro cilantro'
                },
                {
                    'name': 'Shishito Peppers',
                    'description': 'White soy-garlic oil'
                },
                {
                    'name': 'French Onion Soup',
                    'description': 'House made beef stock, sherry wine, carmelized onion, sourdough, gruyere'
                },
                {
                    'name': 'Crispy Brussels',
                    'description': 'Bacon lardon, baker & olive 18 year aged balsamic, pecorino cheese'
                },
                {
                    'name': 'Stems & Flappers',
                    'description': 'House made buffalo sauce or salt and pepper seasoning, choice of blue cheese or ranch dressing'
                }
            ],
            entrees: [
                {
                    'name': 'Ribs N Mac',
                    'description': 'Slow roasted St Louis ribs, chipotle bbq sauce, mamas baked mac n cheese'
                },
                {
                    'name': 'Harvest Bowl',
                    'description': 'Quinoa, roasted butternut squash and mushrooms, romanesco, kale pesto, pepitas and chicken breast 5 | falafel 6 | shrimp 7 | salmon 8'
                },
                {
                    'name': 'Smoked Gouda Mac & Cheese',
                    'description': 'Smoked gouda, carmalized onion, bacon'
                },
                {
                    'name': 'Potato Scallops',
                    'description': 'Roasted creamer potatoes, cauliflower puree, romesco sauce, toasted almonds'
                },
                {
                    'name': 'Chicken Under a Brick',
                    'description': 'Creamy polenta, parmesan, goat cheese, roasted romanesco, cauliflower, lemon brown butter sauce'
                }
            ],
            salads: [
                {
                    'name': 'Add to any salad:',
                    'description': 'chicken breast, shrimp, falafel, salmon'
                },
                {
                    'name': 'Harvest Salad',
                    'description': 'Goat cheese, organic baby greens, apples, pears, dried cranberries, candied pecans, apple cider vinaigrette'
                },
                {
                    'name': 'Grilled Romaine Caesar',
                    'description': 'Pecorino cheese, organic baby romaine heart, garlic ciabatta croutons, house-made caesar dressing'
                },
                {
                    'name': 'Toasted Cobb Salad',
                    'description': 'Blue cheese, organic romaine heart, tomato, avocado, onion, bacon, hard-boiled egg, house made ranch'
                },
                {
                    'name': 'Roxy Chef Salad',
                    'description': 'White cheddar cheese, organic romaine, tomato, carrots, sprouts, avocado, artichoke hearts, lemon-oregano dressing'
                },
                {
                    'name': 'Kale-fornia Salad',
                    'description': 'Parmesan cheese, organic kale, crispy chickpeas, roasted fennel, golden raisins, roasted garlic vinaigrette'
                }
            ],
            sandwiches: [
                {
                    'name': 'The Roxy Burger',
                    'description': '8oz prime ground chuck, white cheddar, dill pickle, onion-bacon aioli, lettuce, onion, tomato, brioche bun'
                },
                {
                    'name': 'Artichoker',
                    'description': 'Mozzarella, artichoke hearts, tomato, sprouts, sunflower seeds, black olive aioli, 7 grain bun'
                },
                {
                    'name': 'Falafel Burger',
                    'description': 'Melted mozzarella and cheddar, onion, tomato, sprouts, tahini dressing, 7 grain bun'
                }
            ],

        }
    }

    render() {

        const showSmallPlates =
            this.state.smallPlates.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });
        const showEntrees =
            this.state.entrees.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });
        const showSalads =
            this.state.salads.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });
        const showSandwiches =
            this.state.sandwiches.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });


        return (
            <div id="dinner">
                {/* <h3>Small Plates</h3>
                <div className="dinnerList">
                    {showSmallPlates}
                </div>
                <h3>Entrees</h3>
                <div className="dinnerList">
                    {showEntrees}
                </div>
                <h3>Salads</h3>
                <div className="dinnerList">
                    {showSalads}
                </div>
                <h3>Sandwiches</h3>
                <div className="dinnerList">
                    {showSandwiches}
                </div> */}

                <img src={dinner} alt='dinner menu' style={{ width: '70%' }}></img>


            </div>
        )
    }
}


export default Dinner;

