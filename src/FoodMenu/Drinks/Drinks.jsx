import React, {Component} from 'react';

class Drinks extends Component {
    constructor(){
        super();
        this.state = {
            cocktails: [
                {'name': 'Aviation',
                 'description': 'Sipsmith gin, crème de violette, Luxardo liqueur'},
                {'name': 'Main St Martini',
                'description': 'Titos vodka or Woody Creek gin, choice of blue cheese olives or pimento olives'},
                {'name': 'Roxy Old Fashioned',
                'description': 'Old Forrester bourbon, bitters, caster sugar, luxardo cherry'},
                {'name': 'Rum Runner',
                 'description': 'Real McCoy aged rum, banana liqueur, raspberry liqueur, pineapple and orange juice'},
                {'name': 'Coup de Vie',
                 'description': 'Hangar One vodka, Lofty Coffee cold brew, Irish cream liqueur, crème de cacao'},
                {'name': 'Bees Knees',
                 'description': 'Barr Hill gin, lemon juice, honey ginger syrup, edible flower'},
                {'name': 'Manhattan',
                 'description': 'High West rye whiskey, bitters, Vye sweet vermouth'},
                {'name': 'Boston Sour',
                 'description': 'Buffalo Trace bourbon, egg white, fresh lemon juice, luxardo cherry'},
                {'name': 'Gin Rickey',
                 'description': 'Spring 44 gin, lime, rosemary honey syrup'},
                {'name': 'The eluM',
                 'description': 'Absolute Elyx vodka, lemon, lime, and grapefruit juice, Unity Vibration ginger kombucha beer'},
                {'name': 'La Paloma',
                 'description': 'Lunazul blanco tequila, pamplemousse, fresh grapefruit juice'},
                {'name': 'Cuban Mojito',
                 'description': 'Myers Platinum White rum, fresh mint, lime juice'},
                {'name': 'Kitchen Round',
                 'description': 'Buy the kitchen staff a drink of their choice'}
            ],
            happyHour: [
                {'name': '$2.00 OFF',
                 'description': 'Draft Beer, Well Cocktails, Craft Cocktails, Bonterra Chardonnay and Cabernet'},
                {'name': 'Small Plates',
                 'description': 'Available from our Lunch Menu'},
            ]
        }
    }


    render(){

        const showDrinks = 
            this.state.cocktails.map((cocktail, index) => {
                return(
                    <div key={index}>
                        <p>{cocktail.name}</p>
                        <span>{cocktail.description}</span>
                    </div>
                )
            })

        const showHappyHour = 
            this.state.happyHour.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            })
        

        return(
            <div id="drinks">
                
                <h3>Happy Hour</h3>
                <div className="cocktailList">
                    <span className="happyDetails">Monday 11a-11p | Tuesday-Friday 3p-6p</span>
                    {showHappyHour}
                </div>

                <h3>Cocktails</h3>
                <div className="cocktailList">
                    {showDrinks}
                </div>
            </div>
        )
    }
}

export default Drinks;