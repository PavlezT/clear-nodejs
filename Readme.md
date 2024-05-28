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

# BestPractises section
### Work with If statement & ternary expression
try to use always `const` - do not reassing or change value of variable - one *variable* one *value* one *meaning*.\n
use `let` only when there is no other chance.

<details>
<summary>Example of escaping of if steps</summary>

**Initial code written by senior dev (code works correctly)**
```javascript
function isGt(date1, date2) {
    return new Date(date1) > new Date(date2);
}

module.exports = function (customer1, customer2) {
    if (customer1.cid === customer2.cid) {
        return customer1;
    }
    if (!customer1.returning_date && !customer2.returning_date) {
        if(isGt(customer1.created_at, customer2.created_at)) {
            return customer1;
        }
        return customer2;
    }
    if (customer1.returning_date && !customer2.returning_date) {
        if(isGt(customer1.returning_date, customer2.created_at)) {
            return customer1;
        }
        return customer2;
    }
    if (!customer1.returning_date && customer2.returning_date) {
        if(isGt(customer1.created_at, customer2.returning_date)) {
            return customer1;
        }
        return customer2;
    }
    if (isGt(customer1.returning_date, customer2.returning_date)) {
        return customer1;
    }
    return customer2;
};
```

**Refactored**
```javascript
module.exports = function (customer1, customer2) {
    if (customer1.cid === customer2.cid) {
        return customer1;
    }

    const date1 = new Date(customer1.returning_date || customer1.created_at);
    const date2 = new Date(customer2.returning_date || customer2.created_at);

    return date1.getTime() > date2.getTime() ? customer1 : customer2;
};
```

</details>
