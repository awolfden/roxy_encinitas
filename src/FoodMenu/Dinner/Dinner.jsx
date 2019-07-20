import React, {Component} from 'react';

class Dinner extends Component {
    constructor(){
        super();
        this.state = {
            smallPlates: [
                {'name': 'Charcuterie & Cheese Board',
                 'description': 'Assortment of meats and cheese, honeycomb, fig jam, crostini'},
                {'name': 'Jalapeno Mac and Cheese',
                 'description': 'Cheddar, roasted jalapeno, bacon'},
                {'name': 'Falafel Balls',
                 'description': 'House made tahini dressing'},
                {'name': 'Baked Brie',
                 'description': 'Lavender honey, toasted walnuts, baguette'},
                {'name': 'Garlic Fries',
                 'description': 'Parmesan, parsley, garlic aioli'},
                {'name': 'French Onion Soup',
                 'description': 'House made French onion soup, gruyere cheese, sourdough toast'},
                {'name': 'Risotto',
                 'description': 'Marscapone cheese, parmesan, roasted mushrooms, fines herbes'},
                {'name': 'Shishito Peppers',
                 'description': 'White soy-garlic oil'},
                {'name': 'P.E.I. Mussels',
                 'description': 'Coconut red curry, bird\'s eye chili,'},
                 {'name': 'Quinoa Saute',
                 'description': 'Bell pepper, cremini mushrooms, organic kale, garbanzo ragu, pickled jalapeno'},
                 {'name': 'Beet Poke',
                 'description': 'Local golden beet, avacado, cucumber, seaweed salad, prawn cracker'},
                 {'name': 'Grilled Artichoke Hearts',
                 'description': 'Shallot-balsamic marinade, green lentil, fried parsley'},
                 {'name': 'Stuffed Peppers',
                 'description': 'Cherry peppers, chorizo salami, monterey jack, creamy polenta'},

            ],
            entrees: [
                {'name': 'Moroccan Spiced Pork Chop',
                 'description': '8 oz. bone in pork chop, toasted israeli couscous, cherry tomato, onion, organic kale, apple chutney, harissa pork jus'},
                {'name': 'Chicken Under a Brick',
                 'description': 'Sweet corn-cherry tomato succotash, lemon brown butter sauce'},
                {'name': '12 oz. NY Strip Loin',
                 'description': 'Heirloom tomatoes, organic arugula, roasted creamer potatoes'},
                {'name': 'Market Catch of the Day',
                 'description': 'White soy marinated fresh catch, vegetable fried rice, green onion'}
            ],
            salads: [
                {'name': 'Add to any salad:',
                 'description': 'chicken breast, shrimp, falafel, salmon'},
                {'name': 'Harvest Salad',
                 'description': 'Goat cheese, organic baby greens, candied pecans, local apple, dried apricots, red wine vinaigrette'},
                {'name': 'Grilled Romaine Caesar',
                 'description': 'Pecorino cheese, organic baby romaine heart, garlic ciabatta croutons, house-made caesar dressing'},
                {'name': 'Caprese',
                 'description': 'Mozzarella, local heirloom tomato, basil, baker & olive balsamic and olive oil'},
                {'name': 'Roxy Chef Salad',
                 'description': 'White cheddar, romaine, tomato, artichoke hearts, carrots, sprouts, avocado, tahini dressing'},
                {'name': 'Kale-fornia Salad',
                 'description': 'Crispy Chickpeas, roasted fennel, parm cheese, golden raisins, roasted garlic dressing'}
            ],
            sandwiches: [
                {'name': 'The Roxy Burger',
                 'description': 'White cheddar, dill pickle, onion bacon aioli, lettuce, onion, tomato, brioche bun'},
                {'name': 'Artichoker',
                 'description': 'Mozzarella, artichoke hearts, tomato, sprouts, sunflower seeds, black olive aioli, 7 grain bun'},
                {'name': 'Falafel Burger',
                 'description': 'Melted mozzarella and cheddar, onion , tomato, sprouts, tahini dressing, 7 grain bun'}
            ],

        }
    }

    render(){
        
        const showSmallPlates = 
            this.state.smallPlates.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });
        const showEntrees = 
            this.state.entrees.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });
        const showSalads = 
            this.state.salads.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });
        const showSandwiches = 
            this.state.sandwiches.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });
        
    
        return(
            <div id="dinner">
                <h3>Small Plates</h3>
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
                </div>
            </div>
        )
    }
}


export default Dinner;

