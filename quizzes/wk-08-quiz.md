# SEI Week 8 Quiz

## For this quiz, please slack your instructors the answers, in numbered order. Do not include the questions. For example:
    
```
1. Ashton Kutcher played Chewbacca
2. Yolo
```
<br>

## Django Routes

### (1) Which Django route below is defined correctly?
    
```
A)  path('/cats', views.index, name='index')
B)  path('cats/', views.index, name='index')
C)  path('/cats/', views.index, name='index')
```

#### SOLUTION

```
B
```

### (2) What two things are wrong with the following Django route? (assume views.CatList is a CBV)

```python
path('cats', views.CatList, name='cat_index')
```

#### SOLUTION

```
1) The path is missing a trailing slash. Should be: `'cats/'`
2) The CBV is missing the `as_view()` call.  Should be:  `views.CatList.as_view()`
```

## Django Models

### (3) After you create a model, what command(s) must you run in terminal to synchronize the databases's schema with the app's models?

#### SOLUTION

```
python3 manage.py makemigrations
python3 manage.py migrate
``` 

### (4) In a `Trip --< Place` relationship, which Entity/Model will need to hold the `models.ForeignKey` field?

```
A)  Trip
B)  Place
C)  Either A or B
D)  None of the above
```

#### SOLUTION

```
B
```

### (5) Assuming an object named `concert` in a `Concert --< Ticket` relationship, which would return the `concert` object's tickets? 

```
A)  concert.tickets.all()
B)  concert.ticket_set.all()
C)  Either A or B
D)  None of the above
```

#### SOLUTION

```
B
```

### (6) Assuming an object named `ticket` in a `Concert --< Ticket` relationship, which would most likely return the concert object for the `ticket`? 

```
A)  ticket.objects.concert
B)  ticket.concert
C)  ticket.objects.filter(concert=concert_id)
D)  Either of the above
E)  None of the above
```

#### SOLUTION

```
B
```

### (7) When using the `models.ManyToManyField`, Django will automatically/transparently create a _____ table in the database necessary to implement the relationship.

#### SOLUTION

```
join
```

### (8) Assuming a `Trip >--< Tag` relationship, which would correctly model the relationship in Django:

```
A)  On the Trip Model:
      tags = models.ManyToManyField(Tag)
B)  On the Tag Model:
      trips = models.ManyToManyField(Trip)
C)  Either A or B
D)  None of the above
```

#### SOLUTION

```
C
```

### (9) Assuming a `Trip >--< Tag` relationship and `trip` & `tag` objects, which line of code would likely create an association between them:

```
A)  tag.trip_set.add(trip)
B)  trip.tags_set.add(tag)
C)  Either A or B
D)  None of the above
```  

#### SOLUTION

```
A
```

## Django Authentication

### (10) In a View Function, which line of code would return the object for the logged in user:

```
A)  loggedInUser
B)  self.request.user
C)  request.user
D)  Either of the above
E)  None of the above
```

#### SOLUTION

```
C
```