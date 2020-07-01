# AfterGlovo
AfterGlovo - simple delivery provider, with special discounts

## How to use
**No** `npm install` command required<br>
Just run `npm start`

This server has 2 main endpoints
* `/` - to get WEB view (__not fully implamented page yet__)
* `/orders/estimate` - to get JSON with estimated cost

## Run (in browser)
Run server and open browser page on `http://localhost:3000`

## Running test
Enter command `npm test` to run **unit** and **integration** test samples

## Test request
To test api estimation, run this command
```
curl -XPOST -H "Content-type: application/json" -d '{
"from":"Vatslava‌ ‌Havela‌ Boulevard‌ ‌6, ‌Kiev, Kyiv‌ ‌city",
"to":"Velyka‌ Vasylkivska‌ Street‌ 22,‌ Kiev,‌ Kyiv‌ city"
}' 'http://localhost:3000/orders/estimate'
```