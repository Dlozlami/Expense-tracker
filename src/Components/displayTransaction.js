export default function DisplayTransaction({transactions}){
    /*  When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its’ children.
        Ex: <li key="uniqueId1" >Item1</li>
        React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
        It is not recommended to use the index of the array as the key prop if you know the array will not be static. If the key is an index, reordering an item in the array changes it. Then React will get confused and re-render the incorrect element.
        Keys do not have to be unique globally. They just need to be unique across sibling elements.
                
        https://sentry.io/answers/unique-key-prop/
    */
    return(
        <div>
            <h4>History of your transcation</h4>
            {
                transactions.map((data) => (
                    <div key={data} className="History">
                        <h6>{data.transactionItem}</h6>
                        <h6>{data.amount}</h6>
                        <h6>{data.transactionType}</h6>
                    </div>
            ))}
        </div>
    );
}