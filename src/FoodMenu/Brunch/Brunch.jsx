import React, {Component} from 'react';

class Brunch extends Component {
    constructor(){
        super();
        this.state = {
            brunchItems: [
                {'name': 'The Classic',
                 'description': '2 eggs any style, choice of bacon or sausage, choice of rye or sourdough toast, breakfast potatoes'},
                {'name': 'Belgian Waffles',
                 'description': 'Bacon or sausage, maple butter, fresh berries'},
                {'name': 'Chiliquiles',
                 'description': '2 eggs any style, tortilla chips, pico de gallo, cilantro crema, guacamole, onion, cilantro'},
                {'name': 'Croissant Breakfast Sandwich',
                 'description': 'Cheddar, avocado, onion, tomato, onion bacon aioli, breakfast potatoes'},
                {'name': 'Avocado Toast',
                 'description': 'Burrata cheese, roasted tomato, sourdough'},
                {'name': 'Roxy Scramble',
                 'description': 'Cheddar, mushroom, sausage, kale, fruit, breakfast potatoes'},
                {'name': 'Corned Beef Hash',
                 'description': '2 fried eggs, onion, bell pepper, choice of toast, breakfast potatoes'},
                {'name': 'Salads & Sandwiches',
                 'description': 'Available from lunch menu'},
                {'name': 'Everything but the Kitchen Sink',
                 'description': '24oz made from scratch bloody mary, topped with... lemon, lime, olive, pickle, pepperoncini, onion, celery, cheeseburger slider, buffalo chicken tender, shrimp, thick cut pepper bacon, and yes served with a mini miller high life'},
            ],
            brunchDrinks: [
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
                {'name': 'Champagne or Sparkling Rose',
                 'description': 'Served with your choice of juice carafe'},
                {'name': 'Roxy Bloody Mary',
                 'description': 'House-made mix served with a mini High Life'},
                {'name': 'The Detox',
                 'description': 'Coconut water, mint, coconut vodka'},
                {'name': 'Skinny Cucumber Margarita',
                 'description': 'Libre cucumber tequila, Trilogy kombucha shot'},
                {'name': 'Pomplemousse',
                 'description': 'Botanist gin, grapefruit, elderflower, lemon'},
                {'name': 'Morning Brew',
                 'description': 'Lofty Coffee Cold Brew, irish cream, Sailor Jerry spiced rum'},
                {'name': 'Rum Runner',
                 'description': 'Real McCoy aged rum, banana liqueur, raspberry liqueur, pineapple & orange juice'},
                {'name': 'Bottomless Mimosas',
                 'description': '$15.00 all you can drink'},
                {'name': 'GT Trilogy Kombucha',
                 'description': 'Kombucha on tap'},
                {'name': 'Everything but the Kitchen Sink',
                 'description': '24oz made from scratch bloody mary, topped with... lemon, lime, olive, pickle, pepperoncini, onion, celery, cheeseburger slider, buffalo chicken tender, shrimp, thick cut pepper bacon, and yes served with a mini miller high life'}
            ]
        }
    }

    render(){

        const showBrunchItems = 
            this.state.brunchItems.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });
            
        const showBrunchDrinks = 
        this.state.brunchDrinks.map((item, index) => {
            return(
                <div key={index}>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                </div>
            )
        });
        
    
        return(
            <div id="brunch">
                <h3>Brunch</h3>
                <div className="brunchList">
                    {showBrunchItems}
                </div>
                <h3>Drinks</h3>
                <div className="brunchList">
                    {showBrunchDrinks}
                </div>
            </div>
        )
    }
}


export default Brunch;

