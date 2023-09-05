import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem=(props)=>{
  const price=`$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <h3 className={classes.price}>{price}</h3>
      </div>
      <div><MealItemForm /></div>
    </li>
  )
}

export default MealItem;