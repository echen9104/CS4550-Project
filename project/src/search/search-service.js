import {StockxClient} from 'stockx-scraper';

const Stockx = async () => {
    console.log('0')

    const client = new StockxClient();
    console.log('1')
    const products = await client.search('jordan 1');
    const first = products[0];
    console.log('2')

    return(
        <>
            ${first.name}
        </>
    )
}
export default Stockx;

