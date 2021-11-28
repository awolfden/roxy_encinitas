import React, {Component} from 'react';
import brunch from '../../images/enci_COVIDBrunch.png';

class Brunch extends Component {
    constructor(){
        super();
        this.state = {
            brunchApps: [
                {'name': 'Stems & Flappers',
                 'description': 'House made buffalo sauce or salt and pepper seasoning, choice of blue cheese or ranch'},
                {'name': 'Falafel Balls',
                 'description': 'House made tahini dressing'},
                {'name': 'Garlic Fries',
                 'description': 'Parmesan, parsley, garlic aioli'},
                {'name': 'French Onion Soup',
                 'description': 'House made beef stock, sherry wine, carmelized onion, sourdough, gruyere'},
                {'name': 'Cheese Curds',
                 'description': 'Breaded and fried Wisconsin cheese curds, served with ranch or marinara'},
            ],
            brunchSalad: [
                {'name': 'Add to any salad:',
                 'description': 'chicken breast, shrimp, falafel, salmon'},
                {'name': 'Harvest Salad',
                 'description': 'Goat cheese, organic baby greens, apples, pears, dried cranberries, candied pecans, apple cider vinaigrette'},
                {'name': 'Roxy Chef Salad',
                'description': 'White cheddar cheese, organic romaine, tomato, carrots, sprouts, avocado, artichoke hearts, lemon-oregano dressing'},
                {'name': 'Grilled Romaine Caesar',
                'description': 'Pecorino cheese, organic baby romaine heart, garlic ciabatta croutons, house-made caesar dressing'},
                {'name': 'Toasted Cobb Salad',
                 'description': 'Blue cheese, organic romaine heart, tomato, avocado, onion, bacon, hard-boiled egg, house made ranch'},
                {'name': 'Kale-fornia Salad',
                 'description': 'Parmesan cheese, organic kale, crispy chickpeas, roasted fennel, golden raisins, roasted garlic vinaigrette'}
            ],
            brunchSandwich: [
                {'name': 'Turkey Club',
                 'description': 'House roasted turkey, avocado, bacon, sprouts, onion, tomato, garlic aioli, rustic sourdough, add cheese 1'},
                {'name': 'Falafel Burger',
                 'description': 'Melted mozzarella and cheddar, onion, tomato, sprouts, tahini dressing, 7 grain bun'},
                {'name': 'Chicken Parmesan',
                 'description': 'Parmesan, mozzarella, house made marinara, panko creusted breast, ciabatta'},
                 {'name': 'Bacon Lettuce Tomato',
                 'description': 'Peppered bacon, arugula aioli, rustic sourdough, add avocato 1.5, add fried egg 1'},
                {'name': 'The Roxy Burger',
                 'description': '8oz prime ground chuck, white cheddar, dill pickle, onion-bacon aioli, lettuce, onion, tomato, brioche bun'},
                {'name': 'Artichoker',
                 'description': 'Mozzarella, artichoke hearts, tomato, sprouts, sunflower seeds, black olive aioli, 7 grain bun'},
                {'name': 'Grilled Cheese',
                 'description': 'Aged white cheddar, gruyere, fontina, avocado, tomato, rustic sourdough, add bacon 2.5'},
                 {'name': 'Big Eye and Yellowtail Tuna Salad',
                 'description': 'Mayo, celery, shallots, gherkins, lettuce, tomato, artisan white'},
                 {'name': 'Reuben',
                 'description': 'Gruyere, corned beef, sauerkraut, dill pickles, russian sauce, marble rye'}

            ],
            brunchDrinks: [
                {'name': 'Roxy Bloody Mary',
                 'description': 'House-made mix served with a mini High Life'},
                {'name': 'Everything but the Kitchen Sink',
                'description': '24oz made from scratch bloody mary, topped with... lemon, lime, olive, pickle, pepperoncini, onion, celery, cheeseburger slider, buffalo chicken tender, shrimp, thick cut pepper bacon, and yes served with a mini miller high life'},
                {'name': 'Skinny Cucumber Margarita',
                 'description': 'Libre cucumber tequila, Trilogy kombucha shot'},
                {'name': 'The Detox',
                'description': 'Coconut water, mint, coconut vodka'},
                {'name': 'Royal Street Fizz',
                 'description': 'Peychauds Apertivo, Cordoniu cava, soda water'},
                {'name': 'Morning Brew',
                 'description': 'Lofty Coffee Cold Brew, Captain Morgan run, Irish cream'},
                {'name': 'Pomplemousse',
                'description': 'Botanist gin, grapefruit, elderflower, lemon'},
                {'name': 'Rum Runner',
                 'description': 'Real McCoy aged rum, banana liqueur, raspberry liqueur, pineapple & orange juice'},
                {'name': 'Bottomless Mimosas',
                 'description': '$15.00 all you can drink'},
                {'name': 'Champagne or Sparkling Rose Bottle',
                'description': 'Served with your choice of juice carafe'},
                {'name': 'Regular or Decaf Coffee',
                 'description': ''},
                {'name': 'Hot Tea',
                 'description': ''},
                {'name': 'Cranberry Juice',
                 'description': ''},
                {'name': 'Fresh Squeezed Juice',
                 'description': 'Orange or grapefruit'},
                {'name': 'Soft Drink',
                 'description': 'Coke, Diet Coke, Sprite, Root Beer, Orange Fanta, Ginger Ale'},
            ]
        }
    }

    render(){
            
        const showBrunchDrinks = 
        this.state.brunchDrinks.map((item, index) => {
            return(
                <div key={index}>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                </div>
            )
        });

        const showBrunchApps = 
            this.state.brunchApps.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
        });

        const showBrunchSalad = 
            this.state.brunchSalad.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
        });

        const showBrunchSandwich = 
            this.state.brunchSandwich.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
        });
        
    
        return(
            <div id="brunch">
                
                {/* <h3>Appetizers</h3>
                <div className="brunchList">
                    {showBrunchApps}
                </div>
                <h3>Salads</h3>
                <div className="brunchList">
                    {showBrunchSalad}
                </div>
                <h3>Sandwiches</h3>
                <div className="brunchList">
                    {showBrunchSandwich}
                </div>
                <h3>Brunch Cocktails</h3>
                <div className="brunchList">
                    {showBrunchDrinks}
                </div> */}
                <img src={brunch} alt="brunch menu" style={{width:'70%'}}></img>
            </div>
        )
    }
}


export default Brunch;

