import {StockxClient} from "stockx-scraper";

export const findShoeBySearchTerm = async (term) => {
    const client = new StockxClient();
    const results = await client.search(`${term}`);
    const firstResult = results[0]
    return firstResult;
}
