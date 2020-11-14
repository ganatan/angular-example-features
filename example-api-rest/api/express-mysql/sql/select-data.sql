SELECT 
t1.id as id,t1.name,
t1.birth_date,
t1.wikipedia_link,
t2.id as city_id,t2.name,
t3.id as country_id,t3.name,
t4.id as continent_id,t4.name
FROM person t1
INNER JOIN city t2 ON t2.id=t1.birth_city_id
INNER JOIN country t3 ON t3.id=t2.country_id
INNER JOIN continent t4 ON t4.id=t3.continent_id


SELECT 
t2.name,t2.release_date,t3.name,
t2.wikipedia_link,
t3.wikipedia_link
FROM movie_have_person t1
INNER JOIN movie t2 ON t2.id=t1.movie_id
INNER JOIN person t3 ON t3.id=t1.person_id


SELECT 
t2.id as movie_id,
t2.name as movie_name,
t2.release_date as movie_release_date,
t3.name as person_name,
t2.wikipedia_link as movie_wikipedia_link,
t3.wikipedia_link as person_wikipedia_link
FROM movie_have_person t1
INNER JOIN movie t2 ON t2.id=t1.movie_id
INNER JOIN person t3 ON t3.id=t1.person_id
WHERE t2.id=1000
