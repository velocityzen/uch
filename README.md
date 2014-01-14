#Universal cache handler

It's very simple async cache handler.

##Usage
```js
var cache = new Uch(cacheInstance);

//get request
var name = "Larry";
cache.check(name, cb, function() {
    db.get(name, cache.add(name, cb));
});

//update or remove request
db.update(name, "Lana", cache.remove(name, cb));
```

Cache instance can be undefined, so uch just pass data without changes.
Real cache instance must provide this methods:
* **get(name)**
* **put(name)**
* **del(name)**
