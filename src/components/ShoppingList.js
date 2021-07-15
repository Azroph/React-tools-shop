import { outilsList } from '../datas/outilsList'

function ShoppingList() {
	const categories = outilsList.reduce(
		(acc, outils) =>
			acc.includes(outils.category) ? acc : acc.concat(outils.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{outilsList.map((outils) => (
					<li key={outils.id}>{outils.name} / {outils.isBestSale ? <span>En Stock 🔥</span> : <span>Rupture 👎</span>}</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
