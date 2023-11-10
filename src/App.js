import CityInfo from "./City.tsx";
import Recipe from "./Recipe.tsx";

function App() {
  return (
    <div className="maincontainer">
      <CityInfo />
      <Recipe title="Sheet Pan Steak" ingredients={['round steak', 'cup oil', 'cup water', 'tablespoon red wine', 'vinegar', 'tablespoons oil']} instructions="Place steak in a resealable plastic bag. Whisk together marinade mix, 1/4 cup oil, water, and red wine vinegar in a small bowl; pour into the bag. Reseal the bag, pressing out excess air, and squeeze bag to coat steak. Marinate steak in the refrigerator for a minimum of 30 minutes or up to overnight...." imageUrl="https://www.allrecipes.com/thmb/sEKePnrY9MsFjOaKpnkT5rT4I-o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7693579_Sheet-Pan-Steak_TheDailyGourmet_4x3-883889759f8a4118b0eeff3898ed065d.jpg" />
    </div>
  );
}

export default App;
