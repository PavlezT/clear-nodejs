# AfterGlovo
AfterGlovo - simple delivery provider, with special discounts

## How to use
This server has 2 main endpoints
* `/` - to get WEB view (__not implamented yet__)
* `/orders/estimate` - to get JSON with estimated cost

## Test request
To test api estimation, run this command
```
curl -XPOST -H "Content-type: application/json" -d '{
"from":"Vatslava‌ ‌Havela‌ Boulevard‌ ‌6, ‌Kiev, Kyiv‌ ‌city",
"to":"Velyka‌ Vasylkivska‌ Street‌ 22,‌ Kiev,‌ Kyiv‌ city"
}' 'http://localhost:3000/orders/estimate'
```