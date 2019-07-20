import React, {Component} from 'react';


class Lunch extends Component {
    constructor(){
        super();
        this.state = {
            smallPlates: [
                {'name': 'Falafel Balls',
                 'description': 'House made tahini dressing'},
                {'name': 'Baked Brie',
                 'description': 'Lavender honey, toasted walnuts, baguette'},
                {'name': 'Avacado Toast',
                 'description': 'Sourdough toast, avacado slices, roasted tomato'},
                {'name': 'French Onion Soup',
                 'description': 'House made French onion soup, gruyere cheese, sourdough toast'},
                {'name': 'Garlic Fries',
                 'description': 'Parmesan, parsley, garlic aioli'},
                {'name': 'Stems & Flappers',
                 'description': 'Chicken wings, house-made buffalo sauce or salt and pepper seasoning, ranch or blue cheese'},
                {'name': 'Cheese Curds',
                 'description': 'Breaded and fried Wisconsin cheese curds, ranch or marinera'}
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
                {'name': 'All Sandwiches',
                 'description': 'Served with your choice of fries or house salad, substitute garlic fries'},
                {'name': 'Falafel Burger',
                 'description': 'Melted mozzarella and cheddar, onion , tomato, sprouts, tahini dressing, 7 grain bun'},
                {'name': 'Bacon Lettuce Tomato',
                 'description': 'Arugula aioli, spiced brown sugar bacon, rustic sourdough'},
                {'name': 'The Roxy Burger',
                 'description': 'white cheddar, dill pickle, onion bacon aioli, lettuce, onion, tomato, brioche bun'},
                {'name': 'Grilled Cheese',
                 'description': 'Fontina, aged white cheddar, gruyere, tomato, avocado, rustic sourdough'},
                {'name': 'Artichoker',
                 'description': 'Mozzarella, artichoke hearts, tomato, sprouts, sunflower seeds, black olive aioli, 7-grain bread'},
                {'name': 'Reuben',
                 'description': 'Corned beef, gruyere, sauerkraut, russian sauce, dill pickles, marble rye'},
                {'name': 'Turkey Club',
                 'description': 'House roasted turkey, avocado, bacon, sprouts, tomato, garlic aioli, rustic sourdough'},
                {'name': 'Chicken Parmesan',
                 'description': 'Parmesan, mozzarella, house-made marinara, panko crusted breast, ciabatta'},
                {'name': 'Bigeye & Yellowtail Tuna Salad',
                 'description': 'Local caught big eye & yellowtail, mayo, celery, shallots, gherkins, artisan white'},
                
            ]
        }
    }

    render(){

        const showSmallPlateItems = 
            this.state.smallPlates.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            })
        const showSaladItems = 
            this.state.salads.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            })
        const showSandwichItems = 
            this.state.sandwiches.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            })
        
    
        return(
            <div id="smallPlates">
                <h3>Small Plates</h3>
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
            </div>
        )
    }
    
}


export default Lunch;

