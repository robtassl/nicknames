# Nicknames
A small utility library for finding related enlish first names.

### .get("Matt")
Retrieves an array of related names for a given name.
```javascript
Nicknames.get('Matt')
//matt,mathew,matthew,matthew,thys,matt,thias,mattie,matty,matthias,thys,matt,thias
```

### .match("Matt", "Robert")
Determines if two different names, are related.
```javascript
Nicknames.match('Rob', 'Robert')
//true

Nicknames.match('Matt', 'Robert')
//false
```

Source of `names.csv` borrowed from https://github.com/carltonnorthern/nickname-and-diminutive-names-lookup. Goal is to get the `names.csv` file better populated over time, or find an existing source/API that can be used.
