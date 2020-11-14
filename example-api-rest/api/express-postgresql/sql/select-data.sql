SELECT 
t1.id as id,t1.name as name,
t1.wikipedia_link as wikipediaLink
FROM continent t1

SELECT 
t1.id as countryId ,t1.name as countryName,t1.wikipedia_link as countryWikipediaLink,
t2.id as continentId,t2.name as continentName,t2.wikipedia_link as continentWikipediaLink
FROM country t1
INNER JOIN continent t2 ON t2.id=t1.continent_id


SELECT 
t1.id as cityId,t1.name as cityName,t1.wikipedia_link as cityWikipediaLink,
t2.id as countryId ,t2.name as countryName,t2.wikipedia_link as countryWikipediaLink,
t3.id as continentId,t3.name as continentName,t3.wikipedia_link as continentWikipediaLink
FROM city t1
INNER JOIN country t2 ON t2.id=t1.country_id
INNER JOIN continent t3 ON t3.id=t2.continent_id

SELECT 
t1.id as id,t1.name as name,
t1.birth_date as birthDate,
t1.wikipedia_link as wikipediaLink,
t2.name as city,
t3.name as country,
t4.name as continent,
t5.name as gender
FROM person t1
INNER JOIN city t2 ON t2.id=t1.birth_city_id
INNER JOIN country t3 ON t3.id=t2.country_id
INNER JOIN continent t4 ON t4.id=t3.continent_id
INNER JOIN gender t5 ON t5.id=t1.gender_id


SELECT 
t2.name as name,
t2.release_date as releaseDate,
t3.name as person
FROM movie_person t1
INNER JOIN movie t2 ON t2.id=t1.movie_id
INNER JOIN person t3 ON t3.id=t1.person_id
ORDER BY t2.name ASC,t2.release_date ASC,t3.name ASC


SELECT 
t2.id as id,
t2.name as name,
t2.release_date as releaseDate,
t2.domestic as domestic,
t2.international as international,
t2.worldwide as worldwide,
t2.budget as budget,
t3.name as personName
FROM movie_person t1
INNER JOIN movie t2 ON t2.id=t1.movie_id
INNER JOIN person t3 ON t3.id=t1.person_id
WHERE t2.id=1000
